/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate, useSearch,useLocation } from "@tanstack/react-router";

import { DaisyUIThemeSearchParmsTypes } from "./schema";
import { defaultThemes } from "./theme-default-values";



export function useDaisyUITheme() {

  return {
    searchParams: useDaisyUIThemeStore((state) => state.daisyUItheme),
    updateTheme: useDaisyUIThemeStore((state) => state.updateTheme),
    updateLockedTheme: useDaisyUIThemeStore((state) => state.updateLockedTheme),
    updateThemeName: useDaisyUIThemeStore((state) => state.updateThemeName),
    updateWholeTheme: useDaisyUIThemeStore((state) => state.updateWholeTheme),
  };
}

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DaisyUiDevtoolsThemeState {
  daisyUItheme: DaisyUIThemeSearchParmsTypes;
  updateTheme(items_key: string, new_items: string): void;
  updateLockedTheme(items_key: string, is_locked: boolean): void;
  updateThemeName: (theme_name: string) => void;
  updateWholeTheme: (theme: Record<string, any>) => void;
}

const useDaisyUIThemeStore = create<DaisyUiDevtoolsThemeState>()(
  devtools(
    persist(
      (set) => ({
        daisyUItheme: defaultThemes({}),
        updateTheme(items_key: string, new_items: string) {
          set((state) => {
            return {
              daisyUItheme: {
                ...state.daisyUItheme,
                [items_key]: {
                  ...state.daisyUItheme[
                    items_key as Exclude<keyof typeof state.daisyUItheme, "theme_name">
                  ],
                  value: new_items,
                },
              },
            };
          });
        },
        updateLockedTheme(items_key: string, is_locked: boolean) {
          set((state) => {
            return {
              daisyUItheme: {
                ...state.daisyUItheme,
                [items_key]: {
                  ...state.daisyUItheme[
                    items_key as Exclude<keyof typeof state.daisyUItheme, "theme_name">
                  ],
                  locked: is_locked,
                },
              },
            };
          });
        },
        updateThemeName(theme_name: string) {
          set((state) => {
            return {
              daisyUItheme: {
                ...state.daisyUItheme,
                "--theme-name": {
                  value: theme_name,
                  name: "theme-name",
                  variable: "data-theme",
                },
              },
            };
          });
        },
        updateWholeTheme(theme: Record<string, any>) {
          set((state) => {
            return {
              daisyUItheme: {
                ...state.daisyUItheme,
                ...theme,
              },
            };
          });
        },
      }),
      {
        name: "daisyui-devtoools-theme",

      }
    )
  )
);
