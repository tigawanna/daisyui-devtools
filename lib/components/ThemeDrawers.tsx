
import { X } from "lucide-react";
import { ExportTheme } from "./ExportTheme";
import { ImportTheme } from "./ImprtTheme";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";

interface ExportThemeDaisyUiDrawerProps {
  searchParams: DaisyUIThemeSearchParmsTypes;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ExportThemeDaisyUiDrawer({
  searchParams,
  open,setOpen
}: ExportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-30">
      <input id="export-theme-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side max-w-[95%]">
        <label
          onClick={() => setOpen(false)}
          htmlFor="export-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[70%] bg-base-200 text-base-content md:w-[60%]">
          <label
            onClick={() => setOpen(false)}
            htmlFor="export-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4">
            <X className="size-8" />
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
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ImportThemeDaisyUiDrawer({
  searchParams,
  updateWholeTheme,
  open,setOpen
}: ImportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-30">
      <input id="import-theme-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          onClick={() => setOpen(false)}
          htmlFor="import-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[70%] bg-base-200 text-base-content md:w-[40%]">
          <label
            onClick={() => setOpen(false)}
            htmlFor="import-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4">
            <X className="size-8" />
          </label>
          {/* Sidebar content here */}
          <ImportTheme theme={searchParams} updateWholeTheme={updateWholeTheme} />
        </ul>
      </div>
    </div>
  );
}
