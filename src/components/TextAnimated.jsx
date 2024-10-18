'use client';

import {useState} from "react";

import styles from "./TextAnimated.module.css";

export default function TextAnimated({data}) {
  const [text, setText] = useState(data[0]);
  const handleAnimationIteration = () => {
    const textsLength = data.length - 1;
    const current = data.indexOf(text);

    if (current === textsLength) return setText(data[0]);

    return setText(data[current + 1]);
  };

  return (
    <div className={styles.TextAnimatedContainer}>
      <h1 className={styles.TextAnimated} onAnimationIteration={handleAnimationIteration}>
        {text}
      </h1>
    </div>
  );
}
