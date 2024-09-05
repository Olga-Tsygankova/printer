import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Upload: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.title}>your ideas</div>
      <div className={styles.allUpload}>
        <div className={styles.uploadWrapper}>
          <div className={styles.upload} style={{ width: `${progress}%` }}/>
        </div>
        <div className={styles.progressText}>{progress}%</div>
      </div>
    </div>
  );
};