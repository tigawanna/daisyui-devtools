import { useEffect, useState } from "react";
import { exportThemeArray } from "./utils.js";
import { useDaisyUIThemeStore } from "../utils/store.js";


interface ExportThemeProps {
  customThemeName: string;
}



export function ExportTheme({customThemeName}: ExportThemeProps) {

  const [wrapInBraces, setWrapInBraces] = useState(false);
  const theme = useDaisyUIThemeStore((state)=>state.theme);
  const colors_to_export = exportThemeArray(theme, true).join(",\n");

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  const [exportFormatedString, setExportFormatedString] = useState(
    colors_to_export
  );
  const [copied, setCopied] = useState(false);
  useEffect(() => { 
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  const copied_styles = copied ? "animate-bounce text-success" : "";
  return (
    <div className="flex h-full w-full flex-col items-center b justify-center gap-3">
      <div className="flex items-center justify-center gap-3 p-2">
        <button
          onClick={() => {
            setCopied(true);
            copyToClipboard(exportFormatedString);
          }}
          className="flex items-center justify-center "
        >
          <svg
            className={`size-5 ${copied_styles}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#080341"
              fillRule="evenodd"
              d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25zM6 9h8.25v10.5H6V9z"
              clipRule="evenodd"
            ></path>
          </svg>

          <div className="ml-2">
            {copied ? (
              <div className="flex items-center justify-center gap-1 rounded-lg text-success">
                Copied
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12.611L8.923 17.5 20 6.5"
                  ></path>
                </svg>
              </div>
            ) : (
              'Copy'
            )}
          </div>
        </button>
        <label
          className=" flex justify-center items-center gap-2"
          htmlFor="wrapInBraces"
        >
          <input
            name="wrapInBraces"
            type="checkbox"
            className=" toggle toggle-primary bg-warning"
            checked={wrapInBraces}
            onChange={(e) => {
              setWrapInBraces(e.target.checked);
              if (e.target.checked) {
                setExportFormatedString(
                  `{ \n "${customThemeName}": {\n ${colors_to_export} \n}\n}`,
                );
              } else {
                setExportFormatedString(colors_to_export);
              }
            }}
          />
          Wrap in braces
        </label>
      </div>
      <div className=" w-[95%] bg-base-100 rounded-md  overflow-auto p-5">
        {/* <p className="w-fit max-w-[99%] overflow-scroll">{exportFormatedString}</p> */}
        <pre className="overflow-auto ">
          <code>{exportFormatedString}</code>
        </pre>
      </div>
    </div>
  );
}
