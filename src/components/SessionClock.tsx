"use client";

import { useEffect, useRef, useState } from "react";

export default function SessionClock() {
  const [seconds, setSeconds] = useState(0);
  const frozen = useRef(false);

  useEffect(() => {
    frozen.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (frozen.current) return;

    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <span className="font-tel">
      {mm}:{ss}
    </span>
  );
}
