import Link from "next/link";

// facebook, pintrest, instagram, youtube
// FONTAWESOME
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import footerImg from "../../../public/images/letteringbymusktan-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-gray-200 md:h-40" id="footer">
      <div className="container h-full max-xl:p-0 md:flex md:items-center">
        <div className="mx-auto max-md:py-6 md:w-1/3">
          <Link href="#">
            <Image src={footerImg} alt="logo" className="w-full lg:w-11/12" />
          </Link>
        </div>
        <div className="flex h-full items-center justify-center gap-5 max-md:py-6 md:w-1/3">
          <Link className="block" href="https://twitter.com/the_yugandharr">
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-7 text-gray-600 hover:text-[#316FF6]"
            />
          </Link>
          <Link className="block" href="https://github.com/YugandharrPatil">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-7 text-gray-600 hover:text-[#C13584]"
            />
          </Link>
          <Link
            className="block"
            href="https://www.instagram.com/the_yugandharr/"
          >
            <FontAwesomeIcon
              icon={faPinterest}
              className="h-7 text-gray-600 hover:text-[#e60023]"
            />
          </Link>
          <Link className="block" href="mailto:yugandharrpatil@gmail.com">
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-7 text-gray-600 hover:text-[#ff0000]"
            />
          </Link>
        </div>
        <div className="max-md:py-6 md:w-1/3">
          <h3 className="text-center text-lg">
            Or Mail Us Here
            <ArrowRight className="mr-2 inline h-5 w-5" />
            <Link href="mailto:example@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="inline h-7 text-gray-600 hover:text-blue-500"
              />
            </Link>
          </h3>
        </div>
      </div>
    </footer>
  );
}
