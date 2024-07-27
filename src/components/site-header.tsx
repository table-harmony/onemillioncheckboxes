import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";
import { Checkbox } from "@/components/ui/checkbox";

export function SiteHeader() {
  return (
    <header className="sticky mb-4 top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg flex mr-2 items-center font-bold">
            One Million &nbsp;
            <Checkbox aria-label="header" />
            &nbsp;s
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
