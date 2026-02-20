"use client";

import { useEffect, useState } from "react";

export default function useCounter(
  target: number,
  duration: number = 500
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return value;
}
