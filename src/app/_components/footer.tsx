import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { SpotifyButton } from "./spotify-button";
import { YouTubeButton } from "./youtube-button";

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

interface FooterProps extends VariantProps<typeof FooterVariants> {
  hideBanner?: boolean;
}

export function Footer(props: FooterProps) {
  const { hideBanner = false, style } = props;
  return (
    <footer>
      {!hideBanner && (
        <section className={FooterVariants({ style })}>
          <div className="flex h-[72px] w-full items-center justify-center overflow-hidden text-nowrap text-center text-5xl font-bold">
            <Marquee autoFill>
              <span>SUBSCRIBE TO OUR PODCAST</span>
              <span className="px-3">•</span>
            </Marquee>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <SpotifyButton />
              <YouTubeButton />
            </div>
            <p className="font-semibold">
              Or find us where you get your podcasts
            </p>
          </div>
        </section>
      )}
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
