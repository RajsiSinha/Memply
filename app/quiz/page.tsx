"use client";

import { useState } from "react";
import QuizHeader from "@/app/components/quiz/QuizHeader";
import ProgressSection from "@/app/components/quiz/ProgressSection";
import QuestionCard from "@/app/components/quiz/QuestionCard";
import HintPill from "@/app/components/quiz/HintPill";
import QuizFooterInfo from "@/app/components/quiz/QuizFooterInfo";
import ResultScreen from "@/app/components/quiz/ResultScreen";
import { quizData } from "@/app/lib/quizData";

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [xp, setXP] = useState(1250);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [completed, setCompleted] = useState(false);

  function handleCorrect(addXP: number) {
    setXP(prev => prev + addXP);
    setEarnedXP(prev => prev + addXP);

    setStreak(prev => {
      const newStreak = prev + 1;
      setBestStreak(b => Math.max(b, newStreak));
      return newStreak;
    });

    setScore(prev => prev + 1);
  }

  function handleWrong() {
    setStreak(0);
  }

  function handleNext() {
    if (index < quizData.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  }

  function restartQuiz() {
    setIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setEarnedXP(0);
    setCompleted(false);
  }

  return (
    <div>

      <QuizHeader xp={xp} />

      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20 space-y-10">

        {!completed ? (
          <>
            <ProgressSection
              current={index + 1}
              total={quizData.length}
              streak={streak}
            />

            <QuestionCard
              data={quizData[index]}
              onCorrect={handleCorrect}
              onWrong={handleWrong}
              onNext={handleNext}
            />

            <HintPill />

            <QuizFooterInfo />
          </>
        ) : (
          <ResultScreen
            score={score}
            total={quizData.length}
            xpEarned={earnedXP}
            bestStreak={bestStreak}
            totalXP={xp}
            onRestart={restartQuiz}
          />
        )}

      </div>

    </div>
  );
}