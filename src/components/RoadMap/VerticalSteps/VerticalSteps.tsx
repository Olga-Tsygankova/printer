import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export const VerticalSteps = () => {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Реф для кнопки
  const [visibleBlocks, setVisibleBlocks] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Состояние видимости кнопки

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current && containerRef.current && buttonRef.current) {
        const arrowRect = arrowRef.current.getBoundingClientRect();
        const textBlocks = containerRef.current.querySelectorAll(`.${styles.textBlock}`);
        const buttonRect = buttonRef.current.getBoundingClientRect();

        textBlocks.forEach((block, index) => {
          const blockRect = block.getBoundingClientRect();
          if (
            arrowRect.top < blockRect.bottom &&
            arrowRect.bottom > blockRect.top
          ) {
            setVisibleBlocks((prev) => {
              const newVisibleBlocks = [...prev];
              newVisibleBlocks[index] = true;
              return newVisibleBlocks;
            });
          } else {
            setVisibleBlocks((prev) => {
              const newVisibleBlocks = [...prev];
              newVisibleBlocks[index] = false;
              return newVisibleBlocks;
            });
          }
        });

        // Проверка видимости кнопки
        if (buttonRect.top + buttonRect.height / 1 < window.innerHeight) {
          setIsButtonVisible(true);
        } else {
          setIsButtonVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.verticalSteps}>
      <div className={styles.verticalStepsContainer} ref={containerRef}>
        <div className={styles.frame}>
          <div className={styles.rectangle} ref={arrowRef}>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[0] ? 1 : 0.5 }}>
            Go to the Printer platform and log in
            via Telegram.
          </div>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[1] ? 1 : 0.4 }}>
            Create your own token by
            providing:<br/>
            &bull; token name<br/>
            &bull; token ticker<br/>
            &bull; total token supply<br/>
            &bull; choose the blockchain for release (Native, TON, SOL, etc.)

          </div>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[2] ? 1 : 0.3 }}>
            Your token starts to
            PRINT.
          </div>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[3] ? 1 : 0.2 }}>
            Upon hitting the bonding
            curve, we create a liquidity
            pool for your asset either natively on Printer, or
            on
            a DEX.
          </div>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[4] ? 1 : 0.1 }}>
            PRINT
          </div>
          <div className={styles.textBlock} style={{ opacity: visibleBlocks[5] ? 1 : 0.1 }}>
            Invest in other tokens and
            track your investment history
            in your personal account.
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <button
          ref={buttonRef}
          className={`${styles.button} ${isButtonVisible ? styles.rotateButton : ''}`}
        >
          Create a token
        </button>
      </div>
    </div>
  );
};