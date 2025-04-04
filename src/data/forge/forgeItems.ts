import {
  ARTIFACT_OF_POWER_INGREDIENT,
  BEACON_I_INGREDIENT,
  BEACON_II_INGREDIENT,
  BEACON_III_INGREDIENT,
  BEACON_IV_INGREDIENT,
  BEJEWELED_HANDLE_INGREDIENT,
  BLUE_GOBLIN_EGG_INGREDIENT,
  CHISEL_INGREDIENT,
  CLAW_FOSSIL_INGREDIENT,
  CLUBBED_FOSSIL_INGREDIENT,
  COIN_INGREDIENT,
  CONTROL_SWITCH_INGREDIENT,
  CORLEONITE_INGREDIENT,
  DIVAN_FRAGMENT_INGREDIENT,
  DIVANS_ALLOY_IGNREDIENT,
  DRILL_MOTOR_INGREDIENT,
  ELECTRON_TRANSMITTER_INGREDIENT,
  ENCHANTED_COAL_BLOCK_INGREDIENT,
  ENCHANTED_COBBLESTONE_INGREDIENT,
  ENCHANTED_DIAMOND_BLOCK_INGREDIENT,
  ENCHANTED_GLACTIE_INGREDIENT,
  ENCHANTED_GOLD_BLOCK_INGREDIENT,
  ENCHANTED_GOLD_INGREDIENT,
  ENCHANTED_HARD_STONE_INGREDIENT,
  ENCHANTED_IRON_BLOCK_INGREDIENT,
  ENCHANTED_LAPIS_LAZULI_INGREDIENT,
  ENCHANTED_MITHRIL_INGREDIENT,
  ENCHANTED_REDSTONE_BLOCK_INGREDIENT,
  ENCHANTED_TITANIUM_INGREDIENT,
  ENCHANTED_TUNGSTEN_INGREDIENT,
  ENCHANTED_UMBER_INGREDIENT,
  FINE_AMBER_GEMSTONE_INGREDIENT,
  FINE_AMETHYST_GEMSTONE_INGREDIENT,
  FINE_AQUAMARINE_GEMSTONE_INGREDIENT,
  FINE_CITRINE_GEMSTONE_INGREDIENT,
  FINE_JADE_GEMSTONE_INGREDIENT,
  FINE_ONYX_GEMSTONE_INGREDIENT,
  FINE_PERIDOT_GEMSTONE_INGREDIENT,
  FINE_RUBY_GEMSTONE_INGREDIENT,
  FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
  FINE_TOPAZ_GEMSTONE_INGREDIENT,
  FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
  FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
  FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
  FLAWLESS_CITRINE_GEMSTONE_INGREDIENT,
  FLAWLESS_JADE_GEMSTONE_INGREDIENT,
  FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
  FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
  FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
  FLAWLESS_PERIDOT_GEMSTONE_INGREDIENT,
  FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
  FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
  FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
  FOOTPRINT_FOSSIL_INGREDIENT,
  FTX_3070_INGREDIENT,
  FUEL_CANISTER_INGREDIENT,
  GEMSTONE_DRILL_LT522_INGREDIENT,
  GEMSTONE_FUEL_TANK_INGREDIENT,
  GEMSTONE_MIXTURE_INGREDIENT,
  GLACITE_AMALGAMATION_INGREDIENT,
  GLACITE_JEWEL_INGREDIENT,
  GLACITE_PLATED_CHISEL_INGREDIENT,
  GLOSSY_GEMSTONE_INGREDIENT,
  GOBLIN_EGG_INGREDIENT,
  GOLDEN_PLATE_INGREDIENT,
  GREEN_GOBLIN_EGG_INGREDIENT,
  HELIX_FOSSIL_INGREDIENT,
  MAGMA_CORE_INGREDIENT,
  MATCH_STICKS_INGREDIENT,
  MITHRIL_BELT_INGREDIENT,
  MITHRIL_CLOAK_INGREDIENT,
  MITHRIL_DRILL_SXR226_INGREDIENT,
  MITHRIL_GAUNTLET_INGREDIENT,
  MITHRIL_INFUSED_FUEL_TANK_INGREDIENT,
  MITHRIL_NECKLACE_INGREDIENT,
  MITHRIL_PLATE_INGREDIENT,
  MITHRIL_PLATED_DRILL_ENGINE_INGREDIENT,
  PERFECT_OPAL_GEMSTONE_INGREDIENT,
  PERFECT_PLATE_INGREDIENT,
  PERFECT_SAPPHIRE_GEMSTONE_INGREDIENT,
  PLASMA_INGREDIENT,
  RED_GOBLIN_EGG_INGREDIENT,
  REFINED_DIAMOND_INGREDIENT,
  REFINED_MINERAL_INGREDIENT,
  REFINED_MITHRIL_INGREDIENT,
  REFINED_TITANIUM_INGREDIENT,
  REFINED_TUNGSTEN_INGREDIENT,
  REFINED_UMBER_INGREDIENT,
  REINFORCED_CHISEL_INGREDIENT,
  ROBOTRON_REFLECTOR_INGREDIENT,
  RUBY_DRILL_TX15_INGREDIENT,
  RUBY_POLISHED_DRILL_ENGINE,
  SAPPHIRE_POLISHED_DRILL_ENGINE_INGREDIENTS,
  SHATTERED_LOCKET_INGREDIENT,
  SLUDGE_JUICE_INGREDIENT,
  SPINE_FOSSIL_INGREDIENT,
  STARFALL_INGREDIENT,
  SUPERLITE_MOTOR_INGREDIENT,
  SYNTHETIC_HEART_INGREDIENT,
  TITANIUM_ARTIFACT_INGREDIENT,
  TITANIUM_DRILL_DRX355_INGREDIENT,
  TITANIUM_DRILL_DRX455_INGREDIENT,
  TITANIUM_DRILL_DRX555_INGREDIENT,
  TITANIUM_DRILL_DRX655_INGREDIENT,
  TITANIUM_INFUSED_FUEL_TANK_INGREDIENT,
  TITANIUM_PLATED_DRILL_ENGINE_INGREDIENT,
  TITANIUM_RING_INGREDIENT,
  TITANIUM_TALISMAN_INGREDIENT,
  TOPAZ_DRILL_KGR12_INGREDIENT,
  TREASURITE_INGREDIENT,
  TUNGSTEN_INGREDIENT,
  TUNGSTEN_PLATE_INGREDIENT,
  TUSK_FOSSIL_INGREDIENT,
  UGLY_FOSSIL_INGREDIENT,
  UMBER_PLATE_INGREDIENT,
  WEBBED_FOSSIL_INGREDIENT,
  WORM_MEMBRANE_INGREDIENT,
  YELLOW_GOBLIN_EGG_INGREDIENT,
} from "./forgeIngredients";
import { forgeItem, market } from "./forgeTypes";

const refinedDiamond: forgeItem = {
  displayName: "Refined Diamond",
  imageName: "Refined_Diamond",
  apiName: "REFINED_DIAMOND",
  whereToSell: market.bazaar,
  minutesToForge: 480,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_DIAMOND_BLOCK_INGREDIENT,
    },
  ],
};

const refinedMithril: forgeItem = {
  displayName: "Refined Mithril",
  imageName: "Refined_Mithril",
  apiName: "REFINED_MITHRIL",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const refinedTitanium: forgeItem = {
  displayName: "Refined Titanium",
  imageName: "Refined_Titanium",
  apiName: "REFINED_TITANIUM",
  whereToSell: market.bazaar,
  minutesToForge: 720,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 16,
      item: ENCHANTED_TITANIUM_INGREDIENT,
    },
  ],
};

const refinedTungsten: forgeItem = {
  displayName: "Refined Tungsten",
  imageName: "Refined_Tungsten",
  apiName: "REFINED_TUNGSTEN",
  whereToSell: market.bazaar,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_TUNGSTEN_INGREDIENT,
    },
  ],
};

const refinedUmber: forgeItem = {
  displayName: "Refined Umber",
  imageName: "Refined_Umber",
  apiName: "REFINED_UMBER",
  whereToSell: market.bazaar,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 160,
      item: ENCHANTED_UMBER_INGREDIENT,
    },
  ],
};

const fuelCanister: forgeItem = {
  displayName: "Fuel Canister",
  imageName: "Fuel_Canister",
  apiName: "FUEL_TANK",
  whereToSell: market.bazaar,
  minutesToForge: 600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_COAL_BLOCK_INGREDIENT,
    },
  ],
};

const bejeweledHandle: forgeItem = {
  displayName: "Bejeweled Handle",
  imageName: "Enchanted_Stick",
  apiName: "BEJEWELED_HANDLE",
  whereToSell: market.bazaar,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: GLACITE_JEWEL_INGREDIENT,
    },
  ],
};

const drillMotor: forgeItem = {
  displayName: "Drill Motor",
  imageName: "Drill_Motor",
  apiName: "DRILL_ENGINE",
  whereToSell: market.bazaar,
  minutesToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 3,
      item: ENCHANTED_REDSTONE_BLOCK_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const goldenPlate: forgeItem = {
  displayName: "Golden Plate",
  imageName: "Golden_Plate",
  apiName: "GOLDEN_PLATE",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 2,
      item: ENCHANTED_GOLD_BLOCK_INGREDIENT,
    },
    {
      quantity: 5,
      item: GLACITE_JEWEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const mithrilPlate: forgeItem = {
  displayName: "Mithril Plate",
  imageName: "Mithril_Plate",
  apiName: "MITHRIL_PLATE",
  whereToSell: market.bazaar,
  minutesToForge: 1080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const tungstenPlate: forgeItem = {
  displayName: "Tungsten Plate",
  imageName: "Tungsten_Plate",
  apiName: "TUNGSTEN_PLATE",
  whereToSell: market.bazaar,
  minutesToForge: 180,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 1,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const umberPlate: forgeItem = {
  displayName: "Umber Plate",
  imageName: "Umber_Plate",
  apiName: "UMBER_PLATE",
  whereToSell: market.bazaar,
  minutesToForge: 180,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 1,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const gemstoneMixture: forgeItem = {
  displayName: "Gemstone Mixture",
  imageName: "Gemstone_Mixture",
  apiName: "GEMSTONE_MIXTURE",
  whereToSell: market.bazaar,
  minutesToForge: 240,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: FINE_JADE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AMETHYST_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 320,
      item: SLUDGE_JUICE_INGREDIENT,
    },
  ],
};

const galciteAmalgamation: forgeItem = {
  displayName: "Glacite Amalgamation",
  imageName: "Glacite_Amalgamation",
  apiName: "GLACITE_AMALGAMATION",
  whereToSell: market.bazaar,
  minutesToForge: 240,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: FINE_ONYX_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_CITRINE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 4,
      item: FINE_PERIDOT_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 256,
      item: ENCHANTED_GLACTIE_INGREDIENT,
    },
  ],
};

const perfectJasperGemstone: forgeItem = {
  displayName: "Perfect Jasper Gemstone",
  imageName: "Perfect_Jasper_Gemstone",
  apiName: "PERFECT_JASPER_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectRubyGemstone: forgeItem = {
  displayName: "Perfect Ruby Gemstone",
  imageName: "Perfect_Ruby_Gemstone",
  apiName: "PERFECT_RUBY_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectJadeGemstone: forgeItem = {
  displayName: "Perfect Jade Gemstone",
  imageName: "Perfect_Jade_Gemstone",
  apiName: "PERFECT_JADE_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectSapphireGemstone: forgeItem = {
  displayName: "Perfect Sapphire Gemstone",
  imageName: "Perfect_Sapphire_Gemstone",
  apiName: "PERFECT_SAPPHIRE_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAmberGemstone: forgeItem = {
  displayName: "Perfect Amber Gemstone",
  imageName: "Perfect_Amber_Gemstone",
  apiName: "PERFECT_AMBER_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectTopazGemstone: forgeItem = {
  displayName: "Perfect Topaz Gemstone",
  imageName: "Perfect_Topaz_Gemstone",
  apiName: "PERFECT_TOPAZ_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAmethystGemstone: forgeItem = {
  displayName: "Perfect Amethyst Gemstone",
  imageName: "Perfect_Amethyst_Gemstone",
  apiName: "PERFECT_AMETHYST_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectOpalGemstone: forgeItem = {
  displayName: "Perfect Opal Gemstone",
  imageName: "Perfect_Opal_Gemstone",
  apiName: "PERFECT_OPAL_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectOnyxGemstone: forgeItem = {
  displayName: "Perfect Onyx Gemstone",
  imageName: "Perfect_Onyx_Gemstone",
  apiName: "PERFECT_ONYX_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectCitrineGemstone: forgeItem = {
  displayName: "Perfect Citrine Gemstone",
  imageName: "Perfect_Citrine_Gemstone",
  apiName: "PERFECT_CITRINE_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_CITRINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectAquamarineGemstone: forgeItem = {
  displayName: "Perfect Aquamarine Gemstone",
  imageName: "Perfect_Aquamarine_Gemstone",
  apiName: "PERFECT_AQUAMARINE_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectPeridotGemstone: forgeItem = {
  displayName: "Perfect Peridot Gemstone",
  imageName: "Perfect_Peridot_Gemstone",
  apiName: "PERFECT_PERIDOT_GEM",
  whereToSell: market.bazaar,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: FLAWLESS_PERIDOT_GEMSTONE_INGREDIENT,
    },
  ],
};

const perfectPlate: forgeItem = {
  displayName: "Perfect Plate",
  imageName: "Perfect_Plate",
  apiName: "PERFECT_PLATE",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: UMBER_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const mithrilPickaxe: forgeItem = {
  displayName: "Mithril Pickaxe",
  imageName: "Enchanted_Diamond_Pickaxe",
  apiName: "Mithril Pickaxe",
  whereToSell: market.auction,
  minutesToForge: 45,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 64,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 10,
      item: ENCHANTED_GOLD_INGREDIENT,
    },
  ],
};

const beaconII: forgeItem = {
  displayName: "Beacon II",
  imageName: "Enchanted_Beacon",
  apiName: "Beacon II",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_I_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumTalisman: forgeItem = {
  displayName: "Titanium Talisman",
  imageName: "Titanium_Talisman",
  apiName: "Titanium Talisman",
  whereToSell: market.auction,
  minutesToForge: 840,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 2,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const diamonite: forgeItem = {
  displayName: "Diamonite",
  imageName: "Diamonite",
  apiName: "DIAMONITE",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const pocketIceberg: forgeItem = {
  displayName: "Pocket Iceberg",
  imageName: "Pocket_Iceberg",
  apiName: "POCKET_ICEBERG",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: GLACITE_JEWEL_INGREDIENT,
    },
  ],
};

const powerCrystal: forgeItem = {
  displayName: "Power Crystal",
  imageName: "Enchanted_Nether_Star",
  apiName: "POWER_CRYSTAL",
  whereToSell: market.bazaar,
  minutesToForge: 120,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 256,
      item: STARFALL_INGREDIENT,
    },
  ],
};

const bejeweledCollar: forgeItem = {
  displayName: "Bejeweled Collar",
  imageName: "Bejeweled_Collar",
  apiName: "Bejeweled Collar",
  whereToSell: market.auction,
  minutesToForge: 120,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 4,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilGauntlet: forgeItem = {
  displayName: "Mithril Gauntlet",
  imageName: "Mithril_Gauntlet",
  apiName: "Mithril Gauntlet",
  whereToSell: market.auction,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilBelt: forgeItem = {
  displayName: "Mithril Belt",
  imageName: "Mithril_Belt",
  apiName: "Mithril Belt",
  whereToSell: market.auction,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilCloak: forgeItem = {
  displayName: "Mithril Cloak",
  imageName: "Mithril_Cloak",
  apiName: "Mithril Cloak",
  whereToSell: market.auction,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const mithrilNecklace: forgeItem = {
  displayName: "Mithril Necklace",
  imageName: "Mithril_Necklace",
  apiName: "Mithril Necklace",
  whereToSell: market.auction,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: ENCHANTED_MITHRIL_INGREDIENT,
    },
  ],
};

const chisel: forgeItem = {
  displayName: "Chisel",
  imageName: "Armor_Stand",
  apiName: "Chisel",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 64,
      item: TUNGSTEN_INGREDIENT,
    },
  ],
};

const tungstenKey: forgeItem = {
  displayName: "Tungsten Key",
  imageName: "Enchanted_Lever",
  apiName: "TUNGSTEN_KEY",
  whereToSell: market.bazaar,
  minutesToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 192,
      item: ENCHANTED_TUNGSTEN_INGREDIENT,
    },
  ],
};

const umberKey: forgeItem = {
  displayName: "Umber Key",
  imageName: "Enchanted_Dead_Bush",
  apiName: "UMBER_KEY",
  whereToSell: market.bazaar,
  minutesToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 192,
      item: ENCHANTED_UMBER_INGREDIENT,
    },
  ],
};

const frigidHusk: forgeItem = {
  displayName: "Frigid Husk",
  imageName: "Frigid_Husk",
  apiName: "FRIGID_HUSK",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const refinedMithrilPickaxe: forgeItem = {
  displayName: "Refined Mithril Pickaxe",
  imageName: "Enchanted_Diamond_Pickaxe",
  apiName: "Refined Mithril Pickaxe",
  whereToSell: market.auction,
  minutesToForge: 1320,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 30,
      item: ENCHANTED_GOLD_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const mithrilDrillSXR226: forgeItem = {
  displayName: "Mithril Drill SX-R226",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Mithril Drill SX-R226",
  whereToSell: market.auction,
  minutesToForge: 240,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const mithrilInfusedFuelTank: forgeItem = {
  displayName: "Mithril-Infused Fuel Tank",
  imageName: "Mithril-Infused_Fuel_Tank",
  apiName: "Mithril-Infused Fuel Tank",
  whereToSell: market.auction,
  minutesToForge: 600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const mithrilPlatedFuelDrillEngine: forgeItem = {
  displayName: "Mithril-Plated Drill Engine",
  imageName: "Mithril-Plated_Drill_Engine",
  apiName: "Mithril-Plated Drill Engine",
  whereToSell: market.auction,
  minutesToForge: 900,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 3,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const beaconIII: forgeItem = {
  displayName: "Beacon III",
  imageName: "Enchanted_Beacon",
  apiName: "Beacon III",
  whereToSell: market.auction,
  minutesToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_II_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumRing: forgeItem = {
  displayName: "Titanium Ring",
  imageName: "Titanium_Ring",
  apiName: "Titanium Ring",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 6,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_TALISMAN_INGREDIENT,
    },
  ],
};

const pureMithril: forgeItem = {
  displayName: "Pure Mithril",
  imageName: "Pure_Mithril",
  apiName: "PURE_MITHRIL",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 2,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumTesseract: forgeItem = {
  displayName: "Titanium Tesseract",
  imageName: "Titanium_Tesseract",
  apiName: "TITANIUM_TESSERACT",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 16,
      item: ENCHANTED_LAPIS_LAZULI_INGREDIENT,
    },
  ],
};

const dwarvenGeode: forgeItem = {
  displayName: "Dwarven Geode",
  imageName: "Dwarven_Geode",
  apiName: "ROCK_GEMSTONE",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 128,
      item: ENCHANTED_COBBLESTONE_INGREDIENT,
    },
    {
      quantity: 64,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const petrifiedStarfall: forgeItem = {
  displayName: "Petrified Starfall",
  imageName: "Petrified_Starfall",
  apiName: "PETRIFIED_STARFALL",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 512,
      item: STARFALL_INGREDIENT,
    },
  ],
};

const pestoGoblinOmelette: forgeItem = {
  displayName: "Pesto Goblin Omelette",
  imageName: "Pesto_Goblin_Omelette",
  apiName: "Pesto Goblin Omelette",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 99,
      item: GREEN_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FINE_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const ammonite: forgeItem = {
  displayName: "Ammonite Pet",
  imageName: "Ammonite_Pet",
  apiName: "[Lvl 1] Ammonite",
  whereToSell: market.auction,
  minutesToForge: 4320,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: HELIX_FOSSIL_INGREDIENT,
    },
    {
      quantity: 300000,
      item: COIN_INGREDIENT,
    },
  ],
};

const rubyDrillTX15: forgeItem = {
  displayName: "Ruby Drill TX-15",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Ruby Drill TX-15",
  whereToSell: market.auction,
  minutesToForge: 60,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 6,
      item: FINE_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const titaniumGauntlet: forgeItem = {
  displayName: "Titanium Gauntlet",
  imageName: "Titanium_Gauntlet",
  apiName: "Titanium Gauntlet",
  whereToSell: market.auction,
  minutesToForge: 270,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_GAUNTLET_INGREDIENT,
    },
  ],
};

const titaniumBelt: forgeItem = {
  displayName: "Titanium Belt",
  imageName: "Titanium_Belt",
  apiName: "Titanium Belt",
  whereToSell: market.auction,
  minutesToForge: 270,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_BELT_INGREDIENT,
    },
  ],
};

const titaniumCloak: forgeItem = {
  displayName: "Titanium Cloak",
  imageName: "Titanium_Cloak",
  apiName: "Titanium Cloak",
  whereToSell: market.auction,
  minutesToForge: 270,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_CLOAK_INGREDIENT,
    },
  ],
};

const titaniumNecklace: forgeItem = {
  displayName: "Titanium Necklace",
  imageName: "Titanium_Necklace",
  apiName: "Titanium Necklace",
  whereToSell: market.auction,
  minutesToForge: 270,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 16,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_NECKLACE_INGREDIENT,
    },
  ],
};

const mole: forgeItem = {
  displayName: "Mole Pet",
  imageName: "Mole_Pet",
  apiName: "[Lvl 1] Mole",
  whereToSell: market.auction,
  minutesToForge: 4320,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: CLAW_FOSSIL_INGREDIENT,
    },
    {
      quantity: 300000,
      item: COIN_INGREDIENT,
    },
  ],
};

const mithrilDrillSXR326: forgeItem = {
  displayName: "Mithril Drill SX-R326",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Mithril Drill SX-R326",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_DRILL_SXR226_INGREDIENT,
    },
    {
      quantity: 5,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const titaniumPlatedDrillEngine: forgeItem = {
  displayName: "Titanium-Plated Drill Engine",
  imageName: "Titanium-Plated_Drill_Engine",
  apiName: "Titanium-Plated Drill Engine",
  whereToSell: market.auction,
  minutesToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 10,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 5,
      item: PLASMA_INGREDIENT,
    },
    {
      quantity: 4,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const goblinOmelette: forgeItem = {
  displayName: "Goblin Omelette",
  imageName: "Goblin_Omelette",
  apiName: "Goblin Omelette",
  whereToSell: market.auction,
  minutesToForge: 1080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 99,
      item: GOBLIN_EGG_INGREDIENT,
    },
  ],
};

const beaconIV: forgeItem = {
  displayName: "Beacon IV",
  imageName: "Enchanted_Beacon",
  apiName: "Beacon IV",
  whereToSell: market.auction,
  minutesToForge: 2400,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_III_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumArtifact: forgeItem = {
  displayName: "Titanium Artifact",
  imageName: "Titanium_Artifact",
  apiName: "Titanium Artifact",
  whereToSell: market.auction,
  minutesToForge: 2160,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 12,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_RING_INGREDIENT,
    },
  ],
};

const scorchedTopaz: forgeItem = {
  displayName: "Scorched Topaz",
  imageName: "Scorched_Topaz",
  apiName: "HOT_STUFF",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 128,
      item: ENCHANTED_HARD_STONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const sunnySideGoblinOmelette: forgeItem = {
  displayName: "Sunny Side Goblin Omelette",
  imageName: "Sunny_Side_Goblin_Omelette",
  apiName: "Sunny Side Goblin Omelette",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 99,
      item: YELLOW_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FINE_TOPAZ_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneDrillLT522: forgeItem = {
  displayName: "Gemstone Drill LT-522",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Gemstone Drill LT-522",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: RUBY_DRILL_TX15_INGREDIENT,
    },
    {
      quantity: 3,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
  ],
};

const gleamingCrystal: forgeItem = {
  displayName: "Gleaming Crystal",
  imageName: "Gleaming_Crystal",
  apiName: "GLEAMING_CRYSTAL",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: RUBY_DRILL_TX15_INGREDIENT,
    },
    {
      quantity: 1,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_DIAMOND_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX355: forgeItem = {
  displayName: "Titanium Drill DR-X355",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Titanium Drill DR-X355",
  whereToSell: market.auction,
  minutesToForge: 3840,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: DRILL_MOTOR_INGREDIENT,
    },
    {
      quantity: 1,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 6,
      item: GOLDEN_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_MITHRIL_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX455: forgeItem = {
  displayName: "Titanium Drill DR-X455",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Titanium Drill DR-X455",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX355_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 16,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 6,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX555: forgeItem = {
  displayName: "Titanium Drill DR-X555",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Titanium Drill DR-X555",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX455_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 32,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 2,
      item: ENCHANTED_IRON_BLOCK_INGREDIENT,
    },
    {
      quantity: 15,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 20,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumInfusedFuelTank: forgeItem = {
  displayName: "Titanium-Infused Fuel Tank",
  imageName: "Titanium-Infused_Fuel_Tank",
  apiName: "Titanium-Infused Fuel Tank",
  whereToSell: market.auction,
  minutesToForge: 1500,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_INFUSED_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 10,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
  ],
};

const beaconV: forgeItem = {
  displayName: "Beacon V",
  imageName: "Enchanted_Beacon",
  apiName: "Beacon V",
  whereToSell: market.auction,
  minutesToForge: 3000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEACON_IV_INGREDIENT,
    },
    {
      quantity: 40,
      item: REFINED_MITHRIL_INGREDIENT,
    },
    {
      quantity: 5,
      item: PLASMA_INGREDIENT,
    },
  ],
};

const titaniumRelic: forgeItem = {
  displayName: "Titanium Relic",
  imageName: "Titanium_Relic",
  apiName: "Titanium Relic",
  whereToSell: market.auction,
  minutesToForge: 4320,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_ARTIFACT_INGREDIENT,
    },
    {
      quantity: 20,
      item: REFINED_TITANIUM_INGREDIENT,
    },
  ],
};

const spicyGoblinOmelette: forgeItem = {
  displayName: "Spicy Goblin Omelette",
  imageName: "Spicy_Goblin_Omelette",
  apiName: "Spicy Goblin Omelette",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 99,
      item: RED_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneChamber: forgeItem = {
  displayName: "Gemstone Chamber",
  imageName: "Gemstone_Chamber",
  apiName: "Gemstone Chamber",
  whereToSell: market.auction,
  minutesToForge: 240,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 100,
      item: WORM_MEMBRANE_INGREDIENT,
    },
    {
      quantity: 1,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 25000,
      item: COIN_INGREDIENT,
    },
  ],
};

const topazDrillKGR12: forgeItem = {
  displayName: "Topaz Drill KGR-12",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Topaz Drill KGR-12",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: GEMSTONE_DRILL_LT522_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_TOPAZ_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 3,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 5,
      item: MAGMA_CORE_INGREDIENT,
    },
  ],
};

const rubyPolishedDrillEngine: forgeItem = {
  displayName: "Ruby-Polished Drill Engine",
  imageName: "Ruby-Polished_Drill_Engine",
  apiName: "Ruby-Polished Drill Engine",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: MITHRIL_PLATED_DRILL_ENGINE_INGREDIENT,
    },
    {
      quantity: 10,
      item: SUPERLITE_MOTOR_INGREDIENT,
    },
    {
      quantity: 10,
      item: FINE_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const gemstoneFuelTank: forgeItem = {
  displayName: "Gemstone Fuel Tank",
  imageName: "Gemstone_Fuel_Tank",
  apiName: "Gemstone Fuel Tank",
  whereToSell: market.auction,
  minutesToForge: 1800,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_INFUSED_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 30,
      item: CONTROL_SWITCH_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
  ],
};

const amethystGauntlet: forgeItem = {
  displayName: "Amethyst Gauntlet",
  imageName: "Amethyst_Gauntlet",
  apiName: "Amethyst Gauntlet",
  whereToSell: market.auction,
  minutesToForge: 1440,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_AMETHYST_GEMSTONE_INGREDIENT,
    },
  ],
};

const jadeBelt: forgeItem = {
  displayName: "Jade Belt",
  imageName: "Jade_Belt",
  apiName: "Jade Belt",
  whereToSell: market.auction,
  minutesToForge: 1440,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
  ],
};

const sapphireCloak: forgeItem = {
  displayName: "Sapphire Cloak",
  imageName: "Sapphire_Cloak",
  apiName: "Sapphire Cloak",
  whereToSell: market.auction,
  minutesToForge: 1440,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberNecklace: forgeItem = {
  displayName: "Amber Necklace",
  imageName: "Amber_Necklace",
  apiName: "Amber Necklace",
  whereToSell: market.auction,
  minutesToForge: 1440,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 2,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const blueCheeseGoblinOmelette: forgeItem = {
  displayName: "Blue Cheese Goblin Omelette",
  imageName: "Blue_Cheese_Goblin_Omelette",
  apiName: "Blue Cheese Goblin Omelette",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 99,
      item: BLUE_GOBLIN_EGG_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const titaniumDrillDRX655: forgeItem = {
  displayName: "Titanium Drill DR-X655",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Titanium Drill DR-X655",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX555_INGREDIENT,
    },
    {
      quantity: 30,
      item: CORLEONITE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 5,
      item: REFINED_DIAMOND_INGREDIENT,
    },
    {
      quantity: 16,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 12,
      item: REFINED_TITANIUM_INGREDIENT,
    },
    {
      quantity: 5,
      item: MITHRIL_PLATE_INGREDIENT,
    },
  ],
};

const jasperDillX: forgeItem = {
  displayName: "Jasper Drill X",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Jasper Drill X",
  whereToSell: market.auction,
  minutesToForge: 0.5,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TOPAZ_DRILL_KGR12_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_JASPER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 100,
      item: TREASURITE_INGREDIENT,
    },
  ],
};

const sapphirePolishedDrillEngine: forgeItem = {
  displayName: "Sapphire-Polished Drill Engine",
  imageName: "Sapphire-Polished_Drill_Engine",
  apiName: "Sapphire-Polished Drill Engine",
  whereToSell: market.auction,
  minutesToForge: 1200,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TITANIUM_PLATED_DRILL_ENGINE_INGREDIENT,
    },
    {
      quantity: 25,
      item: ELECTRON_TRANSMITTER_INGREDIENT,
    },
    {
      quantity: 25,
      item: FTX_3070_INGREDIENT,
    },
    {
      quantity: 20,
      item: FINE_SAPPHIRE_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberMaterial: forgeItem = {
  displayName: "Amber Material",
  imageName: "Amber_Material",
  apiName: "AMBER_MATERIAL",
  whereToSell: market.bazaar,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 12,
      item: FINE_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: GOLDEN_PLATE_INGREDIENT,
    },
  ],
};

const helmetOfDivan: forgeItem = {
  displayName: "Helmet of Divan",
  imageName: "Helmet_Of_Divan",
  apiName: "Helmet of Divan",
  whereToSell: market.auction,
  minutesToForge: 1380,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 5,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const chestplateOfDivan: forgeItem = {
  displayName: "Chestplate of Divan",
  imageName: "Golden_Chestplate",
  apiName: "Chestplate of Divan",
  whereToSell: market.auction,
  minutesToForge: 1380,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 8,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const leggingsOfDivan: forgeItem = {
  displayName: "Leggings of Divan",
  imageName: "Golden_Leggings",
  apiName: "Leggings of Divan",
  whereToSell: market.auction,
  minutesToForge: 1380,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 7,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const bootsOfDivan: forgeItem = {
  displayName: "Boots of Divan",
  imageName: "Golden_Boots",
  apiName: "Boots of Divan",
  whereToSell: market.auction,
  minutesToForge: 1380,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 10,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_RUBY_GEMSTONE_INGREDIENT,
    },
  ],
};

const amberPolishedDrillEngine: forgeItem = {
  displayName: "Amber-Polished Drill Engine",
  imageName: "Amber-Polished_Drill_Engine",
  apiName: "Amber-Polished Drill Engine",
  whereToSell: market.auction,
  minutesToForge: 3000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: RUBY_POLISHED_DRILL_ENGINE,
    },
    {
      quantity: 1,
      item: SAPPHIRE_POLISHED_DRILL_ENGINE_INGREDIENTS,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 50,
      item: ROBOTRON_REFLECTOR_INGREDIENT,
    },
  ],
};

const perfectlyCutFuelTank: forgeItem = {
  displayName: "Perfectly-Cut Fuel Tank",
  imageName: "Perfectly-Cut_Fuel_Tank",
  apiName: "Perfectly-Cut Fuel Tank",
  whereToSell: market.auction,
  minutesToForge: 3000,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: GEMSTONE_FUEL_TANK_INGREDIENT,
    },
    {
      quantity: 25,
      item: GEMSTONE_MIXTURE_INGREDIENT,
    },
    {
      quantity: 70,
      item: SYNTHETIC_HEART_INGREDIENT,
    },
  ],
};

const divansDrill: forgeItem = {
  displayName: "Divan's Drill",
  imageName: "Enchanted_Prismarine_Shard",
  apiName: "Divan's Drill",
  whereToSell: market.auction,
  minutesToForge: 3600,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: DIVANS_ALLOY_IGNREDIENT,
    },
    {
      quantity: 1,
      item: TITANIUM_DRILL_DRX655_INGREDIENT,
    },
    {
      quantity: 50000000,
      item: COIN_INGREDIENT,
    },
  ],
};

const divansPowderCoating: forgeItem = {
  displayName: "Divan's Powder Coating",
  imageName: "Divans_Powder_Coating",
  apiName: "DIVAN_POWDER_COATING",
  whereToSell: market.bazaar,
  minutesToForge: 2160,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 32,
      item: GLOSSY_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 32,
      item: REFINED_MINERAL_INGREDIENT,
    },
    {
      quantity: 5,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
    {
      quantity: 16,
      item: ENCHANTED_GOLD_BLOCK_INGREDIENT,
    },
  ],
};

const trex: forgeItem = {
  displayName: "T-Rex Pet",
  imageName: "T-Rex_Pet",
  apiName: "[Lvl 1] T-Rex",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: FOOTPRINT_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const mammoth: forgeItem = {
  displayName: "Mammoth Pet",
  imageName: "Mammoth_Pet",
  apiName: "[Lvl 1] Mammoth",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: TUSK_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_ONYX_GEMSTONE_INGREDIENT,
    },
  ],
};

const spinosaurus: forgeItem = {
  displayName: "Spinosaurus Pet",
  imageName: "Spinosaurus_Pet",
  apiName: "[Lvl 1] Spinosaurus",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: SPINE_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const penguin: forgeItem = {
  displayName: "Penguin Pet",
  imageName: "Penguin_Pet",
  apiName: "[Lvl 1] Penguin",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: WEBBED_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AQUAMARINE_GEMSTONE_INGREDIENT,
    },
  ],
};

const goblin: forgeItem = {
  displayName: "Goblin Pet",
  imageName: "Goblin_Pet",
  apiName: "[Lvl 1] Goblin",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: UGLY_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const ankylosaurus: forgeItem = {
  displayName: "Ankylosaurus Pet",
  imageName: "Ankylosaurus_Pet",
  apiName: "[Lvl 1] Ankylosaurus",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: CLUBBED_FOSSIL_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_OPAL_GEMSTONE_INGREDIENT,
    },
  ],
};

const dwarvenHandwarmers: forgeItem = {
  displayName: "Dwarven Handwarmers",
  imageName: "Dwarven_Handwarmers",
  apiName: "Dwarven Handwarmers",
  whereToSell: market.auction,
  minutesToForge: 240,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: UMBER_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_JADE_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 1,
      item: FLAWLESS_AMBER_GEMSTONE_INGREDIENT,
    },
  ],
};

const reinforcedChisel: forgeItem = {
  displayName: "Reinforced Chisel",
  imageName: "Armor_Stand",
  apiName: "Reinforced Chisel",
  whereToSell: market.auction,
  minutesToForge: 720,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: CHISEL_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 2,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const glacitePlatedChisel: forgeItem = {
  displayName: "Glacite-Plated Chisel",
  imageName: "Armor_Stand",
  apiName: "Glacite-Plated Chisel",
  whereToSell: market.auction,
  minutesToForge: 1080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: REINFORCED_CHISEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: MITHRIL_PLATE_INGREDIENT,
    },
    {
      quantity: 8,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const perfectChisel: forgeItem = {
  displayName: "Perfect Chisel",
  imageName: "Enchanted_Armor_Stand",
  apiName: "Perfect Chisel",
  whereToSell: market.auction,
  minutesToForge: 1080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: GLACITE_PLATED_CHISEL_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
  ],
};

const dwarvenMetalTalisman: forgeItem = {
  displayName: "Dwarven Metal Talisman",
  imageName: "Dwarven_Metal_Talisman",
  apiName: "Dwarven Metal Talisman",
  whereToSell: market.auction,
  minutesToForge: 1440,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 4,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 4,
      item: REFINED_TUNGSTEN_INGREDIENT,
    },
    {
      quantity: 4,
      item: GLACITE_AMALGAMATION_INGREDIENT,
    },
  ],
};

const portableCampfire: forgeItem = {
  displayName: "Portable Campfire",
  imageName: "Furnace",
  apiName: "Portable Campfire",
  whereToSell: market.auction,
  minutesToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: REFINED_UMBER_INGREDIENT,
    },
    {
      quantity: 16,
      item: MATCH_STICKS_INGREDIENT,
    },
  ],
};

const tungstenRegulator: forgeItem = {
  displayName: "Tungsten Regulator",
  imageName: "Tungsten_Regulator",
  apiName: "Tungsten Regulator",
  whereToSell: market.auction,
  minutesToForge: 360,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: PERFECT_OPAL_GEMSTONE_INGREDIENT,
    },
    {
      quantity: 5,
      item: FUEL_CANISTER_INGREDIENT,
    },
    {
      quantity: 5,
      item: TUNGSTEN_PLATE_INGREDIENT,
    },
  ],
};

const pendantOfDivan: forgeItem = {
  displayName: "Pendant of Divan",
  imageName: "Pendant_Of_Divan",
  apiName: "Pendant of Divan",
  whereToSell: market.auction,
  minutesToForge: 10080,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: SHATTERED_LOCKET_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
    {
      quantity: 10,
      item: DIVAN_FRAGMENT_INGREDIENT,
    },
  ],
};

const relicOfPower: forgeItem = {
  displayName: "Relic of Power",
  imageName: "Relic_Of_Power",
  apiName: "Relic of Power",
  whereToSell: market.auction,
  minutesToForge: 480,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: ARTIFACT_OF_POWER_INGREDIENT,
    },
    {
      quantity: 4,
      item: PERFECT_PLATE_INGREDIENT,
    },
  ],
};

const skeletonKey: forgeItem = {
  displayName: "Skeleton Key",
  imageName: "Tripwire_Hook",
  apiName: "SKELETON_KEY",
  whereToSell: market.bazaar,
  minutesToForge: 30,
  instaSellPrice: null,
  sellOfferPrice: null,
  profitPerHour: null,
  profitPerForge: null,
  ingredients: [
    {
      quantity: 1,
      item: BEJEWELED_HANDLE_INGREDIENT,
    },
    {
      quantity: 1,
      item: PERFECT_PLATE_INGREDIENT,
    },
  ],
};

export const forgeItemsList: forgeItem[] = [
  refinedDiamond,
  refinedMithril,
  refinedTitanium,
  refinedTungsten,
  refinedUmber,
  fuelCanister,
  bejeweledHandle,
  drillMotor,
  goldenPlate,
  mithrilPlate,
  tungstenPlate,
  umberPlate,
  gemstoneMixture,
  galciteAmalgamation,
  perfectAmberGemstone,
  perfectAmethystGemstone,
  perfectAquamarineGemstone,
  perfectCitrineGemstone,
  perfectJadeGemstone,
  perfectJasperGemstone,
  perfectOnyxGemstone,
  perfectOpalGemstone,
  perfectPeridotGemstone,
  perfectRubyGemstone,
  perfectSapphireGemstone,
  perfectTopazGemstone,
  perfectPlate,
  mithrilPickaxe,
  beaconII,
  titaniumTalisman,
  diamonite,
  pocketIceberg,
  powerCrystal,
  bejeweledCollar,
  mithrilGauntlet,
  mithrilBelt,
  mithrilCloak,
  mithrilNecklace,
  chisel,
  tungstenKey,
  umberKey,
  frigidHusk,
  refinedMithrilPickaxe,
  mithrilDrillSXR226,
  mithrilInfusedFuelTank,
  mithrilPlatedFuelDrillEngine,
  beaconIII,
  titaniumRing,
  pureMithril,
  titaniumTesseract,
  dwarvenGeode,
  petrifiedStarfall,
  pestoGoblinOmelette,
  ammonite,
  rubyDrillTX15,
  titaniumGauntlet,
  titaniumBelt,
  titaniumCloak,
  titaniumNecklace,
  mole,
  mithrilDrillSXR326,
  titaniumPlatedDrillEngine,
  goblinOmelette,
  beaconIV,
  titaniumArtifact,
  scorchedTopaz,
  sunnySideGoblinOmelette,
  gemstoneDrillLT522,
  gleamingCrystal,
  titaniumDrillDRX355,
  titaniumDrillDRX455,
  titaniumDrillDRX555,
  titaniumInfusedFuelTank,
  beaconV,
  titaniumRelic,
  spicyGoblinOmelette,
  gemstoneChamber,
  topazDrillKGR12,
  rubyPolishedDrillEngine,
  gemstoneFuelTank,
  amethystGauntlet,
  jadeBelt,
  sapphireCloak,
  amberNecklace,
  blueCheeseGoblinOmelette,
  titaniumDrillDRX655,
  jasperDillX,
  sapphirePolishedDrillEngine,
  amberMaterial,
  helmetOfDivan,
  chestplateOfDivan,
  leggingsOfDivan,
  bootsOfDivan,
  amberPolishedDrillEngine,
  perfectlyCutFuelTank,
  divansDrill,
  divansPowderCoating,
  trex,
  mammoth,
  spinosaurus,
  penguin,
  goblin,
  ankylosaurus,
  dwarvenHandwarmers,
  reinforcedChisel,
  glacitePlatedChisel,
  perfectChisel,
  dwarvenMetalTalisman,
  portableCampfire,
  tungstenRegulator,
  pendantOfDivan,
  relicOfPower,
  skeletonKey,
];

export const forgeItemsString: string[] = [
  "Refined_Diamond",
  "Refined_Mithril",
  "Refined_Titanium",
  "Refined_Tungsten",
  "Refined_Umber",
  "Fuel_Canister",
  "Bejeweled_Handle",
  "Drill_Motor",
  "Golden_Plate",
  "Mithril_Plate",
  "Tungsten_Plate",
  "Umber_Plate",
  "Gemstone_Mixture",
  "Glacite_Amalgamation",
  "Perfect_Jasper_Gemstone",
  "Perfect_Ruby_Gemstone",
  "Perfect_Jade_Gemstone",
  "Perfect_Sapphire_Gemstone",
  "Perfect_Amber_Gemstone",
  "Perfect_Topaz_Gemstone",
  "Perfect_Amethyst_Gemstone",
  "Perfect_Opal_Gemstone",
  "Perfect_Onyx_Gemstone",
  "Perfect_Citrine_Gemstone",
  "Perfect_Aquamarine_Gemstone",
  "Perfect_Peridot_Gemstone",
  "Perfect_Plate",
  "Mithril_Pickaxe",
  "Beacon_II",
  "Titanium_Talisman",
  "Diamonite",
  "Pocket_Iceberg",
  "Power_Crystal",
  "Travel_Scroll_To_The_Dwarven_Forge",
  "Bejeweled_Collar",
  "Mithril_Gauntlet",
  "Mithril_Belt",
  "Mithril_Cloak",
  "Mithril_Necklace",
  "Chisel",
  "Tungsten_Key",
  "Umber_Key",
  "Frigid_Husk",
  "Travel_Scroll_To_The_Dwarven_Base_Camp",
  "Refined_Mithril_Pickaxe",
  "Mithril_Drill_SX-R226",
  "Mithril-Infused_Fuel_Tank",
  "Mithril_Plated_Drill_Engine",
  "Beacon_III",
  "Titanium_Ring",
  "Pure_Mithril",
  "Titanium_Tesseract",
  "Dwarven_Geode",
  "Petrified_Starfall",
  "Pesto_Goblin_Omelette",
  "[Lvl 1] Ammonite",
  "Ruby_Drill_TX-15",
  "Titanium_Gauntlet",
  "Titanium_Belt",
  "Titanium_Cloak",
  "Titanium_Necklace",
  "[Lvl 1] Mole",
  "Mithril_Drill_SX-R326",
  "Titanium-Plated_Drill_Engine",
  "Goblin_Omelette",
  "Beacon_IV",
  "Scorched_Topaz",
  "Sunny_Side_Goblin_Omelette",
  "Gemstone_Drill_LT-522",
  "Gleaming_Crystal",
  "Titanium_Drill_DR-X455",
  "Titanium_Drill_DR-X555",
  "Titanium-Infused Fuel Tank",
  "Beacon V",
  "Titanium_Relic",
  "Spicy_Goblin_Omelette",
  "Gemstone_Chamber",
  "Topaz_Drill_KGR-12",
  "Ruby-Polished_Drill_Engine",
  "Gemstone_Fuel_Tank",
  "Amethyst_Gauntlet",
  "Jade_Belt",
  "Sapphire_Cloak",
  "Amber_Necklace",
  "Blue_Cheese_Goblin_Omelette",
  "Titanium_Drill_DR-X655",
  "Jasper_Drill_X",
  "Sapphire-polished_Drill_Engine",
  "Amber_Material",
  "Helmet_Of_Divan",
  "Chestplate_Of_Divan",
  "Leggings_Of_Divan",
  "Boots_Of_Divan",
  "Amber-Polished_Drill_Engine",
  "Perfectly-Cut_Fuel_Tank",
  "Divan's_Drill",
  "Divan's_Powder_Coating",
  "Secret_Railroad_Pass",
  "[Lvl 1] T-Rex",
  "[Lvl 1] Spinosaurus",
  "[Lvl 1] Goblin",
  "[Lvl 1] Ankylosaurus",
  "[Lvl 1] Penguin",
  "[Lvl 1] Mammoth",
  "Dwarven_Handwarmers",
  "Reinforced_Chisel",
  "Dwarven_Metal_Talisman",
  "Portable_Campfire",
  "Tungsten_Regulator",
  "Glacite-Plated_Chisel",
  "Perfect_Chisel",
  "Pendant_Of_Divan",
  "Relic_Of_Power",
  "Skeleton_Key",
];

export const forgeItemsDisplayString: string[] = [
  "Refined Diamond",
  "Refined Mithril",
  "Refined Titanium",
  "Refined Tungsten",
  "Refined Umber",
  "Fuel Canister",
  "Bejeweled Handle",
  "Drill Motor",
  "Golden Plate",
  "Mithril Plate",
  "Tungsten Plate",
  "Umber Plate",
  "Gemstone Mixture",
  "Glacite Amalgamation",
  "Perfect Jasper Gemstone",
  "Perfect Ruby Gemstone",
  "Perfect Jade Gemstone",
  "Perfect Sapphire Gemstone",
  "Perfect Amber Gemstone",
  "Perfect Topaz Gemstone",
  "Perfect Amethyst Gemstone",
  "Perfect Opal Gemstone",
  "Perfect Onyx Gemstone",
  "Perfect Citrine Gemstone",
  "Perfect Aquamarine Gemstone",
  "Perfect Peridot Gemstone",
  "Perfect Plate",
  "Mithril Pickaxe",
  "Beacon II",
  "Titanium Talisman",
  "Diamonite",
  "Pocket Iceberg",
  "Power Crystal",
  "Travel Scroll To The Dwarven Forge",
  "Bejeweled Collar",
  "Mithril Gauntlet",
  "Mithril Belt",
  "Mithril Cloak",
  "Mithril Necklace",
  "Chisel",
  "Tungsten Key",
  "Umber Key",
  "Frigid Husk",
  "Travel Scroll To The Dwarven Base Camp",
  "Refined Mithril Pickaxe",
  "Mithril Drill SX-R226",
  "Mithril-Infused Fuel Tank",
  "Mithril Plated Drill Engine",
  "Beacon III",
  "Titanium Ring",
  "Pure Mithril",
  "Titanium Tesseract",
  "Dwarven Geode",
  "Petrified Starfall",
  "Pesto Goblin Omelette",
  "[Lvl 1] Ammonite",
  "Ruby Drill TX-15",
  "Titanium Gauntlet",
  "Titanium Belt",
  "Titanium Cloak",
  "Titanium Necklace",
  "[Lvl 1] Mole",
  "Mithril Drill SX-R326",
  "Titanium-Plated Drill Engine",
  "Goblin Omelette",
  "Beacon IV",
  "Scorched Topaz",
  "Sunny Side Goblin Omelette",
  "Gemstone Drill LT-522",
  "Gleaming Crystal",
  "Titanium Drill DR-X455",
  "Titanium Drill DR-X555",
  "Titanium-Infused Fuel Tank",
  "Beacon V",
  "Titanium Relic",
  "Spicy Goblin Omelette",
  "Gemstone Chamber",
  "Topaz Drill KGR-12",
  "Ruby-Polished Drill Engine",
  "Gemstone Fuel Tank",
  "Amethyst Gauntlet",
  "Jade Belt",
  "Sapphire Cloak",
  "Amber Necklace",
  "Blue Cheese Goblin Omelette",
  "Titanium Drill DR-X655",
  "Jasper Drill X",
  "Sapphire-polished Drill Engine",
  "Amber Material",
  "Helmet Of Divan",
  "Chestplate Of Divan",
  "Leggings Of Divan",
  "Boots Of Divan",
  "Amber-Polished Drill Engine",
  "Perfectly-Cut Fuel Tank",
  "Divan's Drill",
  "Divan's Powder Coating",
  "Secret Railroad Pass",
  "[Lvl 1] T-Rex",
  "[Lvl 1] Spinosaurus",
  "[Lvl 1] Goblin",
  "[Lvl 1] Ankylosaurus",
  "[Lvl 1] Penguin",
  "[Lvl 1] Mammoth",
  "Dwarven Handwarmers",
  "Reinforced Chisel",
  "Dwarven Metal Talisman",
  "Portable Campfire",
  "Tungsten Regulator",
  "Glacite-Plated Chisel",
  "Perfect Chisel",
  "Pendant Of Divan",
  "Relic Of Power",
  "Skeleton Key",
];

export const forgeAuctionItems: string[] = [
  "Mithril Pickaxe",
  "Beacon II",
  "Titanium Talisman",
  "Bejeweled Collar",
  "Mithril Gauntlet",
  "Mithril Belt",
  "Mithril Cloak",
  "Mithril Necklace",
  "Chisel",
  "Refined Mithril Pickaxe",
  "Mithril Drill SX-R226",
  "Mithril-Infused Fuel Tank",
  "Mithril-Plated Drill Engine",
  "Beacon III",
  "Titanium Ring",
  "Pesto Goblin Omelette",
  "[Lvl 1] Ammonite",
  "Ruby Drill TX-15",
  "Titanium Gauntlet",
  "Titanium Belt",
  "Titanium Cloak",
  "Titanium Necklace",
  "[Lvl 1] Mole",
  "Mithril Drill SX-R326",
  "Titanium-Plated Drill Engine",
  "Goblin Omelette",
  "Beacon IV",
  "Sunny Side Goblin Omelette",
  "Gemstone Drill LT-522",
  "Titanium Drill DR-X355",
  "Titanium Drill DR-X455",
  "Titanium Drill DR-X555",
  "Titanium-Infused Fuel Tank",
  "Beacon V",
  "Titanium Artifact",
  "Titanium Relic",
  "Spicy Goblin Omelette",
  "Gemstone Chamber",
  "Topaz Drill KGR-12",
  "Ruby-Polished Drill Engine",
  "Gemstone Fuel Tank",
  "Amethyst Gauntlet",
  "Jade Belt",
  "Sapphire Cloak",
  "Amber Necklace",
  "Blue Cheese Goblin Omelette",
  "Titanium Drill DR-X655",
  "Jasper Drill X",
  "Sapphire-Polished Drill Engine",
  "Helmet of Divan",
  "Chestplate of Divan",
  "Leggings of Divan",
  "Boots of Divan",
  "Amber-Polished Drill Engine",
  "Perfectly-Cut Fuel Tank",
  "Divan's Drill",
  "[Lvl 1] T-Rex",
  "[Lvl 1] Spinosaurus",
  "[Lvl 1] Goblin",
  "[Lvl 1] Ankylosaurus",
  "[Lvl 1] Penguin",
  "[Lvl 1] Mammoth",
  "Dwarven Handwarmers",
  "Reinforced Chisel",
  "Dwarven Metal Talisman",
  "Portable Campfire",
  "Tungsten Regulator",
  "Glacite-Plated Chisel",
  "Perfect Chisel",
  "Pendant of Divan",
  "Relic of Power",
];

export const forgePetItems: string[] = [
  "[Lvl 1] Ammonite",
  "[Lvl 1] Mole",
  "[Lvl 1] T-Rex",
  "[Lvl 1] Spinosaurus",
  "[Lvl 1] Goblin",
  "[Lvl 1] Ankylosaurus",
  "[Lvl 1] Penguin",
  "[Lvl 1] Mammoth",
];

export const forgeToolItems: string[] = [
  "Mithril Pickaxe",
  "Refined Mithril Pickaxe",
  "Mithril Drill SX-R226",
  "Ruby Drill TX-15",
  "Mithril Drill SX-R326",
  "Gemstone Drill LT-522",
  "Titanium Drill DR-X355",
  "Titanium Drill DR-X455",
  "Titanium Drill DR-X555",
  "Topaz Drill KGR-12",
  "Titanium Drill DR-X655",
  "Jasper Drill X",
  "Divan's Drill",
];

export const forgeBazaarItems: string[] = [
  "Refined Diamond",
  "Refined Mithril",
  "Refined Titanium",
  "Refined Tungsten",
  "Refined Umber",
  "Fuel Canister",
  "Bejeweled Handle",
  "Drill Motor",
  "Golden Plate",
  "Mithril Plate",
  "Tungsten Plate",
  "Umber Plate",
  "Gemstone Mixture",
  "Glacite Amalgamation",
  "Perfect Jasper Gemstone",
  "Perfect Ruby Gemstone",
  "Perfect Jade Gemstone",
  "Perfect Sapphire Gemstone",
  "Perfect Amber Gemstone",
  "Perfect Topaz Gemstone",
  "Perfect Amethyst Gemstone",
  "Perfect Opal Gemstone",
  "Perfect Onyx Gemstone",
  "Perfect Citrine Gemstone",
  "Perfect Aquamarine Gemstone",
  "Perfect Peridot Gemstone",
  "Perfect Plate",
  "Diamonite",
  "Pocket Iceberg",
  "Power Crystal",
  "Tungsten Key",
  "Umber Key",
  "Frigid Husk",
  "Pure Mithril",
  "Titanium Tesseract",
  "Dwarven Geode",
  "Petrified Starfall",
  "Scorched Topaz",
  "Gleaming Crystal",
  "Amber Material",
  "Divan's Powder Coating",
  "Skeleton Key",
];

export const forgeGemstoneItems: string[] = [
  "Perfect Jasper Gemstone",
  "Perfect Ruby Gemstone",
  "Perfect Jade Gemstone",
  "Perfect Sapphire Gemstone",
  "Perfect Amber Gemstone",
  "Perfect Topaz Gemstone",
  "Perfect Amethyst Gemstone",
  "Perfect Opal Gemstone",
  "Perfect Onyx Gemstone",
  "Perfect Citrine Gemstone",
  "Perfect Aquamarine Gemstone",
  "Perfect Peridot Gemstone",
];

export const forgeReforgeItems: string[] = [
  "Diamonite",
  "Pocket Iceberg",
  "Frigid Husk",
  "Pure Mithril",
  "Titanium Tesseract",
  "Dwarven Geode",
  "Petrified Starfall",
  "Scorched Topaz",
  "Gleaming Crystal",
  "Amber Material",
];
