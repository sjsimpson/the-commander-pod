import Image from "next/image";
import type { Card } from "~/server/api/routers/card";

export function CardImage({ card }: { card?: Card }) {
  return card ? (
    <div className="absolute -right-20 z-10 items-center justify-center overflow-hidden rounded-2xl bg-white">
      <Image
        src={card?.image_uris.large}
        alt={card?.name}
        height={446}
        width={320}
      />
    </div>
  ) : (
    <div className="absolute -right-20 z-10 h-[446px] w-[320px] items-center justify-center rounded-md border border-black bg-white">
      placeholder
    </div>
  );
}
