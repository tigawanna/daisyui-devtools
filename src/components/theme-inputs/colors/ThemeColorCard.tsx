import { twMerge } from 'tailwind-merge';
import { ColorPickerModal } from './ColorpickerModal.js';
import { useCallback } from 'react';
import { Unlock, Lock } from 'lucide-react';
import { getTailwindBg } from '../../daisyui/utils/tailwind-helpers.js';
import type { GenericThemeType } from '../../types.js';

interface ThemeColorCardProps {
  name: string;
  currentTheme: GenericThemeType;
  handleThemeChange: (hslColor: string) => void;
  hslString: string;
  lockTheme: (name: string) => void;
}

export function ThemeColorCard({ currentTheme, name,handleThemeChange,hslString,lockTheme }: ThemeColorCardProps) {
  const { bg, content } = getTailwindBg(name as any);
  const handleLockClick = useCallback(() => lockTheme(name), [name]);
  return (
    <div
      className={twMerge(
        'relative flex h-full w-full rounded-xl cursor-pointer flex-wrap items-center justify-center gap-1  ',
        // className,
      )}
    >
      <ColorPickerModal
        handleThemeChange={handleThemeChange}
        bgColor={bg}
        name={name}
        hslString={hslString}
        className="w-full "
      >
        <button
          className={twMerge(
            'flex w-full flex-col items-center rounded-lg justify-between  gap-0.5  p-2 ',
            bg,
            content,
          )}
        >
          <span className="">{name}</span>
          {currentTheme.locked}
        </button>
      </ColorPickerModal>
      <div
        className={twMerge(
          `absolute right-[1%] top-[5%] flex flex-col items-center justify-center gap-2`,
        )}
      >
        {currentTheme?.locked ? (
          <div className="rounded-lg bg-error-content p-1">
            <Lock className="size-3 text-error" onClick={handleLockClick} />
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
}
