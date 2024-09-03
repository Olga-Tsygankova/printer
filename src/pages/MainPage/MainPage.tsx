import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const MainPage = () => {
  return(
    <div className={styles.main}>
      <Header/>
      <Footer/>
    </div>
  )
};
