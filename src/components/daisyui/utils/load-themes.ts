import exp from 'constants';
import { useDaisyUIThemeStore } from './store.js';
import type { DaisyUIThemeObjectType } from './daisyui-theme-types.js';

export function loadCSSVariable(variable: string) {
  const colorValues = getComputedStyle(
    document.documentElement,
  ).getPropertyValue(variable);
  return colorValues;
}
export function loadDataAttribute(attribute: string) {
  const dataTheme = document.documentElement?.getAttribute(attribute);
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return dataTheme ?? 'dark';
  }
  return dataTheme ?? 'light';
}

export function loadDaisyUIThemeFromCss(): DaisyUIThemeObjectType {
  return {
    'theme-name': {
      name: 'theme-name',
      variable: 'data-theme',
      value: loadDataAttribute('data-theme'),
      // value:"light",
      locked: false,
      type: 'theme-name',
    },
    'color-scheme': {
      name: 'color-scheme',
      variable: 'color-scheme',
      value: loadCSSVariable('color-scheme'),
      locked: false,
      type: 'color-scheme',
    },
    primary: {
      name: 'primary',
      variable: '--p',
      value: loadCSSVariable('--p'),
      locked: false,
      type: 'color',
    },
    'primary-content': {
      name: 'primary-content',
      variable: '--pc',
      value: loadCSSVariable('--pc'),
      locked: false,
      type: 'color',
    },
    secondary: {
      name: 'secondary',
      variable: '--s',
      value: loadCSSVariable('--s'),
      locked: false,
      type: 'color',
    },
    'secondary-content': {
      name: 'secondary-content',
      variable: '--sc',
      value: loadCSSVariable('--sc'),
      locked: false,
      type: 'color',
    },
    accent: {
      name: 'accent',
      variable: '--a',
      value: loadCSSVariable('--a'),
      locked: false,
      type: 'color',
    },
    'accent-content': {
      name: 'accent-content',
      variable: '--ac',
      value: loadCSSVariable('--ac'),
      locked: false,
      type: 'color',
    },
    neutral: {
      name: 'neutral',
      variable: '--n',
      value: loadCSSVariable('--n'),
      locked: false,
      type: 'color',
    },
    'neutral-content': {
      name: 'neutral-content',
      variable: '--nc',
      value: loadCSSVariable('--nc'),
      locked: false,
      type: 'color',
    },
    'base-100': {
      name: 'base-100',
      variable: '--b1',
      value: loadCSSVariable('--b1'),
      locked: false,
      type: 'color',
    },
    'base-200': {
      name: 'base-200',
      variable: '--b2',
      value: loadCSSVariable('--b2'),
      locked: false,
      type: 'color',
    },
    'base-300': {
      name: 'base-300',
      variable: '--b3',
      value: loadCSSVariable('--b3'),
      locked: false,
      type: 'color',
    },
    'base-content': {
      name: 'base-content',
      variable: '--bc',
      value: loadCSSVariable('--bc'),
      locked: false,
      type: 'color',
    },
    info: {
      name: 'info',
      variable: '--in',
      value: loadCSSVariable('--in'),
      locked: false,
      type: 'color',
    },
    'info-content': {
      name: 'info-content',
      variable: '--inc',
      value: loadCSSVariable('--inc'),
      locked: false,
      type: 'color',
    },

    success: {
      name: 'success',
      variable: '--su',
      value: loadCSSVariable('--su'),
      locked: false,
      type: 'color',
    },
    'success-content': {
      name: 'success-content',
      variable: '--suc',
      value: loadCSSVariable('--suc'),
      locked: false,
      type: 'color',
    },

    warning: {
      name: 'warning',
      variable: '--wa',
      value: loadCSSVariable('--wa'),
      locked: false,
      type: 'color',
    },
    'warning-content': {
      name: 'warning-content',
      variable: '--wac',
      value: loadCSSVariable('--wac'),
      locked: false,
      type: 'color',
    },

    error: {
      name: 'error',
      variable: '--er',
      value: loadCSSVariable('--er'),
      locked: false,
      type: 'color',
    },
    'error-content': {
      name: 'error-content',
      variable: '--erc',
      value: loadCSSVariable('--erc'),
      locked: false,
      type: 'color',
    },
    '--rounded-box': {
      name: '--rounded-box',
      variable: '--rounded-box',
      value: loadCSSVariable('--rounded-box'),
      locked: false,
      type: 'curve',
    },
    '--rounded-btn': {
      name: '--rounded-btn',
      variable: '--rounded-btn',
      value: loadCSSVariable('--rounded-btn'),
      locked: false,
      type: 'curve',
    },
    '--rounded-badge': {
      name: '--rounded-badge',
      variable: '--rounded-badge',
      value: loadCSSVariable('--rounded-badge'),
      locked: false,
      type: 'curve',
    },
    '--animation-btn': {
      name: '--animation-btn',
      variable: '--animation-btn',
      value: loadCSSVariable('--animation-btn'),
      locked: false,
      type: 'curve',
    },
    '--animation-input': {
      name: '--animation-input',
      variable: '--animation-input',
      value: loadCSSVariable('--animation-input'),
      locked: false,
      type: 'curve',
    },
    '--btn-focus-scale': {
      name: '--btn-focus-scale',
      variable: '--btn-focus-scale',
      value: loadCSSVariable('--btn-focus-scale'),
      locked: false,
      type: 'curve',
    },
    '--border-btn': {
      name: '--border-btn',
      variable: '--border-btn',
      value: loadCSSVariable('--border-btn'),
      locked: false,
      type: 'curve',
    },
    '--tab-border': {
      name: '--tab-border',
      variable: '--tab-border',
      value: loadCSSVariable('--tab-border'),
      locked: false,
      type: 'curve',
    },
    '--tab-radius': {
      name: '--tab-radius',
      variable: '--tab-radius',
      value: loadCSSVariable('--tab-radius'),
      locked: false,
      type: 'curve',
    },
  };
}
export function setCssstyle(variable: string, value: string) {
  document.documentElement.style?.setProperty(variable, value);
}
export function unsetAllCssVariables() {
  const theme = loadDaisyUIThemeFromCss();
  Object.entries(theme).forEach(([key, value]) => {
    if (value && !value.locked) {
      document.documentElement.style?.removeProperty(value.variable);
    }
  });
  useDaisyUIThemeStore.getState().setAllThemes(loadDaisyUIThemeFromCss());
}
export function loadDaisyUIThemeFromState(
  theme?: Partial<DaisyUIThemeObjectType>,
): DaisyUIThemeObjectType {
  const themeLoadaedFromCss = loadDaisyUIThemeFromCss();

  if (!theme) {
    return themeLoadaedFromCss;
  }
  Object.entries(theme).forEach(([key, value]) => {
    if (value) {
      themeLoadaedFromCss[key] = {
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

export function mutationObserver(theme?: Partial<DaisyUIThemeObjectType>) {
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

export function setThemeValuesToCssVariables(theme: DaisyUIThemeObjectType) {
  Object.entries(theme).forEach(([key, value]) => {
    if (value) {
      // console.log("setting  ==== ",value.variable, value.value);
      setCssstyle(value.variable, value.value);
    }
  });
}

// if (mutation.type === 'attributes' && mutation.attributeName === 'style') {}
