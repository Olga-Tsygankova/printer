import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { About } from '../../components/About/About.tsx';
import { Typewriter } from '../../components/Typewriter';
import { Upload } from '../../components/Upload';
import { Gradient } from '../../components/Gradient';
import { RoadMap } from '../../components/RoadMap';
import { Cards } from '../../components/Cards';

export const MainPage = () => {
  return(
    <div className={styles.main}>
      <Header/>
      <Banner/>
      <Gradient/>
      <Upload/>
      <About/>
      <Typewriter/>
      <RoadMap/>
      <Cards/>
      <Footer/>
    </div>
  )
};
