export {};

declare global {
  export type FlexSet =
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

  export type AlignItems =
    | 'center'
    | 'baseline'
    | 'flex-end'
    | 'flex-start'
    | 'stretch';

  export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

  export type FlexDirection =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

  type MarginPaddingType = 'margin' | 'padding';

  type FlexSetType = {
    justifyContent?: string;
    alignItems?: string;
    alignContent?: string;
  };

  type ComponentCssType = {
    flexDirection?: FlexDirection;
    flexWrap?: FlexWrap;
    flexSet?: [FlexSet?, AlignItems?, FlexSet?];
    children?: React.ReactNode;
    Gutter?: number;
    Col?: number;
    height?: number | string;
    width?: number | string;
    margin?: number[];
    padding?: number[];
    backgroundColor?: string;
    borderColor?: string;
    style?: any;
  };

  type BorderComponentCssType = ComponentCssType & {
    borderWidth?: number;
    borderHeight?: string;
    borderRadius?: number;
    borderType?: string;
  };

  type ButtonComponentCssType = ComponentCssType & {
    hoverBackgroundColor: string;
    borderRadius?: number;
    hoverColor?: string;
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
  };

  type TextType = {
    fontSize?: number;
    fontWeight?: number | string;
    lineHeight?: number;
    color?: string;
    children: React.ReactNode;
    style?: any;
    wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
  };
}