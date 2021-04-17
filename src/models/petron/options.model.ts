//* --------------------- MODELS ---------------------- *\\

export interface ITheme {
  backgroundColor: string;
  theme: string;
  windowTheme?: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IOptions {
  backgroundColor?: string;
  code?: string;
  dropShadow?: boolean;
  dropShadowBlurRadius?: string;
  dropShadowOffsetY?: string;
  exportSize?: string;
  fontFamily?: string;
  firstLineNumber?: number;
  fontSize?: string;
  language?: string;
  lineHeight?: string;
  lineNumbers?: boolean;
  paddingHorizontal?: string;
  paddingVertical?: string;
  squaredImage?: boolean;
  theme?: string;
  watermark?: boolean;
  widthAdjustment?: boolean;
  windowControls?: boolean;
  windowTheme?: string;
}

export interface IRequest {
  code: string;
  token?: string;
  format?: string;
  theme?: string;
  options?: IOptions;
}
