import { forgeAuctionIngredients } from "../data/forge/forgeIngredients";
import { forgeAuctionItems } from "../data/forge/forgeItems";
import { auctionItem, forgeItem } from "../data/forge/forgeTypes";

export function materialInstaBuyPrice(forgeItem: forgeItem) {
  let price: number = 0;
  for (const ingredient of forgeItem.ingredients) {
    if (ingredient.item.instaBuyPrice === null) {
      return null;
    } else {
      price += ingredient.quantity * ingredient.item.instaBuyPrice;
    }
  }
  return price | 0; // | 0 removes the decimals
}

export function materialBuyOrderPrice(forgeItem: forgeItem) {
  let price: number = 0;
  for (const ingredient of forgeItem.ingredients) {
    if (!ingredient.item.buyOrderPrice) {
      return null; // TODO add the auction feature
    } else {
      price += ingredient.quantity * ingredient.item.buyOrderPrice;
    }
  }
  return price | 0; // | 0 removes the decimals
}

export function profitPerHour(
  time: number,
  materialCost: number | null,
  productSell: number | null,
) {
  if (materialCost === null || productSell === null) {
    return null;
  }
  if (materialCost <= 0 || productSell <= 0 || time <= 0) {
    return null;
  }
  return ((60 * (productSell - materialCost)) / time) | 0;
}

export function profitPerForge(
  materialCost: number | null,
  productSell: number | null,
) {
  if (materialCost === null || productSell === null) {
    return null;
  }
  if (materialCost <= 0 || productSell <= 0) {
    return null;
  }
  return (productSell - materialCost) | 0;
}

export function lbinCalculator(auctionItems: auctionItem[]) {
  let lbin: auctionItem[] = [];
  forgeAuctionItems.forEach((name: string) => {
    let minAuction: auctionItem | null = null;
    auctionItems.forEach((auctionItem: auctionItem) => {
      if (auctionItem.itemName === name) {
        if (minAuction === null) {
          minAuction = auctionItem;
        }
        if (auctionItem.itemPrice < minAuction.itemPrice) {
          minAuction = auctionItem;
        }
      }
    });
    if (minAuction !== null) {
      lbin.push(minAuction);
    }
  });

  forgeAuctionIngredients.forEach((name: string) => {
    let minAuction: auctionItem | null = null;
    auctionItems.forEach((auctionItem: auctionItem) => {
      if (auctionItem.itemName === name) {
        if (minAuction === null) {
          minAuction = auctionItem;
        }
        if (auctionItem.itemPrice < minAuction.itemPrice) {
          minAuction = auctionItem;
        }
      }
    });
    if (minAuction !== null) {
      lbin.push(minAuction);
    }
  });
  return lbin;
}
