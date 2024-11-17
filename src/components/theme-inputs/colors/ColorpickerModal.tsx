import { twMerge } from 'tailwind-merge';
import { useCallback, useEffect, useRef } from 'react';
import { HslStringColorPicker } from 'react-colorful';
import { ColorSwatches, OneColorSwatch } from './CustomColorSwatch.js';
import { getHueFromHSL } from '../../../utils/color-converters.js';




interface ColorPickerModalProps {
  name: string;
  className?: string;
  children: React.ReactNode;
  bgColor: string;
  hslString: string;
  handleThemeChange:((hslColor:string)=>void)
}

export function ColorPickerModal({
  name,
  children,
  bgColor,
  hslString,
  className,
  handleThemeChange,
}: ColorPickerModalProps) {
  // const { hsl_string } = oklchToHSL(currentTheme?.value);
  const handleThemeChangeCallback = useCallback((color: string) => {
    // theme gets sent in hsl and will be converted to oklch before saving
    handleThemeChange(color);
  }, []);
  // to handle the daiyui dialog
  const modalRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const current_modal = document.getElementById(
      `my_color_picker_modal-${name}`,
    ) as HTMLDialogElement;
    modalRef.current = current_modal;
  }, [name]);
  // const hue = chroma(hsl_string).hsv()[0];
  return (
    <div className={twMerge('w-full items-center', className)}>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        className=""
        ref={modalRef as unknown as React.LegacyRef<HTMLDivElement> | undefined}
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        {children}
      </div>
      <dialog id={`my_color_picker_modal-${name}`} className="modal w-full">
        <div
          className={twMerge(
            'modal-box min-w-fit flex rounded-lg justify-center items-center',
            bgColor,
          )}
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-px w-full">
              <div className="w-full">
                <HslStringColorPicker
                  color={hslString}
                  onChange={(color) => {
                    // theme gets sent in hsl and will be converted to oklch before saving
                    handleThemeChangeCallback(color);
                  }}
                />
              </div>
              <div className="flex gap-px w-full">
                <ColorSwatches
                  onColorChange={(color) => {
                    // theme gets sent in hsl and will be converted to oklch before saving
                    handleThemeChangeCallback(color.hsl_string);
                  }}
                />
              </div>
            </div>

            <OneColorSwatch
              hue={getHueFromHSL(hslString)}
              shades={[10, 30, 50, 70, 80]}
              onColorChange={(color) =>
                handleThemeChangeCallback(color.hsl_string)
              }
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
