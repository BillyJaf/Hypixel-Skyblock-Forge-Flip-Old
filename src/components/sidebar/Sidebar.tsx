import React from "react";
import styles from "./Sidebar.module.css";
import HeaderFilter from "./filters/HeaderFilter";
import { useFilter } from "../../context/filters/FilterContext";
import Filter from "./filters/Filter";
import { forgeFilters } from "../../data/forge/forgeTypes";
import ProfitFilter from "./filters/ProfitFilter";

interface SidebarProps {
  filter: forgeFilters;
  setFilter: React.Dispatch<React.SetStateAction<forgeFilters>>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  filter,
  setFilter,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
  const { filters } = useFilter();

  return (
    <>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <HeaderFilter header="Forge Filters" />
        <Filter filterName="Quick Forge" filter="quickForge" />
        <Filter filterName="Cole Quick Forge" filter="coleQuickForge" />
        <HeaderFilter header="Bazaar Filters" />
        <Filter filterName="Bazaar Items" filter="includeBazaarItems" />
        <Filter
          filterName="Include Gemstones"
          filter="includeGemstones"
          disabled={!filters.includeBazaarItems}
        />
        <Filter
          filterName="Include Reforges"
          filter="includeReforges"
          disabled={!filters.includeBazaarItems}
        />
        <HeaderFilter header="Auction Filters" />
        <Filter filterName="Auction Items" filter="includeAuctionItems" />
        <Filter
          filterName="Include Pets"
          filter="includePets"
          disabled={!filters.includeAuctionItems}
        />
        <Filter
          filterName="Include Tools"
          filter="includeTools"
          disabled={!filters.includeAuctionItems}
        />
        <HeaderFilter header="Profit Method" />
        <ProfitFilter filter={filter} setFilter={setFilter} />
      </div>
      {sidebarOpen && (
        <div
          className={styles.sidebarGrey}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
