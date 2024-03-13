import { XMarkIcon } from "@heroicons/react/24/solid";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { NAVLINKS } from "~/lib/links";

const mobileNavVariants = cva(
  [
    "fixed z-40 items-center justify-center",
    "transition-[height,width,right,top] rounded-full",
    "overscroll-none pointer-events-none",
  ],
  {
    variants: {
      open: {
        true: [
          "bg-black w-[2000px] h-[2000px] -top-1/2 -right-[200%] xs:-right-1/2 duration-500",
        ],
        false: ["w-10 h-10 bg-transparent  top-5 right-5 duration-0"],
      },
    },
  },
);

interface MobileNavProps extends VariantProps<typeof mobileNavVariants> {
  setOpen: (open: boolean) => void;
}

export function MobileNav(props: MobileNavProps) {
  const { open, setOpen } = props;

  return (
    <>
      <div
        className={`z-50 h-screen w-screen overscroll-contain text-white ${open ? "fixed opacity-100" : "hidden opacity-0"}`}
      >
        <div className="flex h-full w-full flex-col items-center">
          <div
            className="fixed right-5 top-5 h-10 w-10"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-6 w-6 text-white">
                <XMarkIcon />
              </div>
            </div>
          </div>
          <ul className="mt-40 gap-5">
            {NAVLINKS.map((link) => (
              <li key={link.href} className="px-6 py-2">
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={mobileNavVariants({ open })} />
    </>
  );
}
