import { oklchToHexString } from "./color-converters";
import { DaisyUIThemeSearchParmsTypes } from "./schema";
export function exportThemeAsString(theme: DaisyUIThemeSearchParmsTypes) {
  const colors_to_export = [
    `...require("daisyui/src/theming/themes")["${theme?.["--color-scheme"]?.value}"]\n`,
    theme?.["--color-scheme"]?.value
      ? `"color-scheme":"${theme?.["--color-scheme"]?.value}"\n`
      : undefined,
    theme?.primary?.value ? `"primary":"${oklchToHexString(theme?.primary?.value)}"\n` : undefined,
    theme?.["primary-content"]?.value
      ? `"primary-content":"${oklchToHexString(theme?.["primary-content"]?.value)}"\n`
      : undefined,

    theme?.secondary?.value
      ? `"secondary":"${oklchToHexString(theme?.secondary?.value)}"\n`
      : undefined,

    theme?.["secondary-content"]?.value
      ? `"secondary-content":"${oklchToHexString(theme?.["secondary-content"]?.value)}"\n`
      : undefined,
    theme?.accent?.value ? `"accent":"${oklchToHexString(theme?.accent?.value)}"\n` : undefined,
    theme?.["accent-content"]?.value
      ? `"accent-content":"${oklchToHexString(theme?.["accent-content"]?.value)}"\n`
      : undefined,
    theme?.neutral?.value ? `"neutral":"${oklchToHexString(theme?.neutral?.value)}"\n` : undefined,
    theme?.["neutral-content"]?.value
      ? `"neutral-content":"${oklchToHexString(theme?.["neutral-content"]?.value)}"\n`
      : undefined,
    theme?.["base-100"]?.value
      ? `"base-100":"${oklchToHexString(theme?.["base-100"]?.value)}"\n`
      : undefined,
    theme?.["base-200"]?.value
      ? `"base-200":"${oklchToHexString(theme?.["base-200"]?.value)}"\n`
      : undefined,
    theme?.["base-300"]?.value
      ? `"base-300":"${oklchToHexString(theme?.["base-300"]?.value)}"\n`
      : undefined,
    theme?.["base-content"]?.value
      ? `"base-content":"${oklchToHexString(theme?.["base-content"]?.value)}"\n`
      : undefined,
    theme?.["success"]?.value
      ? `"success":"${oklchToHexString(theme?.["success"]?.value)}"\n`
      : undefined,
    theme?.["error"]?.value
      ? `"error":"${oklchToHexString(theme?.["error"]?.value)}"\n`
      : undefined,
    theme?.["info"]?.value ? `"info":"${oklchToHexString(theme?.["info"]?.value)}"\n` : undefined,
    theme?.["warning"]?.value
      ? `"warning":"${oklchToHexString(theme?.["warning"]?.value)}"\n`
      : undefined,
    theme?.["--animation-btn"]?.value
      ? `"--animation-btn":"${theme?.["--animation-btn"]?.value}"\n`
      : undefined,
    theme?.["--animation-input"]?.value
      ? `"--animation-input":"${theme?.["--animation-input"]?.value}"\n`
      : undefined,

    theme?.["--border-btn"]?.value
      ? `"--border-btn":"${theme?.["--border-btn"]?.value}"\n`
      : undefined,
    theme?.["--btn-focus-scale"]?.value
      ? `"--btn-focus-scale":"${theme?.["--btn-focus-scale"]?.value}"\n`
      : undefined,
    theme?.["--rounded-badge"]?.value
      ? `"--rounded-badge":"${theme?.["--rounded-badge"]?.value}"\n`
      : undefined,
    theme?.["--rounded-box"]?.value
      ? `"--rounded-box":"${theme?.["--rounded-box"]?.value}"\n`
      : undefined,
    theme?.["--rounded-btn"]?.value
      ? `"--rounded-btn":"${theme?.["--rounded-btn"]?.value}"\n`
      : undefined,
    theme?.["--tab-border"]?.value
      ? `"--tab-border":"${theme?.["--tab-border"]?.value}"\n`
      : undefined,
    theme?.["--tab-radius"]?.value
      ? `"--tab-radius":"${theme?.["--tab-radius"]?.value}"\n`
      : undefined,
  ].filter(Boolean);
  return colors_to_export.join(",");
}
