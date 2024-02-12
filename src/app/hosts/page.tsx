"use client";

import Image from "next/image";

import { breakpoints, useMediaQuery } from "~/lib/useMediaQuery";

import { Footer } from "../_components/footer";

export default function Hosts() {
  const xxl = useMediaQuery(breakpoints.xxl);

  return (
    <>
      <div className="mt-10 flex flex-col">
        <section className="relative flex w-screen justify-center pt-20 md:pt-48">
          <div className="relative flex w-2/3 flex-row-reverse md:w-content-md 2xl:w-content-2xl">
            <Image
              className="absolute bottom-0 hidden md:flex"
              src="/keltson.png"
              alt="Keltson Howell"
              height={380}
              width={391}
            />
            <div className="mb-[76px] flex flex-col self-end 2xl:w-[991px]">
              <div className="flex flex-row-reverse md:mr-[330px]">
                <h2 className="text-5xl font-black">KELTSON HOWELL</h2>
              </div>
              <p className="mt-10 font-medium md:w-1/2 2xl:w-[560px]">
                Keltson Howell has been playing Magic for over a decade. He
                bought his first booster in Brno, Czechia and has been hooked
                ever since. His favorite formats are commander and limited, and
                he has recently begun exploring vintage cube.
              </p>
            </div>
          </div>
        </section>
        <section className="relative flex w-screen justify-center bg-black pt-20 text-white md:pt-48 2xl:pt-72">
          <div className="relative flex w-2/3 flex-row md:w-content-md 2xl:w-content-2xl">
            <Image
              className="absolute bottom-0 hidden md:flex"
              src="/spencer.png"
              alt="Spencer Simpson"
              height={xxl ? 489 : 380}
              width={xxl ? 490 : 380}
            />
            <div className="mb-[76px] flex flex-col self-end 2xl:w-[991px]">
              <div className="z-10 flex flex-row md:ml-[279px]">
                <h2 className="text-5xl font-black">SPENCER SIMPSON</h2>
              </div>
              <p className="mt-10 font-medium md:ml-[400px] md:w-1/2 2xl:ml-[530px] 2xl:w-[560px]">
                Spencer Simpson started playing Magic in 2018. He primarily
                plays commander and limited, and is currently getting into cEDH.
                His favorite color combination is Sultai, but he will happily
                play anything besides Boros and Selesnya.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer style="light" />
    </>
  );
}
