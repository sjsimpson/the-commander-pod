"use client";

import Link from "next/link";

const NAVLINKS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/hosts",
    title: "The Hosts",
  },
  {
    href: "/episodes",
    title: "Episodes",
  },
  { href: "/contact-us", title: "Contact Us" },
];

export function PrimaryNav() {
  return (
    <div className="flex flex-row gap-3">
      {NAVLINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex h-fit cursor-pointer flex-col rounded-md px-3 py-2 hover:bg-gray-800"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
