import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { About } from '../../components/About/About.tsx';
import { Typewriter } from '../../components/Typewriter';
import { Upload } from '../../components/Upload';

export const MainPage = () => {
  return(
    <div className={styles.main}>
      <Header/>
      <Banner/>
      <Upload/>
      <About/>
      <Typewriter/>
      <Footer/>
    </div>
  )
};
