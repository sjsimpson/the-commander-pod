import Image from "next/image";
import type { Card } from "~/server/api/routers/card";

export function CardImage({
  card,
  width,
  height,
}: {
  card?: Card;
  width: number;
  height: number;
}) {
  return card ? (
    <div className="h-fit w-fit overflow-hidden rounded-2xl">
      <Image
        src={card?.image_uris.large}
        alt={card?.name}
        height={height}
        width={width}
      />
    </div>
  ) : (
    <div className="overflow-hidden rounded-2xl bg-white">placeholder</div>
  );
}
