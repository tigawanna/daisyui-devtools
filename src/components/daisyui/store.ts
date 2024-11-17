import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { DaisyUIThemeObjectType } from './utils/daisyui-theme-types.js';
import { loadDaisyUIThemeFromCss } from './utils/load-themes.js';


interface DaisyUIThemeStoreType {
  theme: DaisyUIThemeObjectType;
  setAllThemes: (state: DaisyUIThemeObjectType) => void;
  setTheme: (
    updater: (state: DaisyUIThemeObjectType) => DaisyUIThemeObjectType,
  ) => void;
}

export const useDaisyUIThemeStore = create<DaisyUIThemeStoreType>()(
  devtools(
    persist(
      (set) => ({
          theme: loadDaisyUIThemeFromCss(),
          setTheme: (updater) => set((state) => ({ theme: updater(state.theme) })),
          setAllThemes: (state) => set({ theme: state }),
      }),
      {
        name: 'daisyui-theme-storage',
      },
    ),
  ),
);

export interface DaisyUIImportExportStoreType {
  exportDrawerOpen: boolean;
  setExportDrawerOpen: (state: boolean | ((prev: boolean) => boolean)) => void;
  importDrawerOpen: boolean;
  setImportDrawerOpen: (state: boolean | ((prev: boolean) => boolean)) => void;
  closeAll:() => void;
}



export const useDrawersUIImportExportStore = create<DaisyUIImportExportStoreType>()(
  devtools(
    (set) => ({
      exportDrawerOpen: false,
      importDrawerOpen: false,
      setExportDrawerOpen: (state) => {
        const newValue = typeof state === 'boolean' ? state : state(!set);
        set({ exportDrawerOpen: newValue,importDrawerOpen: false })
      },
      setImportDrawerOpen: (state) => {
        const newValue = typeof state === 'boolean' ? state : state(!set);
        set({ importDrawerOpen: newValue, exportDrawerOpen: false })
      },
      closeAll:() => set({ exportDrawerOpen: false, importDrawerOpen: false }),
    }),
  ),
);
