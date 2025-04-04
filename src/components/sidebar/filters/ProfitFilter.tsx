import React from "react";
import styles from "./ProfitFilter.module.css";
import Switch from "react-switch";
import { forgeFilters } from "../../../data/forge/forgeTypes";

interface ProfitFilterProps {
  filter: forgeFilters;
  setFilter: React.Dispatch<React.SetStateAction<forgeFilters>>;
}

const ProfitFilter: React.FC<ProfitFilterProps> = ({
  filter,
  setFilter,
}: ProfitFilterProps) => {
  return (
    <>
      <div className={styles.filter}>
        <Switch
          onChange={(checked) => {
            checked
              ? setFilter(forgeFilters.profitPerHour)
              : setFilter(forgeFilters.profitPerForge);
          }}
          checked={filter == forgeFilters.profitPerHour}
        />
        <p>{"Profit-Per-Hour"}</p>
      </div>
      <div className={styles.filter}>
        <Switch
          onChange={(checked) => {
            checked
              ? setFilter(forgeFilters.profitPerForge)
              : setFilter(forgeFilters.profitPerHour);
          }}
          checked={filter == forgeFilters.profitPerForge}
        />
        <p>{"Profit-Per-Forge"}</p>
      </div>
    </>
  );
};

export default ProfitFilter;
