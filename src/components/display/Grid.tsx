import React from "react";
import Card from "./Card";
import styles from "./Grid.module.css";
import { forgeFilters, forgeItem } from "../../data/forge/forgeTypes";
import { useFilter } from "../../context/filters/FilterContext";
import { filterForgeItems } from "../../utils/forgeFilters";
import { sortForgeBest } from "../../utils/forgePriceSort";

interface GridProps {
  filter: forgeFilters;
  forgeItems: forgeItem[];
}

const Grid: React.FC<GridProps> = ({ filter, forgeItems }: GridProps) => {
  const { filters } = useFilter();

  const items = sortForgeBest(forgeItems, filter);
  const filteredForgeItems = filterForgeItems(items, filters);

  return (
    <div className={styles.grid}>
      {filteredForgeItems.map((item, index) => (
        <Card key={index} item={item} filter={filter} />
      ))}
    </div>
  );
};

export default Grid;
