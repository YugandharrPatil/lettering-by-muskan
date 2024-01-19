import Image from "next/image";
import logo from "../../../public/logo.jpeg";

export default function Header() {
  return (
    <header className="h-screen bg-purple-400 pt-20 md:pt-24">
      {/* ABOVE LARGE SCREENS */}
      <div className="container flex h-full items-center justify-between max-lg:hidden">
        <div className="w-5/12">
          <h1 className="text-5xl font-bold">
            Excellent Calligraphy on Demand
          </h1>
          <h3 className="mt-4 text-2xl font-medium">
            We letter on any surface you like
          </h3>
          <p className="mt-1 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            libero.
          </p>
        </div>
        <div className="relative h-5/6 w-7/12 border-2">
          <Image src={logo} alt="logo" className="absolute object-cover" fill />
        </div>
      </div>

      {/* BELOW LARGE SCREENS */}
      <div className="container flex h-full flex-col justify-center gap-10 pt-10 lg:hidden">
        <div className="relative mx-auto h-3/4 w-full lg:w-3/4">
          <Image src={logo} alt="logo" className="absolute object-cover" fill />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Excellent Calligraphy on Demand
          </h1>
          <h3 className="mt-4 text-2xl font-medium">
            We letter on any surface you like
          </h3>
          <p className="mt-1 pb-10 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            libero.
          </p>
        </div>
      </div>
    </header>
  );
}
