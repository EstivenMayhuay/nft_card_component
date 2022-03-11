import React from "react";

// images
import iconEquilibrium from "../../images/icon-ethereum.svg";
import iconClock from "../../images/icon-clock.svg";

// styles
import styles from "./NFTCardBody.module.css";

const NFTCardBody = () => {
  return (
    <main className={styles.NFTCard__body}>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className={styles.status}>
        <p className={styles.ethereum}>
          <img src={iconEquilibrium} alt="icon ethereum" />
          <span>0.041 ETH</span>
        </p>
        <p className={styles.days}>
          <img src={iconClock} alt="icon clock" />
          <span>3 days left</span>
        </p>
      </div>
    </main>
  );
};

export default NFTCardBody;
