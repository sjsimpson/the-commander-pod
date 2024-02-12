import Image from "next/image";

import type { Card } from "~/server/api/routers/card";

export function CardImage({ card }: { card?: Card }) {
  return card ? (
    <div className="h-fit w-fit overflow-hidden rounded-2xl">
      <Image
        src={card?.image_uris.large}
        alt={card?.name}
        width={258}
        height={360}
      />
    </div>
  ) : (
    <div className="overflow-hidden rounded-2xl bg-white">placeholder</div>
  );
}
