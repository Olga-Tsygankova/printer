import styles from './styles.module.css';
import greenSpring from './../../assets/svg/greenSpring.svg';
import { Windows } from './Windows/Windows.tsx';
import { useEffect, useRef } from 'react';

export const About = () => {
  const textAboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (textAboutRef.current && entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            textAboutRef.current.classList.add(styles.textAboutAnimated);
          } else if (textAboutRef.current) {
            textAboutRef.current.classList.remove(styles.textAboutAnimated);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (textAboutRef.current) {
      observer.observe(textAboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div id="about" className={styles.about}>
      <div className={styles.title}>
        <h2>
          <span ref={textAboutRef} className={styles.textAbout}>About</span>
          &nbsp;the project
        </h2>
        <img src={greenSpring} alt="" className={styles.greenSpring}/>
      </div>
      <Windows/>
    </div>
  );

};