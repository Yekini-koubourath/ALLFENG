"use client";

import React, { useState } from "react";
import Userview from "../components/Userview";

export default function Page() {
  const [loadedCount, setLoadedCount] = useState(0);

  const videoUrls = [
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
  ];

  const handleIframeLoad = () => setLoadedCount((c) => c + 1);

  const progress = Math.round((loadedCount / videoUrls.length) * 100);

  return (
    <Userview>
      <h1 className="flex bg-amber-800 text-white mb-10 w-full font-bold text-5xl justify-center p-5">
        English Lyrics
      </h1>

      {/* LOADER */}
      {loadedCount < videoUrls.length && (
        <div className="flex flex-col justify-center items-center h-64">
          {/* Points */}
          <div className="flex space-x-2 mb-4">
            <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-4 h-4 rounded-full bg-amber-300 animate-bounce [animation-delay:0.4s]"></div>
          </div>

          <p className="text-lg font-semibold text-amber-500">
            Chargement... {progress}%
          </p>

          <p className="text-sm text-amber-400 mt-1">
            {loadedCount} / {videoUrls.length} vidéos
          </p>
        </div>
      )}

      {/* GRID + FLOU */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mb-10 transition-all ${
          loadedCount < videoUrls.length ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {videoUrls.map((url, i) => (
          <div key={i} className="mb-5">
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
