"use client";

import { useEffect, useState } from "react";

export default function Timer({
  duration = 15,
  onTimeUp,
}: {
  duration?: number;
  onTimeUp?: () => void;
}) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp?.();
      return;
    }

    const id = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(id);
  }, [time]);

  return (
    <div className="text-sm font-semibold text-gray-500">
      ⏱ {time}s
    </div>
  );
}