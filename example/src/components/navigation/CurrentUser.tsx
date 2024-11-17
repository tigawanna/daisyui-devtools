
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/shadcn/ui/dropdown-menu";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Mail,
  UserCircle,
} from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/ui/avatar";


interface CurrentUserProps {}

export function CurrentUser({}: CurrentUserProps) {

  const viewer = {
    username: "John Doe",
    email: "xKUfW@example.com",
    avatarUrl: "https://i.pravatar.cc/150?u=xKUfW",
  }

  if (!viewer) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <UserCircle className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 border-none p-3">
          <DropdownMenuLabel>Login</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span
                className="flex items-center gap-2"
              >
                <User className="mr-2 size-4" />
                <span>Login</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={viewer.avatarUrl} alt={viewer.username} />
          <AvatarFallback>{viewer.username.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 border-none p-3">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <div className="flex h-full w-full gap-3">
          <Avatar>
            <AvatarImage src={viewer.avatarUrl} alt={viewer.username} />
            <AvatarFallback>{viewer.username.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex h-full w-full flex-col p-1">
            <div className="i flex h-full w-full items-center gap-1">
              <Mail className="size-3" />
              <span className="text-xs">{viewer.email}</span>
            </div>
            <span className="text-xs">{viewer.username}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex h-full w-full items-center justify-center gap-3">
          <button className="btn btn-ghost">Dummy Sign out button</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
