import { ThemeToggle } from "./ThemeToggle";
import { CurrentUser } from "./CurrentUser";

interface MainNavbarProps {}

export function MainNavbar({}: MainNavbarProps) {
  return (
    <nav className="sticky top-0 z-30 flex h-14 w-full flex-col items-center justify-between bg-base-200">
      <div className="flex h-full w-full items-center justify-between gap-2 px-2 pr-5">
        <ThemeToggle />
        <CurrentUser />
      </div>
    </nav>
  );
}
