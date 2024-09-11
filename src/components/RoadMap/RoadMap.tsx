import styles from './styles.module.css';
import { VerticalSteps } from './VerticalSteps';
import { useEffect, useRef } from 'react';

export const RoadMap = () => {
  const textHowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (textHowRef.current && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            textHowRef.current.classList.add(styles.textHowAnimated);
          } else if (textHowRef.current) {
            textHowRef.current.classList.remove(styles.textHowAnimated);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (textHowRef.current) {
      observer.observe(textHowRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id='how' className={styles.roadmap}>
      <div className={styles.title}>
        <h2>
          <span ref={textHowRef} className={styles.textHow}>How</span>
          &nbsp;to create your token using Printer
        </h2>
      </div>
      <VerticalSteps/>
    </div>
  );
};