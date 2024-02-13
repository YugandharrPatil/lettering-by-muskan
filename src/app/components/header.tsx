import { Gwendolyn, Mea_Culpa } from "next/font/google";
import Image from "next/image";
import gimg3 from "../../../public/images/gallery-img-7.jpeg";

const meaCupla = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

const gwendolyn = Gwendolyn({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="bg-purplMedium h-screen pt-20 md:pt-24">
      {/* ABOVE LARGE SCREENS */}
      <div className="container flex h-full items-center max-lg:hidden">
        <div className="w-5/12 text-black">
          <h1 className={`text-8xl ${gwendolyn.className} text-purple-900`}>
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              L
            </span>
            ettering{" "}
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              B
            </span>
            y <br />{" "}
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              M
            </span>
            uskan
          </h1>
          <h3
            className={`mt-4 text-[2.5rem] font-medium ${meaCupla.className} text-purple-900`}
          >
            Breathtaking calligraphy on any surface
          </h3>
        </div>
        <div className="relative h-5/6 w-7/12 border-2">
          <Image
            src={gimg3}
            alt="logo"
            className="absolute object-cover"
            fill
          />
        </div>
      </div>

      {/* BELOW LARGE SCREENS */}
      <div className="container flex h-full flex-col justify-center gap-10 pt-10 lg:hidden">
        <div className="relative mx-auto h-3/4 w-full lg:w-3/4">
          <Image
            src={gimg3}
            alt="logo"
            className="absolute object-cover"
            fill
          />
        </div>
        <div className="text-center">
          <h1 className={`text-7xl ${gwendolyn.className} text-purple-900`}>
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              L
            </span>
            ettering{" "}
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              B
            </span>
            y <br />{" "}
            <span className="z-10 text-purple-900 drop-shadow-[-4px_0px_#c084fc]">
              M
            </span>
            uskan
          </h1>

          <h3
            className={`mt-4 pb-10 text-4xl font-medium text-purple-900 ${meaCupla.className}`}
          >
            Breathtaking calligraphy on any surface!
          </h3>
        </div>
      </div>
    </header>
  );
}
