import { createContext, useContext, useState, ReactNode } from "react";
import { forgeItem } from "../../data/forge/forgeTypes";

export interface Filters {
  searchItem: forgeItem | undefined;
  quickForge: boolean;
  coleQuickForge: boolean;
  includeBazaarItems: boolean;
  includeGemstones: boolean;
  includeReforges: boolean;
  includeAuctionItems: boolean;
  includePets: boolean;
  includeTools: boolean;
}

interface FilterContextType {
  filters: Filters;
  toggleFilter: (filterName: keyof Filters, searchedItem?: forgeItem) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({
    searchItem: undefined,
    quickForge: true,
    coleQuickForge: false,
    includeBazaarItems: true,
    includeGemstones: true,
    includeReforges: true,
    includeAuctionItems: true,
    includePets: true,
    includeTools: true,
  });

  const toggleFilter = (
    filterName: keyof Filters,
    searchedItem?: forgeItem,
  ) => {
    if (filterName === "searchItem") {
      setFilters((prev) => ({
        ...prev,
        [filterName]: searchedItem,
      }));
    }

    // The Auction Items filter impacts other filters.
    else if (filterName === "includeAuctionItems") {
      if (filters.includeAuctionItems) {
        setFilters((prev) => ({
          ...prev,
          ["includeAuctionItems"]: false,
          ["includeTools"]: false,
          ["includePets"]: false,
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          ["includeAuctionItems"]: true,
          ["includeTools"]: true,
          ["includePets"]: true,
        }));
      }
    }
    // The Bazaar Items filter impacts other filters.
    else if (filterName === "includeBazaarItems") {
      if (filters.includeBazaarItems) {
        setFilters((prev) => ({
          ...prev,
          ["includeBazaarItems"]: false,
          ["includeGemstones"]: false,
          ["includeReforges"]: false,
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          ["includeBazaarItems"]: true,
          ["includeGemstones"]: true,
          ["includeReforges"]: true,
        }));
      }
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterName]: !prev[filterName],
      }));
    }
  };

  return (
    <FilterContext.Provider value={{ filters, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
