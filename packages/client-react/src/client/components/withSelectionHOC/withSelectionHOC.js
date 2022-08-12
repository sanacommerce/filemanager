import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import './withSelectionHOC.less';

import {
  noop,
  addToSelection,
  removeFromSelection,
  selectRange,
  selectPrev,
  selectNext,
  selectFirstItem,
  selectLastItem,
  addPrevToSelection,
  addNextToSelection,
  removeLastFromSelection,
  removeFirstFromSelection
} from './utils';

export default class WithSelection extends PureComponent {
  static propTypes = {
    onSelection: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowRightClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    onRef: PropTypes.func,
    onKeyDown: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.object),
    idPropName: PropTypes.string,
    selection: PropTypes.array,
    viewMode: PropTypes.string,
    columnCount: PropTypes.number,
  }

  static defaultProps = {
    onSelection: noop,
    onRowClick: noop,
    onRowRightClick: noop,
    onRowDoubleClick: noop,
    onRef: noop,
    items: [],
    idPropName: 'id',
    selection: [],
    viewMode: 'list',
    columnCount: 1,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selection.length === 1) {
      // When FileNavigator navigates to parent dir, this last selected should be rigth
      this.lastSelected = nextProps.selection[0];
    }
  }

  handleSelection = ({ selection, scrollToIndex }) => this.props.onSelection({ selection, scrollToIndex });

  handleSelectEvent = ({ selection, scrollToIndex }) => {
    const { items, idPropName } = this.props;
    this.lastSelected = items[scrollToIndex][idPropName];
    this.handleSelection({ selection, scrollToIndex });
  }

  handleRowClick = ({ event, rowData, ...args }) => {
    const { items, idPropName, selection } = this.props;
    const id = rowData[idPropName];
    this.lastSelected = id;

    if (event.ctrlKey || event.metaKey) { // metaKey is for handling "Command" key on MacOS
      this.rangeSelectionStartedAt = id;

      this.handleSelection({
        selection: selection.indexOf(id) !== -1 ?
          removeFromSelection({ selection, id }) :
          addToSelection({ selection, ids: [id] })
      });
    } else if (event.shiftKey) {
      this.rangeSelectionStartedAt = this.rangeSelectionStartedAt || (selection.length === 1 && selection[0]);
      this.handleSelection({
        selection: selectRange({
          items,
          fromId: this.rangeSelectionStartedAt,
          toId: id
        })
      });
    } else {
      this.rangeSelectionStartedAt = null;
      this.handleSelection({ selection: [id] });
    }

    this.props.onRowClick({ event, rowData, ...args });
  }

  handleRowRightClick = ({ rowData, ...args }) => {
    const { idPropName, selection } = this.props;
    if (selection.indexOf(rowData[idPropName]) === -1) {
      this.handleSelection({ selection: [rowData[idPropName]] });
    }

    this.props.onRowRightClick({ rowData, ...args });
  }

  handleRowDoubleClick = ({ rowData, ...args }) => {
    this.props.onRowDoubleClick({ rowData, ...args });
  }

  handleKeyDown = e => {
    e.preventDefault();

    const { items, onKeyDown, idPropName, selection, viewMode, columnCount } = this.props;

    // Debounce frequent events for performance reasons
    const keyDownTime = new Date().getTime();
    if (this.lastKeyDownTime && (keyDownTime - this.lastKeyDownTime < 128)) {
      return;
    }
    this.lastKeyDownTime = keyDownTime;

    if (onKeyDown) {
      onKeyDown(e);
    }

    // Up arrow in list mode or Left arrow in grid mode
    if ((e.which === 38 && viewMode === 'list' || e.which === 37 && viewMode === 'grid') && !e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectLastItem({ items }));
      } else {
        this.handleSelectEvent(selectPrev({ items, lastSelected: this.lastSelected, count: 1 }));
      }
    }

    // Down arrow in list mode or Right arrow in grid mode
    if ((e.which === 40 && viewMode === 'list' || e.which === 39 && viewMode === 'grid') && !e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectFirstItem({ items }));
      } else {
        this.handleSelectEvent(selectNext({ items, lastSelected: this.lastSelected, count: 1 }));
      }
    }

    // Up arrow in grid mode
    if (e.which === 38 && viewMode === 'grid' && !e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectLastItem({ items }));
      } else {
        this.handleSelectEvent(selectPrev({ items, lastSelected: this.lastSelected, count: columnCount }));
      }
    }

    // Down arrow in grid mode
    if (e.which === 40 && viewMode === 'grid' && !e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectFirstItem({ items }));
      } else {
        this.handleSelectEvent(selectNext({ items, lastSelected: this.lastSelected, count: columnCount }));
      }
    }

    // Up arrow in list mode or Left arrow in grid mode holding Shift key
    if ((e.which === 38 && viewMode === 'list' || e.which === 37 && viewMode === 'grid') && e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectLastItem({ items }));
        return;
      }

      if (this.lastSelected === items[0].id)
        return;

      const fromIdIndex = findIndex(items, item => item.id === this.lastSelected);
      const nextIdIndex = fromIdIndex > 0 ? fromIdIndex - 1 : 0;
      const nextId = items[nextIdIndex].id;
      const selectionDirection = selection.indexOf(nextId) === -1 ? -1 : 1;

      const selectionData = selectionDirection === -1
        ? addPrevToSelection({ selection, items, lastSelected: this.lastSelected, count: 1 })
        : removeLastFromSelection({ selection, items, count: 1 });

      this.handleSelectEvent(selectionData);
    }

    // Down arrow in list mode or Right arrow in grid mode holding Shift key
    if ((e.which === 40 && viewMode === 'list' || e.which === 39 && viewMode === 'grid') && e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectFirstItem({ items }));
        return;
      }

      if (this.lastSelected === items[items.length - 1].id)
        return;

      const fromIdIndex = findIndex(items, item => item.id === this.lastSelected);
      const nextIdIndex = fromIdIndex + 1 < items.length ? fromIdIndex + 1 : items.length - 1;
      const nextId = items[nextIdIndex].id;
      const selectionDirection = selection.indexOf(nextId) === -1 ? -1 : 1;

      const selectionData = selectionDirection === -1
        ? addNextToSelection({ selection, items, lastSelected: this.lastSelected, count: 1 })
        : removeFirstFromSelection({ selection, items, count: 1 });

      this.handleSelectEvent(selectionData);
    }

    // Up arrow in grid mode holding Shift key
    if (e.which === 38 && viewMode === 'grid' && e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectLastItem({ items }));
        return;
      }

      if (this.lastSelected === items[0].id)
        return;

      const fromIdIndex = findIndex(items, item => item.id === this.lastSelected);
      const nextIdIndex = fromIdIndex - columnCount > 0 ? fromIdIndex - columnCount : 0;
      const nextId = items[nextIdIndex].id;
      const selectionDirection = selection.indexOf(nextId) === -1 ? -1 : 1;

      const selectionData = selectionDirection === -1
        ? addPrevToSelection({ selection, items, lastSelected: this.lastSelected, count: columnCount })
        : removeLastFromSelection({ selection, items, count: columnCount });

      this.handleSelectEvent(selectionData);
    }

    // Down arrow in grid mode holding Shift key
    if (e.which === 40 && viewMode === 'grid' && e.shiftKey) {
      if (!items.length)
        return;

      if (!selection.length) {
        this.handleSelectEvent(selectFirstItem({ items }));
        return;
      }

      if (this.lastSelected === items[items.length - 1].id)
        return;

      const fromIdIndex = findIndex(items, item => item.id === this.lastSelected);
      const nextIdIndex = fromIdIndex + columnCount < items.length ? fromIdIndex + columnCount : items.length - 1;
      const nextId = items[nextIdIndex].id;
      const selectionDirection = selection.indexOf(nextId) === -1 ? -1 : 1;

      const selectionData = selectionDirection === -1
        ? addNextToSelection({ selection, items, lastSelected: this.lastSelected, count: columnCount })
        : removeFirstFromSelection({ selection, items, count: columnCount });

      this.handleSelectEvent(selectionData);
    }

    if (e.which === 65 && (e.ctrlKey || e.metaKey)) { // Ctrl + A or Command + A
      // Select all
      const allIds = items.map(item => item[idPropName]);
      this.handleSelection({ selection: allIds });
    }

    if (e.which === 27) { // Esc
      // Clear selection
      this.handleSelection({ selection: [] });
    }

    if (this.ref) {
      this.ref.focus(); // XXX fix for loosing focus on key navigation
    }
  }

  // ref to wrapped container
  handleRef = ref => {
    this.ref = ref;
    this.props.onRef(ref);
  }

  render() {
    const { children, selection } = this.props;

    return (
      <div
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        ref={this.handleRef}
        className="oc-fm--withSelectionHOC"
      >
        {children({
          selection,
          onRowClick: this.handleRowClick,
          onRowRightClick: this.handleRowRightClick,
          onRowDoubleClick: this.handleRowDoubleClick,
          lastSelected: this.lastSelected
        })}
      </div>
    )
  }
}
