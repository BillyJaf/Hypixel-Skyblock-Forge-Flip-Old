import Grid from "./components/display/Grid";
import { forgeItemsList } from "./data/forge/forgeItems";
import { useEffect, useState } from "react";
import { sortForgeBest } from "./utils/forgePriceSort";
import styles from "./App.module.css";
import {
  auctionItem,
  bazaarPages,
  forgeFilters,
} from "./data/forge/forgeTypes";
import Sidebar from "./components/sidebar/Sidebar";
import { FilterProvider } from "./context/filters/FilterContext";
import bazaarJSON from "./data/exampleMarkets/exampleBazaar.json";
import auctionJSON from "./data/exampleMarkets/exampleAuction.json";
import {
  fillForgeIngredientsAuction,
  fillForgeIngredientsBazaar,
  fillForgeItemsAuction,
  fillForgeItemsBazaar,
} from "./utils/forgeFetchers";
import Header from "./components/header/Header";
import { cloneDeep } from "lodash";

function App() {
  const [filter, setFilter] = useState(forgeFilters.profitPerHour);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [forgeItems, setForgeItems] = useState(forgeItemsList);

  console.log("come on bro")

  const bazaar = bazaarJSON as bazaarPages;
  const auction = auctionJSON.lbin as auctionItem[];

  useEffect(() => {
    fillForgeIngredientsBazaar(bazaar);
    fillForgeIngredientsAuction(auction);
    fillForgeItemsBazaar(bazaar);
    fillForgeItemsAuction(auction);
    const items = sortForgeBest(forgeItems, filter);
    const temp = cloneDeep(items)
    setForgeItems(temp);
  }, []);

  return (
    <>
      <div className={styles.bodyForge}>
        <FilterProvider>
          <Header
            setSidebarOpen={setSidebarOpen}
            forgeItems={forgeItems}
            setForgeItems={setForgeItems}
            filter={filter}
          />
          <Sidebar
            filter={filter}
            setFilter={setFilter}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Grid filter={filter} forgeItems={forgeItems} />
        </FilterProvider>
      </div>
    </>
  );
}

export default App;
