import React from "react";
import styles from "./Card.module.css";
import { forgeItem } from "../../data/forge/forgeTypes";
import { materialInstaBuyPrice } from "../../utils/forgePriceCalculations";
import { forgeFilters } from "../../data/forge/forgeTypes";

interface CardProps {
  item: forgeItem;
  filter: forgeFilters;
}

const Card: React.FC<CardProps> = ({ item, filter }: CardProps) => {
  // Buy-Order:
  // <div className={styles.cardBodyTextRow}>
  //   <h4>{`Material Buy-Order:`}</h4>
  //   <p>{materialBuyOrderPrice(item)}</p>
  // </div>

  // Sell-Offer:
  // <div className={styles.cardBodyTextRow}>
  //   <h4>{`Product Sell-Offer:`}</h4>
  //   <p>{item.sellOfferPrice}</p>
  // </div>
  const instaBuy = materialInstaBuyPrice(item);

  const minutesToHours = (minutes: number) => {
    let hoursCounter: number = 0;
    while (minutes - 60 >= 0) {
      minutes -= 60;
      hoursCounter += 1;
    }
    const hoursString =
      hoursCounter > 0
        ? `${hoursCounter} Hour${hoursCounter !== 1 ? "s" : ""}`
        : "";
    const minutesString =
      minutes > 0
        ? `${Number(minutes.toFixed(1))} Minute${Number(minutes.toFixed(1)) !== 1 ? "s" : ""}`
        : "";
    return hoursString + (hoursString !== "" ? " " : "") + minutesString;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={`src/assets/forge/${item.imageName}.webp`} width={"25%"} />
        <h3>{item.displayName}</h3>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyTextRow}>
          <h4>{"Material Insta-Buy:"}</h4>
          <p>{instaBuy === null ? "No Results." : instaBuy}</p>
        </div>
        <div className={styles.cardBodyTextRow}>
          <h4>{"Product Insta-Sell: "}</h4>
          <p>
            {item.instaSellPrice === null
              ? "No Results."
              : item.instaSellPrice | 0}
          </p>
        </div>
        <div className={styles.cardBodyTextRow}>
          <h4>{"Time To Forge: "}</h4>
          <p>{minutesToHours(item.minutesToForge)}</p>
        </div>
        {filter == forgeFilters.profitPerHour && (
          <div className={styles.cardBodyTextRow}>
            <h4>{"Profit-Per-Hour: "}</h4>
            <p>
              {item.profitPerHour === null ? "No Results." : item.profitPerHour}
            </p>
          </div>
        )}
        {filter == forgeFilters.profitPerForge && (
          <div className={styles.cardBodyTextRow}>
            <h4>{"Profit-Per-Forge: "}</h4>
            <p>
              {item.profitPerForge === null
                ? "No Results."
                : item.profitPerForge}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
