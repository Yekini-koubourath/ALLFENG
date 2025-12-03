"use client";

import React, { useState } from "react";
import Userview from "../components/Userview";

export default function LyricsPage() {
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

  const handleIframeLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <Userview>
      <h1 className="flex text-amber-500 mb-10 mt-6 ms-27 font-bold text-5xl justify-center">
        English Lyrics
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ms-3">
        {videoUrls.map((url, index) => (
          <div key={index} className="mb-5">
            <iframe
              width="450"
              height="315"
              src={url}
              frameBorder="0"
              title={`YouTube video ${index + 1}`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        ))}
      </div>

      {/* Styles du spinner */}
      <style jsx>{`
        .loader {
          border-width: 4px;
          border-style: solid;
          border-color: #f59e0b transparent transparent transparent; /* ambre et transparent */
          border-radius: 50%;
          width: 64px;
          height: 64px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Userview>
  );
}
