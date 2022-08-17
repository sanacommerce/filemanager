import React, { Component } from 'react';
import { ContextMenuTrigger } from "react-contextmenu";

class GridCell extends Component {
  render() {
    /* eslint-disable  react/prop-types */
    const {
      rowIndex,
      columnIndex,
      index,
      onRowClick,
      onRowDoubleClick,
      onRowRightClick,
      cellContentRenderer,
      columnCount,
      style,
      items,
      selection,
      contextMenuId,
      hasTouch,
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
    const itemComponent = cellContentRenderer({ item: rowData }, rowData.id);

    return (
      <ContextMenuTrigger id={contextMenuId} holdToDisplay={hasTouch ? 1000 : -1}>
        <div
          {...divProps}
          className={`ReactVirtualized__Table__row oc-fm--grid-view__row${isSelected ? ' oc-fm--grid-view__row--selected' : ''}`}
          role="gridcell"
          style={style}
        >
          {itemComponent}
        </div>
      </ContextMenuTrigger>
    );
  }
}

export default args => props => <GridCell {...props} {...args} />;
