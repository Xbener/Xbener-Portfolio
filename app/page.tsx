import Image from "next/image";
import Reviews from "@/components/reviews";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="text-white">
      <main className="grid-background min-h-screen flex flex-col items-center justify-center flex-1 max-w-6xl mx-auto px-4 text-center pt-32 pb-20">
        {/* Hero Section */}
        <div className="flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter">
            MoonCity
          </h1>
          <Image
            src="/moon.png"
            alt="Moon"
            width={60}
            height={60}
            className="ml-2 -mt-4"
          />
        </div>

        <p className="mt-8 text-xl">
          The name is <span className="text-yellow-300">James Jam</span>, but
          you can call me <span className="text-yellow-300">Mooncity</span> 🌙.
        </p>
        <p className="mt-2 text-xl">
          I am a Software Engineer and an Open-source enthusiast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
            Tech Skills
          </button>
          <button className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition">
            Let's get in touch ↗
          </button>
        </div>
      </main>
      {/* Reviews Section */}
      <Reviews />
      {/* Projects Section */}
      <Projects />
    </div>
  );
}
