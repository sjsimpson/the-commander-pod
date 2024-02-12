"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

import { Button } from "~/components/ui/button";

import { MobileNav } from "./mobile-nav";
import { PrimaryNav } from "./primary-nav";

export function Header() {
  return (
    <header className="z-30 h-fit w-screen">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}

function DesktopHeader() {
  return (
    <div className="hidden w-full items-center px-2 pt-10 md:flex md:flex-col lg:px-16">
      <div className="flex w-full max-w-[1400px] flex-row items-center justify-between gap-3 rounded-3xl bg-black px-4 py-2 text-white">
        <div className="ml-6">
          <Image src="/logo.svg" alt="logo" height={80} width={120} />
        </div>
        <PrimaryNav />
        <Button size="header" className="text-sm font-bold">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
}

function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-20 w-full flex-row items-center justify-between bg-white px-5 text-black md:hidden">
        <Image src="/logo-black.svg" alt="logo" height={80} width={120} />
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-50">
          <div className="h-6 w-6 text-black" onClick={() => setOpen(true)}>
            <Bars3Icon />
          </div>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
}
