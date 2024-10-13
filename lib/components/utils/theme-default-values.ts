/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { DaisyUIThemeSearchParmsTypesVariables } from "./types";
import {
  getColorValueFromTheme,
  getThemeVariable,
} from "./daisyui-css-variables-helpers";
import { DaisyUIThemeSearchParmsTypes } from "./schema";
import { hexToOklch } from "./color-converters";

export function isThemeNotNull(theme?: DaisyUIThemeSearchParmsTypes) {
  if (!theme) return false;
  if (
    !theme?.primary &&
    !theme?.["primary-content"] &&
    !theme?.secondary &&
    !theme?.["secondary-content"] &&
    !theme?.neutral &&
    !theme?.accent &&
    !theme?.["accent-content"] &&
    !theme?.["base-100"] &&
    !theme?.["base-200"] &&
    !theme?.["base-300"] &&
    !theme?.["base-content"]
  ) {
    return false;
  }
  return true;
}

export function loadThemeName() {
  const elem = document.documentElement;
  const current_data_theme = elem.getAttribute("data-theme");
  return current_data_theme ?? "light";
}
export function loadColorScheme() {
  const color_scheme = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("color-scheme");
  return color_scheme ?? undefined;
}

function loadFromSearchParamsIfLocked(
  css_variable:DaisyUIThemeSearchParmsTypesVariables,
  theme?: {
  name: string;
  value: string;
  variable: string;
  locked?: boolean | undefined;
}) {
  if (!theme) return getColorValueFromTheme(css_variable);
  const { value, variable, locked } = theme;
  if (!locked) {
    const value_from_css_ariable = getColorValueFromTheme(variable);
    return value_from_css_ariable;
  }
  return value ?? "";
}

export function defaultThemes({
  theme,
}: {
  theme?: DaisyUIThemeSearchParmsTypes;
}): DaisyUIThemeSearchParmsTypes {
  return {
    "--color-scheme": {
      name: "color-scheme",
      variable: "color-scheme",
      value: loadFromSearchParamsIfLocked("color-scheme",theme?.["--color-scheme"]),
      locked: theme?.["--color-scheme"]?.locked ?? false,
    },
    accent: {
      name: "accent",
      variable: "--a",
      value: loadFromSearchParamsIfLocked("--a",theme?.accent),
      locked: theme?.accent?.locked ?? false,
    },
    "accent-content": {
      name: "accent-content",
      variable: "--ac",
      value: loadFromSearchParamsIfLocked("--ac",theme?.["accent-content"]),
      locked: theme?.["accent-content"]?.locked ?? false,
    },

    "base-100": {
      name: "base-100",
      variable: "--b1",
      value: loadFromSearchParamsIfLocked("--b1",theme?.["base-100"]),
      locked: theme?.["base-100"]?.locked ?? false,
    },
    "base-200": {
      name: "base-200",
      variable: "--b2",
      value: loadFromSearchParamsIfLocked("--b2",theme?.["base-200"]),
      locked: theme?.["base-200"]?.locked ?? false,
    },
    "base-300": {
      name: "base-300",
      variable: "--b3",
      value: loadFromSearchParamsIfLocked("--b3",theme?.["base-300"]),
      locked: theme?.["base-300"]?.locked ?? false,
    },
    "base-content": {
      name: "base-content",
      variable: "--bc",
     value: loadFromSearchParamsIfLocked("--bc",theme?.["base-content"]),
      locked: theme?.["base-content"]?.locked ?? false,
    },

    error: {
      name: "error",
      variable: "--er",
      value: loadFromSearchParamsIfLocked("--er",theme?.error),
      locked: theme?.error?.locked ?? false,
    },
    "error-content": {
      name: "error-content",
      variable: "--erc",
      value: loadFromSearchParamsIfLocked("--erc",theme?.["error-content"]),
      locked: theme?.["error-content"]?.locked ?? false,
    },

    info: {
      name: "info",
      variable: "--in",
      value: loadFromSearchParamsIfLocked("--in",theme?.info),
      locked: theme?.info?.locked ?? false,
    },
    "info-content": {
      name: "info-content",
      variable: "--inc",
      value: loadFromSearchParamsIfLocked("--inc",theme?.["info-content"]),
      locked: theme?.["info-content"]?.locked ?? false,
    },

    neutral: {
      name: "neutral",
      variable: "--n",
      value: loadFromSearchParamsIfLocked("--n",theme?.neutral),
      locked: theme?.neutral?.locked ?? false,
    },
    "neutral-content": {
      name: "neutral-content",
      variable: "--nc",
      value: loadFromSearchParamsIfLocked("--nc",theme?.["neutral-content"]),
      locked: theme?.["neutral-content"]?.locked ?? false,
    },

    primary: {
      name: "primary",
      variable: "--p",
      value: loadFromSearchParamsIfLocked("--p",theme?.primary),
      locked: theme?.primary?.locked ?? false,
    },
    "primary-content": {
      name: "primary-content",
      variable: "--pc",
      value: loadFromSearchParamsIfLocked("--pc",theme?.["primary-content"]),
      locked: theme?.["primary-content"]?.locked ?? false,
    },

    success: {
      name: "success",
      variable: "--su",
      value: loadFromSearchParamsIfLocked("--su",theme?.success),
      locked: theme?.success?.locked ?? false,
    },
    "success-content": {
      name: "success-content",
      variable: "--suc",
      value: loadFromSearchParamsIfLocked("--suc",theme?.["success-content"]),
      locked: theme?.["success-content"]?.locked ?? false,
    },

    secondary: {
      name: "secondary",
      variable: "--s",
      value: loadFromSearchParamsIfLocked("--s",theme?.secondary),
      locked: theme?.secondary?.locked ?? false,
    },
    "secondary-content": {
      name: "secondary-content",
      variable: "--sc",
      value: loadFromSearchParamsIfLocked("--sc",theme?.["secondary-content"]),
      locked: theme?.["secondary-content"]?.locked ?? false,
    },

    warning: {
      name: "warning",
      variable: "--wa",
      value: loadFromSearchParamsIfLocked("--wa",theme?.warning),
      locked: theme?.warning?.locked ?? false,
    },
    "warning-content": {
      name: "warning-content",
      variable: "--wac",
      value: loadFromSearchParamsIfLocked("--wac",theme?.["warning-content"]),
      locked: theme?.["warning-content"]?.locked ?? false,
    },

    "--rounded-box": {
      name: "rounded-box",
      variable: "--rounded-box",
      value:
        theme?.["--rounded-box"]?.value ?? getThemeVariable("--rounded-box"),
      locked: theme?.["--rounded-box"]?.locked ?? false,
    },
    "--rounded-btn": {
      name: "rounded-btn",
      variable: "--rounded-btn",
      value:
        theme?.["--rounded-btn"]?.value ?? getThemeVariable("--rounded-btn"),
      locked: theme?.["--rounded-btn"]?.locked ?? false,
    },
    "--rounded-badge": {
      name: "rounded-badge",
      variable: "--rounded-badge",
      value:
        theme?.["--rounded-badge"]?.value ??
        getThemeVariable("--rounded-badge"),
      locked: theme?.["--rounded-badge"]?.locked ?? false,
    },
    "--animation-btn": {
      name: "animation-btn",
      variable: "--animation-btn",
      value:
        theme?.["--animation-btn"]?.value ??
        getThemeVariable("--animation-btn"),
      locked: theme?.["--animation-btn"]?.locked ?? false,
    },
    "--animation-input": {
      name: "animation-input",
      variable: "--animation-input",
      value:
        theme?.["--animation-input"]?.value ??
        getThemeVariable("--animation-input"),
      locked: theme?.["--animation-input"]?.locked ?? false,
    },
    "--border-btn": {
      name: "border-btn",
      variable: "--border-btn",
      value: theme?.["--border-btn"]?.value ?? getThemeVariable("--border-btn"),
      locked: theme?.["--border-btn"]?.locked ?? false,
    },
    "--tab-border": {
      name: "tab-border",
      variable: "--tab-border",
      value: theme?.["--tab-border"]?.value ?? getThemeVariable("--tab-border"),
      locked: theme?.["--tab-border"]?.locked ?? false,
    },
    "--tab-radius": {
      name: "tab-radius",
      variable: "--tab-radius",
      value: theme?.["--tab-radius"]?.value ?? getThemeVariable("--tab-radius"),
      locked: theme?.["--tab-radius"]?.locked ?? false,
    },

    "--btn-focus-scale": {
      name: "btn-focus-scale",
      variable: "--btn-focus-scale",
      value:
        theme?.["--btn-focus-scale"]?.value ??
        getThemeVariable("--btn-focus-scale"),
      locked: theme?.["--btn-focus-scale"]?.locked ?? false,
    },
    "--theme-name": {
      name: "theme-name",
      variable: "data-theme",
      value: theme?.["--theme-name"]?.value ?? loadThemeName() ?? "",
      locked: theme?.["--theme-name"]?.locked ?? false,
    },
    // "--color-scheme": {
    //   name: "color-scheme",
    //   variable: "--color-scheme",
    //   value:
    //     theme?.["--color-scheme"]?.value ??
    //     loadColorScheme() ??
    //     "",
    //   locked: theme?.["--color-scheme"]?.locked ?? false,
    // },

    // theme_name: theme?.theme_name ?? loadThemeName(),
  };
}

export function importThemes(imported_text: string) {
  const imported_theme = defaultThemes({});
  type AllThemeKeys = keyof typeof imported_theme;
  if (imported_text === "") return imported_theme;
  imported_text.split("\n").forEach((line) => {
    const [key, value] = line.split(":");
    if (key && value) {
      const trimmednewValue = value?.trim();
      let newThemeValue = trimmednewValue.endsWith(",")
        ? trimmednewValue.slice(1, -2)
        : trimmednewValue.slice(1, -1);
      const theme_key = key
        ?.trim()
        .split('"')[1] as keyof typeof imported_theme;
      // eslint-disable-next-line no-prototype-builtins
      if (
        imported_theme[theme_key] &&
        Object.prototype.hasOwnProperty.call(imported_theme[theme_key], "value")
      ) {
        const oldThemeObject =
          imported_theme[theme_key as Exclude<AllThemeKeys, "theme_name">];
        // @ts-expect-error
        if (theme_key !== "--") {
          if (newThemeValue.startsWith("#")) {
            newThemeValue = hexToOklch(newThemeValue);
          }

          imported_theme[theme_key] = {
            ...oldThemeObject,
            // @ts-expect-error
            value: newThemeValue,
          };
        }
      }
    }
  });
  return imported_theme;
}


