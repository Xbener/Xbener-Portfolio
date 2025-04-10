import Link from "next/link";
import { Twitter, Github, Send, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl mb-4 md:mb-0">Xbener</div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <Link href="#reviews" className="hover:text-white transition">
                Reviews
              </Link>
              <Link href="#projects" className="hover:text-white transition">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-yellow-300 transition"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="hover:text-yellow-300 transition"
              >
                <Github size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Telegram"
                className="hover:text-yellow-300 transition"
              >
                <Send size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Medium"
                className="hover:text-yellow-300 transition"
              >
                <div className="w-4 h-4 rounded-full border border-white"></div>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hover:text-yellow-300 transition"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-yellow-300 transition"
              >
                <Instagram size={18} />
              </Link>
            </div>
            <div className="text-sm text-gray-400">Copyright © 2025 Xbener</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
