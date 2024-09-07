import { useEffect } from 'react';
import styles from './styles.module.css';

export const Gradient = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollTop / scrollHeight;

      document.documentElement.style.setProperty('--left-gradient-top', `${progress * -600}px`);
      document.documentElement.style.setProperty('--right-gradient-top', `${progress * 100}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.gradient}>
      <div className={styles.gradientLeft}></div>
      <div className={styles.gradientRight}></div>
    </div>
  );
};
