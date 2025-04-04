import { Filters } from "../context/filters/FilterContext";
import {
  forgeAuctionItems,
  forgeBazaarItems,
  forgeGemstoneItems,
  forgePetItems,
  forgeReforgeItems,
  forgeToolItems,
} from "../data/forge/forgeItems";
import { forgeItem } from "../data/forge/forgeTypes";
import { cloneDeep } from "lodash";

export function filterForgeItems(forgeItems: forgeItem[], filters: Filters) {
  let filteredList: forgeItem[] = cloneDeep(forgeItems);

  if (!filters.includeAuctionItems) {
    filteredList = filteredList.filter((item) => {
      return !forgeAuctionItems.includes(item.apiName);
    });
  }

  if (!filters.includePets) {
    filteredList = filteredList.filter((item) => {
      return !forgePetItems.includes(item.apiName);
    });
  }

  if (!filters.includeTools) {
    filteredList = filteredList.filter((item) => {
      return !forgeToolItems.includes(item.apiName);
    });
  }

  if (!filters.includeBazaarItems) {
    filteredList = filteredList.filter((item) => {
      return !forgeBazaarItems.includes(item.displayName);
    });
  }

  if (!filters.includeGemstones) {
    filteredList = filteredList.filter((item) => {
      return !forgeGemstoneItems.includes(item.displayName);
    });
  }

  if (!filters.includeReforges) {
    filteredList = filteredList.filter((item) => {
      return !forgeReforgeItems.includes(item.displayName);
    });
  }

  if (!!filters.searchItem) {
    filteredList = [filters.searchItem];
  }

  if (filters.quickForge) {
    filteredList.forEach((item) => {
      item.minutesToForge = item.minutesToForge * 0.7;
    });
  }

  if (filters.coleQuickForge) {
    filteredList.forEach((item) => {
      item.minutesToForge = item.minutesToForge * 0.75;
    });
  }

  return filteredList;
}
