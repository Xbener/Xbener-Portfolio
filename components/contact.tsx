import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="bg-black w-full mt-32 pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-xl">
          Want to chat? Just shoot me a dm{" "}
          <Link href="" className="text-blue-400 hover:underline">
            with a direct question on twitter
          </Link>{" "}
          and I'll respond whenever I can.
        </p>
      </div>
    </section>
  );
}
