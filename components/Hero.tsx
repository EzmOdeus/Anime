import Image from "next/image";
import motion from "framer-motion";
function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/seyam.png"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[60vh] justify-center">
        <Image
          src="/26543-2-uchiha-sasuke-transparent-image (1).png"
          alt="anime"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}

export default Hero;
