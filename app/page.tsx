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
        
    {/* ================= HERO VIDEO ================= */}
<div className="relative h-screen w-full overflow-hidden">

  {/* Vidéo en arrière-plan */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/videos/video-de-fond.mp4" type="video/mp4" />
  </video>

  {/* Voile sombre (optionnel mais recommandé) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Texte au-dessus de la vidéo */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-20">

    <h1 className="chocolate-font font-black mb-5 
      text-3xl sm:text-2xl md:text-5xl text-white leading-tight
      drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
      APPRENEZ L&apos;ANGLAIS EN VOUS AMUSANT
    </h1>

    <p className="mb-5 text-white text-base sm:text-2xl md:text-xl max-w-3xl
      drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
      Maîtrisez le vocabulaire et la grammaire grâce à vos chansons
      <br className="hidden sm:block" />
      préférées, des vidéos inspirantes et des quiz amusants.
    </p>

    <Link
      href="/quiz"
      className="bg-yellow-600 text-white px-6 py-3 rounded-full
      hover:bg-amber-950 transition-colors text-base sm:text-lg
      shadow-lg"
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
     <div className="flex flex-col md:flex-row mt-12
                justify-center items-center 
                gap-10 
                w-full 
                px-4">
{/* QUIZ */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full bg-amber-800">
    <FaCheckCircle size={32} className="text-white mb-3" />

    <p className="text-2xl text-white hover:text-black font-semibold cursor-pointer text-center">
      <p>Testez vos connaissances</p>
    </p>

    <p className="text-white mt-2 text-center">
      Répondez à des quiz et à des défis pour consolider vos acquis et suivre vos
      progrès en anglais.
    </p>
    <Link href="/quiz" passHref>
    <button className="px-4 py-2 bg-white text-black rounded hover:bg-amber-600 mt-3">Démarrer</button>
    </Link>
  </div>

  {/* CHANSONS */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full">
    <FaMusic size={32} className="text-blue-500 mb-3" />

    <p className="text-2xl font-bold text-amber-500 hover:text-amber-700 cursor-pointer text-center">
      <p>Apprenez avec des chansons</p>
    </p>

    <p className="text-gray-700 mt-2 text-center">
      Plongez dans des paroles interactives, découvrez du vocabulaire et
      comprenez le contexte culturel.
    </p>
<Link href="/lyrics" passHref>
  <button className="px-4 py-2 bg-amber-800 text-white rounded hover:bg-amber-600 mt-3">
    Démarrer
  </button>
</Link>

  </div>

  {/* VIDÉOS */}
  <div className="shadow p-5 flex flex-col items-center max-w-sm w-full bg-amber-800">
    <FaPlayCircle size={32} className="text-white mb-3" />

    <p className="text-2xl text-white hover:text-black font-semibold cursor-pointer text-center">
      <p>Apprenez avec des vidéos</p>
    </p>

    <p className="text-white mt-2 text-center">
      Visionnez des discours et des vidéos de motivation pour enrichir
      votre expérience d'apprentissage.
    </p>
    <Link href="/motivation" passHref>
    <button className="px-4 py-2 bg-white text-black rounded hover:bg-amber-600 mt-3">Démarrer</button>
    </Link>
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
          href="/quiz" passHref
          className="mb-5 text-lg sm:text-2xl md:text-4xl text-amber-500 rounded mt-5 inline-block px-4 py-2"
        >
          <button>
          commencez à apprendre
          </button>
        </Link>
      </div>
    </Userview>
  )
}