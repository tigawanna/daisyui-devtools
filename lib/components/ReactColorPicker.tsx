import { oklchToHSL, reactColorHSLToOKLCH } from "./utils/color-converters";
import { useState } from "react";
import {
  ColorResult,
  HSLColor,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
} from "react-color";


interface ReactColorPickerProps {
  oklchString: string; // oklch color string to be coverted into hsl from the editor
  colorKey: string; // css variable key ;
  themeName: string;
  updateTheme: (items_key: string, new_items: string) => void;
}

export function ReactColorPicker({
  oklchString,
  colorKey,
  themeName,
  updateTheme
}: ReactColorPickerProps) {

  const [color, setColor] = useState<HSLColor>(oklchToHSL(oklchString));
  const oklch_string = reactColorHSLToOKLCH(color);
  const [oklch, setOklch] = useState(oklch_string);

  function handleChange(new_color: ColorResult) {
    setColor(new_color.hsl);
    const oklch_string = reactColorHSLToOKLCH(new_color.hsl);
    if (!oklch_string) return;
    setOklch(oklch_string);
    updateTheme(colorKey, oklch_string);
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center bg-base-100 rounded-lg">
        <h3 className="text-lg font-bold">{themeName}</h3>
        {oklch && (
          <span className="rounded-lg p-1 px-2 text-base-content">{`oklch${oklch})`}</span>
        )}
      </div>
      <div className="flex max-h-[70vh] w-full items-center justify-center gap-2 overflow-y-scroll rounded p-2">
        <SketchPicker color={color} onChange={handleChange} />
        <div className="hidden md:flex">
          <SwatchesPicker color={color} onChange={handleChange} />
        </div>
      </div>
      <div className="w-full">
        <SliderPicker color={color} onChange={handleChange} />
      </div>
    </div>
  );
}
