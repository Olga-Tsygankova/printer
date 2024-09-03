import styles from './styles.module.css';
import logo from './../../assets/svg/logo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerList}>
        <a href="#">About the project</a>
        <a href="#">How it works</a>
        <a href="#">Roadmap</a>
        <a href="#">Tokenomics</a>
        <a href="#">Contacts and links</a>
        <a href="#">Start Printing</a>
      </div>
      <div className={styles.headerLogo}>
        <img alt='' src={logo}/>
      </div>
    </div>
  );
};