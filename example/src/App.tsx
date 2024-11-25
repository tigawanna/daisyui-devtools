import { useEffect } from "react";
import { themeChange } from "theme-change";
import { MainNavbar } from "./components/navigation/MainNavbar";
import { DaisyUIDevtools } from "daisyui-devtools";
import { ViewHSLColors } from "./components/HSLviewer";

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
        drawerZIndex={"z-20"} // optional : z value for drawer
        saveTheme={(themeObj, themeStr) => {
          console.log(themeObj, themeStr);
          // call fs.writeFile or equivalent for your framework
        }} //optional
      />
      {/* <ViewHSLColors/> */}
      <div className="m-[5%] flex flex-col items-center justify-center gap-5 rounded-lg bg-base-200 p-[2%]">
        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-primary p-2 text-primary-content">
            primary
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-primary-content p-2 text-primary">
            primary-content
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-secondary p-2 text-secondary-content">
            secondary
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-secondary-content p-2 text-secondary">
            secondary-content
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-accent p-2 text-accent-content">
            accent
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-accent-content p-2 text-accent">
            accent-content
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-neutral p-2 text-neutral-content">
            neutral
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-neutral-content p-2 text-neutral">
            neutral-content
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-base-100 p-2 text-base-content">
            base-100
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-base-200 p-2 text-base-content">
            base-200
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-base-300 p-2 text-base-content">
            base-300
          </div>
          <div className="flex h-20 w-fit min-w-[20%] items-center justify-center rounded-lg bg-base-content p-2 text-base-100">
            base-content
          </div>
        </div>
      </div>
    </div>
  );
}
