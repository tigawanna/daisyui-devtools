import { DaisyUiDevtools } from "../lib/components/DaisyUiDevtools"

function App() {
return (
    <div className="flex flex-col justify-center">
      <div className="h-screen gap-3 flex flex-col justify-center items-center">
      <div className="p-5 text-5xl flex flex-col bg-primary text-primary-content justify-center items-center">
        uwu
        </div>
        <h1 className="text-5xl font-bold">DaisyUI</h1>
        <svg

          className="size-3 text-error"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16">
          <path
            d="M4 6V4a4 4 0 118 0v2h2v10H2V6h2zm2-2a2 2 0 114 0v2H6V4zm1 9V9h2v4H7z"
            clipRule="evenodd"></path>
        </svg>
      </div>
      <DaisyUiDevtools />
    </div>
  );
}

export default App
