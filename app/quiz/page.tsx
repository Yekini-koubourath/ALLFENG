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
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

// Type Question
interface Question {
  question: string;
  options: string[];
  answer: number;
  hint: string;
  contextSentence: string;
  translation: string;
}

// Exemple de questions
const questions: Question[] = [
  {
    question: "What is the correct past tense of 'go'?",
    options: ["goed", "went", "gone", "goes"],
    answer: 1,
    hint: "Verbe de mouvement au passé.",
    contextSentence: "Yesterday, she ___ to school.",
    translation: "Hier, elle est allée à l'école.",
  },
  {
    question: "Fill in the blank: I _____ breakfast every morning.",
    options: ["eat", "eats", "eating", "ate"],
    answer: 0,
    hint: "Action habituelle.",
    contextSentence: "Every morning, I ___ breakfast.",
    translation: "Tous les matins, je prends le petit déjeuner.",
  },
  {
    question: "Choose the synonym of 'happy':",
    options: ["sad", "angry", "joyful", "tired"],
    answer: 2,
    hint: "C’est un sentiment positif.",
    contextSentence: "She felt very ___ after receiving the good news.",
    translation: "Elle était très joyeuse après avoir reçu la bonne nouvelle.",
  },
  {
    question: "What is the plural form of 'child'?",
    options: ["childs", "children", "childes", "childrens"],
    answer: 1,
    hint: "Pluriel irrégulier.",
    contextSentence: "The ___ are playing in the park.",
    translation: "Les enfants jouent dans le parc.",
  },
  {
    question: "Select the correct article: She has ___ cat.",
    options: ["a", "an", "the", "no article"],
    answer: 0,
    hint: "Le mot commence par une consonne.",
    contextSentence: "She has ___ cat at home.",
    translation: "Elle a un chat à la maison.",
  },
  {
    question: "What is the past tense of 'run'?",
    options: ["runned", "ran", "running", "runs"],
    answer: 1,
    hint: "Verbe irrégulier.",
    contextSentence: "Yesterday, he ___ 5 kilometers in the park.",
    translation: "Hier, il a couru 5 kilomètres dans le parc.",
  },
  {
    question: "Fill in the blank: She _____ a new book yesterday.",
    options: ["buy", "buys", "bought", "buying"],
    answer: 2,
    hint: "Action au passé.",
    contextSentence: "Yesterday, she ___ a new book at the store.",
    translation: "Hier, elle a acheté un nouveau livre au magasin.",
  },
  {
    question: "Choose the correct preposition: He is good ___ math.",
    options: ["in", "at", "on", "for"],
    answer: 1,
    hint: "Pour une compétence ou matière.",
    contextSentence: "He is really good ___ math.",
    translation: "Il est très fort en maths.",
  },
  {
    question: "What is the opposite of 'big'?",
    options: ["large", "huge", "small", "tall"],
    answer: 2,
    hint: "Le contraire de grand.",
    contextSentence: "My house is big, but my brother's house is very ___.",
    translation: "Ma maison est grande, mais celle de mon frère est très petite.",
  },
  {
    question: "Select the correct verb form: She _____ playing the piano.",
    options: ["is", "are", "am", "be"],
    answer: 0,
    hint: "Troisième personne singulier au présent continu.",
    contextSentence: "She ___ playing the piano every evening.",
    translation: "Elle joue du piano chaque soir.",
  },
];

// Shuffle si besoin
const shuffleArray = <T,>(array: T[]): T[] => array.sort(() => Math.random() - 0.5);

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [batchScore, setBatchScore] = useState(0);
  const [showBatchScore, setShowBatchScore] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowAnswerFeedback(true);
    if (index === currentQuestion.answer) {
      setBatchScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowAnswerFeedback(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowBatchScore(true);
    }
  };

  // Retourne la phrase avec le mot correct
  const getCorrectSentence = () => {
    const word = currentQuestion.options[currentQuestion.answer];
    return currentQuestion.contextSentence.replace("___", word);
  };

  return (
    <Userview>
      <h1 className="z-10 w-full bg-amber-800 pb-4 text-center text-5xl font-bold text-white chocolate-font">
        ENGLISH QUIZ
      </h1>

      <p className="z-10 mb-10 w-full bg-amber-800 pb-4 text-center text-white">
        Défiez-vous et améliorez votre anglais chaque jour.
      </p>

      <div className="flex flex-col items-center">
        {showBatchScore ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="chocolate-font text-2xl font-semibold">
              Bravo 🎉 Ton score : {batchScore} / {questions.length}
            </h2>
            {batchScore === questions.length && <Confetti />}
          </div>
        ) : (
          <div className="flex max-w-md flex-col gap-4">
            <h2 className="chocolate-font text-xl font-semibold">{currentQuestion.question}</h2>

            <div className="rounded bg-yellow-100 p-3 text-sm text-yellow-900">
              <strong>Indice 💡 :</strong> {currentQuestion.hint}
            </div>

            <div className="rounded bg-blue-100 p-3 text-sm text-blue-900">
              <strong>Contexte :</strong> {currentQuestion.contextSentence}
            </div>

            {currentQuestion.options.map((opt, idx) => {
              let bgColor =
                "bg-amber-600 hover:bg-amber-800 hover:scale-105 transition-transform";
              if (selectedAnswer !== null) {
                if (idx === currentQuestion.answer) bgColor = "bg-green-500";
                else if (idx === selectedAnswer) bgColor = "bg-red-500";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`${bgColor} w-full rounded px-6 py-2 text-white`}
                >
                  {opt}
                </button>
              );
            })}

            {showAnswerFeedback && (
  <div className="rounded bg-blue-100 text-sm text-blue-900 mt-4 mb-12 p-4 text-center">
    
    {selectedAnswer === currentQuestion.answer ? (
      <p>✅ Correct ! Traduction : {currentQuestion.translation}</p>
    ) : (
      <p>
        ❌ Incorrect. Phrase correcte :{" "}
        <strong>{getCorrectSentence()}</strong>
      </p>
    )}

    <button
      onClick={handleNext}
      className="mt-4 mx-auto flex items-center justify-center rounded bg-amber-500 px-6 py-2 text-white hover:bg-amber-600 hover:scale-105 transition-transform"
    >
      Suivant
    </button>

  </div>
)}
          </div>        
        )}
      </div>
    </Userview>
  );
}
