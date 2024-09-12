import styles from './styles.module.css';
import spring from './../../assets/svg/spring.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Banner = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path');
      if (path) {
        gsap.fromTo(
          path,
          {
            strokeDasharray: path.getTotalLength(),
            strokeDashoffset: path.getTotalLength(),
          },
          {
            strokeDashoffset: 0,
            duration: 3,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          }
        );
      }
    }
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <h1>
          Create&nbsp;
          <span className={styles.your}>your&nbsp;</span>
          social token with
          <span className={styles.printer}> Printer </span>
          <img className={styles.spring} src={spring} alt="" />
        </h1>
      </div>
      <div className={styles.lineContainer}>
        <svg
          ref={svgRef}
          width="271"
          height="56"
          viewBox="0 0 271 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.2899 28C114.058 -8 121.205 -8 49.7319 28C-21.7415 64 -14.5942 64 71.1739 28C156.942 -8 164.089 -8 92.6159 28C21.1425 64 28.2899 64 114.058 28C199.826 -8 206.973 -8 135.5 28C64.0266 64 71.1739 64 156.942 28C242.71 -8 249.857 -8 178.384 28C106.911 64 114.058 64 199.826 28C285.594 -8 292.742 -8 221.268 28C149.795 64 156.942 64 242.71 28"
            stroke="#9EFF52"
            strokeWidth="0.884"
          />
        </svg>
      </div>
      <div className={styles.text1}>
        <span>Easiest and cheapest token creation on the market</span>
        <span>Seeded with virtual liquidity, collected with TON</span>
      </div>
      <div className={styles.text2}>
        <span>
          Centralizing the bonding curve mechanism, experience explosive social
          and financial growth with dynamic listing processes
        </span>
      </div>
    </div>
  );
};
