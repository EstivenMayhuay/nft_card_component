import React from "react";

// images
import imgEthereum from "../../images/image-equilibrium.jpg";
import iconView from "../../images/icon-view.svg";

// styles
import styles from "./NFTCardHeader.module.css";

const NFTCardHeader = () => {
  return (
    <header className={styles.NFTCard__header}>
      <div className={styles.NFTCard__img}>
        <img src={imgEthereum} alt="estiven" />
      </div>
      <div className={styles.NFTCard__view}>
        <img src={iconView} alt="" />
      </div>
    </header>
  );
};

export default NFTCardHeader;
