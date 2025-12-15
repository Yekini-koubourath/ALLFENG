"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Quiz", href: "/quiz" },
    { name: "Lyrics", href: "/lyrics" },
    { name: "Motivation", href: "/motivation" },
    { name: "Profile", href: "/profile" },
    { name: "Aide", href: "/aide" },
    { name:"Don", href:"/don"},
  ];

  return (
    <nav className="bg-amber-800 bg-[url('/images/grid.svg')] bg-repeat p-4 flex flex-col md:flex-row items-center justify-between relative">
      {/* Logo + Titre */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between">
        <div className="relative w-22 h-12">
          <Image
            src="/images/logo-quiz.jpg"
            alt="ALLFENG"
            fill
            className="object-cover"
          />
        </div>
        <span className="font-bold text-xl text-white hidden md:inline">ALLFENG</span>

        {/* Burger button mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu desktop */}
      <ul className="hidden md:flex items-center gap-4 bg-yellow-600 px-6 py-2 rounded-full mt-4 md:mt-0">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-amber-800 text-white"
                    : "text-white hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Flags desktop */}
      <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
        <Image
          src="/images/america-flag.png"
          width={32}
          height={32}
          alt="America Flag"
        />
        <Image
          src="/images/france-flag.jpg"
          width={32}
          height={32}
          alt="France Flag"
        />
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="w-full bg-yellow-600 flex flex-col items-center gap-4 py-4 md:hidden mt-2 rounded-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-full transition-colors w-3/4 text-center ${
                  isActive
                    ? "bg-amber-800 text-white"
                    : "text-white hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 mt-2">
            <Image
              src="/images/america-flag.png"
              width={32}
              height={32}
              alt="America Flag"
            />
            <Image
              src="/images/france-flag.jpg"
              width={32}
              height={32}
              alt="France Flag"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
