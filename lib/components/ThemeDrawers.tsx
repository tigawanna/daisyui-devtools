
import { ExportTheme } from "./ExportTheme";
import { ImportTheme } from "./ImprtTheme";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";

interface ExportThemeDaisyUiDrawerProps {
  searchParams: DaisyUIThemeSearchParmsTypes;
}

export function ExportThemeDaisyUiDrawer({
  searchParams,
}: ExportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-30">
      <input id="export-theme-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="export-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[60%]">
          <label
            htmlFor="export-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4">
            🗙
          </label>
          {/* Sidebar content here */}
          <ExportTheme theme={searchParams} />
        </ul>
      </div>
    </div>
  );
}
interface ImportThemeDaisyUiDrawerProps {
  searchParams: DaisyUIThemeSearchParmsTypes;
  updateWholeTheme: (theme: Record<string, any>) => void;
}

export function ImportThemeDaisyUiDrawer({
  searchParams,
  updateWholeTheme,
}: ImportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-30">
      <input id="import-theme-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="import-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
          <label
            htmlFor="import-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4">
            🗙
          </label>
          {/* Sidebar content here */}
          <ImportTheme theme={searchParams} updateWholeTheme={updateWholeTheme} />
        </ul>
      </div>
    </div>
  );
}
