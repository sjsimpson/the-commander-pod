import Image from "next/image";

import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex flex-col pt-28">
      <section className="relative flex justify-center">
        <div className="relative flex w-[1200px] flex-col">
          <div className="relative flex flex-row">
            <p className="w-[840px] text-wrap pt-20 text-8xl font-extrabold">
              THE PODCAST FOR ALL THINGS{" "}
              <span className="text-[#D9D9CD]">COMMANDER</span>
            </p>
            <div className="absolute -right-20 z-10 h-[446px] w-[320px] items-center justify-center rounded-md border border-black bg-white"></div>
          </div>
          <div className="absolute -right-2/3 top-1/4 h-[1052px] w-full rounded-l-full bg-black"></div>
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
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
      <section className="z-10 flex w-screen flex-col items-center justify-center gap-20 bg-black pb-32 pt-20">
        <div className="flex h-[72px] w-full items-center justify-center border border-white text-center text-5xl font-bold text-white">
          <span>SUBSCRIBE TO OUR PODCAST • SUBSCRIBE TO OUR PODCAST</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row gap-4">
            <Button>Listen on Spotify</Button>
            <Button>Watch on YouTube</Button>
          </div>
          <p className="text-white">Or find us where you get your podcasts</p>
        </div>
      </section>
      <footer className="z-10 flex w-screen flex-col items-center justify-center gap-10 bg-gray-700 py-20 text-white">
        <div className="flex flex-row items-center gap-1">
          <span>Remember to always pay the</span>
          <div className="h-4 w-4">
            <Image src="/1-mana.png" alt="1 mana" width={16} height={16} />
          </div>
        </div>
        <p className="text-gray-500">
          Designed by Keltson Howell • Built by Spencer Simpson
        </p>
      </footer>
    </main>
  );
}
