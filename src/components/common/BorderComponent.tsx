import { getPaddingOrMarginStyle } from 'utils';

function BorderComponent({
  children,
  style,
  height = '100%',
  width = '100%',
  padding = [],
  margin = [],
  borderHeight = '1px',
  borderType = 'solid',
  borderColor = 'black',
  borderRadius = 0,
}: BorderComponentCssType) {
  return (
    <div
      style={{
        ...getPaddingOrMarginStyle(padding, 'padding'),
        ...getPaddingOrMarginStyle(margin, 'margin'),
        width,
        height,
        border: `${borderHeight} ${borderType} ${borderColor}`,
        borderRadius,
        outline: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default BorderComponent;
