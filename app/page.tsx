"use client";

import React, { useState } from "react";
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
        <div className="text-center pt-16 pb-6 px-4 sm:px-6 md:px-20">
          <h1 className="chocolate-font font-black mb-5 text-3xl sm:text-4xl md:text-5xl text-yellow-600 leading-tight">
            APPRENEZ L'ANGLAIS EN VOUS AMUSANT
          </h1>

          <p className="mb-5 text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Maîtrisez le vocabulaire et la grammaire grâce à vos chansons <br className="hidden sm:block" />
            préférées, des vidéos inspirantes et des quiz amusants.
          </p>

          <button className="bg-yellow-600 text-white px-5 py-3 rounded-full hover:bg-amber-950 transition-colors text-base sm:text-lg">
            Commencez votre essai gratuit
          </button>
        </div>
      </div>

      {/* ================= SUBHEADING ================= */}
      <p className="chocolate-font text-center font-black mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl text-yellow-600 px-4 sm:px-6 md:px-20">
        UNE NOUVELLE FAÇON D'APPRENDRE
      </p>

      <p className="text-center px-4 sm:px-6 md:px-20 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Explorez des contenus qui vous passionnent et constatez une nette <br className="hidden md:block" />
        amélioration de votre anglais. Notre méthode repose sur trois piliers <br className="hidden md:block" />
        fondamentaux pour un apprentissage à la fois efficace et agréable
      </p>

      {/* ================= FEATURES ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-8 md:mt-10 mb-10 px-4 sm:px-0">
        {features.map(({ icon: Icon, title, color, textColor, desc }, i) => (
          <div key={i} className="flex flex-col items-center shadow-2xl p-6 rounded-lg w-full max-w-xs">
            <Icon size={40} className={`${color} mb-2`} />
            <p className={`chocolate-font font-bold ${textColor} text-center`}>{title}</p>
            <p className="text-base text-center mt-2">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 mb-10 px-4 sm:px-6 md:px-20 max-w-3xl mx-auto">
        <h1 className="chocolate-font font-black mb-5 text-2xl sm:text-3xl md:text-4xl text-yellow-600 leading-snug">
          Prêt à libérer votre potentiel en anglais ?
        </h1>
        <p className="text-base sm:text-lg">
          Rejoignez-nous pour maîtriser l'anglais grâce au contenu que nous aimons.
        </p>
        <div className="mb-5 text-lg sm:text-2xl md:text-4xl text-yellow-600 rounded mt-5 inline-block px-4 py-2">
          Inscrivez-vous et commencez à apprendre
        </div>
      </div>

      <footer className="text-center py-4 text-white bg-amber-800 text-sm sm:text-base">
        copyright © 2025 ALLFENG
      </footer>
    </Userview>
  );
}

