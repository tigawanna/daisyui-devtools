/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";
import { importThemes } from "./utils/theme-default-values";

interface ImportThemeProps {
  theme: DaisyUIThemeSearchParmsTypes;
  updateWholeTheme: (theme: Record<string, string>) => void;
}

export function ImportTheme({ updateWholeTheme }: ImportThemeProps) {
  const samplePlaceholder = `
        "primary": "#ffd900",
        "primary-content": "#4c4528",
        "secondary": "#ffa400",
        "secondary-content": "#5d3f18",
        "accent": "#ffa551",
        "accent-content": "#180a02",
        "neutral": "#060023",
        "neutral-content": "#c4c5d0",
        "base-100": "#ffffff",
        "base-200": "#e8e8e8",
        "base-300": "#d1d1d1",
        "base-content": "#291334",
        "success": "#00a96e",
        "error": "#ff5861",
        "info": "#00b5ff",
        "warning": "#ffbe00",
        "--animation-btn": "0.25s",
        "--animation-input": ".2s",
        "--border-btn": "1px",
        "--btn-focus-scale": "0.95",
        "--rounded-badge": "1.9rem",
        "--rounded-box": "1rem",
        "--rounded-btn": "1.9rem",
        "--tab-border": "2px",
        "--tab-radius": "0.7rem"
  `;
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen w-full flex-col justify-center gap-2 md:items-center">
      <textarea
        placeholder={samplePlaceholder}
        className="textarea textarea-bordered h-[80%] min-h-[70vh] w-full p-6"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          const imported_theme = importThemes(input);
          if (imported_theme) {
            updateWholeTheme(imported_theme as any);
          }
        }}
        className="btn btn-primary btn-sm btn-wide p-1"
      >
        import
      </button>
    </div>
  );
}
