import { useDaisyUIThemeStore } from './store.js';
import type { DaisyUIThemeObjectType } from './daisyui-theme-types.js';
import { loadDataAttribute, setCssstyle } from './load-themes.js';

const themesObject = {
  'theme-name': {
    name: 'theme-name',
    variable: 'data-theme',
    value: '',
    locked: false,
    type: 'theme-name',
  },
  'color-scheme': {
    name: 'color-scheme',
    variable: 'color-scheme',
    value: '',
    locked: false,
    type: 'color-scheme',
  },
  primary: {
    name: 'primary',
    variable: '--p',
    value: '',
    locked: false,
    type: 'color',
  },
  'primary-content': {
    name: 'primary-content',
    variable: '--pc',
    value: '',
    locked: false,
    type: 'color',
  },
  secondary: {
    name: 'secondary',
    variable: '--s',
    value: '',
    locked: false,
    type: 'color',
  },
  'secondary-content': {
    name: 'secondary-content',
    variable: '--sc',
    value: '',
    locked: false,
    type: 'color',
  },
  accent: {
    name: 'accent',
    variable: '--a',
    value: '',
    locked: false,
    type: 'color',
  },
  'accent-content': {
    name: 'accent-content',
    variable: '--ac',
    value: '',
    locked: false,
    type: 'color',
  },
  neutral: {
    name: 'neutral',
    variable: '--n',
    value: '',
    locked: false,
    type: 'color',
  },
  'neutral-content': {
    name: 'neutral-content',
    variable: '--nc',
    value: '',
    locked: false,
    type: 'color',
  },
  'base-100': {
    name: 'base-100',
    variable: '--b1',
    value: '',
    locked: false,
    type: 'color',
  },
  'base-200': {
    name: 'base-200',
    variable: '--b2',
    value: '',
    locked: false,
    type: 'color',
  },
  'base-300': {
    name: 'base-300',
    variable: '--b3',
    value: '',
    locked: false,
    type: 'color',
  },
  'base-content': {
    name: 'base-content',
    variable: '--bc',
    value: '',
    locked: false,
    type: 'color',
  },
  info: {
    name: 'info',
    variable: '--in',
    value: '',
    locked: false,
    type: 'color',
  },
  'info-content': {
    name: 'info-content',
    variable: '--inc',
    value: '',
    locked: false,
    type: 'color',
  },

  success: {
    name: 'success',
    variable: '--su',
    value: '',
    locked: false,
    type: 'color',
  },
  'success-content': {
    name: 'success-content',
    variable: '--suc',
    value: '',
    locked: false,
    type: 'color',
  },

  warning: {
    name: 'warning',
    variable: '--wa',
    value: '',
    locked: false,
    type: 'color',
  },
  'warning-content': {
    name: 'warning-content',
    variable: '--wac',
    value: '',
    locked: false,
    type: 'color',
  },

  error: {
    name: 'error',
    variable: '--er',
    value: '',
    locked: false,
    type: 'color',
  },
  'error-content': {
    name: 'error-content',
    variable: '--erc',
    value: '',
    locked: false,
    type: 'color',
  },
  '--rounded-box': {
    name: '--rounded-box',
    variable: '--rounded-box',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--rounded-btn': {
    name: '--rounded-btn',
    variable: '--rounded-btn',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--rounded-badge': {
    name: '--rounded-badge',
    variable: '--rounded-badge',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--animation-btn': {
    name: '--animation-btn',
    variable: '--animation-btn',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--animation-input': {
    name: '--animation-input',
    variable: '--animation-input',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--btn-focus-scale': {
    name: '--btn-focus-scale',
    variable: '--btn-focus-scale',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--border-btn': {
    name: '--border-btn',
    variable: '--border-btn',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--tab-border': {
    name: '--tab-border',
    variable: '--tab-border',
    value: '',
    locked: false,
    type: 'curve',
  },
  '--tab-radius': {
    name: '--tab-radius',
    variable: '--tab-radius',
    value: '',
    locked: false,
    type: 'curve',
  },
} as const;

export function loadVariablesFromDataTheme() {
  const themeName = loadDataAttribute('data-theme');
  console.log('==== loading themes from themeName ===>', themeName);
  document
    .querySelectorAll(`[data-theme="` + themeName + `"]`)
    .forEach((element) => {
      const el = element as HTMLElement;
      Object.entries(themesObject).forEach(([key, value]) => {
        // console.log(" === key  === ",key)
        type keyType = keyof typeof themesObject;
        //@ts-expect-error : it's  complanaing about mutating a readolnly object
        themesObject[key as keyType].value = el.style.getPropertyValue(
          value.variable,
        );
      });
    });
  return themesObject;
}

export function loadDaisyUIThemeFromState(
  theme?: Partial<DaisyUIThemeObjectType>,
): DaisyUIThemeObjectType {
  const themeLoadaedFromCss = loadVariablesFromDataTheme();

  if (!theme) {
    return themeLoadaedFromCss;
  }
  type keyType = keyof typeof themesObject;
  Object.entries(theme).forEach(([key, value]) => {
    if (value) {
    // @ts-expect-error : it's  complanaing about mutating a readolnly object
      themeLoadaedFromCss[key as keyType ] = {
        name: value.name,
        variable: value.variable,
        value: value.value,
        locked: value.locked,
        type: value.type,
      };
      setCssstyle(value.variable, value.value);
    }
  });

  return themeLoadaedFromCss;
}

export function unsetAllCssVariables() {
  const theme = loadDaisyUIThemeFromState();
  Object.entries(theme).forEach(([key, value]) => {
    if (value && !value.locked) {
      document.documentElement.style?.removeProperty(value.variable);
    }
  });
  useDaisyUIThemeStore.getState().setAllThemes(loadDaisyUIThemeFromState());
}

export function mutationObserver() {
  let hasReacted = false;
  const themeStore = useDaisyUIThemeStore.getState();
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (hasReacted) {
        return;
      }
      if (
        mutation.type !== 'attributes' ||
        !mutation.attributeName ||
        mutation.attributeName !== 'data-theme'
      ) {
        continue;
      }
      if (
        themeStore.theme['theme-name']?.value ===
        loadDataAttribute('data-theme')
      ) {
        return;
      }

      unsetAllCssVariables();
      const newTheme = loadDaisyUIThemeFromState();
      themeStore.setAllThemes(newTheme);
      hasReacted = true;
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  return observer;
}
