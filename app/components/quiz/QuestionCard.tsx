"use client";

import { useEffect, useState } from "react";
import OptionItem from "./OptionItem";
import QuizFooter from "./QuizFooter";
import XPFloating from "./XPFloating";
import { fireConfetti } from "@/app/lib/confetti";
import { QuizQuestion } from "@/app/lib/quizData";
import Timer from "./Timer";

type Props = {
  data: QuizQuestion;
  onCorrect: (xp: number) => void;
  onNext?: () => void;
  onWrong?: () => void;
};

export default function QuestionCard({
  data,
  onCorrect,
  onNext,
  onWrong,
}: Props) {
  const [selected, setSelected] = useState<number | null>(0);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [showXP, setShowXP] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  // Reset when new question arrives
  useEffect(() => {
    setSelected(0);
    setStatus("idle");
    setTimerKey(prev => prev + 1);
  }, [data]);

  function handleConfirm() {
    if (selected === null) return;

    if (selected === data.correctIndex) {
      setStatus("correct");
      onCorrect(data.xp);

      fireConfetti();
      setShowXP(true);

      setTimeout(() => {
        setShowXP(false);
        onNext?.();
      }, 1500);

    } else {
      setStatus("wrong");
      onWrong?.();
    }
  }

  function handleTimeUp() {
    setStatus("wrong");
    onWrong?.();
  }

  return (
    <div className="relative max-w-2xl mx-auto rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200 bg-[#F8FAFC]">

      {showXP && <XPFloating xp={data.xp} />}

      {/* BODY */}
      <div className="p-10">

        {/* Timer */}
        <div className="flex justify-end mb-2">
          <Timer key={timerKey} onTimeUp={handleTimeUp} />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(234,179,8,0.25)] border border-yellow-200">
            🐶
          </div>
        </div>

        {/* Question */}
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {data.question}
          </h2>

          <p className="text-gray-500">
            Choose the correct breed to help the rocket reach the moon!
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {data.options.map((opt, i) => {
            let itemStatus: "idle" | "correct" | "wrong" = "idle";

            if (status !== "idle") {
              if (i === data.correctIndex) itemStatus = "correct";
              else if (i === selected) itemStatus = "wrong";
            }

            return (
              <OptionItem
                key={i}
                label={String.fromCharCode(65 + i)}
                text={opt}
                selected={selected === i}
                status={itemStatus}
                onClick={() => setSelected(i)}
              />
            );
          })}
        </div>

      </div>

      {/* FOOTER */}
      <div className="bg-gray-50 px-10 py-6 border-t border-gray-200">
        <QuizFooter onConfirm={handleConfirm} />
      </div>

    </div>
  );
}