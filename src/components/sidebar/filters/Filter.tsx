import React from "react";
import styles from "./Filter.module.css";
import Switch from "react-switch";
import { Filters, useFilter } from "../../../context/filters/FilterContext";

interface FilterProps {
  filterName: string;
  filter: keyof Filters;
  disabled?: boolean;
}

const Filter: React.FC<FilterProps> = ({
  filterName,
  filter,
  disabled,
}: FilterProps) => {
  const { filters, toggleFilter } = useFilter();

  return (
    <div className={styles.filter}>
      <Switch
        onChange={() => toggleFilter(filter)}
        checked={!!filters[filter]}
        disabled={disabled}
      />
      <p>{filterName}</p>
    </div>
  );
};

export default Filter;
