import { useResponsive } from 'hooks';
import useWindowWidth from 'react-hook-use-window-width';
import { getPaddingOrMarginStyle } from 'utils';

function SizedComponent({
  children,
  style,
  margin = [],
  padding = [],
  Gutter = 0,
  Col = 0,
  height = '100%',
  width = '100%',
}: ComponentCssType) {
  const windowWidth = useWindowWidth();
  const { isDesktopSize, isTablet } = useResponsive();

  const G = isDesktopSize ? 1.932 : isTablet ? 4.703 : 4.9295;
  const C = isDesktopSize ? 6.56 : isTablet ? 4.0104 : 3.75;

  let WIDTH = null;

  if (Gutter === 0 && Col === 0) {
    WIDTH = width;
  } else {
    WIDTH = Math.floor(((Gutter * G + Col * C) / 100) * windowWidth);
  }

  return (
    <div
      style={{
        ...getPaddingOrMarginStyle(padding, 'padding'),
        ...getPaddingOrMarginStyle(margin, 'margin'),
        width: WIDTH,
        height,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default SizedComponent;
