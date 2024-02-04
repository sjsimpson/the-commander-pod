import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";
import { z } from "zod";

export const cardRouter = createTRPCRouter({
  getRandomCard: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      let hasLargeImage = false;
      let card: Card;

      do {
        const scryfallResponse = await axios.get<Card>(
          "https://api.scryfall.com/cards/random",
          {
            params: {
              q: input.query,
            },
          },
        );
        card = scryfallResponse.data;
        hasLargeImage = Boolean(scryfallResponse.data.image_uris?.large);
      } while (!hasLargeImage);

      return card;
    }),
});

const cardColors = ["W", "U", "B", "R", "G"] as const;
export type CardColor = (typeof cardColors)[number];
type CardLegality = "not_legal" | "legal" | "restricted";
export interface Card {
  object: "card";
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: CardColor[number][];
  color_identity: CardColor[number][];
  keywords: string[];
  legalities: {
    standard: CardLegality;
    future: CardLegality;
    historic: CardLegality;
    timeless: CardLegality;
    gladiator: CardLegality;
    pioneer: CardLegality;
    explorer: CardLegality;
    modern: CardLegality;
    legacy: CardLegality;
    pauper: CardLegality;
    vintage: CardLegality;
    penny: CardLegality;
    commander: CardLegality;
    oathbreaker: CardLegality;
    standardbrawl: CardLegality;
    brawl: CardLegality;
    alchemy: CardLegality;
    paupercommander: CardLegality;
    duel: CardLegality;
    oldschool: CardLegality;
    premodern: CardLegality;
    predh: CardLegality;
  };
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  illustration_id: string;
  border_color: string;
  frame: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  prices: {
    usd: string;
    usd_foil: string;
    usd_etched: string;
    eur: string;
    eur_foil: string;
    tix: string;
  };
  related_uris: {
    gatherer: string;
    tcgplayer_infinite_articles: string;
    tcgplayer_infinite_decks: string;
    edhrec: string;
  };
  purchase_uris: {
    tcgplayer: string;
    cardmarket: string;
    cardhoarder: string;
  };
}
