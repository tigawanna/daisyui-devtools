import React from "react";

type ColorName =
  | "primary"
  | "primary-content"
  | "secondary"
  | "secondary-content"
  | "accent"
  | "accent-content"
  | "neutral"
  | "neutral-content"
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-content";

const THEME_COLORS: { name: ColorName; textColor: ColorName }[] = [
  { name: "primary", textColor: "primary-content" },
  { name: "primary-content", textColor: "primary" },
  { name: "secondary", textColor: "secondary-content" },
  { name: "secondary-content", textColor: "secondary" },
  { name: "accent", textColor: "accent-content" },
  { name: "accent-content", textColor: "accent" },
  { name: "neutral", textColor: "neutral-content" },
  { name: "neutral-content", textColor: "neutral" },
  { name: "base-100", textColor: "base-content" },
  { name: "base-200", textColor: "base-content" },
  { name: "base-300", textColor: "base-content" },
  { name: "base-content", textColor: "base-100" },
];

interface PreviewColorsProps {
  exclude?: ColorName[];
  allow?: ColorName[];
}

export function PreviewColors({ exclude, allow }: PreviewColorsProps) {
  const filteredColors = React.useMemo(() => {
    if (allow && allow.length > 0) {
      return THEME_COLORS.filter((color) => allow.includes(color.name));
    }
    if (exclude && exclude.length > 0) {
      return THEME_COLORS.filter((color) => !exclude.includes(color.name));
    }
    return THEME_COLORS;
  }, [exclude, allow]);

  const mainColors = filteredColors.slice(0, 8); // primary, secondary, accent, neutral and their contents
  const baseColors = filteredColors.slice(8); // base colors

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
        <ul className="w-full flex flex-wrap justify-center gap-5">
          {mainColors.map((color) => (
            <div
              key={color.name}
              className={`flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-${color.name} p-2 text-${color.textColor}`}
            >
              {color.name}
            </div>
          ))}
        </ul>
        <ul className="flex justify-center gap-5">
          {baseColors.map((color) => (
            <div
              key={color.name}
              className={`flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-${color.name} p-2 text-${color.textColor}`}
            >
              {color.name}
            </div>
          ))}
        </ul>
   
    </div>
  );
}
