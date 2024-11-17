// types.ts

export interface ColorRow {
  name: string;
  hue: number;
  shades: number[];
}

export interface ColorSwatchProps {
  color: string;
  active: boolean;
  first?: boolean;
  last?: boolean;
  big?: boolean;
  onClick: () => void;
}

// ColorSwatches.tsx
import { useState } from 'react';

function ColorSwatch({
  color,
  big,
  active,
  first,
  last,
  onClick,
}: ColorSwatchProps) {
  return (
    <button
      className={`${big ? 'h-10' : 'h-4'} w-full transition-all ${big ? 'p-5' : ''} 
      duration-200  ${active && !big ? 'scale-y-[1.8]' : ''} ${first ? 'rounded-l-md' : ''} 
      ${last ? 'rounded-r-md' : ''} `}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}

export interface ColorValue {
hsl_slice: number[];
hsl_string: string;
}


export function OneColorSwatch({
  hue,
  shades,
  vertical,
  onColorChange,
}: {
  hue: number;
  shades: number[];
  vertical?: boolean;
  onColorChange?: (color: ColorValue) => void;
}) {
  const [activeHue, setActiveHue] = useState<number>(0);
  const [activeShade, setActiveShade] = useState<number>(0);
  return (
    <div className={`flex gap-px ${vertical ? 'flex-col' : ''}`}>
      {shades.map((lightness, index) => {
        const color = `hsl(${hue}, 100%, ${lightness}%)`;
        return (
          <div key={`${hue}-${lightness}`} className="flex-1">
            <ColorSwatch
              big={vertical}
              color={color}
              active={activeHue === hue && activeShade === index}
              first={index === 0}
              last={index === shades.length - 1}
              onClick={() => {
                setActiveHue(hue);
                setActiveShade(index);
                onColorChange?.({
                  hsl_slice: [hue, 100, lightness],
                  hsl_string: color,
                });
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

const colorMap = {
  Red: 0,
  Orange: 30,
  Yellow: 45,
  Green: 120,
  Cyan: 180,
  Purple: 275,
  Blue: 210,
  Violet: 270,
  Magenta: 300,
  Rose: 330,
  Brown: 27,
  Olive: 60,
} as const;




export interface ColorSwatchesProps {
  colors?: [keyof typeof colorMap];
  range?: number[];
  big?: boolean;
  onColorChange?: (color: ColorValue) => void;
}

const defaultColors = [
  'Red',
  'Yellow',
  'Green',
  'Purple',
] as const;
const defaultRange = [18,30, 50, 60, 80];
export function ColorSwatches({
  onColorChange,
  colors,
  range,
 big
}: ColorSwatchesProps) {
  const colorRows = colors
    ? colors.map((color) => {
        return {
          name: color,
          hue: colorMap[color],
          shades: range ?? defaultRange,
        };
      })
    : defaultColors.map((color) => {
        return {
          name: color,
          hue: colorMap[color],
          shades: range ?? defaultRange,
        };
      });
  const [activeHue, setActiveHue] = useState<number>(0);
  const [activeShade, setActiveShade] = useState<number>(0);

  return (
    <div className="w-full flex flex-wrap gap-1 justify-center">
      {colorRows.map((row) => (
        <div key={row.hue} className="flex  gap-1">
          <div className="flex flex-col  gap-px">
            {row.shades.map((lightness, index) => {
              const color = `hsl(${row.hue}, 100%, ${lightness}%)`;
              return (
                <div key={`${row.hue}-${lightness}`} className="flex-1">
                  <ColorSwatch
                    big
                    color={color}
                    active={activeHue === row.hue && activeShade === index}
                    first={index === 0}
                    last={index === row.shades.length - 1}
                    onClick={() => {
                      setActiveHue(row.hue);
                      setActiveShade(index);
                      onColorChange?.({
                        hsl_slice: [row.hue, 1, lightness / 100],
                        hsl_string: color,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
