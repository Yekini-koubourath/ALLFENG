"use client";

import { useState, useEffect } from "react";
import Userview from "../components/Userview";

export default function TypingPage() {
  const text = "Practice makes perfect. Keep typing to improve your English skills!";
  
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (input.length > 0) {
      const correctChars = input.split("").filter((char, i) => char === text[i]).length;
      setAccuracy(Math.round((correctChars / input.length) * 100));
    }

    if (input.length === text.length && startTime) {
      const duration = (Date.now() - startTime) / 1000 / 60; // minutes
      const wordsTyped = text.split(" ").length;
      setWpm(Math.round(wordsTyped / duration));
    }
  }, [input]);

  return (
    <Userview>
      <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6">Typing Practice</h1>

      <p className="max-w-xl text-lg mb-4 text-gray-700">{text}</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-xl h-40 border p-4 rounded-lg shadow bg-white"
        placeholder="Start typing here..."
      />

      <div className="flex gap-6 mt-6 text-lg font-semibold">
        <p>⏱️ WPM : <span className="text-blue-600">{wpm}</span></p>
        <p>🎯 Accuracy : <span className="text-green-600">{accuracy}%</span></p>
      </div>
      </div>
    </Userview>
  );
}
