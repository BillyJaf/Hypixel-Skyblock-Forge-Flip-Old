import React, { useState } from "react";
import styles from "./RefetchData.module.css";
import { IoIosRefresh } from "react-icons/io";
import {
  fillForgeIngredientsBazaar,
  fillForgeItemsBazaar,
  getBazaarItems,
} from "../../utils/forgeFetchers";
import { bazaarPages } from "../../data/forge/forgeTypes";

interface RefetchDataProps {}

const RefetchData: React.FC<RefetchDataProps> = ({}: RefetchDataProps) => {
  const [refetchingData, setRefetchingData] = useState(false);

  const refetchData = () => {
    setRefetchingData(true);
    getBazaarItems().then((items: bazaarPages) => {
      fillForgeIngredientsBazaar(items);
      fillForgeItemsBazaar(items);
      setRefetchingData(false);
    });
  };

  return (
    <div className={styles.refetchData}>
      <button
        className={styles.button}
        disabled={refetchingData}
        onClick={refetchData}
      >
        <IoIosRefresh size={20} />
        <h3>{"Refetch Data"}</h3>
      </button>
    </div>
  );
};

export default RefetchData;
