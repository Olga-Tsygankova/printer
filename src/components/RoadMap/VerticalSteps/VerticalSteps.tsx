import styles from './styles.module.css';

export const VerticalSteps = () => {
  return (
    <div className={styles.verticalSteps}>
      <div className={styles.verticalStepsContainer}>

        <div className={styles.frame}>
          <div className={styles.rectangle}>
          </div>
        </div>
        <div className={styles.text}>
          <div>Go to the Printer platform and log in
            via Telegram.
          </div>
          <div>Create your own token by providing:<br/>
            &bull; token name<br/>
            &bull; token ticker<br/>
            &bull; total token supply<br/>
            &bull; choose the blockchain for release (Native, TON, SOL, etc.)

          </div>
          <div>Your token starts to PRINT.</div>
          <div>Upon hitting the bonding curve, we create a liquidity pool for your asset either natively on Printer, or
            on
            a DEX.
          </div>
          <div>PRINT</div>
          <div>Invest in other tokens and track your investment history in your personal account.</div>

        </div>
      </div>
      <div className={styles.btn}>
        <button>Create a token</button>
      </div>
    </div>
  );
};