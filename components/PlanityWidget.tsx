"use client";

import { useEffect } from "react";

export default function PlanityWidget() {
  useEffect(() => {
    const container = document.getElementById("planity-container");
    (window as any).planity = {
      key: "-O_2Cqy3QxjJ5aSPwMs3",
      primaryColor: "#C0C0C0",
      container: container,
    };

    const loadScript = (src: string, callback?: () => void) => {
      const s = document.createElement("script");
      s.src = src;
      if (callback) s.onload = callback;
      document.head.appendChild(s);
    };

    loadScript(
      "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js",
      () => {
        loadScript(
          "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js"
        );
      }
    );
  }, []);

  return (
    <div
      id="planity-container"
      className="w-full min-h-[500px] md:min-h-[700px]"
      style={{ color: "initial", fontFamily: "initial" }}
    />
  );
}
