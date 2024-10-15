# DAISYUI DEVTOOLS

a react component that allows you to adjust your daisyui theme directly in your react project

```sh
npm install -D daisyui-devtools
```
and use it like such
```tsx
    <DaisyUiDevtools/>
```
remember to lazily load the component in dev mode to avooid sending it to production

```tsx
const DaisyUiDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('daisyui-devtools').then((res) => ({
          default: res.DaisyUiDevtools,
        })),
      )

```


or customize it with options

```tsx
    <DaisyUiDevtools
      drawerClassname="w-fit" // optional: styles for the drawer
      drawerID="daisyui-devtools-drawer" // optional: used by the underlying drawer , chage it if it conflicts
      iconClassname="text-primary" // optional: add classes to the icon
      position="start" //optional:start or end : whre the theme picker drawer will open from
      toggleClassname="drawer-button" //optional: styles for the drawer toggle
      togglePosition="bottom-left" //optional: position of the drawer toggle button
    />
```



Devtools while clodes
![drawer closed](https://raw.githubusercontent.com/tigawanna/daisyui-devtools/75ca0e60e8b864e7481fc1de82fbda8802b5ac4e/public/drawer-closed.png)

Devtools while open 
![drawer open](https://raw.githubusercontent.com/tigawanna/daisyui-devtools/main/public/drawer-open.png)

Devtools while openwith open modal
![drawer open](https://raw.githubusercontent.com/tigawanna/daisyui-devtools/main/public/modal-open.png)

Devtools import theme
![drawer open](https://raw.githubusercontent.com/tigawanna/daisyui-devtools/main/public/import-theme.png)

Devtools export theme
![drawer open](https://raw.githubusercontent.com/tigawanna/daisyui-devtools/main/public/export-theme.png)

