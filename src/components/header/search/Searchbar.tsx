import React from "react";
import styles from "./Searchbar.module.css";
import Select from "react-select";
import { useFilter } from "../../../context/filters/FilterContext";
import { filterForgeItems } from "../../../utils/forgeFilters";
import { forgeItem } from "../../../data/forge/forgeTypes";

interface SearchbarProps {
  forgeItems: forgeItem[];
}

const Searchbar: React.FC<SearchbarProps> = ({
  forgeItems,
}: SearchbarProps) => {
  const { filters, toggleFilter } = useFilter();
  const filteredForgeItems = filterForgeItems(forgeItems, filters);

  let options: {
    value: forgeItem | undefined;
    label: string;
  }[] = filteredForgeItems.map((item) => {
    return {
      value: item,
      label: item.displayName,
    };
  });

  return (
    <div className={styles.searchbar}>
      <Select
        options={options}
        onChange={(option) =>
          toggleFilter("searchItem", !!option ? option.value : undefined)
        }
        isClearable={true}
        className={styles.search}
      />
    </div>
  );
};

export default Searchbar;
