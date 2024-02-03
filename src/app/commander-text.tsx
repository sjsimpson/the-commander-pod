import type { Card, CardColor } from "~/server/api/routers/card";
import clsx from "clsx";

export function CommanderText({ colors }: { colors?: Card["colors"] }) {
  if (!colors) return <span>COMMANDER</span>;

  const SOLID: Record<Card["colors"][number], string> = {
    W: "text-w",
    U: "text-u",
    B: "text-b",
    R: "text-r",
    G: "text-g",
  };

  if (isAzorius(colors)) return <DualColorCommanderText from="W" to="U" />;
  if (isOrzhov(colors)) return <DualColorCommanderText from="W" to="B" />;
  if (isBoros(colors)) return <DualColorCommanderText from="R" to="W" />;
  if (isSelesnya(colors)) return <DualColorCommanderText from="G" to="W" />;
  if (isDimir(colors)) return <DualColorCommanderText from="U" to="B" />;
  if (isIzzet(colors)) return <DualColorCommanderText from="U" to="R" />;
  if (isSimic(colors)) return <DualColorCommanderText from="G" to="U" />;
  if (isRakdos(colors)) return <DualColorCommanderText from="B" to="R" />;
  if (isGolgari(colors)) return <DualColorCommanderText from="B" to="G" />;

  return <span className={SOLID[colors[0]!]}>COMMANDER</span>;
}

function DualColorCommanderText({
  from,
  to,
}: {
  from: CardColor;
  to: CardColor;
}) {
  const FROM: Record<Card["colors"][number], string> = {
    W: "from-w",
    U: "from-u",
    B: "from-b",
    R: "from-r",
    G: "from-g",
  };

  const TO: Record<Card["colors"][number], string> = {
    W: "to-w",
    U: "to-u",
    B: "to-b",
    R: "to-r",
    G: "to-g",
  };
  return (
    <span
      className={clsx(
        "bg-gradient-to-r bg-clip-text text-transparent",
        FROM[from],
        TO[to],
      )}
    >
      COMMANDER
    </span>
  );
}

function isAzorius(colors: Card["colors"]) {
  return colors.includes("W") && colors.includes("U");
}

function isOrzhov(colors: Card["colors"]) {
  return colors.includes("W") && colors.includes("B");
}

function isBoros(colors: Card["colors"]) {
  return colors.includes("W") && colors.includes("R");
}

function isSelesnya(colors: Card["colors"]) {
  return colors.includes("W") && colors.includes("G");
}

function isDimir(colors: Card["colors"]) {
  return colors.includes("U") && colors.includes("B");
}

function isIzzet(colors: Card["colors"]) {
  return colors.includes("U") && colors.includes("R");
}

function isSimic(colors: Card["colors"]) {
  return colors.includes("U") && colors.includes("G");
}

function isRakdos(colors: Card["colors"]) {
  return colors.includes("B") && colors.includes("R");
}

function isGolgari(colors: Card["colors"]) {
  return colors.includes("B") && colors.includes("G");
}
