import styles from './styles.module.css';
import logo from './../../assets/svg/logo.svg';

export const Header = () => {
  const handleScroll = (event: any) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerList}>
        <a href="#about" onClick={handleScroll}>About the project</a>
        <a href="#" onClick={handleScroll}>How it works</a>
        <a href="#" onClick={handleScroll}>Roadmap</a>
        <a href="#" onClick={handleScroll}>Tokenomics</a>
        <a href="#" onClick={handleScroll}>Contacts and links</a>
        <a href="#" onClick={handleScroll}>Start Printing</a>
      </div>
      <div className={styles.headerLogo}>
        <img alt="" src={logo}/>
      </div>
    </div>
  );
};