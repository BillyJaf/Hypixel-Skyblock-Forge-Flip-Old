import axios from "axios";
import {
  auctionAuctions,
  auctionItem,
  bazaarPages,
  forgeItem,
  ingredientItem,
  market,
} from "../data/forge/forgeTypes";
import { forgeAuctionItems, forgeItemsList } from "../data/forge/forgeItems";
import {
  forgeAuctionIngredients,
  forgeIngredients,
} from "../data/forge/forgeIngredients";
import {
  materialInstaBuyPrice,
  profitPerForge,
  profitPerHour,
} from "./forgePriceCalculations";

export async function getBazaarItems() {
  let prices = [];
  try {
    const key = import.meta.env.VITE_HYPIXEL_API_KEY;
    const url = "https://api.hypixel.net/v2/skyblock/bazaar";

    const response = await axios.get(url, {
      params: {
        key: key,
      },
    });

    if (response.data.success) {
      prices = response.data.products;
    } else {
      console.log("Unsuccessful data request.");
    }
  } catch (error) {
    console.log(`Error when getting data: ${error}`);
  }
  return prices;
}

export async function getAuctionItems() {
  let prices: auctionItem[] = [];
  let pages = 0;

  try {
    const key = import.meta.env.VITE_HYPIXEL_API_KEY;
    const url = "https://api.hypixel.net/v2/skyblock/auctions";
    const response = await axios.get(url, {
      params: {
        key: key,
      },
    });

    if (response.data.success) {
      pages = response.data.totalPages;
    } else {
      console.log("Unsuccessful data request.");
    }
  } catch (error) {
    console.log(`Error when getting data: ${error}`);
  }

  try {
    const key = import.meta.env.VITE_HYPIXEL_API_KEY;
    const url = "https://api.hypixel.net/v2/skyblock/auctions";
    for (let i = 0; i < pages; i++) {
      const response = await axios.get(url, {
        params: {
          key: key,
          page: i,
        },
      });
      if (response.data.success) {
        response.data.auctions.forEach((auction: auctionAuctions) => {
          if (auction["bin"]) {
            if (forgeAuctionItems.includes(auction["item_name"])) {
              prices.push({
                itemName: auction["item_name"],
                itemPrice: auction["starting_bid"],
              });
            } else if (forgeAuctionIngredients.includes(auction["item_name"])) {
              prices.push({
                itemName: auction["item_name"],
                itemPrice: auction["starting_bid"],
              });
            }
          }
        });
      } else {
        console.log("Unsuccessful data request.");
      }
    }
  } catch (error) {
    console.log(`Error when getting data: ${error}`);
  }
  return prices;
}

export function fillForgeIngredientsBazaar(bazaarPrices: bazaarPages) {
  forgeIngredients.forEach((ingredient: ingredientItem) => {
    if (
      ingredient.whereToBuy == market.bazaar &&
      ingredient.apiName !== "Coin"
    ) {
      try {
        if (bazaarPrices[ingredient.apiName].sell_summary.length > 0) {
          ingredient.buyOrderPrice =
            bazaarPrices[ingredient.apiName].sell_summary[0].pricePerUnit;
        } else {
          ingredient.buyOrderPrice =
            bazaarPrices[ingredient.apiName].quick_status.sellPrice;
        }
        if (bazaarPrices[ingredient.apiName].buy_summary.length > 0) {
          ingredient.instaBuyPrice =
            bazaarPrices[ingredient.apiName].buy_summary[0].pricePerUnit;
        } else {
          ingredient.instaBuyPrice =
            bazaarPrices[ingredient.apiName].quick_status.buyPrice;
        }
        ingredient.dataFetched = true;
      } catch (error) {
        ingredient.dataFetched = false;
        console.log(`Error when getting data: ${error}`);
      }
    }
  });
}

export function fillForgeIngredientsAuction(auctionPrices: auctionItem[]) {
  forgeIngredients.forEach((ingredient: ingredientItem) => {
    if (
      ingredient.whereToBuy == market.auction &&
      ingredient.apiName !== "Coin"
    ) {
      for (let i = 0; i < auctionPrices.length; i++) {
        if (auctionPrices[i].itemName === ingredient.apiName) {
          ingredient.instaBuyPrice = auctionPrices[i].itemPrice;
          ingredient.dataFetched = true;
          break;
        }
      }
    }
  });
}

export function fillForgeItemsBazaar(bazaarPrices: bazaarPages) {
  forgeItemsList.forEach((item: forgeItem) => {
    if (item.whereToSell == market.bazaar) {
      try {
        if (bazaarPrices[item.apiName].buy_summary.length > 0) {
          item.sellOfferPrice =
            bazaarPrices[item.apiName].buy_summary[0].pricePerUnit;
        } else {
          item.sellOfferPrice =
            bazaarPrices[item.apiName].quick_status.buyPrice;
        }

        if (bazaarPrices[item.apiName].sell_summary.length > 0) {
          item.instaSellPrice =
            bazaarPrices[item.apiName].sell_summary[0].pricePerUnit;
        } else {
          item.instaSellPrice =
            bazaarPrices[item.apiName].quick_status.sellPrice;
        }
        item.profitPerHour = profitPerHour(
          item.minutesToForge,
          materialInstaBuyPrice(item),
          item.instaSellPrice,
        );
        item.profitPerForge = profitPerForge(
          materialInstaBuyPrice(item),
          item.instaSellPrice,
        );
      } catch (error) {
        console.log(`Error when getting data: ${error}`);
      }
    }
  });
}

export function fillForgeItemsAuction(auctionPrices: auctionItem[]) {
  forgeItemsList.forEach((item: forgeItem) => {
    if (item.whereToSell == market.auction) {
      for (let i = 0; i < auctionPrices.length; i++) {
        if (auctionPrices[i].itemName === item.apiName) {
          item.instaSellPrice = auctionPrices[i].itemPrice;
          item.profitPerHour = profitPerHour(
            item.minutesToForge,
            materialInstaBuyPrice(item),
            item.instaSellPrice,
          );
          item.profitPerForge = profitPerForge(
            materialInstaBuyPrice(item),
            item.instaSellPrice,
          );
          break;
        }
      }
    }
  });
}
