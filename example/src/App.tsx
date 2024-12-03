import { useEffect } from "react";
import { themeChange } from "theme-change";
import { MainNavbar } from "./components/navigation/MainNavbar";
import { DaisyUIDevtools,PreviewColors } from "daisyui-devtools";


export function App() {
  useEffect(() => {
    document.documentElement.dataset.style = "vertical";
    themeChange(false);
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col gap-2">
      <MainNavbar />
      <DaisyUIDevtools
        drawerClassName="p-1" // optional
        drawaerTriggerClassName="fixed top-20 left-5" //optional : default is fixed top-5 left-5
        drawerZIndex={"z-30"} // optional : z value for drawer
        saveTheme={(themeObj, themeStr) => {
          // console.log(themeObj, themeStr);
          // call fs.writeFile or equivalent for your framework
        }} //optional
      />
        <PreviewColors
        />
    </div>
  );
}
