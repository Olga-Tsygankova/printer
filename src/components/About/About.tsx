import styles from './styles.module.css';
import greenSpring from './../../assets/svg/greenSpring.svg';
import { Windows } from './Windows/Windows.tsx';

export const About = () => {

  return (
    <div id="about" className={styles.about}>
      <div className={styles.title}>
        <h2>
          <span className={styles.textAbout}>About</span>
          &nbsp;the project
        </h2>
        <img src={greenSpring} alt='' className={styles.greenSpring}/>
      </div>
      <Windows/>
    </div>
  );

};