import { oklchToHexString, hexToOklch } from "../../../utils/color-converters.js";
import { loadDaisyUIThemeFromCss } from "../utils/load-themes.js";
import type { DaisyUIThemeObjectType } from "../utils/daisyui-theme-types.js";

export function exportThemeArray(theme: DaisyUIThemeObjectType, spread = false) {
  const colors_to_export = [
    spread
      ? `...require("daisyui/src/theming/themes")["${theme?.['theme-name']?.value}"]`
      : undefined,
    theme?.['--color-scheme']?.value
      ? `"color-scheme":"${theme?.['color-scheme']?.value}"`
      : undefined,
    theme?.primary?.value
      ? `"primary":"${oklchToHexString(theme?.primary?.value)}"`
      : undefined,
    theme?.['primary-content']?.value
      ? `"primary-content":"${oklchToHexString(theme?.['primary-content']?.value)}"`
      : undefined,

    theme?.secondary?.value
      ? `"secondary":"${oklchToHexString(theme?.secondary?.value)}"`
      : undefined,

    theme?.['secondary-content']?.value
      ? `"secondary-content":"${oklchToHexString(theme?.['secondary-content']?.value)}"`
      : undefined,
    theme?.accent?.value
      ? `"accent":"${oklchToHexString(theme?.accent?.value)}"`
      : undefined,
    theme?.['accent-content']?.value
      ? `"accent-content":"${oklchToHexString(theme?.['accent-content']?.value)}"`
      : undefined,
    theme?.neutral?.value
      ? `"neutral":"${oklchToHexString(theme?.neutral?.value)}"`
      : undefined,
    theme?.['neutral-content']?.value
      ? `"neutral-content":"${oklchToHexString(theme?.['neutral-content']?.value)}"`
      : undefined,
    theme?.['base-100']?.value
      ? `"base-100":"${oklchToHexString(theme?.['base-100']?.value)}"`
      : undefined,
    theme?.['base-200']?.value
      ? `"base-200":"${oklchToHexString(theme?.['base-200']?.value)}"`
      : undefined,
    theme?.['base-300']?.value
      ? `"base-300":"${oklchToHexString(theme?.['base-300']?.value)}"`
      : undefined,
    theme?.['base-content']?.value
      ? `"base-content":"${oklchToHexString(theme?.['base-content']?.value)}"`
      : undefined,
    theme?.['success']?.value
      ? `"success":"${oklchToHexString(theme?.['success']?.value)}"`
      : undefined,
    theme?.['error']?.value
      ? `"error":"${oklchToHexString(theme?.['error']?.value)}"`
      : undefined,
    theme?.['info']?.value
      ? `"info":"${oklchToHexString(theme?.['info']?.value)}"`
      : undefined,
    theme?.['warning']?.value
      ? `"warning":"${oklchToHexString(theme?.['warning']?.value)}"`
      : undefined,
    theme?.['--animation-btn']?.value
      ? `"--animation-btn":"${theme?.['--animation-btn']?.value}"`
      : undefined,
    theme?.['--animation-input']?.value
      ? `"--animation-input":"${theme?.['--animation-input']?.value}"`
      : undefined,

    theme?.['--border-btn']?.value
      ? `"--border-btn":"${theme?.['--border-btn']?.value}"`
      : undefined,
    theme?.['--btn-focus-scale']?.value
      ? `"--btn-focus-scale":"${theme?.['--btn-focus-scale']?.value}"`
      : undefined,
    theme?.['--rounded-badge']?.value
      ? `"--rounded-badge":"${theme?.['--rounded-badge']?.value}"`
      : undefined,
    theme?.['--rounded-box']?.value
      ? `"--rounded-box":"${theme?.['--rounded-box']?.value}"`
      : undefined,
    theme?.['--rounded-btn']?.value
      ? `"--rounded-btn":"${theme?.['--rounded-btn']?.value}"`
      : undefined,
    theme?.['--tab-border']?.value
      ? `"--tab-border":"${theme?.['--tab-border']?.value}"`
      : undefined,
    theme?.['--tab-radius']?.value
      ? `"--tab-radius":"${theme?.['--tab-radius']?.value}"`
      : undefined,
  ].filter(Boolean);
  return colors_to_export;
}

export function importThemes(imported_text: string) {
  const imported_theme = loadDaisyUIThemeFromCss();
  type AllThemeKeys = keyof typeof imported_theme;
  if (imported_text === '') return imported_theme;
  imported_text.split('\n').forEach((line) => {
    const [key, value] = line.split(':');
    if (key && value) {
      const trimmednewValue = value?.trim();
      let newThemeValue = trimmednewValue.endsWith(',')
        ? trimmednewValue.slice(1, -2)
        : trimmednewValue.slice(1, -1);
      const theme_key = key
        ?.trim()
        .split('"')[1] as keyof typeof imported_theme;
      // eslint-disable-next-line no-prototype-builtins
      if (
        imported_theme[theme_key] &&
        Object.prototype.hasOwnProperty.call(imported_theme[theme_key], 'value')
      ) {
        const oldThemeObject =
          imported_theme[theme_key as Exclude<AllThemeKeys, 'theme_name'>];
        if (theme_key !== '--') {
          if (newThemeValue.startsWith('#')) {
            newThemeValue = hexToOklch(newThemeValue);
            console.log("=== old value  ===> ",imported_theme[theme_key]?.value, ' ===== newThemeValue ====>  ', newThemeValue);
          }
          // @ts-expect-error
          imported_theme[theme_key] = {
            ...oldThemeObject,
            value: newThemeValue,
          };
        }
      }
    }
  });
  return imported_theme;
}
