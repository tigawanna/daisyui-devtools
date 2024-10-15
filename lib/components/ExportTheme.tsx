import { useEffect, useState } from "react";
import { oklchToHexString } from "./utils/color-converters";
import { DaisyUIThemeSearchParmsTypes } from "./utils/schema";
import { useDaisyUITheme } from "./utils/use-search-params-theme";
import { exportThemeAsString } from "./utils/io";

interface ExportThemeProps {
  theme: DaisyUIThemeSearchParmsTypes;
  customThemeName: string;
}



export function ExportTheme({customThemeName}: ExportThemeProps) {

  const [wrapInBraces, setWrapInBraces] = useState(false);
  const { searchParams: theme } = useDaisyUITheme();
  const colors_to_export = exportThemeAsString(theme,true);

  // const exportFormatedTring = `{ \n 'custom_theme': {\n ${colors_to_export.join("',\n")} \n}\n}`;
  // const exportFormatedTring = ` ${colors_to_export.join(",\n")}`;
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
    <div className="flex h-full w-full flex-col items-center  justify-center gap-3">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            setCopied(true);
            copyToClipboard(exportFormatedString);
          }}
          className="flex items-center justify-center pt-2">
          <svg
            className={`size-5 ${copied_styles}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              fill="#080341"
              fillRule="evenodd"
              d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25zM6 9h8.25v10.5H6V9z"
              clipRule="evenodd"></path>
          </svg>

          <div className="ml-2">
            {copied ? (
              <div className="flex items-center justify-center gap-1 rounded-lg text-success">
                Copied
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12.611L8.923 17.5 20 6.5"></path>
                </svg>
              </div>
            ) : (
              "Copy"
            )}
          </div>
        </button>
        <label className="label flex gap-2" htmlFor="wrapInBraces">
          <input
            name="wrapInBraces"
            type="checkbox"
            className="checkbox-primary checkbox border-4 border-accent"
            checked={wrapInBraces}
            onChange={(e) => {
              setWrapInBraces(e.target.checked);
              if (e.target.checked) {
                setExportFormatedString(
                  `{ \n "${customThemeName}": {\n ${colors_to_export} \n}\n}`
                );
              } else {
                setExportFormatedString(colors_to_export);
              }
            }}
          />
          Wrap in braces
        </label>
      </div>
      <div className="bg-base-300 w-fit max-w-[95%] overflow-auto p-5">
        {/* <p className="w-fit max-w-[99%] overflow-scroll">{exportFormatedString}</p> */}
        <pre className="overflow-auto ">
          <code >{exportFormatedString}</code>
        </pre>
      </div>
    </div>
  );
}
