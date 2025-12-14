"use client";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
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
                  className="hidden sm:inline-flex"
                  {...(!ready && {
                    "aria-hidden": true,
                    className: "invisible hidden sm:inline-flex",
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

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
