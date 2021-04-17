//* ------------------- DEPENDENCIES ------------------ *\\

//* Model imports
import { IThemes, IOptions } from '../../models/petron/options.model';

//* -------------------- CONSTANTS -------------------- *\\

//* Theme configuration
const themes: IThemes = {
  panda: {
    backgroundColor: 'rgba(35,26,35,1)',
    theme: 'panda-syntax',
    windowTheme: 'none',
  },
  zenburn: {
    backgroundColor: 'rgba(182,162,145,1)',
    theme: 'zenburn',
  },
  solarizedLight: {
    backgroundColor: 'rgba(187,187,187,1)',
    theme: 'solarized light',
    windowTheme: 'none',
  },
  material: {
    backgroundColor: 'rgba(41,45,62,1)',
    theme: 'material',
    windowTheme: 'sharp',
  },
};

//* Default theme for carbon
const defaultOptions: IOptions = {
  backgroundColor: 'rgba(182,162,145,1)',
  code: '',
  dropShadow: true,
  dropShadowBlurRadius: '13px',
  dropShadowOffsetY: '3px',
  exportSize: '4x',
  fontFamily: 'Hack',
  firstLineNumber: 1,
  fontSize: '14px',
  language: 'auto',
  lineHeight: '133%',
  lineNumbers: false,
  paddingHorizontal: '56px',
  paddingVertical: '56px',
  squaredImage: false,
  theme: 'zenburn',
  watermark: false,
  widthAdjustment: true,
  windowControls: true,
  windowTheme: 'bw',
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

//* --------------------- EXPORTS --------------------- *\\

export { defaultOptions, bodyOptions, ignoredOptions, themes };
