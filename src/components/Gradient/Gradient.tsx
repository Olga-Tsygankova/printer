import styles from './styles.module.css'
// import ellipse from './../../assets/svg/ellipseFon.svg'

export const Gradient =()=>{
  return(
    <div className={styles.gradient}>
      <div className={styles.gradientLeft}></div>
      <div className={styles.gradientRight}></div>
    </div>
  )
}