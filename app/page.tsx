"use client";

import React from "react";
import Link from "next/link";
import Userview from "./components/Userview";
import { FaMusic, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

export default function Page() {

  return (
    <Userview className="min-h-screen">

      {/* ================= HERO VIDEO ================= */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/video-de-fond.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-20">
          <h1 className="font-black mb-5 text-3xl sm:text-2xl md:text-5xl text-white leading-tight
                         drop-shadow-lg">
            APPRENEZ L&apos;ANGLAIS EN VOUS AMUSANT
          </h1>

          <p className="mb-5 text-white text-base sm:text-2xl md:text-xl max-w-3xl drop-shadow-md">
            Maîtrisez le vocabulaire et la grammaire grâce à vos chansons
            <br className="hidden sm:block" />
            préférées, des vidéos inspirantes et des quiz amusants.
          </p>

          <Link href="/quiz">
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-amber-950 shadow-lg transition-colors">
              Commencez tout de suite
            </button>
          </Link>
        </div>
      </div>

      {/* ================= SUBHEADING ================= */}
      <p className="text-center font-black mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl text-yellow-600 px-6">
        UNE NOUVELLE FAÇON D&apos;APPRENDRE
      </p>

      <p className="text-center px-6 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
        Explorez des contenus qui vous passionnent et constatez une nette
        <br className="hidden md:block" />
        amélioration de votre anglais. Notre méthode repose sur trois piliers
        <br className="hidden md:block" />
        fondamentaux pour un apprentissage à la fois efficace et agréable
      </p>

      {/* ================= FEATURES ================= */}
      <div className="flex flex-col md:flex-row mt-12 justify-center items-center gap-10 px-4">

        {/* QUIZ */}
        <div className="shadow-lg p-5 flex flex-col items-center max-w-sm w-full bg-amber-800 rounded-3xl hover:scale-105 transition-transform">
          <FaCheckCircle size={32} className="text-white mb-3" />
          <h3 className="text-2xl text-white font-semibold mb-2 text-center">
            Testez vos connaissances
          </h3>
          <p className="text-white text-center">
            Répondez à des quiz et à des défis pour consolider vos acquis et suivre vos
            progrès en anglais.
          </p>
          <Link href="/quiz">
            <button className="px-4 py-2 bg-white text-black rounded-full mt-3 hover:bg-amber-600">
              Démarrer
            </button>
          </Link>
        </div>

        {/* CHANSONS */}
        <div className="shadow-lg p-5 flex flex-col items-center max-w-sm w-full bg-white rounded-3xl hover:scale-105 transition-transform">
          <FaMusic size={32} className="text-black mb-3" />
          <h3 className="text-2xl text-black font-semibold mb-2 text-center">
            Apprenez avec des chansons
          </h3>
          <p className="text-black text-center">
            Plongez dans des paroles interactives, découvrez du vocabulaire et
            comprenez le contexte culturel.
          </p>
          <Link href="/lyrics">
            <button className="px-4 py-2 bg-black text-white rounded-full mt-3 hover:bg-amber-600">
              Démarrer
            </button>
          </Link>
        </div>

        {/* VIDÉOS */}
        <div className="shadow-lg p-5 flex flex-col items-center max-w-sm w-full bg-amber-800 rounded-3xl hover:scale-105 transition-transform">
          <FaPlayCircle size={32} className="text-white mb-3" />
          <h3 className="text-2xl text-white font-semibold mb-2 text-center">
            Apprenez avec des vidéos
          </h3>
          <p className="text-white text-center">
            Visionnez des discours et des vidéos de motivation pour enrichir
            votre expérience d'apprentissage.
          </p>
          <Link href="/motivation">
            <button className="px-4 py-2 bg-white text-black rounded-full mt-3 hover:bg-amber-600">
              Démarrer
            </button>
          </Link>
        </div>

      </div>

      {/* ================= FINAL CALL ================= */}
      <div className="text-center mt-8 mb-10 px-4 max-w-3xl mx-auto">
        <h1 className="font-black mb-5 text-2xl sm:text-3xl md:text-4xl text-yellow-600 leading-snug">
          Prêt à libérer votre potentiel en anglais ?
        </h1>
        <p className="text-base sm:text-lg">
          Rejoignez-nous pour maîtriser l'anglais grâce au contenu que nous aimons.
        </p>
        <Link href="/quiz">
          <button className="bg-amber-600 p-3 hover:bg-amber-700 rounded-full mt-5 text-white text-lg sm:text-xl">
            Commencez à apprendre
          </button>
        </Link>
        
      </div>

    </Userview>
  );
}
