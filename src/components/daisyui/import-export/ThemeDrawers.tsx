import { X } from 'lucide-react';
import { ExportTheme } from './ExportTheme.js';
import { ImportTheme } from './ImprtTheme.js';

interface ExportThemeDaisyUiDrawerProps {
  customThemeName: string;
  setOpen: (open: boolean) => void;
}

export function ExportThemeDaisyUiDrawer({
  customThemeName,
  setOpen,
}: ExportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-30">
      <input
        id="export-theme-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side max-w-[95%]">
        <label
          onClick={() => setOpen(false)}
          htmlFor="export-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content ">
          <label
            onClick={() => setOpen(false)}
            htmlFor="export-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4"
          >
            <X className="size-8" />
          </label>
          {/* Sidebar content here */}
          <ExportTheme customThemeName={customThemeName} />
        </ul>
      </div>
    </div>
  );
}
interface ImportThemeDaisyUiDrawerProps {
  setOpen: (open: boolean) => void;
}

export function ImportThemeDaisyUiDrawer({
  setOpen,
}: ImportThemeDaisyUiDrawerProps) {
  return (
    <div className="drawer drawer-end sticky top-[12%] z-50">
      <input
        id="import-theme-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          onClick={() => setOpen(false)}
          htmlFor="import-theme-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu min-h-full w-[90%] bg-base-200 text-base-content md:w-[40%]">
          <label
            onClick={() => setOpen(false)}
            htmlFor="import-theme-drawer"
            aria-label="close sidebar"
            className="drawer-overlay sticky top-4"
          >
            <X className="size-8" />
          </label>
          {/* Sidebar content here */}
          <ImportTheme />
        </ul>
      </div>
    </div>
  );
}
