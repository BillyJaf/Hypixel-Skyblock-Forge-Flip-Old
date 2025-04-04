export enum forgeFilters {
  profitPerHour,
  profitPerForge,
}

export enum market {
  bazaar,
  auction,
}

export interface ingredientItem {
  apiName: string;
  whereToBuy: market;
  instaBuyPrice: number | null;
  buyOrderPrice?: number | null; // If whereToBuy == auction, then there is no buy order price
  dataFetched: boolean; // If the data for the ingredient couldn't be found, then we can't make the item
}

export interface ingredient {
  quantity: number;
  item: ingredientItem;
}

export interface forgeItem {
  displayName: string;
  imageName: string;
  apiName: string;
  whereToSell: market;
  minutesToForge: number;
  ingredients: ingredient[];
  instaSellPrice: number | null;
  sellOfferPrice?: number | null; // If whereToBuy == auction, then there is no buy order price
  profitPerHour: number | null;
  profitPerForge: number | null;
}

export interface auctionItem {
  itemName: string;
  itemPrice: number;
}

export interface itemBytes {
  type: number;
  data: string;
}

export interface bids {
  auction_id: string;
  bidder: string;
  profile_id: string;
  amount: number;
  timestamp: number;
}

export interface auctionAuctions {
  uuid: string;
  auctioneer: string;
  profile_id: string;
  coop: string[];
  start: number;
  end: number;
  item_name: string;
  item_lore: string;
  extra: string;
  category: string;
  tier: string;
  starting_bid: number;
  item_bytes: itemBytes;
  claimed: boolean;
  claimed_bidders: string[];
  highest_bid_amount: number;
  bids: bids[];
  bin: boolean;
}

export interface auctionPage {
  success: boolean;
  page: number;
  totalPages: 32;
  totalAuctions: number;
  lastUpdated: number;
  auctions: auctionAuctions[];
}

export interface bazaarSummary {
  ammount: number;
  pricePerUnit: number;
  orders: number;
}

export interface quickStatus {
  productId: string;
  sellPrice: number;
  sellVolume: number;
  sellMovingWeek: number;
  sellOrders: number;
  buyPrice: number;
  buyVolume: number;
  buyMovingWeek: number;
  buyOrders: number;
}

export interface bazaarPage {
  product_id: string;
  sell_summary: bazaarSummary[];
  buy_summary: bazaarSummary[];
  quick_status: quickStatus;
}

export interface bazaarPages {
  [key: string]: bazaarPage;
}
