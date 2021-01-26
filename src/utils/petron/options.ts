export {};

//* Default theme for carbon
const defaultOptions = {
  paddingVertical: '56px',
  paddingHorizontal: '56px',
  backgroundImage: null,
  backgroundImageSelection: null,
  backgroundMode: 'color',
  backgroundColor: 'rgba(182,162,145,1)',
  dropShadow: false,
  dropShadowOffsetY: '20px',
  dropShadowBlurRadius: '68px',
  theme: 'zenburn',
  windowTheme: 'bw',
  language: 'auto',
  fontFamily: 'Hack',
  fontSize: '14px',
  lineHeight: '152%',
  windowControls: true,
  widthAdjustment: true,
  lineNumbers: false,
  firstLineNumber: 1,
  exportSize: '4x',
  watermark: false,
  squaredImage: false,
  hiddenCharacters: false,
  code: '',
};

//* Options which can be configured via url header
const bodyOptions = {
  backgroundColor: 'bg',
  code: 'code',
  dropShadow: 'ds',
  dropShadowBlurRadius: 'dsblur',
  dropShadowOffsetY: 'dsyoff',
  exportSize: 'es',
  fontFamily: 'fm',
  firstLineNumber: 'fl',
  fontSize: 'fs',
  language: 'l',
  lineHeight: 'lh',
  lineNumbers: 'ln',
  paddingHorizontal: 'ph',
  paddingVertical: 'pv',
  squaredImage: 'si',
  theme: 't',
  watermark: 'wm',
  widthAdjustment: 'wa',
  windowControls: 'wc',
  windowTheme: 'wt',
};

//* Options which can't be configured via url header
const ignoredOptions = [
  'backgroundImage',
  'backgroundImageSelection',
  'backgroundMode',
  'squaredImage',
  'hiddenCharacters',
  'name',
  'loading',
  'icon',
  'isVisible',
  'width',
  'selectedLines',
];

module.exports = { defaultOptions, bodyOptions, ignoredOptions };
