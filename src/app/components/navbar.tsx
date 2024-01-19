// FONTS
import { Gwendolyn, Playfair_Display } from "next/font/google";
// ICONS
import { BookImage, HelpCircle, Menu, Package, Send, X } from "lucide-react";
// NEXT
import Image from "next/image";
import Link from "next/link";
// COMPONENTS
import NavItem from "./nav-item";
// UI
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const gwendolyn = Gwendolyn({
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="fixed z-50 h-20 w-full bg-purple-200 md:h-24">
      <div className="container flex h-full items-center justify-between">
        <Link href="#">
          <h1
            className={`${gwendolyn.className} text-5xl text-purple-800 md:text-6xl`}
          >
            LBM
          </h1>
        </Link>
        <div className="flex gap-4 max-md:hidden">
          <NavItem href="/muskan">About Me</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="navLink" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 bg-purple-100">
              <DropdownMenuItem asChild>
                <span
                  className={`${playfairDisplay.className} tracking-wide text-purple-950 hover:bg-purple-200 active:bg-purple-200`}
                >
                  <HelpCircle className="mr-2 inline h-4 w-4" />
                  <Link href="/about">About Us</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className={`${playfairDisplay.className} tracking-wide text-purple-950 hover:bg-purple-200 active:bg-purple-200`}
                >
                  <BookImage className="mr-2 inline h-4 w-4" />
                  <Link href="#gallery">Gallery</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className={`${playfairDisplay.className} tracking-wide text-purple-950 hover:bg-purple-200 active:bg-purple-200`}
                >
                  <Package className="mr-2 inline h-4 w-4" />
                  <Link href="#services">Services</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className={`${playfairDisplay.className} tracking-wide text-purple-950 hover:bg-purple-200 active:bg-purple-200`}
                >
                  <Send className="mr-2 inline h-4 w-4" />
                  <Link href="/contact">Contact Us</Link>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
