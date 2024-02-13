import { Gwendolyn, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import gimg1 from "../../../public/images/gallery-img-1.jpeg";
import gimg2 from "../../../public/images/gallery-img-2.jpeg";
import gimg3 from "../../../public/images/gallery-img-3.jpeg";
import gimg4 from "../../../public/images/gallery-img-4.jpeg";
import gimg5 from "../../../public/images/gallery-img-5.jpeg";
import gimg6 from "../../../public/images/gallery-img-6.jpeg";
import gimg7 from "../../../public/images/gallery-img-7.jpeg";
import gimg8 from "../../../public/images/gallery-img-8.jpeg";
import gimg9 from "../../../public/images/gallery-img-9.jpeg";
import { Button } from "./ui/button";

const images = [
  { id: 1, name: gimg1, alt: "gallery-image" },
  { id: 2, name: gimg2, alt: "gallery-image" },
  { id: 3, name: gimg3, alt: "gallery-image" },
  { id: 4, name: gimg4, alt: "gallery-image" },
  { id: 5, name: gimg5, alt: "gallery-image" },
  { id: 6, name: gimg6, alt: "gallery-image" },
  { id: 7, name: gimg7, alt: "gallery-image" },
  { id: 8, name: gimg8, alt: "gallery-image" },
  { id: 9, name: gimg9, alt: "gallery-image" },
];

const gwendolyn = Gwendolyn({
  weight: "700",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Gallery() {
  return (
    <main className="bg-purplLight py-10" id="gallery">
      <h1
        className={`${gwendolyn.className} mb-8 text-center text-5xl font-bold text-purple-900`}
      >
        Gallery
      </h1>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((image) => (
            <Image
              className="w-[22rem]"
              key={image.id}
              quality={100}
              src={image.name}
              alt={image.alt}
            />
          ))}
        </div>
        <div className="mt-6 text-right">
          <Button asChild variant="link" className="text-lg text-purple-800">
            <Link
              href="/gallery"
              className={`text-lg tracking-wide ${playfairDisplay.className}`}
            >
              See More...
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
