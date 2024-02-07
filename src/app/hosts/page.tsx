import Image from "next/image";

import { Footer } from "../_components/footer";

export default function Hosts() {
  return (
    <>
      <main className="mt-10 flex flex-col">
        <section className="relative flex h-[460px] w-screen justify-center">
          <div className="relative flex w-[1200px] flex-row-reverse">
            <Image
              className="absolute bottom-0"
              src="/keltson.png"
              alt="Keltson Howell"
              height={380}
              width={391}
            />
            <div className="mb-[76px] flex w-[991px] flex-col self-end">
              <div className="mr-[330px] flex flex-row-reverse">
                <h2 className="text-5xl font-black">KELTSON HOWELL</h2>
              </div>
              <p className="mt-10 w-[560px] font-medium">
                Keltson Howell has been playing Magic for over a decade. He
                bought his first booster in Brno, Czechia and has been hooked
                ever since. His favorite formats are commander and limited, and
                he has recently begun exploring vintage cube.
              </p>
            </div>
          </div>
        </section>
        <section className="relative flex h-[569px] w-screen justify-center bg-black pt-20 text-white">
          <div className="relative flex w-[1200px] flex-row">
            <Image
              className="absolute bottom-0"
              src="/spencer.png"
              alt="Spencer Simpson"
              height={489}
              width={490}
            />
            <div className="mb-[76px] flex w-[991px] flex-col self-end">
              <div className="z-10 ml-[279px] flex flex-row">
                <h2 className="text-5xl font-black">SPENCER SIMPSON</h2>
              </div>
              <p className="ml-[530px] mt-10 w-[560px] font-medium">
                Spencer Simpson started playing Magic in 2018. He primarily
                plays commander and limited, and is currently getting into cEDH.
              </p>
              <p className="ml-[530px] w-[560px] font-medium">
                His favorite color combination is Sultai, but he will happily
                play anything besides Boros and Selesnya.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer style="light" />
    </>
  );
}
