import { useCallback, useTransition } from 'react';
import { Unlock, Lock } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { GenericThemeType } from '../../types.js';

interface ThemeCurvesCardProps {
  name: string;
  currentTheme: GenericThemeType;
  handleThemeChange: (hslColor: string) => void;
  lockTheme: (name: string) => void;
  curvesDefault:Record<string,{defalut: string;placeholder: string}>;
}


export function ThemeCurvesCard({ name, currentTheme,handleThemeChange,lockTheme,curvesDefault }: ThemeCurvesCardProps) {
  const handleLockClick = useCallback(() => lockTheme(name), [name]);
  const updateChages = useCallback(
    (new_items: string) =>
      handleThemeChange(new_items),
    [name],
  );
 const currentThemeDefault = curvesDefault[name];
 const currentInput ={
  value: currentTheme.value,
  placeholder: currentThemeDefault?.placeholder
 }
  // const [input, setInput] = useState(currentTheme?.value);
  const [, startTransition] = useTransition();
  const handleUpdateCurves = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // setInput(e.target.value);
      startTransition(() => {
        updateChages(e.target.value);
      });
    },
    [updateChages],
  );
  return (
    <div className="flex w-full  flex-col rounded-lg relative">
      <h2 className="text-sm font-bold">{name.replace(/_/g, ' ')}</h2>
      <div className="flex gap-1">
        <input
          className="input input-sm flex w-full flex-col justify-center rounded-lg"
          value={currentInput.value}
          placeholder={currentInput.placeholder}
          onChange={handleUpdateCurves}
        />
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
    </div>
  );
}
