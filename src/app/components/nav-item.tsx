import Link from "next/link";
import { Button } from "./ui/button";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Button asChild variant="navLink" className="text-lg">
      <Link
        href={href}
        className={`${playfairDisplay.className} tracking-wide`}
      >
        {children}
      </Link>
    </Button>
  );
}
