"use client";

import { useState } from "react";
import Userview from "../components/Userview";

export default function Page() {
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
    "https://www.youtube.com/embed/AjxbqKcPX_4",
  ];

  const [loadedCount, setLoadedCount] = useState(0);

  const handleIframeLoad = () => setLoadedCount((c) => c + 1);

  const progress = Math.round((loadedCount / videoUrls.length) * 100);

  return (
    <Userview>
      <h1 className="bg-amber-800 font-bold text-5xl flex justify-center text-white p-5">
        Motivations Lyrics
      </h1>

      {/* LOADER AVEC POURCENTAGE */}
      {loadedCount < videoUrls.length && (
        <div className="flex flex-col justify-center items-center h-64">
          {/* 3 points animés */}
          <div className="flex space-x-2 mb-4">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-300 animate-bounce [animation-delay:0.4s]"></div>
          </div>

          {/* POURCENTAGE */}
          <p className="text-lg font-semibold text-amber-600">
            Chargement... {progress}%
          </p>

          {/* Détail */}
          <p className="text-sm text-amber-500 mt-1">
            {loadedCount} / {videoUrls.length} vidéos
          </p>
        </div>
      )}

      {/* GRID AVEC FLOU */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-7 transition-all ${
          loadedCount < videoUrls.length ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {videoUrls.map((url, index) => (
          <div key={index}>
            <iframe
              width="450"
              height="315"
              src={url}
              onLoad={handleIframeLoad}
              className="rounded-lg shadow-md w-full"
            ></iframe>

          </div>
        ))}
      </div> 
    </Userview>
  );
}
