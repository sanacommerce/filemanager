import 'react-virtualized/styles.css';
import './GridView.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import nanoid from 'nanoid';
import detectIt from 'detect-it';
import { AutoSizer, Grid } from 'react-virtualized';
import { ContextMenuTrigger } from "react-contextmenu";
import NoFilesFoundStub from '../NoFilesFoundStub';
import GridCell from './GridCell.react';
import Cell from '../Cell';
import ScrollOnMouseOut from '../ScrollOnMouseOut';
import WithSelection from '../withSelectionHOC';
import { isDef } from '../withSelectionHOC/utils';

const ROW_HEIGHT = 210;
const COLUMN_WIDTH = 197;
const SCROLL_STRENGTH = ROW_HEIGHT;
const HAS_TOUCH = detectIt.deviceType === 'hasTouch';

const propTypes = {
  rowContextMenuId: PropTypes.string,
  filesViewContextMenuId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.number,
    modifyDate: PropTypes.number
  })),
  cellRenderer: PropTypes.func.isRequired,
  layoutOptions: PropTypes.object,
  selection: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  onRowClick: PropTypes.func,
  onRowRightClick: PropTypes.func,
  onRowDoubleClick: PropTypes.func,
  onScroll: PropTypes.func,
  onSelection: PropTypes.func,
  onKeyDown: PropTypes.func,
  onRef: PropTypes.func,
  locale: PropTypes.string
};
const defaultProps = {
  rowContextMenuId: nanoid(),
  filesViewContextMenuId: nanoid(),
  items: [],
  layoutOptions: {},
  selection: [],
  loading: false,
  onRowClick: () => { },
  onRowRightClick: () => { },
  onRowDoubleClick: () => { },
  onScroll: () => { },
  onSelection: () => { },
  onKeyDown: () => { },
  onRef: () => { },
  locale: 'en'
};

export default class GridView extends Component {
  state = {
    scrollToIndex: 0,
    clientHeight: 0,
    scrollTop: 0,
    scrollHeight: 0
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      // Force recalculate scrollHeight for appropriate handle "PageUp, PageDown, Home, End", etc. keys
      this.setState({ scrollHeight: nextProps.items.length * ROW_HEIGHT });
    }
  }

  scrollToIndex = index => {
    this.setState({ scrollToIndex: index });
  }

  handleScrollTop = scrollTop => this.setState({ scrollTop });

  handleScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    this.props.onScroll({ clientHeight, scrollHeight, scrollTop });
    this.setState({
      ...(isDef(clientHeight) && { clientHeight }),
      ...(isDef(scrollHeight) && { scrollHeight }),
      ...(isDef(scrollTop) && { scrollTop })
    });
  }

  handlePageUp = _ => {
    const { scrollTop } = this.state;
    const newScrollTop = scrollTop - SCROLL_STRENGTH < 0 ? 0 : scrollTop - SCROLL_STRENGTH;
    this.handleScrollTop(newScrollTop);
  }

  handlePageDown = _ => {
    const { scrollTop, scrollHeight, clientHeight } = this.state;
    const newScrollTop = scrollTop + SCROLL_STRENGTH > scrollHeight - clientHeight ?
      scrollHeight - clientHeight :
      scrollTop + SCROLL_STRENGTH;
    this.handleScrollTop(newScrollTop);
  }

  handleHome = _ => this.handleScrollTop(0);

  handleEnd = _ => {
    // Scroll to the first item
    const { clientHeight, scrollHeight } = this.state;
    const newScrollTop = scrollHeight - clientHeight;
    this.handleScrollTop(newScrollTop);
  }

  handleKeyDown = e => {
    e.preventDefault();

    this.props.onKeyDown(e);

    if (e.which === 33) { // PageUp
      this.handlePageUp();
    }

    if (e.which === 34) { // PageDown
      this.handlePageDown();
    }

    if (e.which === 36) { // Home
      this.handleHome();
    }

    if (e.which === 35) { // End
      this.handleEnd();
    }
  }

  handleRowClick = ({ event, index, rowData }) => {
    this.props.onRowClick({ event, index, rowData });
  }

  handleRowRightClick = ({ event, index, rowData }) => {
    this.props.onRowRightClick({ event, index, rowData });
  }

  handleRowDoubleClick = ({ event, index, rowData }) => {
    this.props.onRowDoubleClick({ event, index, rowData });
  }

  handleSelection = ({ selection, scrollToIndex }) => {
    this.props.onSelection(selection);
    this.scrollToIndex(scrollToIndex);
  }

  render() {
    const {
      rowContextMenuId,
      filesViewContextMenuId,
      items,
      cellRenderer,
      layoutOptions,
      loading,
      onRef,
    } = this.props;
    const {
      clientHeight,
      scrollTop,
      scrollHeight,
      scrollToIndex,
    } = this.state;

    return (
      <AutoSizer>
        {({ width, height }) => {
          this.containerHeight = height;
          const columnCount = Math.floor((width - 15) / COLUMN_WIDTH);

          // Generate items for "loading placeholder"
          const itemsToRender = loading && height
            ? range(Math.ceil(height / ROW_HEIGHT) * columnCount).map(() => ({}))
            : items;

          return (
            <WithSelection
              items={itemsToRender}
              onKeyDown={this.handleKeyDown}
              onSelection={this.handleSelection}
              onRowClick={this.handleRowClick}
              onRowRightClick={this.handleRowRightClick}
              onRowDoubleClick={this.handleRowDoubleClick}
              selection={this.props.selection}
              onRef={onRef}
              viewMode="grid"
              columnCount={columnCount}
            >
              {({ onRowClick, onRowRightClick, onRowDoubleClick, selection }) => (
                <div className="oc-fm--grid-view">
                  <ScrollOnMouseOut
                    onCursorAbove={this.handleScrollTop}
                    onCursorBellow={this.handleScrollTop}
                    clientHeight={clientHeight}
                    scrollHeight={scrollHeight}
                    scrollTop={scrollTop}
                    topCaptureOffset={0}
                    bottomCaptureOffset={0}
                    style={{
                      width: `${width}px`,
                      height: `${height}px`
                    }}
                  >
                    <ContextMenuTrigger id={filesViewContextMenuId} holdToDisplay={HAS_TOUCH ? 1000 : -1}>
                      <Grid
                        width={width}
                        height={height}
                        columnCount={columnCount}
                        rowCount={Math.ceil(itemsToRender.length / columnCount)}
                        rowHeight={ROW_HEIGHT}
                        className="oc-fm--grid-view__table"
                        overscanRowCount={4}
                        onScroll={this.handleScroll}
                        scrollToRow={scrollToIndex ? Math.floor(scrollToIndex / columnCount) : 0}
                        scrollTop={scrollTop}
                        cellRenderer={GridCell({
                          items: itemsToRender,
                          selection,
                          contextMenuId: rowContextMenuId,
                          hasTouch: HAS_TOUCH,
                          onRowClick,
                          onRowRightClick,
                          onRowDoubleClick,
                          cellContentRenderer: Cell({ ...layoutOptions, loading, width, height, getData: cellRenderer }),
                          columnCount,
                          loading,
                        })}
                        columnWidth={COLUMN_WIDTH}
                        noContentRenderer={() => <NoFilesFoundStub locale={this.props.locale} />}
                      >
                      </Grid>
                    </ContextMenuTrigger>
                  </ScrollOnMouseOut>
                  {this.props.children}
                </div>
              )}
            </WithSelection>
          );
        }}
      </AutoSizer>
    );
  }
}

GridView.propTypes = propTypes;
GridView.defaultProps = defaultProps;
