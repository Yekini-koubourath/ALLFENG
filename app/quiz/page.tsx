"use client";

import React, { useState, useMemo } from "react";
import Userview from "../components/Userview";

// Composant Confetti
const Confetti = () => {
  const confettis = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        left: Math.random() * 100 + "vw",
        delay: Math.random() * 5 + "s",
        duration: 3 + Math.random() * 5 + "s",
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        key: i,
        size: 4 + Math.random() * 6 + "px",
      })),
    []
  );

  return (
    <div>
      {confettis.map((c) => (
        <div
          key={c.key}
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
          className="absolute rounded-full animate-fall"
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

// Type Question
type Question = {
  question: string;
  options: string[];
  answer: number;
};

// Fonction de mélange
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Tes questions mélangées
const questions: Question[] = shuffleArray([
  { question: "What is the correct past tense of 'go'?", options: ["goed", "went", "gone", "goes"], answer: 1 },
  { question: "Choose the synonym of 'happy':", options: ["sad", "angry", "joyful", "tired"], answer: 2 },
  { question: "Fill in the blank: I _____ breakfast every morning.", options: ["eat", "eats", "eating", "ate"], answer: 0 },
  // ... toutes les autres questions
]);

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [batchScore, setBatchScore] = useState(0);
  const [showBatchScore, setShowBatchScore] = useState(false);

  const batchStart = Math.floor(currentIndex / 5) * 5;
  const currentBatch = questions.slice(batchStart, batchStart + 5);
  const relativeIndex = currentIndex - batchStart;
  const currentQuestionObj = currentBatch[relativeIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

    if (index === currentQuestionObj.answer) {
      setBatchScore(batchScore + 1);
    }

    setTimeout(() => {
      if (relativeIndex < currentBatch.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowBatchScore(true);
      }
    }, 800);
  };

  const handleNextBatch = () => {
    const nextIndex = batchStart + 5;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setBatchScore(0);
      setShowBatchScore(false);
    } else {
      alert("Félicitations ! Vous avez terminé toutes les questions !");
    }
  };

  return (
    <Userview>
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="chocolate-font font-bold text-4xl text-yellow-600 mt-10 mb-6">
          Quiz Anglais
        </h1>

        {showBatchScore ? (
          <div className="flex flex-col items-center gap-4">
            <h2 className="chocolate-font text-2xl font-semibold">
              Score de ce lot : {batchScore} / {currentBatch.length}
            </h2>
            {batchScore === currentBatch.length && <Confetti />}
            <button
              onClick={handleNextBatch}
              className="mt-4 px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
            >
              Suivant
            </button>
          </div>
        ) : (
          currentQuestionObj && (
            <div className="flex flex-col gap-4 w-full max-w-md">
              <h2 className="chocolate-font text-xl font-semibold">{currentQuestionObj.question}</h2>
              {currentQuestionObj.options.map((option, idx) => {
                let bgColor = "bg-amber-600 hover:bg-amber-800";
                if (selectedAnswer !== null) {
                  if (idx === currentQuestionObj.answer) bgColor = "bg-green-500";
                  else if (idx === selectedAnswer) bgColor = "bg-red-500";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`${bgColor} text-white px-6 py-2 rounded w-full transition-colors`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )
        )}
      </div>
    </Userview>
  );
}
