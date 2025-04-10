import Image from "next/image";
import Link from "next/link";
import projectsData from "../lib/project.json";

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-32 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Recent Projects
      </h2>
      <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
        I've worked on a variety of projects, from web2 to web3 Dapp. Here are a
        few of my favorites.
      </p>

      <div className="xl:mx-52 md:mx-12 sm:mx-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
            >
              <div className="p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 mb-6">
                  {/* {project.technologies.map((tech, index) => (
                    <TechIcon key={index} tech={tech} />
                  ))} */}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:bg-white/5 transition"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
