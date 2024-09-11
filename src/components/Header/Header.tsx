import styles from './styles.module.css';
import logo from './../../assets/svg/logo.svg';

type IProps = {
  handleScroll: (event: any) => void;
}
export const Header = ({ handleScroll }: IProps) => {


  return (
    <div id="header" className={styles.header}>
      <div className={styles.headerList}>
        <a href="#about" onClick={handleScroll}>About the project</a>
        <a href="#how" onClick={handleScroll}>How it works</a>
        <a href="#footer" onClick={handleScroll}>Roadmap</a>
        <a href="#footer" onClick={handleScroll}>Tokenomics</a>
        <a href="#footer" onClick={handleScroll}>Contacts and links</a>
        <a href="#footer" onClick={handleScroll}>Start Printing</a>
      </div>
      <div className={styles.headerLogo}>
        <img alt="" src={logo}/>
      </div>
    </div>
  );
};