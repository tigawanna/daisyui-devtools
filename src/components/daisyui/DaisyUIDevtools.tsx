import { useEffect } from 'react';
import {
  loadDaisyUIThemeFromState,
  mutationObserver,
} from './utils/load-themes.js';


import { twMerge } from 'tailwind-merge';
import { DaisyUIThemeList } from './DaisyUIThemeList.js';
import { useDaisyUIThemeStore, useDrawersUIImportExportStore } from './utils/store.js';
import type { DaisyUIThemeObjectType } from './utils/daisyui-theme-types.js';

interface DaisyUIDevtoolsProps {
  drawerZIndex?: `z-${number}`;
  drawerClassName?: string;
  saveTheme?: (themeObject: DaisyUIThemeObjectType,themeString: string) => void;
}

export function DaisyUIDevtools({drawerClassName,drawerZIndex,saveTheme}: DaisyUIDevtoolsProps) {
  const { setAllThemes, theme } = useDaisyUIThemeStore();
  const closeAllDrawers = useDrawersUIImportExportStore((state)=>state.closeAll);
  mutationObserver()  
  useEffect(() => {
    const themes = loadDaisyUIThemeFromState(theme);
    setAllThemes(themes);
  }, []);

  return (
    <div className="drawer">
      <input
        id="daisyui-theme-editor-drawer"
        type="checkbox"
        className="drawer-toggle"
        onChange={(e)=>{
          if (!e.target.checked) {
            closeAllDrawers();
          }
        }}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="daisyui-theme-editor-drawer"
          className="btn btn-sm btn-primary drawer-button"
        >
          Edit
        </label>
      </div>
      <div className={twMerge('drawer-side z-40', drawerZIndex)}>
        <label
          htmlFor="daisyui-theme-editor-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul
          className={twMerge(
            'menu  text-base-content @container min-h-full sm:w-[80%] md:w-[50%] lg:w-[40%] bg-base-200 p-4 ',
            drawerClassName,
          )}
        >
          {/* <DaisyUIImportExport customThemeName={customThemeName}/> */}
          <DaisyUIThemeList />
        </ul>
      </div>
    </div>
  );
}
