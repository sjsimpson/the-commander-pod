import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";

import { Footer } from "../_components/footer";
import { CardImage } from "./card-image";

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
      <div className="mt-10 flex flex-col">
        <section className="relative flex w-screen justify-center">
          <div className="relative flex flex-col items-center justify-center gap-10 pt-20 md:w-content-md 2xl:w-content-2xl">
            <div className="mb-20 flex flex-col gap-40 2xl:mt-20 2xl:flex-row 2xl:gap-20">
              <div className="flex flex-col gap-14 px-5 sm:w-[560px] sm:px-0">
                <div className="flex flex-col gap-4">
                  <h2 className="text-5xl font-black">GET IN TOUCH</h2>
                  <p className="font-medium">
                    Got a question for us? Feedback on one of our episodes? A
                    cool deck idea to share? We want to hear it! Send us an
                    email and we’ll be in touch soon.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <a
                      className="flex h-fit w-fit rounded-2xl bg-black px-6 py-4 text-lg font-bold hover:bg-black/90"
                      href="mailto:spencer@thecommanderpod.com"
                    >
                      Send us an email
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden h-[440px] w-[440px] 2xl:flex">
                <div className="absolute -top-20 left-10 -rotate-12">
                  <CardImage card={card1} />
                </div>
                <div className="absolute -top-5 left-44 rotate-12">
                  <CardImage card={card2} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
