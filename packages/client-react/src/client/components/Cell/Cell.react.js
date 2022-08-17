import React from 'react';
import './Cell.less';
import LoadingCell from '../LoadingCell';

export default (viewLayoutOptions) => (cellProps, key) => {
  if (viewLayoutOptions.loading) {
    return (<LoadingCell />);
  }

  const data = viewLayoutOptions.getData ?
    viewLayoutOptions.getData(viewLayoutOptions, cellProps) :
    cellProps.cellData;

  return (
    <div className="oc-fm--cell" key={key}>
      {data}
    </div>
  );
}
