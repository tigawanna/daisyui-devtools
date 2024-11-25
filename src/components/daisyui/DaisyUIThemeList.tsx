import { RotateCcw } from 'lucide-react';
import { unsetAllCssVariables } from './utils/load-themes.js';

import {
  daisyui_theme_names,
  type DaisyUIThemeColorNames,
  type DaisyUIThemeObjectType,
} from './utils/daisyui-theme-types.js';
import { ThemeColorCard } from '../theme-inputs/colors/ThemeColorCard.js';
import { ThemeCurvesCard } from '../theme-inputs/curves/ThemeCurvesCard.js';
import {
  DaisyUIImportExportDrawars,
  DaisyUIImportExportTriggers,
} from './import-export/DaisyUIImportExportt.js';
import { handleThemeChange, lockTheme } from './utils/theme-updates.js';
import { daisyUICurvesDefault } from './utils/defaults.js';
import { oklchToHSL } from '../../utils/color-converters.js';
import { useDaisyUIThemeStore } from './utils/store.js';
import { exportThemeArray } from './import-export/utils.js';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

interface DaisyUIThemeListProps {
  listContainerClassName?: string;
  saveTheme?: (
    themeObject: DaisyUIThemeObjectType,
    themeString: string,
  ) => void;
}

export function DaisyUIThemeList({ saveTheme,listContainerClassName }: DaisyUIThemeListProps) {
  const { theme } = useDaisyUIThemeStore();
  const saveThemCallback = useCallback(
    (currentTheme: DaisyUIThemeObjectType) => {
      if (saveTheme) {
        saveTheme(currentTheme, exportThemeArray(currentTheme, true).join(',\n'));
      }
    },
    [saveTheme, theme],
  );
  return (
    <div className="w-full h-full flex flex-col gap-3 ">
      <div className="w-full flex flex-wrap justify-center gap-2">
        {theme && (
          <span className="w-full text-2xl font-bold text-center p-1">
            {theme['theme-name']?.value}
          </span>
        )}
        <DaisyUIImportExportTriggers />
        {saveTheme && (
          <button
            className="btn btn-sm border-2 border-primary"
            onClick={() => saveThemCallback(theme)}
          >
            reset
            <RotateCcw className="size-5 text-primary hover:fill-accent" />
          </button>
        )}
        <button
          className="btn btn-sm border-2 border-primary"
          onClick={() => unsetAllCssVariables()}
        >
          reset
          <RotateCcw className="size-5 text-primary hover:fill-accent" />
        </button>
      </div>
      <DaisyUIImportExportDrawars />
      <div className={twMerge("w-full h-full grid-cols-1  p-2 grid @xs:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4  gap-2  items-center justify-center ",listContainerClassName)}>
        {daisyui_theme_names.map((name) => {
          const currentTheme = theme[name];
          if (currentTheme && currentTheme?.type === 'color') {
            return (
              <ThemeColorCard
                key={name}
                currentTheme={currentTheme}
                lockTheme={(name) => lockTheme(name)}
                hslString={oklchToHSL(currentTheme?.value).hsl_string}
                name={name as DaisyUIThemeColorNames[number]}
                handleThemeChange={(color) =>
                  handleThemeChange({ ...currentTheme, value: color })
                }
              />
            );
          }
          if (currentTheme && currentTheme?.type === 'curve') {
            return (
              <ThemeCurvesCard
                key={name}
                currentTheme={currentTheme}
                name={name}
                curvesDefault={daisyUICurvesDefault}
                handleThemeChange={(curve) =>
                  handleThemeChange({ ...currentTheme, value: curve })
                }
                lockTheme={(name) => lockTheme(name)}
              />
            );
          }
          // return currentTheme?.value
        })}
      </div>
    </div>
  );
}
