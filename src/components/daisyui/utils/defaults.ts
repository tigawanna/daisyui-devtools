import type { DaisyUIThemeCurvesNames } from "./daisyui-theme-types.js";

export const daisyUICurvesDefault: Record<
  DaisyUIThemeCurvesNames[number],
  { defalut: string; placeholder: string }
> = {
  '--animation-btn': {
    defalut: '0.3s',
    placeholder: '0.3s',
  },
  '--animation-input': {
    defalut: '2s',
    placeholder: '2s',
  },
  '--btn-focus-scale': {
    defalut: '0.95',
    placeholder: '0.95',
  },
  '--border-btn': {
    defalut: '1px',
    placeholder: '1px',
  },
  '--tab-border': {
    defalut: '1px',
    placeholder: '1px',
  },
  '--tab-radius': {
    defalut: '1rem',
    placeholder: '1rem',
  },
  '--rounded-badge': {
    defalut: '1rem',
    placeholder: '1rem',
  },
  '--rounded-box': {
    defalut: '0.5rem',
    placeholder: '0.5rem',
  },
  '--rounded-btn': {
    defalut: '0.5rem',
    placeholder: '0.5rem',
  },
};
