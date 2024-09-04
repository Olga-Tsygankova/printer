import styles from './styles.module.css';
import logo from './../../assets/svg/logo.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt=""/>
      </div>
      <div className={styles.ca}>
        CA: 78sdf78sd78asd76asd87as67d65fd7s8
      </div>
      <div className={styles.links}>
        <div className={styles.webLinks}>
          <h4>
            Web links
          </h4>
          <div className={styles.linksList}>
            <a href="#">About the project</a>
            <a href="#">How it works</a>
            <a href="#">Roadmap</a>
            <a href="#">Tokenomics</a>
            <a href="#">Contacts and links</a>
            <a href="#">Start Printing</a>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <h4>
            Social Links
          </h4>
          <div className={styles.linksList}>
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
          </div>
        </div>
        <div className={styles.otherLinks}>
          <h4>
            Other Links
          </h4>
          <div className={styles.linksList}>
            <a href="#">Etherscan</a>
            <a href="#">Dextools</a>
            <a href="#">Platform</a>
            <a href="#">White paper</a>
            <a href="#">Token</a>
            <a href="#">Roadmap</a>
          </div>
        </div>
      </div>
    </div>
  );
};