"use client";

import { useEffect, useRef, useState } from "react";

export default function PlanityWidget() {
  const [height, setHeight] = useState(600);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.planityHeight) {
        setHeight(e.data.planityHeight);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <iframe
      src="/planity-widget.html"
      width="100%"
      height={height}
      style={{ border: "none", display: "block" }}
      title="Réservation BG Barbershop"
    />
  );
}
