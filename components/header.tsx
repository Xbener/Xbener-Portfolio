"use client";

import type React from "react";

import Link from "next/link";
import { Twitter, Github, Send, Youtube, Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 sticky top-0 z-50">
      <nav className="flex items-center justify-between py-4 rounded-full bg-black/80 border border-gray-400 backdrop-blur-sm mt-4 px-6">
        <div className="font-bold text-xl">MoonCity</div>
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
      </nav>
    </header>
  );
}
