import { api } from "~/trpc/server";

import { CardImage } from "./card-image";
import { CommanderText } from "./commander-text";
import { Footer } from "./_components/footer";

// WARN: This is a bandaid solution for current TRPC problems
export const dynamic = "force-dynamic";

export default async function Home() {
  const card = await api.card.getRandomCard.query({
    query: "is:commander colors<=2 -is:digital -set_type:funny",
  });

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
              <div className="absolute -right-20 z-10 h-fit w-fit items-center justify-center">
                <CardImage card={card} width={320} height={446} />
              </div>
            </div>
            <div className="absolute -right-2/3 top-1/4 h-[1052px] w-full rounded-l-full bg-black" />
          </div>
        </section>
        <section className="z-10 mt-40 flex w-screen flex-col items-center justify-center gap-16 bg-gray-200 pb-32 pt-20">
          <div className="rounded-full bg-[#FF0000] px-6 py-2 text-2xl font-bold text-white">
            Our Most Recent Video
          </div>
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
