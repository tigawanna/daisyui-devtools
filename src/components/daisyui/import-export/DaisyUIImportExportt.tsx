import { useDrawersUIImportExportStore } from '../utils/store.js';
import {
  ExportThemeDaisyUiDrawer,
  ImportThemeDaisyUiDrawer,
} from './ThemeDrawers.js';



interface DaisyUIImportExportTriggersrops {
}

export function DaisyUIImportExportTriggers({
}: DaisyUIImportExportTriggersrops) {
const {setExportDrawerOpen} = useDrawersUIImportExportStore();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <label
        onClick={() => setExportDrawerOpen((prev) => !prev)}
        htmlFor="export-theme-drawer"
        className="btn btn-sm border-2 border-primary"
      >
        export
        <svg
          className="size-5 text-primary "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1920"
        >
          <path
            fillRule="evenodd"
            d="M0 1016.081l409.186 409.073 79.85-79.736-272.867-272.979h1136.415V959.611H216.169l272.866-272.866-79.85-79.85L0 1016.082zM1465.592 305.32l315.445 315.445h-315.445V305.32zm402.184 242.372l-329.224-329.11C1507.042 187.07 1463.334 169 1418.835 169h-743.83v677.647h112.94V281.941h564.706v451.765h451.765v903.53H787.946V1185.47H675.003v564.705h1242.353V667.522c0-44.498-18.07-88.207-49.581-119.83z"
          ></path>
        </svg>
      </label>
    </div>
  );
}


interface DaisyUIImportExportDrawarsProps {
  customThemeName?: string;
}

export function DaisyUIImportExportDrawars({customThemeName="customTheme"}:DaisyUIImportExportDrawarsProps){
  const {
    setExportDrawerOpen,
    setImportDrawerOpen,
    exportDrawerOpen,
    importDrawerOpen,
  } = useDrawersUIImportExportStore();
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    {/* export theme drawer */}
    {exportDrawerOpen && (
      <ExportThemeDaisyUiDrawer
        customThemeName={customThemeName}
        setOpen={setExportDrawerOpen}
      />
    )}
    {/* import theme drawer */}
    {importDrawerOpen && (
      <ImportThemeDaisyUiDrawer setOpen={setImportDrawerOpen} />
    )}
  </div>
);
}
