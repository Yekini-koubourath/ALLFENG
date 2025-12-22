"use client";

import React, { useState, useRef, useEffect } from "react";
import Userview from "../components/Userview";

export default function Page() {
  // Liste des vidéos avec options pour cacher les suggestions et montrer les contrôles
  const videoUrls: string[] = [
    "https://www.youtube.com/embed/P0Qa3duVhOs?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/GgASxM_Ju_c?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/2rr_mS_Lpo0?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/eFDZOoVB2Ek?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/cMYYpvXPLkE?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/HyD5D70ohew?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/CxUOl1I3w0E?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/SKM3A0uJYlI?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/Ytn9LbUAhxs?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/K_iH2YSaY3U?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/_IqI2bf9CCQ?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/lgM0jMqAVPM?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/Wc-VoftQQUs?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/0jJmzo9JyzI?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/KUeGr9rzP_Y?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/b4o0_x3mIbo?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/aWIWe7alFno?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/NKfXFqOvKbY?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/tDcO59ITTV0?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/5gg17XXXiNo?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/aooeDr13d9g?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/rExJ6j5OeCo?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/tMpgzYUoVDE?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/8VD9Bmo2Yuc?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/qm-QoJcra8U?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/m_uWS6K-VF8?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/p-JNeYeOgpA?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/8t726dPkr70?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/GSckfkuYQRw?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/-xrecZrxg40?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/ErGZkggRgaw?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/SqBHVlQUqQk?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1",
    "https://www.youtube.com/embed/0Y6Om-xYC0k?controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
  ];

  const [visibleVideos, setVisibleVideos] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Number(target.dataset.index);

            setVisibleVideos((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );

            observer.unobserve(target);
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
      <h1 className="bg-amber-800 text-white text-5xl font-bold text-center p-5">
        SONG LYRICS
      </h1>
      <p className="text-center bg-amber-800 text-white pb-7">
        Chantez, écoutez et progressez en anglais facilement.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-10">
        {videoUrls.map((url, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="min-h-[315px] rounded-lg overflow-hidden shadow-md"
          >
            {visibleVideos.includes(i) ? (
              <iframe
                src={url} // ✅ les vidéos ne montreront plus les suggestions à la fin
                width="100%"
                height="315"
                className="rounded-lg shadow-md"
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
