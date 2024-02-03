import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const FooterVariants = cva(
  "z-10 flex w-screen flex-col items-center justify-center gap-20 pb-32 pt-20",
  {
    variants: {
      style: {
        default: "bg-black text-white",
        light: "bg-white text-black",
      },
    },

    defaultVariants: {
      style: "default",
    },
  },
);

export function Footer(props: VariantProps<typeof FooterVariants>) {
  const { style } = props;
  return (
    <footer>
      <section className={FooterVariants({ style })}>
        <div className="flex h-[72px] w-full items-center justify-center border border-white text-center text-5xl font-bold">
          <span>SUBSCRIBE TO OUR PODCAST • SUBSCRIBE TO OUR PODCAST</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row gap-4">
            <SpotifyButton />
            <YoutubeButton />
          </div>
          <p className="font-semibold">
            Or find us where you get your podcasts
          </p>
        </div>
      </section>
      <section className="z-10 flex w-screen flex-col items-center justify-center gap-10 bg-[#242424] py-20">
        <div className="flex flex-row items-center gap-1">
          <span className="font-semibold text-white">
            Remember to always pay the
          </span>
          <div className="h-4 w-4">
            <Image src="/1-mana.png" alt="1 mana" width={16} height={16} />
          </div>
        </div>
        <p className="text-xs font-semibold text-white/50">
          Designed by Keltson Howell • Built by Spencer Simpson
        </p>
      </section>
    </footer>
  );
}

function SpotifyButton() {
  return (
    <Button
      size="header"
      className="bg-green-500 text-accent-foreground hover:bg-green-500/90"
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/spotify.svg" alt="Spotify Icon" height={20} width={20} />
        <span>Listen on Spotify</span>
      </div>
    </Button>
  );
}

function YoutubeButton() {
  return (
    <Button size="header" className="bg-accent text-accent-foreground">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/youtube.svg" alt="Youtube Icon" height={20} width={20} />
        <span>Watch on Youtube</span>
      </div>
    </Button>
  );
}
