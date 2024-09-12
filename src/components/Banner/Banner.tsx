import styles from './styles.module.css';
import spring from './../../assets/svg/spring.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Banner = () => {
  const lineContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lineContainerRef.current) {
      // Clear previous elements
      lineContainerRef.current.innerHTML = '';

      // Create SVG element for the line
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', '0 0 450 150'); // Set viewBox for proper scaling

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', '#9EFF52');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);
      lineContainerRef.current.appendChild(svg);

      // Coordinates for the zigzag line
      const points = [
        { x: 50, y: 51 },
        { x: 150, y: 0 },
        { x: 0, y: 100 },
        { x: 200, y: 0 },
        { x: 60, y: 100 },
        { x: 250, y: 0 },
        { x: 100, y: 100 },
        { x: 300, y: 0 },
        { x: 140, y: 100 },
        { x: 350, y: 0 },
        { x: 180, y: 100 },
        { x: 310, y: 40},
      ];

      // Create a path from the coordinates using Bezier curves
      let d = `M${points[0].x},${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const cp1x = points[i - 1].x + (points[i].x - points[i - 1].x) * 0.25;
        const cp1y = points[i - 1].y + (points[i].y - points[i - 1].y) * 0.25;
        const cp2x = points[i].x - (points[i].x - points[i - 1].x) * 0.25;
        const cp2y = points[i].y - (points[i].y - points[i - 1].y) * 0.25;
        d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
      }

      // Set the path for the SVG line
      line.setAttribute('d', d);

      // Animate the line with GSAP
      const length = line.getTotalLength(); // Get the total length of the path
      line.setAttribute('stroke-dasharray', String(length)); // Set dasharray to the length
      line.setAttribute('stroke-dashoffset', String(length)); // Start with dashoffset equal to length

      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <h1>Create&nbsp;
          <span className={styles.your}>your&nbsp;</span>
          social token with
          <span className={styles.printer}> Printer </span>
          <img className={styles.spring} src={spring} alt=""/>
        </h1>
      </div>
      <div ref={lineContainerRef} className={styles.lineContainer} />
      <div className={styles.text1}>
        <span>Easiest and cheapest token creation on the market</span>
        <span>Seeded with virtual liquidity, collected with TON</span>
      </div>
      <div className={styles.text2}>
        <span>Centralizing the bonding curve mechanism, experience explosive social and financial growth with dynamic listing processes</span>
      </div>
    </div>
  );
};
