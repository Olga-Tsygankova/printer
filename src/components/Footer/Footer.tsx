import styles from './styles.module.css';
import logo from './../../assets/svg/logo.svg';

type IProps = {
  handleScroll: (event: any) => void;
}
export const Footer = ({ handleScroll }: IProps) => {

  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt=""/>
      </div>
      <div className={styles.ca}>
        CA: coming soon
      </div>
      <div className={styles.links}>
        <div className={styles.webLinks}>
          <h4>
            Web links
          </h4>
          <div className={styles.linksList}>
            <a href="#about" onClick={handleScroll}>About the project</a>
            <a href="#how" onClick={handleScroll}>How it works</a>
            <a href="#header" onClick={handleScroll}>Roadmap</a>
            <a href="#header" onClick={handleScroll}>Tokenomics</a>
            <a href="#header" onClick={handleScroll}>Contacts and links</a>
            <a href="#header" onClick={handleScroll}>Start Printing</a>
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