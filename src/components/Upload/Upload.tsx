import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Upload = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isTextFadingIn, setIsTextFadingIn] = useState(false); // New state for text fading in

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoaded(true);
            setIsTextFadingIn(true); // Start text fading in
          }, 900);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.uploadContainer}>
      {isLoaded && (
        <div
          className={`${styles.title} ${styles.loaded} ${
            isTextFadingIn ? styles.fadeIn : ''
          }`}
          style={{
            color: isTextFadingIn ? '#9EFF52' : '#FFFFFF', // Transition color
            transition: 'color 1s ease-in-out',
          }}
        >
          real assets
        </div>
      )}
      {!isLoaded && (
        <div className={`${styles.title} ${styles.slideIn}`}>your ideas</div>
      )}
      {!isLoaded && (
        <div
          className={`${styles.allUpload} ${isFadingOut ? styles.fadeOut : ''}`}
          style={{
            opacity: isFadingOut ? 0 : 1,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <div className={styles.uploadWrapper}>
            <div
              className={styles.upload}
              style={{
                width: `${progress}%`,
                transition: 'width 0.5s ease-in-out',
              }}
            />
          </div>
          <div className={styles.progressText}>{progress}%</div>
        </div>
      )}
    </div>
  );
};
