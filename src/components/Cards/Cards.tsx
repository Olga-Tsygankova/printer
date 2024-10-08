import styles from './styles.module.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Cards = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector(`.${styles.cardsContainer}`);
    const cards = gsap.utils.toArray(`.${styles.card}`) as HTMLElement[];

    // Разворачиваем порядок элементов, чтобы они улетали в обратном порядке
    cards.reverse();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer, // Убедитесь, что триггер привязан к правильному контейнеру
        start: 'top 20% top', // Начинаем, когда верх контейнера достигает верха окна
        end: '+=500%', // Прокручиваем высоту контейнера
        scrub: 1, // Привязка анимации к прокрутке
        pin: true, // Фиксируем контейнер на месте
      }
    });

    const screenWidth = window.innerWidth;
    const animationType = screenWidth >= 1000 ? 'rotate' : 'slide';

    // Анимация для каждой карточки, запускается последовательно
    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? -1 : 1; // Определяем направление смещения

      if (animationType === 'rotate') {
        tl.fromTo(card,
          { x: 0, opacity: 1, rotation: 0 },
          {
            x: direction * 1000, // Смещаем влево или вправо
            y: -200,
            opacity: 0, // Плавное исчезновение
            rotation: -90, // Поворот на 90 градусов
            ease: 'sine.in', // Плавность анимации
            filter: 'blur(5px)',
            duration: 10, // Длительность анимации
          }, `+=${index * 0.5}`); // Задержка между анимациями
      } else {
        tl.fromTo(card,
          { x: 0, opacity: 1 },
          {
            x: direction * 100, // Смещаем влево или вправо
            opacity: 0, // Плавное исчезновение
            ease: 'sine.in', // Плавность анимации
            duration: 10, // Длительность анимации
          }, `+=${index * 0.5}`); // Задержка между анимациями
      }
    });
  }, []);

  return (
    <div className={styles.cards}>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.card6}>
            <div className={styles.title}>
              Community and support
            </div>
            <div className={styles.textInfo}>
              Receive help and advice from the Printer community and team at every stage of creating
              and promoting your token.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card5}>
            <div className={styles.title}>
              Transparency and control
            </div>
            <div className={styles.textInfo}>
              Track the current status of your token, collected liquidity, and current value in real time.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card4}>
            <div className={styles.title}>
              Management and investment
            </div>
            <div className={styles.textInfo}>
              Manage your tokens, add
              or withdraw liquidity, and invest in other promising projects.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card3}>
            <div className={styles.title}>
              Blockchain choice
            </div>
            <div className={styles.textInfo}>
              Support for issuing tokens on both TON and Solana, providing flexibility and diversity.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card2}>
            <div className={styles.title}>
              Access to liquidity
            </div>
            <div className={styles.textInfo}>
              The ability to collect liquidity
              in TON coins to achieve a market capitalization of $60,000.
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card1}>
            <div className={styles.title}>
              Token creation made simple
            </div>
            <div className={styles.textInfo}>
              A straightforward and intuitive process for issuing tokens through Telegram Mini Apps.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};