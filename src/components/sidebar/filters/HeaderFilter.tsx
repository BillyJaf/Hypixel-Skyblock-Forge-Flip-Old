import React from "react";
import styles from "./HeaderFilter.module.css";

interface HeaderFilterProps {
  header: string;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({
  header,
}: HeaderFilterProps) => {
  return (
    <div className={styles.header}>
      <h3>{header}</h3>
    </div>
  );
};

export default HeaderFilter;
