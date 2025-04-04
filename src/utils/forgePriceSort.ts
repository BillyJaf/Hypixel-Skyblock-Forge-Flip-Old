import { forgeFilters, forgeItem } from "../data/forge/forgeTypes";

// Since there are only approximately 100 items we can forge, bubble sort is fine:
export function sortForgeBest(items: forgeItem[], sort: forgeFilters) {
  if (sort == forgeFilters.profitPerHour) {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length - 1; j++) {
        if (
          items[j].profitPerHour === null &&
          items[j + 1].profitPerHour !== null
        ) {
          [items[j], items[j + 1]] = [items[j + 1], items[j]];
        }
        if (
          items[j].profitPerHour !== null &&
          items[j + 1].profitPerHour !== null
        ) {
          if (items[j].profitPerHour! < items[j + 1].profitPerHour!) {
            [items[j], items[j + 1]] = [items[j + 1], items[j]];
          }
        }
      }
    }
  }
  if (sort == forgeFilters.profitPerForge) {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length - 1; j++) {
        if (
          items[j].profitPerForge === null &&
          items[j + 1].profitPerForge !== null
        ) {
          [items[j], items[j + 1]] = [items[j + 1], items[j]];
        }
        if (
          items[j].profitPerForge !== null &&
          items[j + 1].profitPerForge !== null
        ) {
          if (items[j].profitPerForge! < items[j + 1].profitPerForge!) {
            [items[j], items[j + 1]] = [items[j + 1], items[j]];
          }
        }
      }
    }
  }

  return items;
}
