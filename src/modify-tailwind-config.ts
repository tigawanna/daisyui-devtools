import fs from "vite-plugin-fs/browser";
import { parseModule, generateCode } from "magicast";
import { DaisyUIThemeSearchParmsTypes } from "../lib/components/utils/schema";
import daisyUIThemes from "daisyui/src/theming/themes";
import { exportThemeArray } from "../lib/components/utils/io";
export async function updateTailwindConfig(
  themeObject: DaisyUIThemeSearchParmsTypes,
  custom_theme_name?: string
) {
  const extendingThemeName = themeObject["--color-scheme"]?.value as keyof typeof daisyUIThemes;
  const themeName = custom_theme_name || extendingThemeName;
  const extendingTheme = daisyUIThemes[extendingThemeName];
  const newThemeArray = exportThemeArray(themeObject, false);
  const newThemeObject = newThemeArray.reduce((acc, curr, index) => {
    console.log("=== curr  ==== ", curr);
    if (curr) {
      const [key, value] = curr.split(":");
      console.log("=== key  ==== ", key);
      console.log("=== value  ==== ", value.slice(1, -1));
      return { ...acc, [key.slice(1, -1)]: value.slice(1, -1) };
    }
    return acc;
  }, {});
  const newTheme = {[themeName]:{ ...extendingTheme, ...newThemeObject }};
  const text_file = await fs.readFile("./tailwind.config.js");
  console.log("=== text fle  ==== ", text_file);
  const mod = parseModule(text_file);
  const themes = mod.exports.default.daisyui.themes;
  const daisyuiThemes = JSON.parse(JSON.stringify(themes)) as (string | {})[];
  const daisyuiStringsOnly = daisyuiThemes.map((theme) => {
    if (typeof theme === "string") {
      return theme;
    }
  });
  if (themeName) {
    const customThemeIndex = daisyuiStringsOnly.findIndex((theme) => {
      return theme === themeName;
    });
    console.log("=== customThemeIndex  ==== ", customThemeIndex);
    if (customThemeIndex > -1) {
        // @ts-expect-error
      daisyuiStringsOnly.splice(customThemeIndex, 1, newTheme);
    }else{
        // @ts-expect-error
      daisyuiStringsOnly.push(newTheme);
    }
  }
  console.log("=== daisyuiStringsOnly  ==== ", daisyuiStringsOnly);
  mod.exports.default.daisyui = {thene:daisyuiStringsOnly};
  const { code, map } = generateCode(mod);
  console.log("=== code  ==== ", code);
}

// daisyuuiconfig.themes.push({ ...extendingTheme, ...newTheme });
//   const listThatNeedsDashPrefix = [
//     "rounded-box",
//     "rounded-btn",
//     "rounded-badge",
//     "animation-btn",
//     "animation-input",
//     "btn-focus-scale",
//     "border-btn",
//     "tab-border",
//     "tab-radius",
//   ];
//   const parsedThemeObject = Object.entries(themeObject).reduce((acc, [key, value]) => {
//     if (listThatNeedsDashPrefix.includes(value.name) && value?.value.length>0) {

//       // @ts-expect-error
//       acc[value?.variable] = value.value;
//     }
//     else if (value?.value.length>0) {
//         console.log("=== value?.value  ==== ", value?.value);
//       // @ts-expect-error
//       acc[value?.name] = value.value;
//     }
//     return acc;
//   },{});
