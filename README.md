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
        drawaerTriggerClassName="fixed top-20 left-5" //optional : default is fixed top-5 left-5
        drawerZIndex={"z-20"} // optional : z value for drawer
        saveTheme={(themeObj, themeStr) => {
          console.log(themeObj, themeStr);
          // call fs.writeFile or equivalent for your framework
        }} //optional
      />
```

