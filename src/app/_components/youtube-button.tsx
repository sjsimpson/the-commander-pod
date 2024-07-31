import Image from "next/image";

import { Button } from "~/components/ui/button";

export function YouTubeButton() {
  return (
    <Button size="header" asChild>
      <a
        href="https://www.youtube.com/@TheCommanderPod"
        target="_blank"
        className="flex cursor-pointer flex-row items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Image src="/youtube.svg" alt="Youtube Icon" height={20} width={20} />
        <span>Watch on YouTube</span>
      </a>
    </Button>
  );
}
