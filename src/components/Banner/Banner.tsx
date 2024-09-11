import styles from './styles.module.css';
import spring from './../../assets/svg/spring.svg';
// import Spline from '@splinetool/react-spline';


export const Banner = () => {
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
      <div className={styles.lineContainer}>
        <div className={styles.bigLine}>
          {/*<Spline scene="https://prod.spline.design/xYyiPwASTmLgZAtn/scene.splinecode"/>*/}
        </div>
        {/*<div className={styles.smallLine}>*/}
        {/*  <Spline scene="https://prod.spline.design/xYyiPwASTmLgZAtn/scene.splinecode"/>*/}
        {/*</div>*/}
      </div>
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