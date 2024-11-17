import chroma from 'chroma-js';

/**
 * Converts an OKLCH color slice to a string representation.
 *
 * @param {number[]} oklchSlice - The OKLCH color slice to convert, in the format [lightness, chroma, hue].
 * @param {boolean} [wrapWithoklch=false] - Whether to wrap the resulting string in 'oklch()'.
 * @return {string} The string representation of the OKLCH color slice in the format 'lightness% chroma, hue optionally wrapped in 'oklch()'.
 */
export function oklchSliceToString(
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

/**
 * Converts an HSL color to an OKLCH color object.
 *
 * @param {string} hsl - The HSL color to convert, optionally wrapped in 'hsl()'.
 * @return {{ oklch_slice: number[], oklch_string: string}} The OKLCH color object, or a default OKLCH color if the conversion fails.
 *
 * @example
 * hslToOklch('hsl(0, 0%, 0%)')
 * hslToOklch('0 0% 0%')
 */
export function hslToOklch(hsl: string) {
  try {
    hsl = hsl.trim();
    if (!hsl.startsWith('hsl(')) {
      hsl = `hsl(${hsl})`;
    }
    const oklch_slice = chroma(hsl).oklch();
    const oklch_string = oklchSliceToString(oklch_slice);
    return {
      oklch_slice,
      oklch_string,
    };
  } catch (error: any) {
    // console.error(
    //   ' ⚠️ ====  hsl parse error in hslToOklch ====⚠️',
    //   error.message,
    // );
    return {
      oklch_slice: [0, 0, 0],
      oklch_string: '0% 0 0',
    };
  }
}

/**
 * Converts an OKLCH color to an HSL color object.
 *
 * @param {string} oklch - The OKLCH color to convert, optionally wrapped in 'oklch()'.
 * @return {{ hsl_slice: number[], hsl_string: string}} The HSL color object, or a default HSL color if the conversion fails.
 *
 * @example
 * oklchToHSL('oklch(50% 0.5 0.5)')
 * oklchToHSL('50% 0.5 0.5')
 */
export function oklchToHSL(oklch: string) {
  try {
    oklch = oklch.trim();
    if (!oklch.startsWith('oklch(')) {
      oklch = `oklch(${oklch})`;
    }
    // chroma.oklch(oklch).hsl();
    const hsl_slice = chroma(oklch).hsl();
    const h = hsl_slice[0]?.toFixed(2);
    const s = hsl_slice[1] ? `${(hsl_slice[1] * 100).toFixed(2)}%` : '0%';
    const l = hsl_slice[2] ? `${(hsl_slice[2] * 100).toFixed(2)}%` : '0%';
    const hsl_string = `hsl(${h}, ${s}, ${l})`;
    return { hsl_slice, hsl_string };
  } catch (error: any) {
    // console.error(
    //   ' ⚠️ ====  oklch parse error in oklchToHSL ====',
    //   error.message,
    // );
    return { hsl_slice: [0, 0, 0], hsl_string: 'hsl(0, 0%, 0%)' };
  }
}

/**
 * Converts an OKLCH color to a hexadecimal color string.
 *
 * @param {string} input - The OKLCH color to convert, optionally wrapped in 'oklch()'.
 * @return {string} The hexadecimal color string, or '#000000' if the conversion fails.
 */
export function oklchToHexString(input: string) {
  try {
    if (!input.startsWith('oklch(')) {
      input = `oklch(${input})`;
    }
    // console.log(" parsing oklch", input);
    return chroma(input).hex();
  } catch (error: any) {
    // console.error(
    //   " ⚠️ ====  oklch parse error in oklchToHexString ====⚠️",
    //   error.message,
    // );
    return '#000000';
  }
}

export function getHueFromHSL(hsl: string) {
  try {
    if (!hsl.startsWith('hsl(')) {
      hsl = `hsl(${hsl})`;
    }
    // console.log(" parsing oklch", input);
    return chroma(hsl).hsl()[0];
  } catch (error: any) {
    // console.error(
    //   " ⚠️ ====  oklch parse error in oklchToHexString ====⚠️",
    //   error.message,
    // );
    return 0;
  }
}

export function hexToOklch(input: string) {
  // if(input.startsWith("#")) input = input.slice(1)
  try {
    const oklch_slice = chroma(input).oklch();
    return oklchSliceToString(oklch_slice);
  } catch (error: any) {
    return oklchSliceToString([0.5, 0.5, 0.5]);
  }
}
