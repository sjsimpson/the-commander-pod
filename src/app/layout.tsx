import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import { TRPCReactProvider } from "~/trpc/react";

import { Header } from "./_components/header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "The Commander Pod",
  description: "Podcast for all things Commander",
  icons: [{ rel: "icon", url: "/logo-black.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${poppins.className} flex h-screen w-screen flex-col`}
      >
        <main className="flex h-screen w-screen flex-col items-center overflow-x-hidden">
          <TRPCReactProvider>
            <Header />
            {children}
          </TRPCReactProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
