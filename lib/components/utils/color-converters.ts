/* eslint-disable @typescript-eslint/no-explicit-any */
import chroma from "chroma-js";
import { HSLColor } from "react-color";

/**
 * Converts an OKLCH color to a hexadecimal color string.
 *
 * @param {string} input - The OKLCH color to convert, optionally wrapped in 'oklch()'.
 * @return {string} The hexadecimal color string, or '#000000' if the conversion fails.
 */
export function oklchToHexString(input: string) {
  try {
    if (!input.startsWith("oklch(")) {
      input = `oklch(${input})`;
    }
    // console.log(" parsing oklch", input);
    return chroma(input).hex();
  } catch (error: any) {
    console.error(
      " ⚠️ ====  oklch parse error in oklchToHexString ====⚠️",
      error.message,
    );
    return "#000000";
  }
}

/**
 * Converts an OKLCH color slice to a string representation.
 *
 * @param {number[]} oklchSlice - The OKLCH color slice to convert, in the format [lightness, chroma, hue].
 * @param {boolean} [wrapWithoklch=false] - Whether to wrap the resulting string in 'oklch()'.
 * @return {string} The string representation of the OKLCH color slice in the format 'lightness% chroma, hue optionally wrapped in 'oklch()'.
 */
function oklchSliceToString(
  oklchSlice: [number, number, number],
  wrapWithoklch = false,
) {
  const l = Number.isNaN(oklchSlice[0])
    ? 0.5
    : (oklchSlice[0] * 100).toFixed(2);
  const c = Number.isNaN(oklchSlice[1]) ? 0.5 : oklchSlice[1].toFixed(2);
  const h = Number.isNaN(oklchSlice[2]) ? 0.5 : oklchSlice[2].toFixed(2);
  const oklchSTring = `${l}% ${c} ${h}`;
  if (wrapWithoklch) return `oklch(${oklchSTring})`;
  return oklchSTring;
}

export function hexToOklch(input: string) {
  // if(input.startsWith("#")) input = input.slice(1)
  try {
    const oklch_slice = chroma(input).oklch();
    console.log(" parsing oklch", oklch_slice);
    return oklchSliceToString(oklch_slice);
  } catch (error: any) {
    console.error(
      " ⚠️ ====  oklch parse error in hexToOklch ====⚠️",
      error.message,
    );
    return oklchSliceToString([0.5, 0.5, 0.5]);
  }
}

/**
 * Converts an OKLCH color to an HSL color object.
 *
 * @param {string} oklch - The OKLCH color to convert.
 * @return {HSLColor} The HSL color object, or a default HSL color if the conversion fails.
 */
export function oklchToHSL(oklch: string): HSLColor {
  try {
    if (!oklch || oklch === "") return { h: 0, s: 0, l: 0 };
    if (!oklch.startsWith("oklch(")) {
      oklch = `oklch(${oklch})`;
    }

    const hsl_slice = chroma(oklch).hsl();
    return {
      h: hsl_slice[0],
      s: hsl_slice[1],
      l: hsl_slice[2],
    };
  } catch (error: any) {
    console.error(
      " ⚠️ ====  oklch parse error in oklchToHSL ====",
      error.message,
    );
    return {
      h: 0,
      s: 0,
      l: 0,
    };
  }
}

/**
 * Converts an HSL color to an OKLCH color string.
 *
 * @param {{ h: number, s: number, l: number, a?: number }} hsl - The HSL color to convert.
 * @return {string} The OKLCH color string, or a default value if the conversion fails.
 *
 * @example
 * reactColorHSLToOKLCH({h: 0, s: 0, l: 0})
 */
export function reactColorHSLToOKLCH(hsl: HSLColor) {
  try {
    if (Number.isNaN(hsl.h)) [(hsl.h = 0)];
    if (Number.isNaN(hsl.s)) [(hsl.s = 0)];
    if (Number.isNaN(hsl.l)) [(hsl.l = 0)];
    const hsl_string = `hsl(${hsl.h.toFixed(0)}, ${(hsl.s * 100).toFixed(0)}%, ${(hsl.l * 100).toFixed(0)}%)`;
    const oklch_slice = chroma(hsl_string).oklch();
    if (Number.isNaN(oklch_slice[0])) {
      return;
    }
    if (Number.isNaN(oklch_slice[1])) {
      return;
    }
    if (Number.isNaN(oklch_slice[2])) {
      return;
    }
    return `${(oklch_slice[0] * 100).toFixed(2)}% ${oklch_slice[1].toFixed(2)} ${oklch_slice[2].toFixed(2)}`;
  } catch (error: any) {
    console.log(
      " =========  reactColorHSLToOKLCH convert hsl to oklch issue ============ ",
      error.message,
    );
    return "0.5 0.5 0.5";
  }
}
