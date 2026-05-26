"use client";

import { useEffect, useRef } from "react";

export default function PlanityWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById("planity-container");
    (window as any).planity = {
      key: "-O_2Cqy3QxjJ5aSPwMs3",
      primaryColor: "#C0C0C0",
      appointmentContainer: container,
    };

    const scaleWidget = () => {
      const widget =
        document.getElementById("planitywl") ||
        document.getElementById("planity");
      const wrapper = wrapperRef.current;
      if (!widget || !wrapper) return;

      const viewportWidth = wrapper.offsetWidth || window.innerWidth;
      const widgetWidth = widget.scrollWidth;

      if (widgetWidth > viewportWidth && viewportWidth > 0) {
        const scale = viewportWidth / widgetWidth;
        widget.style.transform = `scale(${scale})`;
        widget.style.transformOrigin = "top left";
        // Compensate height lost by transform
        wrapper.style.height = `${widget.offsetHeight * scale}px`;
      }
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
        // Try scaling after load, with retries
        setTimeout(scaleWidget, 800);
        setTimeout(scaleWidget, 2000);
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="w-full overflow-hidden">
      <div
        id="planity-container"
        className="min-h-[500px] md:min-h-[700px]"
        style={{ color: "initial", fontFamily: "initial" }}
      />
    </div>
  );
}
