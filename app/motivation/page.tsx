"use client";

import { useState } from "react";
import Userview from "../components/Userview";

export default function Page() {

  // 🔥 Liste des URLs de vidéos (on les utilise pour compter)
  const videoUrls = [
    "https://www.youtube.com/embed/5a5VSkkdpB4",
    "https://www.youtube.com/embed/m9Nkqm7FFgk",
    "https://www.youtube.com/embed/fgFM6f50bZo",
    "https://www.youtube.com/embed/1bumPyvzCyo",
    "https://www.youtube.com/embed/1i9kcBHX2Nw",
    "https://www.youtube.com/embed/nIwU-9ZTTJc",
    "https://www.youtube.com/embed/42QjAxty_1o",
    "https://www.youtube.com/embed/o4gEmLpxHHk",
    "https://www.youtube.com/embed/KMEe2ni92rQ",
    "https://www.youtube.com/embed/5mXFlne4JB8",
    "https://www.youtube.com/embed/r3aCv8b2OfE",
    "https://www.youtube.com/embed/AjxbqKcPX_4"
  ];

  // ⚡ Compteur de vidéos chargées
  const [loadedCount, setLoadedCount] = useState(0);

  // 🟢 Fonction exécutée quand une iframe a fini de charger
  const handleIframeLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <Userview>
      <h1 className="text-amber-500 font-bold text-5xl m-10 justify-center flex">
        Motivations Lyrics
      </h1>

      {/* Loader animé */}
      {loadedCount < videoUrls.length && (
        <div className="flex flex-col justify-center items-center h-64">
          <div className="loader border-4 border-amber-500 border-t-transparent rounded-full w-16 h-16 animate-spin mb-4"></div>
          <div className="text-lg font-semibold text-amber-500">
            Chargement... ({loadedCount}/{videoUrls.length})
          </div>
        </div>
      )}

      {/* GRID VIDÉOS */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ms-4 mb-7 ${loadedCount < videoUrls.length ? "blur-sm pointer-events-none" : ""}`}>
        
        {/* 🔁 On génère toutes les vidéos automatiquement */}
        {videoUrls.map((url, index) => (
          <div key={index}>
            <iframe
              width="450"
              height="315"
              src={url}
              onLoad={handleIframeLoad} // 🔥 Très important !
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Description automatique (modifiable si tu veux) */}
            <p className="text-2xl">
              Vidéo motivation #{index + 1}
            </p>
          </div>
        ))}
      </div>

    </Userview>
  );
}
