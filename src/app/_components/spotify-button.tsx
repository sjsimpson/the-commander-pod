import Image from "next/image";

import { Button } from "~/components/ui/button";

export function SpotifyButton() {
  return (
    <Button
      size="header"
      className="bg-green-500 text-accent-foreground hover:bg-green-500/90"
    >
      <a
        href="https://open.spotify.com/show/2R8oP4tL7rIxXk9CBTtTJP"
        target="_blank"
        className="flex flex-row items-center justify-center gap-2"
      >
        <Image src="/spotify.svg" alt="Spotify Icon" height={20} width={20} />
        <span>Listen on Spotify</span>
      </a>
    </Button>
  );
}
