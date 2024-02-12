"use client";

import Image from "next/image";

import { breakpoints, useMediaQuery } from "~/lib/useMediaQuery";
import type { Card } from "~/server/api/routers/card";

export function CardImage({ card }: { card?: Card }) {
  const xxl = useMediaQuery(breakpoints.xxl);

  return card ? (
    <div className="z-10 h-fit w-fit overflow-hidden rounded-2xl">
      <Image
        src={card?.image_uris.large}
        alt={card?.name}
        width={xxl ? 320 : 240}
        height={446}
      />
    </div>
  ) : (
    <div className="z-10 overflow-hidden rounded-2xl bg-white">placeholder</div>
  );
}
