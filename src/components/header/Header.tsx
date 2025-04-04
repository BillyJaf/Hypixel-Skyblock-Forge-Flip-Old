import React, { useState } from "react";
import styles from "./Header.module.css";
import { IoFilter } from "react-icons/io5";
import { IoRefreshSharp } from "react-icons/io5";
import Searchbar from "./search/Searchbar";
import { Tooltip } from "react-tooltip";
import {
  fillForgeIngredientsAuction,
  fillForgeIngredientsBazaar,
  fillForgeItemsAuction,
  fillForgeItemsBazaar,
  getAuctionItems,
  getBazaarItems,
} from "../../utils/forgeFetchers";
import { auctionItem, bazaarPages, forgeFilters, forgeItem } from "../../data/forge/forgeTypes";
import { ThreeDots } from "react-loading-icons";
import { forgeItemsList } from "../../data/forge/forgeItems";
import { cloneDeep } from "lodash";
import { lbinCalculator } from "../../utils/forgePriceCalculations";

interface HeaderProps {
  forgeItems: forgeItem[];
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setForgeItems: React.Dispatch<React.SetStateAction<forgeItem[]>>;
  filter: forgeFilters;
}

const Header: React.FC<HeaderProps> = ({
  forgeItems,
  setSidebarOpen,
  setForgeItems,
}: HeaderProps) => {
  const [refetchingData, setRefetchingData] = useState(false);

  const refetchData = () => {
    if (!refetchingData) {
      setRefetchingData(true);
      getBazaarItems().then((items: bazaarPages) => {
        fillForgeIngredientsBazaar(items);
        fillForgeItemsBazaar(items);
        getAuctionItems().then((auctionItems: auctionItem[]) => {
          const lbins = lbinCalculator(auctionItems)
          fillForgeIngredientsAuction(lbins);
          fillForgeItemsAuction(lbins);
          const temp = cloneDeep(forgeItemsList)
          setForgeItems(temp);
          setRefetchingData(false);
        })
      });
    }
  };

  return (
    <div className={styles.header}>
      <div
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen(true)}
        data-tooltip-id="filterData"
        data-tooltip-content="Filter Data"
      >
        <IoFilter size={25} />
      </div>
      <Tooltip id="filterData" />
      <Searchbar forgeItems={forgeItems} />
      <div
        className={styles.sidebarToggle}
        onClick={refetchData}
        data-tooltip-id="refetchData"
        data-tooltip-content="Refetch Data"
      >
        {!refetchingData && <IoRefreshSharp size={25} />}
        {refetchingData && <ThreeDots stroke="#000000" fill="#000000" />}
      </div>
      <Tooltip id="refetchData" />
    </div>
  );
};

export default Header;
