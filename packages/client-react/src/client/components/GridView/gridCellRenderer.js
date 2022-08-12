import Svg from '@opuscapita/react-svg/lib/SVG';

const gridCellRenderer = options => ({
  elementType: 'Cell',
  callArguments: [{ ...options, getData: renderCell }],
});

export default gridCellRenderer;

function renderCell({ getIcon }, { item }) {
  const { svg, fill } = getIcon(item);
  
  return (
    <div className="oc-fm--name-cell">
      <div className="oc-fm--name-cell__icon">
        <Svg className="oc-fm--name-cell__icon-image" svg={svg} style={{ fill }} />
      </div>
      <div className="oc-fm--name-cell__title" title={item.name}>
        {item.name}
      </div>
    </div>
  );
}
