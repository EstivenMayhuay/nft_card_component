import React from "react";

// components
import NFTCardHeader from "../NFTCardHeader/NFTCardHeader";
import NFTCardBody from "../NFTCardBody/NFTCardBody";
import NFTCardFooter from "../NFTCardFooter/NFTCardFooter";

// styles
import styles from "./NFTCard.module.css";

const NFTCard = () => {
  return (
    <div className={styles.NFTCard}>
      <NFTCardHeader />
      <NFTCardBody />
      <NFTCardFooter />
    </div>
  );
};

export default NFTCard;
