import styles from './styles.module.css';
import { VerticalSteps } from './VerticalSteps';

export const RoadMap = () => {
  return (
    <div className={styles.roadmap}>
      <div className={styles.title}>
        <h2>
          <span className={styles.textHow}>How</span>
          &nbsp;to create your token using Printer
        </h2>
      </div>
      <VerticalSteps/>
    </div>
  );
};