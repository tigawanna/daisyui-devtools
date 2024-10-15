# DAISYUI DEVTOOLS

a react component that allows you to adjust your daisyui theme directly in your react project

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
![drawer closed](/public/drawer-closed.png)

Devtools while open 
![drawer open](/public/drawer-open.png)

Devtools while openwith open modal
![drawer open](/public/modal-open.png)

Devtools import theme
![drawer open](/public/import-theme.png)

Devtools export theme
![drawer open](/public/export-theme.png)
