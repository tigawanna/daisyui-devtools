/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import { GenericColorCard, GenericThemeCurveCard } from "./GenericThemeCard";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";


export default function DaisyUIThemeEditor({
  theme,
  updateTheme,
  updateLockedTheme
}: {
  theme: DaisyUIThemeSearchParmsTypes;
  updateTheme: (items_key: string, new_items: string) => void;
  updateLockedTheme: (items_key: string, is_locked: boolean) => void;
}) {
  // block
  const primaryTheme = useMemo(() => theme?.["primary"], [theme?.["primary"]]);
  const primaryContentTheme = useMemo(
    () => theme?.["primary-content"],
    [theme?.["primary-content"]],
  );
  const secondaryTheme = useMemo(
    () => theme?.["secondary"],
    [theme?.["secondary"]],
  );
  const secondaryContentTheme = useMemo(
    () => theme?.["secondary-content"],
    [theme?.["secondary-content"]],
  );
  const accentTheme = useMemo(() => theme?.["accent"], [theme?.["accent"]]);
  const accentContentTheme = useMemo(
    () => theme?.["accent-content"],
    [theme?.["accent-content"]],
  );
  const successTheme = useMemo(() => theme?.["success"], [theme?.["success"]]);
  const successContentTheme = useMemo(
    () => theme?.["success-content"],
    [theme?.["success-content"]],
  );
  const neutralTheme = useMemo(() => theme?.["neutral"], [theme?.["neutral"]]);
  const neutralContentTheme = useMemo(
    () => theme?.["neutral-content"],
    [theme?.["neutral-content"]],
  );
  const base100Theme = useMemo(
    () => theme?.["base-100"],
    [theme?.["base-100"]],
  );
  const base200Theme = useMemo(
    () => theme?.["base-200"],
    [theme?.["base-200"]],
  );
  const base300Theme = useMemo(
    () => theme?.["base-300"],
    [theme?.["base-300"]],
  );
  const baseContentTheme = useMemo(
    () => theme?.["base-content"],
    [theme?.["base-content"]],
  );
  const infoTheme = useMemo(() => theme?.["info"], [theme?.["info"]]);
  const infoContentTheme = useMemo(
    () => theme?.["info-content"],
    [theme?.["info-content"]],
  );
  const warningTheme = useMemo(() => theme?.["warning"], [theme?.["warning"]]);
  const warningContentTheme = useMemo(
    () => theme?.["warning-content"],
    [theme?.["warning-content"]],
  );
  const errorTheme = useMemo(() => theme?.["error"], [theme?.["error"]]);
  const errorContentTheme = useMemo(
    () => theme?.["error-content"],
    [theme?.["error-content"]],
  );

  // endblock

  //  tab
  const tabRadius = useMemo(
    () => theme?.["--tab-radius"],
    [theme?.["--tab-radius"]],
  );
  const tabBorder = useMemo(
    () => theme?.["--tab-border"],
    [theme?.["--tab-border"]],
  );
  //  btn
  const btnFocusState = useMemo(
    () => theme?.["--btn-focus-scale"],
    [theme?.["--btn-focus-scale"]],
  );
  const borderBtn = useMemo(
    () => theme?.["--border-btn"],
    [theme?.["--border-btn"]],
  );
  //  rpunded
  const roundedBox = useMemo(
    () => theme?.["--rounded-box"],
    [theme?.["--rounded-box"]],
  );
  const roundedBadge = useMemo(
    () => theme?.["--rounded-badge"],
    [theme?.["--rounded-badge"]],
  );
  const roundedBtn = useMemo(
    () => theme?.["--rounded-btn"],
    [theme?.["--rounded-btn"]],
  );
  //  animation
  const animationBtn = useMemo(
    () => theme?.["--animation-btn"],
    [theme?.["--animation-btn"]],
  );
  const animationInput = useMemo(
    () => theme?.["--animation-input"],
    [theme?.["--animation-input"]],
  );


  const updateThemeCallback = useCallback(
    (items_key: string, new_items: string) => {
      updateTheme(items_key, new_items);
    },
    [updateTheme],
  );
  const updateLockedThemeCallback = useCallback(
    (items_key: string, is_locked: boolean) => {
      updateLockedTheme(items_key, is_locked);
    },
    [updateLockedTheme],
  );



  return (

    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-[5%]">
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 p-2">
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Primary</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="primary"
            theme={primaryTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="primary-content"
            theme={primaryContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Secondary</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="secondary"
            theme={secondaryTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="secondary-content"
            theme={secondaryContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Accent</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="accent"
            theme={accentTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="accent-content"
            theme={accentContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Neutral</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="neutral"
            theme={neutralTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="neutral-content"
            theme={neutralContentTheme}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-2">
        <h3>Base</h3>
        <div className="flex w-full flex-wrap items-center justify-center gap-2 p-2">
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            className="w-[48%] @md:w-[30%] @lg:w-[24%]"
            theme_key="base-100"
            theme={base100Theme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-200"
            theme={base200Theme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-300"
            theme={base300Theme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            className="w-[48%] gap-1 @md:w-[23%] @lg:w-[40%]"
            theme_key="base-content"
            theme={baseContentTheme}
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 p-2">
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Info</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="info"
            theme={infoTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="info-content"
            theme={infoContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Success</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="success"
            theme={successTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="success-content"
            theme={successContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Warning</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="warning"
            theme={warningTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="warning-content"
            theme={warningContentTheme}
          />
        </div>
        <div className="flex h-full w-[48%] flex-col items-center justify-center gap-1 @md:w-[23%] @lg:w-[40%]">
          <h3>Error</h3>
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="error"
            theme={errorTheme}
          />
          <GenericColorCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="error-content"
            theme={errorContentTheme}
          />
        </div>
      </div>

      <div className="flex h-full w-full flex-wrap items-center justify-center gap-2 bg-base-200 p-2 @container">
        {/* {curves && (
          <DaisyUIBaseCurvesThemeCard
            theme_group={curves}
          />
        )} */}
        {/* animation */}
        {animationBtn && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--animation-btn"
            row={animationBtn}
          />
        )}
        {animationInput && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--animation-input"
            row={animationInput}
          />
        )}
        {/* rounded */}
        {roundedBox && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--rounded-box"
            row={roundedBox}
          />
        )}
        {roundedBtn && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--rounded-btn"
            row={roundedBtn}
          />
        )}
        {roundedBadge && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--rounded-badge"
            row={roundedBadge}
          />
        )}
        {/* btn */}
        {borderBtn && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--border-btn"
            row={borderBtn}
          />
        )}
        {btnFocusState && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--btn-focus-scale"
            row={btnFocusState}
          />
        )}
        {tabBorder && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--tab-border"
            row={tabBorder}
          />
        )}
        {tabRadius && (
          <GenericThemeCurveCard
            updateTheme={updateThemeCallback}
            updateLockedTheme={updateLockedThemeCallback}
            theme_key="--tab-radius"
            row={tabRadius}
          />
        )}
      </div>
    </div>


  );
}
