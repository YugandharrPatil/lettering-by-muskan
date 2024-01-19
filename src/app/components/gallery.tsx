import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.jpeg";
import NavItem from "./nav-item";
import { Button } from "./ui/button";

const images = [
  { id: 1, name: logo },
  { id: 2, name: logo },
  { id: 3, name: logo },
  { id: 4, name: logo },
  { id: 5, name: logo },
  { id: 6, name: logo },
  { id: 7, name: logo },
  { id: 8, name: logo },
  { id: 9, name: logo },
  { id: 10, name: logo },
  { id: 11, name: logo },
  { id: 12, name: logo },
];

export default function Gallery() {
  return (
    <main className="bg-purple-300 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">Gallery</h1>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((image) => (
            <Image
              className="w-[22rem]"
              key={image.id}
              quality={100}
              src={image.name}
              alt="alt"
            />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Button asChild variant="navLink">
            <Link
              href="/gallery"
              className="text-lg tracking-wide text-purple-900 hover:bg-purple-400 hover:text-gray-200"
            >
              See More...
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
