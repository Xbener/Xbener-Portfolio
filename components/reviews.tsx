import Image from "next/image";
import StackIcon from "tech-stack-icons";
import reviewsData from "@/lib/review.json";
import letter from "@/lib/letter.json";

export default function Reviews() {
  return (
    <section id="reviews" className="w-full mt-32 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Results-driven and highly experienced Software Engineer
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +7 Years Experience
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +20 Web2 Projects
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +15 Web3 Projects
        </div>
      </div>
      <div className="xl:mx-52 md:mx-12 sm:mx-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 bg-${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {review.avatarInitial}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.username}</div>
                </div>
              </div>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="skills" className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <StackIcon name="js" />
          <StackIcon name="typescript" />
          <StackIcon name="c++" />
          <StackIcon name="python" />
          <StackIcon name="reactjs" />
          <StackIcon name="vuejs" />
          <StackIcon name="angular17" />
          <StackIcon name="nextjs2" />
          <StackIcon name="nodejs" />
          <StackIcon name="nestjs" />
          <StackIcon name="django" />
          <StackIcon name="mongodb" />
          <StackIcon name="mysql" />
          <StackIcon name="postgresql" />
          <StackIcon name="firebase" />
          <StackIcon name="supabase" />
          <StackIcon name="graphql" />
          <StackIcon name="electron" />
          <StackIcon name="vitejs" />
          <Image
            src={letter[3]?.rust || ""}
            width="100"
            height="100"
            alt="rust"
          />
          <Image
            src={letter[3]?.solidity || ""}
            width="100"
            height="100"
            alt="solidity"
          />
          <Image
            src={letter[3]?.aws || ""}
            width="100"
            height="100"
            alt="aws"
          />
          <Image
            src={letter[3]?.vercel || ""}
            width="100"
            height="100"
            alt="vercel"
          />
          <StackIcon name="azure" />
          <StackIcon name="docker" />
          <StackIcon name="git" />
          <StackIcon name="digitalocean" />
          <StackIcon name="linux" />
          <StackIcon name="ubuntu" />
        </div>
      </section>
    </section>
  );
}
