import { twMerge } from "tailwind-merge";
import { ReactColorPicker } from "./ReactColorPicker";
import { DaisyUIColorSearchParmsTypes } from "./utils/schema";
import { memo, useCallback, useEffect, useRef } from "react";
import { updateCSSVariable } from "./utils/daisyui-css-variables-helpers";

type BaseDaisyUiThemeKeysWithoutBase = keyof DaisyUIColorSearchParmsTypes;
interface ColorpickerModalProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
  theme_key: T;
  theme: DaisyUIColorSearchParmsTypes[T];
  bg_color: string;
  children: React.ReactNode;
  className?: string;
  updateTheme: (items_key: string, new_items: string) => void;
}

export const ColorpickerModal = memo(
  <T extends BaseDaisyUiThemeKeysWithoutBase>({
    children,
    bg_color,
    theme_key,
    theme,
    className = "",
    updateTheme,
  }: ColorpickerModalProps<T>) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
      const current_modal = document.getElementById(
        `my_color_picker_modal-${theme_key}`
      ) as HTMLDialogElement;
      modalRef.current = current_modal;
    }, [theme_key]);

    const updateThemeCallback = useCallback(
      (items_key: string, new_items: string) => {
        updateTheme(items_key, new_items);
        if (theme?.variable) {
          updateCSSVariable(theme?.variable ?? "", new_items);
        }
      },
      [updateTheme]
    );
    if (!theme) return null;
    return (
      <div className={twMerge("w-full items-center", className)}>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div
          className=""
          ref={modalRef as unknown as React.LegacyRef<HTMLDivElement> | undefined}
          onClick={() => {
            modalRef.current?.showModal();
          }}>
          {children}
        </div>
        <dialog id={`my_color_picker_modal-${theme_key}`} className="modal w-full">
          <div className={twMerge("modal-box min-w-fit", bg_color)}>
            <ReactColorPicker
              themeName={theme.name}
              oklchString={theme?.value}
              colorKey={theme_key}
              updateTheme={updateThemeCallback}
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    );
  }
);
