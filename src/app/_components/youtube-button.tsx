import Image from "next/image";
import { Button } from "~/components/ui/button";

export function YouTubeButton() {
  return (
    <Button size="header" className="bg-accent text-accent-foreground">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/youtube.svg" alt="Youtube Icon" height={20} width={20} />
        <span>Watch on YouTube</span>
      </div>
    </Button>
  );
}
