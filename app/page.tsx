"use client";

import React, { useState } from "react";
import Link from "next/link";
import Userview from "./components/Userview";
import { FaMusic, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: FaMusic,
      title: "Apprenez avec des chansons",
      color: "text-indigo-500",
      textColor: "text-yellow-600",
      desc: "Plongez dans des paroles interactives, découvrez du vocabulaire et comprenez le contexte culturel.",
    },
    {
      icon: FaPlayCircle,
      title: "Apprenez avec des vidéos",
      color: "text-green-500",
      textColor: "text-yellow-600",
      desc: "Visionnez des discours et des vidéos de motivation pour enrichir votre expérience d'apprentissage.",
    },
    {
      icon: FaCheckCircle,
      title: "Testez vos connaissances",
      color: "text-purple-500",
      textColor: "text-yellow-600",
      desc: "Répondez à des quiz et à des défis pour consolider vos acquis et suivre vos progrès en anglais (s'amuser, apprendre, comprendre).",
    },
  ];

  return (
    <Userview className="min-h-screen">
      {/* ================= HERO ================= */}
      <div className="bg-amber-800">
        <div className="text-center pt-16 pb-10 px-4 sm:px-6 md:px-20">
          <h1 className="chocolate-font font-black mb-5 text-xl sm:text-xl md:text-5xl text-white leading-tight">
            APPRENEZ L&apos;ANGLAIS EN VOUS AMUSANT
          </h1>

          <p className="mb-5 text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Maîtrisez le vocabulaire et la grammaire grâce à vos chansons{" "}
            <br className="hidden sm:block" />
            préférées, des vidéos inspirantes et des quiz amusants.
          </p>

          <Link
            href="/quiz"
            className="bg-yellow-600 text-white px-5 py-3 rounded-full hover:bg-amber-950 transition-colors text-base sm:text-lg "
          >
            Commencez tout de suite
          </Link>
        </div>
      </div>

      {/* ================= SUBHEADING ================= */}
      <p className="chocolate-font text-center font-black mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl text-yellow-600 px-6 sm:px-6 md:px-20">
        UNE NOUVELLE FAÇON D&apos;APPRENDRE
      </p>

      <p className="text-center px-6 sm:px-6 md:px-20 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Explorez des contenus qui vous passionnent et constatez une nette{" "}
        <br className="hidden md:block" />
        amélioration de votre anglais. Notre méthode repose sur trois piliers{" "}
        <br className="hidden md:block" />
        fondamentaux pour un apprentissage à la fois efficace et agréable
      </p>

      {/* ================= FEATURES ================= */}
     <div className="flex flex-col md:flex-row 
                justify-center items-center 
                gap-10 
                w-full 
                px-4">

  {/* CHANSONS */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full">
    <FaMusic size={32} className="text-blue-500 mb-3" />

    <p className="text-2xl font-bold text-amber-500 hover:text-amber-700 cursor-pointer text-center">
      <Link href="/lyrics">Apprenez avec des chansons</Link>
    </p>

    <p className="text-gray-700 mt-2 text-center">
      Plongez dans des paroles interactives, découvrez du vocabulaire et
      comprenez le contexte culturel.
    </p>
  </div>

  {/* VIDÉOS */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full">
    <FaPlayCircle size={32} className="text-green-500 mb-3" />

    <p className="text-2xl text-amber-500 hover:text-amber-700 font-semibold cursor-pointer text-center">
      <Link href="/motivation">Apprenez avec des vidéos</Link>
    </p>

    <p className="text-gray-700 mt-2 text-center">
      Visionnez des discours et des vidéos de motivation pour enrichir
      votre expérience d'apprentissage.
    </p>
  </div>

  {/* QUIZ */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full">
    <FaCheckCircle size={32} className="text-purple-500 mb-3" />

    <p className="text-2xl text-amber-500 hover:text-amber-700 font-semibold cursor-pointer text-center">
      <Link href="/quiz">Testez vos connaissances</Link>
    </p>

    <p className="text-gray-700 mt-2 text-center">
      Répondez à des quiz et à des défis pour consolider vos acquis et suivre vos
      progrès en anglais.
    </p>
  </div>

</div>


      <div className="text-center mt-8 mb-10 px-4 sm:px-6 md:px-20 max-w-3xl mx-auto">
        <h1 className="chocolate-font font-black mb-5 text-2xl sm:text-3xl md:text-4xl text-yellow-600 leading-snug">
          Prêt à libérer votre potentiel en anglais ?
        </h1>
        <p className="text-base sm:text-lg">
          Rejoignez-nous pour maîtriser l&apos;anglais grâce au contenu que nous
          aimons.
        </p>
        <Link
          href="/quiz"
          className="mb-5 text-lg sm:text-2xl md:text-4xl text-yellow-600 rounded mt-5 inline-block px-4 py-2"
        >
          commencez à apprendre
        </Link>
      </div>
    </Userview>
  )
}