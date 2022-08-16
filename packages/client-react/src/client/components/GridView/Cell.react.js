import React, { Component } from 'react';
import { ContextMenuTrigger } from "react-contextmenu";

class Cell extends Component {
  render() {
    /* eslint-disable  react/prop-types */
    const {
      rowIndex,
      columnIndex,
      index,
      onRowClick,
      onRowDoubleClick,
      onRowRightClick,
      itemComponent: ItemComponent,
      columnCount,
      style,
      items,
      selection,
      contextMenuId,
      hasTouch,
      loading,
    } = this.props;
    /* eslint-enable react/prop-types */
    const rowData = items[rowIndex * columnCount + columnIndex];
    if (!rowData)
      return null;

    const divProps = {};

    if (onRowClick || onRowDoubleClick || onRowRightClick) {
      divProps.tabIndex = 0;

      if (onRowClick)
        divProps.onClick = event => onRowClick({ event, index, rowData });

      if (onRowDoubleClick)
        divProps.onDoubleClick = event => onRowDoubleClick({ event, index, rowData });

      if (onRowRightClick)
        divProps.onContextMenu = event => onRowRightClick({ event, index, rowData });
    }

    const isSelected = selection.indexOf(rowData.id) !== -1;

    return (
      <ContextMenuTrigger id={contextMenuId} holdToDisplay={hasTouch ? 1000 : -1}>
        <div
          {...divProps}
          className={`ReactVirtualized__Table__row oc-fm--grid-view__row${loading ? ' oc-fm--grid-view__row--loading' : ''}${isSelected ? ' oc-fm--grid-view__row--selected' : ''}`}
          style={style}
        >
          <ItemComponent item={rowData} />
        </div>
      </ContextMenuTrigger>
    );
  }
}

export default ({
  items,
  selection,
  contextMenuId,
  onRowClick,
  onRowRightClick,
  onRowDoubleClick,
  itemComponent,
  columnCount,
  loading,
}) => props => (
  <Cell
    {...props}
    items={items}
    selection={selection}
    contextMenuId={contextMenuId}
    onRowClick={onRowClick}
    onRowRightClick={onRowRightClick}
    onRowDoubleClick={onRowDoubleClick}
    itemComponent={itemComponent}
    columnCount={columnCount}
    loading={loading}
  />
);
