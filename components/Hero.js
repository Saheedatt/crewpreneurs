"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative h-screen bg-gradient-to-br from-red-900 to-red-700 text-white bg-[url('/hero.jpg')] bg-cover bg-center bg-color-white"
      id="home"
      role="region"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 bg-[rgba(166,0,0,0.6)] z-0"
        aria-hidden="true"
      ></div>

      <nav
        className="absolute top-0 left-0 w-full flex items-center px-6 py-4 z-30 backdrop-blur-md bg-[rgba(5,5,5,0.5)] shadow-md"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex-1">
          {/* <a
            href="/"
            className="flex items-center"
            aria-label="Crewpreneurs Home"
          > */}
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="Crewpreneurs Logo"
    width={160}
    height={60}
  />
</Link>

        </div>

        <ul
          id="primary-navigation"
          className="hidden md:flex gap-6 justify-center flex-1 text-[#EFECE6]"
          role="menubar"
        >
          <li role="none">
            <a
              href="#home"
              role="menuitem"
              className="hover:text-red-300 transition-colors"
            >
              Home
            </a>
          </li>
          <li role="none">
            <a
              href="#about"
              role="menuitem"
              className="hover:text-red-300 transition-colors"
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              href="#gallery"
              role="menuitem"
              className="hover:text-red-300 transition-colors"
            >
              Gallery
            </a>
          </li>
          <li role="none">
            <a
              href="#contact"
              role="menuitem"
              className="hover:text-red-300 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="#signup"
            role="button"
            className="hidden md:inline-block bg-[#A60000] text-white font-semibold px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Sign Up
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white hover:text-red-300 transition-colors relative z-40"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          id="mobile-menu"
          className="absolute top-0 left-0 right-0 bg-white text-black shadow-lg md:hidden z-20"
          style={{ paddingTop: "80px" }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            <a
              href="#home"
              role="menuitem"
              className="hover:text-red-700 py-2 border-b border-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              role="menuitem"
              className="hover:text-red-700 py-2 border-b border-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#gallery"
              role="menuitem"
              className="hover:text-red-700 py-2 border-b border-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#contact"
              role="menuitem"
              className="hover:text-red-700 py-2 border-b border-gray-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#signup"
              className="bg-red-700 text-white py-3 px-4 rounded text-center hover:bg-red-800 mt-4 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </motion.div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <motion.div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-300 ${
          isOpen ? "blur-sm" : ""
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
          mass: 0.8,
          delay: 0.1,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
          A Collective of Builders Helping Brands Grow and Scale Their
          Businesses
        </h1>
        <button
          className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
          aria-label="Read more about Crewpreneurs"
        >
          Read More
        </button>
      </motion.div>
    </section>
  );
}
