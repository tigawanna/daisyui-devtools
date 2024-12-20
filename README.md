# daisyui devtools

Simple embedabble color picker for your daisyui css variables

installation

```sh
npm install daisyui-devtools
```

usage

```tsx
function App() {
  return (
    <div>
      Main cotent...
      <DaisyUIDevtools />
    </div>
  );
}
```

and import the css
```css
/* import this before importing your app's css */
import "daisyui-devtools/style.css"
import "./styles.css"

```
colors list with color picker modal

![color-picker]([image.png](https://github.com/tigawanna/daisyui-devtools/blob/main/assets/color-picker.png))

export theme as daisyui theme config
>[!NOTE]
> This config is slated to change toa  pure css one in daisyui 5

![export-theme]([image-1.png](https://github.com/tigawanna/daisyui-devtools/blob/main/assets/export-themes.png))


props

```tsx
      <DaisyUIDevtools
        drawerClassName="p-1" // optional
        drawaerTriggerClassName="bottom-[10%] left-[50%]" //optional : default is fixed top-5 left-5
        drawerZIndex={"z-20"} // optional : z value for drawer
        saveTheme={(themeObj, themeStr) => {
          console.log(themeObj, themeStr);
          // call fs.writeFile or equivalent for your framework
        }} //optional
      />
```

you caan wrap it ina  lazy load to keep it out of your final bundle

```tsx
import React from "react";

export const DaisyUIDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("daisyui-devtools").then((res) => ({
          default: res.DaisyUIDevtools,
          // For Embedded Mode
          // default: res.DaisyUIThemeList
        })),
      );
```

or even embed it in your app
```tsx
import React from "react";
import { DaisyUIThemeList } from "daisyui-devtools";

function ThemeRoute() {
  return (
    <div>
  // a page or section in your settigs page
      <DaisyUIThemeList />
    </div>
  );
}
```