import { api } from "~/trpc/server";

import { CardImage } from "./card-image";
import { CommanderText } from "./commander-text";
import { Footer } from "./_components/footer";

// WARN: This is a bandaid solution for current TRPC problems
export const dynamic = "force-dynamic";

export default async function Home() {
  const card = await api.card.getRandomCard.query();

  return (
    <>
      <main className="flex flex-col pt-28">
        <section className="relative flex justify-center">
          <div className="relative flex w-[1200px] flex-col">
            <div className="relative flex flex-row">
              <p className="w-[840px] text-wrap pt-20 text-8xl font-extrabold">
                THE PODCAST FOR ALL THINGS{" "}
                <CommanderText colors={card?.colors} />
              </p>
              <CardImage card={card} />
            </div>
            <div className="absolute -right-2/3 top-1/4 h-[1052px] w-full rounded-l-full bg-black" />
          </div>
        </section>
        <section className="z-10 mt-40 flex w-screen flex-col items-center justify-center gap-16 bg-gray-200 pb-32 pt-20">
          <div>Our Most Recent Video</div>
          <iframe
            className="rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=KHYuFMl7AL377jF8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
