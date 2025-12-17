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

interface Question {
  question: string;
  options: string[];
  answer: number;
}

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const questions: Question[] = shuffleArray([
  { question: "What is the correct past tense of 'go'?", options: ["goed", "went", "gone", "goes"], answer: 1 },
  { question: "Choose the synonym of 'happy':", options: ["sad", "angry", "joyful", "tired"], answer: 2 },
  { question: "Fill in the blank: I _____ breakfast every morning.", options: ["eat", "eats", "eating", "ate"], answer: 0 },
  { question: "What is the plural form of 'child'?", options: ["childs", "children", "childes", "childrens"], answer: 1 },
  { question: "Select the correct article: She has ___ cat.", options: ["a", "an", "the", "no article"], answer: 0 },
  { question: "What is the opposite of 'big'?", options: ["large", "huge", "small", "tall"], answer: 2 },
  { question: "Choose the correct preposition: He is good ___ math.", options: ["in", "at", "on", "for"], answer: 1 },
  { question: "What is the comparative form of 'fast'?", options: ["fastest", "more fast", "faster", "most fast"], answer: 2 },
  { question: "Fill in the blank: They _____ to the park yesterday.", options: ["go", "going", "went", "gone"], answer: 2 },
  { question: "Select the correct verb form: She _____ playing the piano.", options: ["is", "are", "am", "be"], answer: 0 },

  { question: "What is the past tense of 'run'?", options: ["runned", "ran", "running", "runs"], answer: 1 },
  { question: "Choose the synonym of 'quick':", options: ["slow", "fast", "lazy", "late"], answer: 1 },
  { question: "Fill in the blank: We _____ dinner at 7 PM.", options: ["have", "has", "having", "had"], answer: 0 },
  { question: "What is the plural form of 'mouse'?", options: ["mouses", "mices", "mice", "mousees"], answer: 2 },
  { question: "Select the correct article: He saw ___ elephant at the zoo.", options: ["a", "an", "the", "no article"], answer: 1 },
  { question: "What is the opposite of 'cold'?", options: ["hot", "warm", "cool", "chilly"], answer: 0 },
  { question: "Choose the correct preposition: The book is ___ the table.", options: ["in", "on", "at", "for"], answer: 1 },
  { question: "What is the comparative form of 'happy'?", options: ["happiest", "more happy", "happier", "most happy"], answer: 2 },
  { question: "Fill in the blank: She _____ a new car last week.", options: ["buy", "buys", "bought", "buying"], answer: 2 },
  { question: "Select the correct verb form: They _____ going to the movies.", options: ["is", "are", "am", "be"], answer: 1 },

  { question: "What is the past tense of 'see'?", options: ["saw", "seen", "seeing", "sees"], answer: 0 },
  { question: "Choose the synonym of 'smart':", options: ["intelligent", "dumb", "lazy", "slow"], answer: 0 },
  { question: "Fill in the blank: I _____ my homework every day.", options: ["do", "does", "doing", "did"], answer: 0 },
  { question: "What is the plural form of 'foot'?", options: ["foots", "feet", "footes", "feets"], answer: 1 },
  { question: "Select the correct article: She adopted ___ dog from the shelter.", options: ["a", "an", "the", "no article"], answer: 0 },
  { question: "What is the opposite of 'light'?", options: ["dark", "bright", "heavy", "soft"], answer: 0 },
  { question: "Choose the correct preposition: He lives ___ New York.", options: ["in", "on", "at", "for"], answer: 0 },
  { question: "What is the comparative form of 'strong'?", options: ["strongest", "more strong", "stronger", "most strong"], answer: 2 },
  { question: "Fill in the blank: They _____ a party last Saturday.", options: ["have", "has", "had", "having"], answer: 2 },
  { question: "Select the correct verb form: I _____ reading a book.", options: ["is", "are", "am", "be"], answer: 2 },

  { question: "What is the past tense of 'write'?", options: ["writed", "wrote", "writing", "writes"], answer: 1 },
  { question: "Choose the synonym of 'big':", options: ["small", "large", "tiny", "little"], answer: 1 },
  { question: "Fill in the blank: He _____ to school by bus.", options: ["go", "goes", "going", "went"], answer: 3 },
  { question: "What is the plural form of 'tooth'?", options: ["tooths", "teeth", "toothes", "teeths"], answer: 1 },
  { question: "Select the correct article: I saw ___ owl in the tree.", options: ["a", "an", "the", "no article"], answer: 1 },
  { question: "What is the opposite of 'young'?", options: ["old", "new", "fresh", "ancient"], answer: 0 },
  { question: "Choose the correct preposition: The cat is ___ the roof.", options: ["in", "on", "at", "for"], answer: 1 },
  { question: "What is the comparative form of 'bright'?", options: ["brightest", "more bright", "brighter", "most bright"], answer: 2 },
  { question: "Fill in the blank: She _____ a beautiful dress yesterday.", options: ["buy", "buys", "bought", "buying"], answer: 2 },
  { question: "Select the correct verb form: We _____ watching a movie.", options: ["is", "are", "am", "be"], answer: 1 },

  { question: "What is the past tense of 'eat'?", options: ["eated", "ate", "eating", "eats"], answer: 1 },
  { question: "Choose the synonym of 'angry':", options: ["happy", "mad", "sad", "tired"], answer: 1 },
  { question: "Fill in the blank: They _____ soccer on weekends.", options: ["play", "plays", "playing", "played"], answer: 0 },
  { question: "What is the plural form of 'leaf'?", options: ["leafs", "leaves", "leafes", "leavs"], answer: 1 },
  { question: "Select the correct article: He found ___ umbrella in the car.", options: ["a", "an", "the", "no article"], answer: 1 },
  { question: "What is the opposite of 'fast'?", options: ["slow", "quick", "speedy", "swift"], answer: 0 },
  { question: "Choose the correct preposition: The picture is ___ the wall.", options: ["in", "on", "at", "for"], answer: 1 },
  { question: "What is the comparative form of 'cold'?", options: ["coldest", "more cold", "colder", "most cold"], answer: 2 },
  { question: "Fill in the blank: I _____ a letter last night.", options: ["write", "writes", "wrote", "writing"], answer: 2 },
  { question: "Select the correct verb form: She _____ cooking dinner.", options: ["is", "are", "am", "be"], answer: 0 },

  { question: "What is the past tense of 'drink'?", options: ["drinked", "drank", "drinking", "drinks"], answer: 1 },
  { question: "Choose the synonym of 'tired':", options: ["energetic", "sleepy", "happy", "angry"], answer: 1 },
  { question: "Fill in the blank: He _____ football every Sunday.", options: ["plays", "play", "playing", "played"], answer: 0 },
  { question: "What is the plural form of 'cactus'?", options: ["cactuses", "cacti", "cacties", "cactuss"], answer: 1 },
  { question: "Select the correct article: She bought ___ apple from the market.", options: ["a", "an", "the", "no article"], answer: 1 },
  { question: "What is the opposite of 'strong'?", options: ["weak", "powerful", "sturdy", "robust"], answer: 0 },
  { question: "Choose the correct preposition: The keys are ___ the drawer.", options: ["in", "on", "at", "for"], answer: 0 },
  { question: "What is the comparative form of 'dark'?", options: ["darkest", "more dark", "darker", "most dark"], answer: 2 },
  { question: "Fill in the blank: They _____ a movie last night.", options: ["watch", "watches", "watched", "watching"], answer: 2 },
  { question: "Select the correct verb form: I _____ studying English.", options: ["is", "are", "am", "be"], answer: 2 },

  { question: "What is the past tense of 'sing'?", options: ["singed", "sang", "singing", "sings"], answer: 1 },
  { question: "Choose the synonym of 'brave':", options: ["cowardly", "fearful", "courageous", "timid"], answer: 2 },
  { question: "Fill in the blank: She _____ to music every day.", options: ["listen", "listens", "listening", "listened"], answer: 1 },
  { question: "What is the plural form of 'person'?", options: ["persons", "people", "peoples", "persones"], answer: 1 },
  { question: "Select the correct article: He saw ___ eagle flying.", options: ["a", "an", "the", "no article"], answer: 1 },
  { question: "What is the opposite of 'clean'?", options: ["dirty", "neat", "tidy", "spotless"], answer: 0 },
  { question: "Choose the correct preposition: The shoes are ___ the closet.", options: ["in", "on", "at", "for"], answer: 0 },
  { question: "What is the comparative form of 'thin'?", options: ["thinnest", "more thin", "thinner", "most thin"], answer: 2 },
  { question: "Fill in the blank: I _____ a cake for her birthday.", options: ["bake", "bakes", "baked", "baking"], answer: 2 },
  { question: "Select the correct verb form: They _____ playing chess.", options: ["is", "are", "am", "be"], answer: 1 },
  { question: "What is the past tense of 'fly'?", options: ["flied", "flew", "flying", "flies"], answer: 1 },
  { question: "Choose the synonym of 'friendly':", options: ["hostile", "kind", "mean", "rude"], answer: 1 },
  { question: "Fill in the blank: He _____ his bike to school.", options: ["ride", "rides", "rode", "riding"], answer: 2 },
  { question: "What is the plural form of 'sheep'?", options: ["sheeps", "sheep", "sheeves", "sheepses"], answer: 1 },
  { question: "Select the correct article: She has ___ idea for the project.", options: ["a", "an", "the", "no article"], answer: 0 },
  { question: "What is the opposite of 'happy'?", options: ["sad", "joyful", "excited", "content"], answer: 0 },
  { question: "Choose the correct preposition: The flowers are ___ the vase.", options: ["in", "on", "at", "for"], answer: 0 },
  { question: "What is the comparative form of 'easy'?", options: ["easiest", "more easy", "easier", "most easy"], answer: 2 }
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
       <h1 className="chocolate-font w-full bg-amber-800 font-bold text-5xl text-white pb-4 text-center">
         English quiz
        </h1>
<p className="text-white bg-amber-800 mb-6 w-full text-center pb-4">Défiez-vous et améliorez votre anglais chaque jour.</p>
      <div className="flex flex-col items-center text-center gap-6">
       
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
            <div className="flex flex-col gap-4 max-w-md">
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
