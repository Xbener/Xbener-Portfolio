"use client";

import type React from "react";

import Link from "next/link";
import {
  Twitter,
  Github,
  Send,
  Youtube,
  Instagram,
  Linkedin,
  LinkedinIcon,
} from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 sticky top-0 z-50">
      <nav className="flex items-center justify-between py-4 rounded-full bg-black/80 border border-gray-400 backdrop-blur-sm mt-4 px-6">
        <div className="font-bold text-xl">Xbener</div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="#reviews" className="hover:text-yellow-300 transition">
            Reviews
          </Link>
          <Link href="#projects" className="hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/Xbener"
            aria-label="GitHub"
            className="hover:text-yellow-300 transition"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://t.me/xbener95"
            aria-label="Telegram"
            className="hover:text-yellow-300 transition"
          >
            <Send size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/xbener"
            aria-label="LinkedIn"
            className="hover:text-yellow-300 transition"
          >
            <LinkedinIcon size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
