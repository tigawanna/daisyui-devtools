import { Moon, Sun } from "lucide-react";
import { useState } from "react";

interface ThemeToggleProps {}

export function ThemeToggle({}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"forest" | "cupcake" | "bumblebee">(
    "forest",
  );
  function updateTheme(newTheme: "forest" | "cupcake" | "bumblebee") {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }
  function transitionColors(newTheme: "forest" | "cupcake" | "bumblebee") {
    if (typeof window !== "undefined") {
      try {
        document.startViewTransition(() => {
          document.documentElement.dataset.theme = newTheme;
          updateTheme(newTheme);
        });
      } catch (error) {
        document.documentElement.dataset.theme = newTheme;
        updateTheme(newTheme);
      }
    }
  }
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="">
        <select
          className="select select-bordered select-sm max-w-xs"
          onChange={(e) =>
            (document.documentElement.dataset.style = e.target.value)
          }
        >
          <option value="default">Default</option>
          <option value="vertical">Vertical</option>
          <option value="wipe">Wipe</option>
          <option value="angled">Angled</option>
          <option value="flip">Flip</option>
          <option value="slides">Slides</option>
        </select>
      </div>
      <select
        onChange={(e) =>
          transitionColors(e.target.value as "forest" | "cupcake" | "bumblebee")
        }
        className="select select-bordered select-sm max-w-xs"
      >
        <option value="forest">forest</option>
        <option value="cupcake">cupcake</option>
        <option value="bumblebee">bumblebee</option>
      </select>
    </div>
  );
}
