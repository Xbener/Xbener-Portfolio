import Link from "next/link";
import letter from "@/lib/letter.json";

export default function Contact() {
  return (
    <section id="contact" className="bg-black w-full mt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-xl">
          Want to chat? Just shoot me a dm{" "}
          <Link
            href="https://www.linkedin.com/in/deng-weile"
            className="text-blue-400 hover:underline"
          >
            with a direct question on Linkedin
          </Link>{" "}
          {letter[1].respond}
        </p>
      </div>
    </section>
  );
}
