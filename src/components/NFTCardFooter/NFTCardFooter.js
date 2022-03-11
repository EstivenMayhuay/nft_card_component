import React from "react";

// images
import iconPerson from "../../images/image-avatar.png";

// styles
import styles from "./NFTCardFooter.module.css";

const NFTCardFooter = () => {
  return (
    <footer className={styles.NFTCard__footer}>
      <p className={styles.image}>
        <img src={iconPerson} alt="Estiven Mayhuay" />
      </p>
      <span>
        <strong>Creation of</strong> Estiven Mayhuay
      </span>
    </footer>
  );
};

export default NFTCardFooter;
