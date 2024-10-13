/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useTransition, memo, useMemo, useCallback } from "react";
import {
  DaisyUIColorSearchParmsTypes,
  DaisyUICurvesSearchParmsTypes,
} from "./utils/schema";
import { twMerge } from "tailwind-merge";
import { ColorpickerModal } from "./ColorpickerModal";
import {
  BaseDaisyUiThemeKeys,
  getTailwindBg,
} from "./utils/daisyui-css-variables-helpers";
import { GenericThemeState } from "./utils/types";
import { Unlock,Lock } from "lucide-react";



export type BGandContentObject<T extends BaseDaisyUiThemeKeys> = {
  [key in T]: GenericThemeState;
};

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;

interface GenericColorCardProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  // theme: DaisyUIThemeSearchParmsTypes["accent"];
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  className?: string;
  updateTheme: (items_key: string, new_items: string) => void;
  updateLockedTheme: (items_key: string, is_locked: boolean) => void;
}

export const GenericColorCard = memo(
  <T extends BaseDaisyUiThemeKeysWithoutBase>({
    theme_key,
    theme,
    className,
    updateTheme,
    updateLockedTheme
  }: GenericColorCardProps<T>) => {


    const { bg, content } = useMemo(
      () => getTailwindBg(theme?.name),
      [theme?.name],
    );
    const handleLockClick = useCallback(
      () => updateLockedTheme(theme_key, true),
      [theme_key, updateLockedTheme],
    );
    const handleUnlockClick = useCallback(
      () => updateLockedTheme(theme_key, false),
      [theme_key, updateLockedTheme],
    );
    const updateThemeCallback = useCallback((items_key: string, new_items: string) => {
        updateTheme(items_key, new_items);
      },
      [updateTheme]
      
    )

    return (
      <div
        className={twMerge(
          "relative flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 hover:scale-110 hover:animate-in",
          className
        )}>
        <div className={"flex h-full w-full flex-col items-center justify-center gap-2"}>
          <ColorpickerModal
            updateTheme={updateThemeCallback}
            key={theme_key}
            theme={theme}
            theme_key={theme_key}
            bg_color={bg}>
            <div
              className={twMerge(
                "flex w-full flex-col items-center justify-between gap-0.5 rounded-lg p-1 text-sm",
                bg,
                content
              )}>
              <div className="line-clamp-1 text-sm">{theme?.name}</div>
              <div className="line-clamp-1 text-[9px]">{theme?.value}</div>
            </div>
          </ColorpickerModal>
        </div>
        <div
          className={twMerge(
            `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`
          )}>
          {theme?.locked ? (
            <div className="rounded-lg bg-error-content p-1">
              <Lock className="size-3 text-error" onClick={handleUnlockClick} />
            </div>
          ) : (
            <div className="rounded-lg bg-error-content p-1">
              <Unlock
                className="size-3 bg-success-content text-success"
                onClick={handleLockClick}
              />
            </div>
          )}
        </div>
      </div>
    );
  },
);

type ThemeCurves = DaisyUICurvesSearchParmsTypes;
type ThemeCurveKeys = ThemeCurves extends undefined ? never : keyof ThemeCurves;



interface GenericThemeCurveCardProps {
  theme_key: ThemeCurveKeys;
  row: GenericThemeState;
  updateTheme: (items_key: string, new_items: string) => void;
  updateLockedTheme: (items_key: string, is_locked: boolean) => void;
}

export const GenericThemeCurveCard = memo(
  ({ theme_key, row,updateTheme,updateLockedTheme }: GenericThemeCurveCardProps) => {


    const updateChages = useCallback(
      (new_items: string) => updateTheme(theme_key, new_items),
      [updateTheme, theme_key],
    );

    const handleLockClick = useCallback(
      () => updateLockedTheme(theme_key, true),
      [theme_key, updateLockedTheme],
    );
    const handleUnlockClick = useCallback(
      () => updateLockedTheme(theme_key, false),
      [theme_key, updateLockedTheme],
    );

    const [input, setInput] = useState(row?.value);
    const [, startTransition] = useTransition();
    const handleUpdateCurves = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        startTransition(() => {
          updateChages(e.target.value);
        });
      },
      [updateChages],
    );
    return (
      <div className="flex w-[48%] flex-col rounded-lg @md:w-1/3 @lg:w-[24%]">
        <h2 className="text-sm font-bold">{theme_key.replace(/_/g, " ")}</h2>
        <div className="flex gap-1">
          <input
            className="input input-sm flex w-full flex-col justify-center rounded-lg"
            value={input}
            onChange={handleUpdateCurves}
          />
          <div
            className={twMerge(
              `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`
            )}>
            {row?.locked ? (
              <div className="rounded-lg bg-error-content p-1">
                <Lock className="size-3 text-error" onClick={handleUnlockClick} />
              </div>
            ) : (
              <div className="rounded-lg bg-error-content p-1">
                <Unlock
                  className="size-3 bg-success-content text-success"
                  onClick={handleLockClick}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    );
  },
);
