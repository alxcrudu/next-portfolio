import React from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";

export default function ButtonAnimation({
  children,
  backgroundColor,
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <div
      className={styles.roundedButton}
      // className="rounded-[3em] border-[2px] border-[var(--text)] cursor-pointer relative flex items-center justify-center py-2 px-4 overflow-hidden w-min transition-color"
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
    >
      {children}
      <div
        ref={circle}
        style={{ backgroundColor }}
        className={styles.circle}
        // className={`w-full h-[150%] absolute rounded-[50%] top-[100%]`}
      ></div>
    </div>
  );
}