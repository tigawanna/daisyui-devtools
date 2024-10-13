import { z } from "zod";

export const daisyUIThemeColorsSearchParamsSchema = z.object({
  primary: z
    .object({
      name: z.literal("primary"),
      variable: z.literal("--p"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "primary-content": z
    .object({
      name: z.literal("primary-content"),
      variable: z.literal("--pc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  secondary: z
    .object({
      name: z.literal("secondary"),
      variable: z.literal("--s"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "secondary-content": z
    .object({
      name: z.literal("secondary-content"),
      variable: z.literal("--sc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  accent: z
    .object({
      name: z.literal("accent"),
      variable: z.literal("--a"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "accent-content": z
    .object({
      name: z.literal("accent-content"),
      variable: z.literal("--ac"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  neutral: z
    .object({
      name: z.literal("neutral"),
      variable: z.literal("--n"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "neutral-content": z
    .object({
      name: z.literal("neutral-content"),
      variable: z.literal("--nc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "base-100": z
    .object({
      name: z.literal("base-100"),
      variable: z.literal("--b1"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "base-200": z
    .object({
      name: z.literal("base-200"),
      variable: z.literal("--b2"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "base-300": z
    .object({
      name: z.literal("base-300"),
      variable: z.literal("--b3"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "base-content": z
    .object({
      name: z.literal("base-content"),
      variable: z.literal("--bc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  info: z
    .object({
      name: z.literal("info"),
      variable: z.literal("--in"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "info-content": z
    .object({
      name: z.literal("info-content"),
      variable: z.literal("--inc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  success: z
    .object({
      name: z.literal("success"),
      variable: z.literal("--su"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "success-content": z
    .object({
      name: z.literal("success-content"),
      variable: z.literal("--suc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  warning: z
    .object({
      name: z.literal("warning"),
      variable: z.literal("--wa"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "warning-content": z
    .object({
      name: z.literal("warning-content"),
      variable: z.literal("--wac"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  error: z
    .object({
      name: z.literal("error"),
      variable: z.literal("--er"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "error-content": z
    .object({
      name: z.literal("error-content"),
      variable: z.literal("--erc"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
});
export const daisyUIThemeCurvesSearchParamsSchema = z.object({
  "--rounded-box": z
    .object({
      name: z.literal("rounded-box"),
      variable: z.literal("--rounded-box"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--rounded-btn": z
    .object({
      name: z.literal("rounded-btn"),
      variable: z.literal("--rounded-btn"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--rounded-badge": z
    .object({
      name: z.literal("rounded-badge"),
      variable: z.literal("--rounded-badge"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),

  "--animation-btn": z
    .object({
      name: z.literal("animation-btn"),
      variable: z.literal("--animation-btn"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--animation-input": z
    .object({
      name: z.literal("animation-input"),
      variable: z.literal("--animation-input"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--btn-focus-scale": z
    .object({
      name: z.literal("btn-focus-scale"),
      variable: z.literal("--btn-focus-scale"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--border-btn": z
    .object({
      name: z.literal("border-btn"),
      variable: z.literal("--border-btn"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--tab-border": z
    .object({
      name: z.literal("tab-border"),
      variable: z.literal("--tab-border"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
  "--tab-radius": z
    .object({
      name: z.literal("tab-radius"),
      variable: z.literal("--tab-radius"),
      value: z.string(),
      locked: z.boolean().optional(),
    })
    .optional(),
});

export const daisyUIThemeSearchParamsSchema = z
  .object({
    "--theme-name": z
      .object({
        name: z.literal("theme-name"),
        variable: z.literal("data-theme"),
        value: z.string(),
        locked: z.boolean().optional(),
      })
      .optional(),
    "--color-scheme": z
      .object({
        name: z.literal("color-scheme"),
        variable: z.literal("color-scheme"),
        value: z.string(),
        locked: z.boolean().optional(),
      })
      .optional(),
  })
  .merge(daisyUIThemeColorsSearchParamsSchema)
  .merge(daisyUIThemeCurvesSearchParamsSchema);

// "--p": "primary",          // primary color and its values
// "--pc": "primary-content", // color of content within primary color

// "--s": "secondary",        // secondary color and its values
// "--sc": "secondary-content", // color of content within secondary color

// "--n": "neutral",          // state color and its values
// "--nc": "neutral-content", // color of content within state color

// "--a": "accent",          // accent color and its values
// "--ac": "accent-content", // color of content within accent color

// "--b1": "base-100",              // base color, also called gray color
// "--b2": "base-200",              // base color, also called gray color
// "--b3": "base-300",              // base color, also called gray color
// "--bc": "base-content",           // base color, also called gray color

// "--in": "info",          // info color and its values
// "--inc": "info-content", // color of content within info color

// "--su": "success",          // success color and its values
// "--suc": "success-content", // color of content within success color

// "--wa": "warning",          // warning color and its values
// "--wac": "warning-content", // color of content within warning color

// "--er": "error",          // error color and its values
// "--erc": "error-content", // color of content within error color

// "--rounded-box": "1rem",          // border radius rounded-box utility class, used in card and other large boxes
// "--rounded-btn": "0.5rem",        // border radius rounded-btn utility class, used in buttons and similar element
// "--rounded-badge": "1.9rem",      // border radius rounded-badge utility class, used in badges and similar

// "--animation-btn": "0.25s",       // duration of animation when you click on button
// "--animation-input": "0.2s",      // duration of animation for inputs like checkbox, toggle, radio, etc

// "--btn-focus-scale": "0.95",      // scale transform of button when you focus on it
// "--border-btn": "1px",            // border width of buttons

// "--tab-border": "1px",            // border width of tabs
// "--tab-radius": "0.5rem",         // border radius of tabs

export type DaisyUIThemeSearchParmsTypes = z.infer<
  typeof daisyUIThemeSearchParamsSchema
>;
export type DaisyUIColorSearchParmsTypes = z.infer<
  typeof daisyUIThemeColorsSearchParamsSchema
>;
export type DaisyUICurvesSearchParmsTypes = z.infer<
  typeof daisyUIThemeCurvesSearchParamsSchema
>;
