"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { NAVLINKS } from "~/lib/links";

export function PrimaryNav() {
  const [hoverOffset, setHoverOffset] = useState<number | undefined>(undefined);
  const [hoverWidth, setHoverWidth] = useState<number | undefined>(undefined);
  const [activeOffset, setActiveOffset] = useState<number | undefined>(
    undefined,
  );
  const [activeWidth, setActiveWidth] = useState<number | undefined>(undefined);

  const setHoverState = (
    offset: number | undefined,
    width: number | undefined,
  ) => {
    setHoverOffset(offset);
    setHoverWidth(width);
  };

  const setActiveState = (offset: number, width: number) => {
    setActiveOffset(offset);
    setActiveWidth(width);
  };

  return (
    <div className="flex flex-row gap-1 rounded-2xl bg-[#242424] px-4 py-2 lg:gap-6">
      {NAVLINKS.map((link) => (
        <NavLink
          key={link.href}
          hoverOffset={hoverOffset}
          hoverWidth={hoverWidth}
          setHoverState={setHoverState}
          activeOffset={activeOffset}
          activeWidth={activeWidth}
          setActiveState={setActiveState}
          {...link}
        />
      ))}
    </div>
  );
}

interface NavLinkProps {
  href: string;
  title: string;
  hoverOffset?: number;
  hoverWidth?: number;
  setHoverState: (
    offset: number | undefined,
    width: number | undefined,
  ) => void;
  activeOffset?: number;
  activeWidth?: number;
  setActiveState: (offset: number, width: number) => void;
}
function NavLink(props: NavLinkProps) {
  const {
    title,
    href,
    setHoverState,
    hoverOffset,
    hoverWidth,
    setActiveState,
    activeOffset,
    activeWidth,
  } = props;

  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const pathname = usePathname();
  const match = useMemo(() => {
    const rootPath = pathname.split("/")[1];
    return href.slice(1, href.length) === rootPath;
  }, [pathname, href]);

  useEffect(() => {
    if (match) {
      setActive(true);

      if (linkRef.current) {
        const offset = linkRef.current.offsetLeft;
        const width = linkRef.current.offsetWidth;

        setActiveState(offset, width);
      }
    } else {
      setActive(false);
    }
  }, [match, setActiveState]);

  useEffect(() => {
    if (!hovered && linkRef.current?.offsetLeft === hoverOffset) {
      const timeout = setTimeout(
        () => setHoverState(undefined, undefined),
        200,
      );

      return () => clearTimeout(timeout);
    }
  }, [hovered, hoverOffset, setHoverState]);

  const handleMouseEnter = () => {
    setHovered(true);

    if (linkRef.current) {
      const offset = linkRef.current.offsetLeft;
      const width = linkRef.current.offsetWidth;

      setHoverState(offset, width);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const calculatedHoverOffset = useMemo(() => {
    if (hoverOffset && linkRef.current) {
      const myOffset = linkRef.current.offsetLeft;
      return hoverOffset - myOffset;
    }
    return 0;
  }, [hoverOffset]);

  const calculatedActiveOffset = useMemo(() => {
    if (activeOffset && linkRef.current) {
      const myOffset = linkRef.current.offsetLeft;
      return activeOffset - myOffset;
    }
    return 0;
  }, [activeOffset]);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={clsx(
        "relative flex h-fit cursor-pointer flex-col rounded-md px-6 py-4",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={backgroundRef}
        className={clsx(
          "pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl bg-[#121212] opacity-0 transition-all duration-200 ease-in",
          active && "opacity-100",
        )}
        style={{ translate: calculatedActiveOffset, width: activeWidth }}
      />
      <div
        ref={backgroundRef}
        className={clsx(
          "pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl bg-[#363636] opacity-0 transition-all duration-200 ease-out",
          hovered && "opacity-100",
        )}
        style={{ translate: calculatedHoverOffset, width: hoverWidth }}
      />
      <span className="z-10">{title}</span>
    </Link>
  );
}
