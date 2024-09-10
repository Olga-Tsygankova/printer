import styles from './styles.module.css';

export const Cards = () => {

  return (
    <div className={styles.cards}>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.title}>
            Token creation made simple
          </div>
          <div className={styles.textInfo}>
            A straightforward and intuitive process for issuing tokens through Telegram Mini Apps.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            Access to liquidity
          </div>
          <div className={styles.textInfo}>
            The ability to collect liquidity
            in TON coins to achieve a market capitalization of $60,000.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            Blockchain choice
          </div>
          <div className={styles.textInfo}>
            Support for issuing tokens on both TON and Solana, providing flexibility and diversity.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            Management and investment
          </div>
          <div className={styles.textInfo}>
            Manage your tokens, add
            or withdraw liquidity, and invest in other promising projects.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            Transparency and control
          </div>
          <div className={styles.textInfo}>
            Track the current status of your token, collected liquidity, and current value in real time.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.title}>
            Community and support
          </div>
          <div className={styles.textInfo}>
            Receive help and advice from the Printer community and team at every stage of creating
            and promoting your token.
          </div>
        </div>

      </div>
    </div>
  );

};