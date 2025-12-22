"use client";

import { useState, useRef, useEffect } from "react";
import Userview from "../components/Userview";

export default function Page() {
  const videoUrls: string[] = [
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

  // ✅ State typé et refs typées
  const [visibleVideos, setVisibleVideos] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver pour charger les vidéos au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement; // ✅ cast pour dataset
            const index = Number(target.dataset.index);

            setVisibleVideos((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );

            observer.unobserve(target); // optionnel pour améliorer la perf
          }
        });
      },
      { rootMargin: "200px" }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Userview>
      <h1 className="bg-amber-800 font-bold flex justify-center text-white p-5 text-center text-5xl font-bold">
        MOTIVATIONAL LYRICS
      </h1>
<p className="text-white bg-amber-800 mb-6 w-full text-center pb-4 mb-7">Discours motivants pour booster votre apprentissage.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-7">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            ref={(el) => { refs.current[index] = el }} // ✅ retourne void
            data-index={index}
            className="mb-5 min-h-[315px] relative"
          >
            {visibleVideos.includes(index) ? (
              <iframe
                width="450"
                height="315"
                src={url}
                className="rounded-lg shadow-md w-full"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-[315px] bg-gray-200 flex items-center justify-center text-gray-500">
                Chargement...
              </div>
            )}
          </div>
        ))}
      </div>
    </Userview>
  );
}
