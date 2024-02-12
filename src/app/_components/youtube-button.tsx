import Image from "next/image";

import { Button } from "~/components/ui/button";

export function YouTubeButton() {
  return (
    <Button
      size="header"
      className="cursor-pointer bg-accent text-accent-foreground"
    >
      <a
        href="https://www.youtube.com/@TheCommanderPod"
        target="_blank"
        className="flex flex-row items-center justify-center gap-2"
      >
        <Image src="/youtube.svg" alt="Youtube Icon" height={20} width={20} />
        <span>Watch on YouTube</span>
      </a>
    </Button>
  );
}
