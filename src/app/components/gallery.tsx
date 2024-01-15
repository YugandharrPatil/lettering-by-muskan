import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Gallery() {
  return (
    <main>
      {/* <Image />
      <Image />
      <Image /> */}
      <Link href="/gallery">See More...</Link>
      <h1>Gallery</h1>
    </main>
  );
}
