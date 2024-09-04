import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Typewriter = () => {
  const [text, setText] = useState('ideas');
  const [index, setIndex] = useState(0);
  const texts = ['ideas', 'tokens', 'future'];
  const [typing, setTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typing) {
        if (currentText.length < text.length) {
          setCurrentText(currentText + text[currentText.length]);
        } else {
          setTyping(false);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setText(texts[index]);
          setTyping(true);
        }
      }
      setCursor(!cursor); // Курсор
    }, 200); // Скорость печати

    return () => clearInterval(intervalId);
  }, [text, typing, currentText, index, texts, cursor]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);

  return (
    <div className={styles.typewriter}>
      <div className={styles.firstText}>
        Join Printer and bring&nbsp;
        <span className={styles.your}>
          your
        </span>
        &nbsp;to life
      </div>
      <div className={styles.title}>
        <h2>
          Your&nbsp;
          <span className={styles.typingText}>
            {currentText}
            {cursor ? '|' : ''}
          </span>
        </h2>
      </div>
      <button className={styles.btn}>
        Create a token
      </button>
    </div>
  );
};