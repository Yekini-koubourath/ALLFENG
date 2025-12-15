"use client";

import React, { useState, useRef, useEffect } from "react";
import Userview from "../components/Userview";

export default function Page() {
  const videoUrls: string[] = [
    "https://www.youtube.com/embed/P0Qa3duVhOs",
    "https://www.youtube.com/embed/GgASxM_Ju_c",
    "https://www.youtube.com/embed/2rr_mS_Lpo0",
    "https://www.youtube.com/embed/eFDZOoVB2Ek",
    "https://www.youtube.com/embed/cMYYpvXPLkE",
    "https://www.youtube.com/embed/HyD5D70ohew",
    "https://www.youtube.com/embed/CxUOl1I3w0E",
    "https://www.youtube.com/embed/SKM3A0uJYlI",
    "https://www.youtube.com/embed/Ytn9LbUAhxs",
    "https://www.youtube.com/embed/K_iH2YSaY3U",
    "https://www.youtube.com/embed/_IqI2bf9CCQ",
    "https://www.youtube.com/embed/lgM0jMqAVPM",
    "https://www.youtube.com/embed/Wc-VoftQQUs",
    "https://www.youtube.com/embed/0jJmzo9JyzI",
    "https://www.youtube.com/embed/KUeGr9rzP_Y",
    "https://www.youtube.com/embed/b4o0_x3mIbo",
    "https://www.youtube.com/embed/aWIWe7alFno",
    "https://www.youtube.com/embed/NKfXFqOvKbY",
    "https://www.youtube.com/embed/tDcO59ITTV0",
    "https://www.youtube.com/embed/5gg17XXXiNo",
    "https://www.youtube.com/embed/aooeDr13d9g",
    "https://www.youtube.com/embed/rExJ6j5OeCo",
    "https://www.youtube.com/embed/tMpgzYUoVDE",
    "https://www.youtube.com/embed/8VD9Bmo2Yuc",
    "https://www.youtube.com/embed/qm-QoJcra8U",
    "https://www.youtube.com/embed/m_uWS6K-VF8",
    "https://www.youtube.com/embed/p-JNeYeOgpA",
    "https://www.youtube.com/embed/8t726dPkr70",
    "https://www.youtube.com/embed/GSckfkuYQRw",
    "https://www.youtube.com/embed/-xrecZrxg40",
    "https://www.youtube.com/embed/ErGZkggRgaw",
    "https://www.youtube.com/embed/SqBHVlQUqQk",
    "https://www.youtube.com/embed/0Y6Om-xYC0k",
    // …
  ];

  // ✅ TYPES AJOUTÉS
  const [visibleVideos, setVisibleVideos] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ CORRECTION CRITIQUE ICI
            const target = entry.target as HTMLElement;
            const index = Number(target.dataset.index);

            setVisibleVideos((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
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
      <h1 className="bg-amber-800 text-white text-5xl font-bold text-center p-5 mb-10">
        English Lyrics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-10">
        {videoUrls.map((url, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className="min-h-[315px]"
          >
            {visibleVideos.includes(i) ? (
              <iframe
                src={url}
                width="100%"
                height="315"
                className="rounded-lg shadow-md"
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
