import { api } from "~/trpc/server";

import { Footer } from "./_components/footer";
import { CardImage } from "./card-image";
import { CommanderText } from "./commander-text";

export default async function Home() {
  const youtubeEpisode = await api.youtube.getMostRecentVideo.query();

  const card = await api.card.getRandomCard.query({
    query: "is:commander colors<=2 -is:digital -set_type:funny",
  });

  return (
    <>
      <div className="flex max-w-full flex-col md:gap-20 md:pt-28 2xl:gap-40">
        <section className="relative flex w-screen justify-center">
          <div className="flex w-2/3 flex-col md:w-content-md 2xl:w-content-2xl">
            <div className="relative flex flex-col justify-between gap-10 md:flex-row">
              <p className="w-[320px] text-wrap pt-20 text-4xl font-extrabold sm:w-[520px] sm:text-6xl 2xl:w-[840px] 2xl:text-8xl">
                THE PODCAST FOR ALL THINGS{" "}
                <CommanderText colors={card?.colors} />
              </p>
              <div className="z-10 mb-10 h-fit w-fit items-center justify-center self-center md:mb-0 2xl:absolute 2xl:-right-20">
                <CardImage card={card} />
              </div>
            </div>
          </div>
          <div className="absolute -right-2/3 top-1/4 h-[1052px] w-full rounded-l-full bg-black" />
        </section>
        <section className="z-10 flex w-screen flex-col items-center justify-center gap-16 bg-gray-200 pb-32 pt-20">
          <div className="rounded-full bg-[#FF0000] px-6 py-2 text-2xl font-bold text-white">
            Our Most Recent Video
          </div>
          <iframe
            className="rounded-xl sm:h-[315px] sm:w-[560px]"
            src={youtubeEpisode}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
