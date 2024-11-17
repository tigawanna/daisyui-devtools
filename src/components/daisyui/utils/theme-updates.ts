import { hslToOklch } from '../../../utils/color-converters.js';
import type {
  DaisyUIThemeNames,
  OneDaisyUIThemeType,
} from './daisyui-theme-types.js';
import { useDaisyUIThemeStore } from './store.js';
const setTheme = useDaisyUIThemeStore.getState().setTheme;

export function handleThemeChange(newTheme: OneDaisyUIThemeType) {
  if (newTheme.type === 'color') {
    const oklch = hslToOklch(newTheme.value);
    document.documentElement.style.setProperty(
      newTheme.variable,
      oklch.oklch_string,
    );
    // @ts-expect-error
    setTheme((state) => {
      return {
        ...state,
        [newTheme.name]: {
          ...state[newTheme.name],
          // locked: true,
          value: oklch.oklch_string,
        },
      };
    });
  } else {
    document.documentElement.style.setProperty(
      newTheme.variable,
      newTheme.value,
    );
    // @ts-expect-error
    setTheme((state) => {
      return {
        ...state,
        [newTheme.name]: {
          ...state[newTheme.name],
          value: newTheme.value,
        },
      };
    });
  }
}

export function lockTheme(name: DaisyUIThemeNames[number]) {
  // @ts-expect-error
  setTheme((state) => {
    return {
      ...state,
      [name]: {
        ...state[name],
        locked: !state[name]?.locked,
      },
    };
  });
}
