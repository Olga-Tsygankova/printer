import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';

export const MainPage = () => {
  return(
    <div className={styles.main}>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
};
