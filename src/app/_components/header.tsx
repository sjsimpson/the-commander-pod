import { PrimaryNav } from "./primary-nav";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <div className="mt-10 flex w-[1400px] flex-row items-center justify-between gap-3 rounded-3xl bg-black px-4 py-2 text-white">
      <div className="ml-6">
        <Image src="/logo.svg" alt="logo" height={80} width={120} />
      </div>
      <PrimaryNav />
      <Button size="header" className="text-sm font-bold">
        SUBSCRIBE
      </Button>
    </div>
  );
}
