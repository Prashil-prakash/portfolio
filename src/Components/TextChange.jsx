import React from "react";
import { useState, useEffect } from "react";

const texts = [
  "Hi, I'm prashil prakash",
  "Hi, I'm prashil prakash",
  "Hi, I'm prashil prakash",
];

function TextChange() {
  const [currentText, setCurrentText] = useState("");
  const [endvalue, setEndValue] = useState(1);
  const [isForaward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentFullText = texts[index];

      setCurrentText(currentFullText.substring(0, endvalue));

      if (isForaward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endvalue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endvalue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setEndValue(1);
      }
    }, 60);
    return () => clearInterval(intervalId);
  }, [endvalue, isForaward, index]);

  return (
    <div className="transition ease duration-300 inline-block min-h-[1.2em]">
      {currentText}
      <span className="animate-pulse font-light ml-0.5">|</span>
    </div>
  );
}

export default TextChange;
