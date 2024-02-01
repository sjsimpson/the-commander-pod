import { PrimaryNav } from "./PrimaryNav";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex h-24 w-[1400px] flex-row items-center justify-between gap-3 rounded-xl bg-black px-12 py-3 text-white mt-10">
      <div>
        <Image src="/logo.svg" alt="logo" height={80} width={120} />
      </div>
      <PrimaryNav />
      <Button>Subscribe</Button>
    </div>
  );
}
