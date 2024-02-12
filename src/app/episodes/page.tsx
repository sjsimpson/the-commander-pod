import { Footer } from "../_components/footer";
import { SpotifyButton } from "../_components/spotify-button";
import { YouTubeButton } from "../_components/youtube-button";

export default function Episodes() {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <section className="relative flex w-screen justify-center">
          <div className="relative flex w-[1200px] flex-col items-center justify-center gap-10 pb-32 pt-20">
            <iframe
              className="rounded-xl sm:h-[315px] sm:w-[560px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=KHYuFMl7AL377jF8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <YouTubeButton />
          </div>
        </section>
        <section className="relative flex w-screen justify-center bg-black text-white">
          <div className="relative flex w-[1200px] flex-col items-center justify-center gap-10 pb-32 pt-20">
            <iframe
              className="rounded-xl sm:h-[315px] sm:w-[560px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=KHYuFMl7AL377jF8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <SpotifyButton />
          </div>
        </section>
      </div>
      <Footer style="light" hideBanner />
    </>
  );
}
