import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain && !chain.unsupported;

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    className: "invisible",
                  })}
                >
                  {connected ? (
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="text-offwhite hover:text-white font-mono text-sm border border-current rounded-full px-3 py-1.5 transition-colors"
                    >
                      {account.displayName}
                    </button>
                  ) : (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="text-offwhite hover:text-white font-mono text-sm border border-current rounded-full px-3 py-1.5 transition-colors"
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </SheetContent>
    </Sheet>
  );
};
