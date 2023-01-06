import styled from 'styled-components';

function BorderButton({
  children,
  style,
  height = '100%',
  width = '100%',
  backgroundColor = 'white',
  borderColor = '#1B1B21',
  hoverBackgroundColor,
  hoverColor,
  borderRadius = 0,
  onClick,
  type = 'button',
}: ButtonComponentCssType) {
  return (
    <DefaultButton
      type={type}
      style={{
        width,
        height,
        border: `1px solid ${borderColor}`,
        backgroundColor,
        borderRadius,
        ...style,
      }}
      onClick={onClick}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
    >
      {children}
    </DefaultButton>
  );
}

export default BorderButton;

const DefaultButton = styled.button<{
  hoverBackgroundColor?: string;
  hoverColor?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: none;
  border: 1px solid;
  outline: 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor ?? 'unset'};
    color: ${({ hoverColor }) => hoverColor ?? 'unset'};
  }
  &:active {
    opacity: 0.8;
  }
`;
