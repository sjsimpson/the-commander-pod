import { api } from "~/trpc/server";

import { Button } from "~/components/ui/button";
import { Footer } from "../_components/footer";
import { CardImage } from "../card-image";

// WARN: This is a bandaid solution for current TRPC problems
export const dynamic = "force-dynamic";

export default async function ContactUs() {
  const card1 = await api.card.getRandomCard.query({
    query: "geralf's messenger type:creature",
  });
  const card2 = await api.card.getRandomCard.query({
    query: "messenger drake type:creature",
  });

  return (
    <>
      <main className="mt-10 flex flex-col">
        <section className="relative flex w-screen justify-center">
          <div className="relative flex w-[1200px] flex-col items-center justify-center gap-10 pt-20">
            <div className="mt-20 flex flex-row gap-20">
              <div className="flex w-[560px] flex-col gap-14">
                <div className="flex flex-col gap-4">
                  <h2 className="text-5xl font-black">GET IN TOUCH</h2>
                  <p className="font-medium">
                    Got a question for us? Feedback on one of our episodes? A
                    cool deck idea to share? We want to hear it! Send us an
                    email and we’ll be in touch soon.
                  </p>
                </div>
                <div>
                  <Button className="flex h-fit rounded-2xl bg-black px-6 py-4 text-lg font-bold w-fit hover:bg-black/90">
                    Send us an email
                  </Button>
                </div>
              </div>
              <div className="relative flex h-[440px] w-[440px]">
                <div className="absolute -top-20 left-10 -rotate-12">
                  <CardImage card={card1} height={360} width={258} />
                </div>
                <div className="absolute -top-5 left-44 rotate-12">
                  <CardImage card={card2} height={360} width={258} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
