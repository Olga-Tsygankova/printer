import styles from './styles.module.css';
import collapse from './../../../assets/svg/collapse.svg';
import expand from './../../../assets/svg/expand.svg';
import close from './../../../assets/svg/close.svg';

export const Windows = () => {
  const windowsData = [
    {
      text: 'With Printer, our idea is to take concepts from DeFi and transform them into a platform that removes the barrier to entry into social financе',
    },
    {
      text: 'We believe everyone should experiment with creating a new token and participating in the growing social economy.',
    },
    {
      text: 'Utilizing bonding curve launches with eventual liquidity pool creation on Printer and DEXes, users can experience growth of their social assets and get a glimpse into our future.',
    },
  ];

  return (
    <div className={styles.windows}>
      {windowsData.map((window, index) => (
        <div key={index} className={`${styles.window} ${styles[`window-${index + 1}`]}`}>
          <div className={styles.icons}>
            <img src={collapse} alt=""/>
            <img src={expand} alt=""/>
            <img src={close} alt=""/>
          </div>
          <div className={styles.text}>
            {window.text}
          </div>
        </div>
      ))}
    </div>
  );
};