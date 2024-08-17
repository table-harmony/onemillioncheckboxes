import { Checkbox } from "@/components/ui/checkbox";

import { MenuButton } from "./menu-button";

export function SiteHeader() {
  return (
    <header className="top-0 z-50 mb-4 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between">
        <div className="flex items-center gap-2">
          <span className="mr-2 flex items-center text-lg font-bold">
            One Million &nbsp;
            <Checkbox aria-label="header" />
            &nbsp;s
          </span>
        </div>
        <MenuButton />
      </div>
    </header>
  );
}
