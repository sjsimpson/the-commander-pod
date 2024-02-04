import { Footer } from "../_components/footer";
import { YouTubeButton } from "../_components/youtube-button";
import { SpotifyButton } from "../_components/spotify-button";

export default async function Episodes() {
  return (
    <>
      <main className="mt-10 flex flex-col">
        <section className="relative flex w-screen justify-center">
          <div className="relative flex w-[1200px] flex-col items-center justify-center gap-10 pb-32 pt-20">
            <iframe
              className="rounded-xl"
              width="711.42"
              height="400"
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
              className="rounded-xl"
              width="711.42"
              height="400"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=KHYuFMl7AL377jF8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <SpotifyButton />
          </div>
        </section>
      </main>
      <Footer style="light" hideBanner />
    </>
  );
}
