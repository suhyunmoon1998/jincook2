// Menu data for all Jin Cook locations.
//
// Each item lists the locations that serve it. Most dishes are served everywhere
// (ALL). Items marked `verify: true` have a location list that still needs to be
// confirmed against the three live menu pages on jincooks.com — fix the
// `locations` array here and the /menu page updates automatically.

import type { LocationId } from "./locations";

export type CategoryId = "tang" | "myeon" | "signatures" | "shareable" | "hot-stone" | "katsu";

export interface MenuCategory {
  id: CategoryId;
  label: string;
  tagline: string;
  /** Accent used for the card's bottom line */
  accent: "orange" | "green" | "sage" | "amber";
}

export interface MenuItem {
  id: string;
  category: CategoryId;
  ko: string;
  en: string;
  desc: string;
  locations: LocationId[];
  /** Availability by location is unconfirmed — see note at top of file. */
  verify?: boolean;
}

export const menuCategories: MenuCategory[] = [
  { id: "tang", label: "Tang", tagline: "Traditional soup with rice", accent: "orange" },
  { id: "myeon", label: "Myeon", tagline: "Korean-style noodles", accent: "sage" },
  { id: "signatures", label: "Signatures", tagline: "Jincook specialties", accent: "orange" },
  { id: "shareable", label: "Shareable", tagline: "For the table", accent: "green" },
  { id: "hot-stone", label: "Hot Stone", tagline: "Rice specialties", accent: "amber" },
  { id: "katsu", label: "Katsu", tagline: "Gourmet cutlet", accent: "sage" },
];

const ALL: LocationId[] = ["glendale", "santa-monica", "dtla"];

export const menuItems: MenuItem[] = [
  // ── TANG ──────────────────────────────────────────────
  {
    id: "dwaeji-gukbap", category: "tang", ko: "돼지국밥", en: "Dwaeji Gukbap",
    desc: "Blended broth of beef & pork, sliced pork, chives, flour noodle", locations: ALL,
  },
  {
    id: "galbitang", category: "tang", ko: "갈비탕", en: "Galbitang",
    desc: "Beef broth, short ribs, shiitake mushroom, glass noodle, radish, green onion, egg jidan", locations: ALL,
  },
  {
    id: "yukgaejang", category: "tang", ko: "육개장", en: "Yukgaejang",
    desc: "Spicy beef broth, sliced beef, radish, mung bean sprouts, glass noodle, green onion", locations: ALL,
  },
  {
    id: "budae-jjigae", category: "tang", ko: "부대찌개", en: "Budae Jjigae",
    desc: "Sausage, bacon, Spam, kimchi, rice cake, veggie, instant ramen noodle, American cheese", locations: ALL,
  },
  {
    id: "mushroom-soondubu", category: "tang", ko: "버섯순두부", en: "Mushroom Soondubu",
    desc: "Soft tofu stew with vegetable broth", locations: ALL,
  },
  {
    id: "soondubu", category: "tang", ko: "순두부", en: "Soondubu",
    desc: "Soft tofu stew with beef bone broth", locations: ALL,
  },
  {
    id: "seolleongtang", category: "tang", ko: "설렁탕", en: "Seolleongtang",
    desc: "Beef bone broth with assorted beef, green onion, flour noodle",
    locations: ["glendale", "santa-monica"], verify: true,
  },

  // ── MYEON ─────────────────────────────────────────────
  {
    id: "dak-yachae-bibim-myeon", category: "myeon", ko: "닭야채 비빔면", en: "Chicken & Veggie Bibim Myeon",
    desc: "Cold noodle mixed in spicy sauce, shredded chicken & assorted vegetables", locations: ALL,
  },
  {
    id: "chogye-myeon", category: "myeon", ko: "초계면", en: "Chogye Myeon",
    desc: "Cold noodle in chilled chicken broth with shredded chicken, cabbage, red onion", locations: ALL,
  },
  {
    id: "dak-kalguksu", category: "myeon", ko: "닭 칼국수", en: "Dak Kalguksu",
    desc: "Chicken broth, shredded chicken, seaweed flakes, carrots, potato, scallion", locations: ALL,
  },

  // ── SIGNATURES ────────────────────────────────────────
  {
    id: "garlic-suyuk", category: "signatures", ko: "마늘 수육", en: "Garlic Suyuk",
    desc: "Sous vide pork belly, chives, green onion, rich bone broth, homemade garlic butter sauce", locations: ALL,
  },
  {
    id: "galbi-jjim", category: "signatures", ko: "갈비찜", en: "Galbi Jjim",
    desc: "Braised beef short rib, vegetables, rice cake in soy-based sauce (for 2–3 people)", locations: ALL,
  },
  {
    id: "la-galbi", category: "signatures", ko: "LA 갈비", en: "LA Galbi",
    desc: "Korean-style BBQ short rib", locations: ALL,
  },
  {
    id: "jeyuk", category: "signatures", ko: "제육", en: "Jeyuk",
    desc: "Spicy Korean-style marinated pork", locations: ALL,
  },
  {
    id: "dak-bulgogi", category: "signatures", ko: "닭 불고기", en: "Dak Bulgogi",
    desc: "Sweet & savory marinated grilled chicken", locations: ALL,
  },
  {
    id: "bulgogi", category: "signatures", ko: "불고기", en: "Bulgogi",
    desc: "Sweet & savory Korean-style marinated beef", locations: ALL,
  },

  // ── SHAREABLE ─────────────────────────────────────────
  {
    id: "pajeon", category: "shareable", ko: "파전", en: "Pajeon",
    desc: "Crispy pan-fried batter, onion, scallion — seafood or bulgogi", locations: ALL,
  },
  {
    id: "kimchi-jeon", category: "shareable", ko: "김치전", en: "Kimchi Jeon",
    desc: "Crispy pan-fried batter with kimchi", locations: ALL,
  },
  {
    id: "mushroom-japchae", category: "shareable", ko: "버섯잡채", en: "Mushroom Japchae",
    desc: "Sautéed glass noodle with assorted mushroom, truffle oil", locations: ALL,
  },
  {
    id: "tteokgalbi", category: "shareable", ko: "떡갈비", en: "Tteokgalbi",
    desc: "Korean-style grilled beef patty, grilled cheese, sautéed mushrooms",
    locations: ["glendale", "dtla"], verify: true,
  },
  {
    id: "seoul-popper", category: "shareable", ko: "서울파퍼", en: "Seoul Popper",
    desc: "Jalapeños stuffed with bulgogi and mozzarella, deep-fried",
    locations: ["glendale", "dtla"], verify: true,
  },
  {
    id: "fried-mushroom", category: "shareable", ko: "버섯튀김", en: "Fried Shiitake",
    desc: "Deep-fried shiitake mushroom",
    locations: ["santa-monica"], verify: true,
  },
  {
    id: "dakgangjeong", category: "shareable", ko: "닭강정", en: "Dakgangjeong",
    desc: "Korean-style fried chicken", locations: ALL,
  },
  {
    id: "yangnyeom-dakgangjeong", category: "shareable", ko: "양념 닭강정", en: "Yangnyeom Dakgangjeong",
    desc: "Marinated Korean-style fried chicken", locations: ALL,
  },
  {
    id: "tteokbokki", category: "shareable", ko: "떡볶이", en: "Tteokbokki",
    desc: "Rice cake, fishcakes, cabbage in spicy sweet sauce", locations: ALL,
  },
  {
    id: "rose-tteokbokki", category: "shareable", ko: "로제 떡볶이", en: "Rose Tteokbokki",
    desc: "Spicy & creamy tteokbokki with sausage, bacon, mozzarella", locations: ALL,
  },
  {
    id: "yangnyeom-mandu", category: "shareable", ko: "양념만두", en: "Yangnyeom Mandu",
    desc: "Fried pork dumplings in sweet & spicy soy sauce", locations: ALL,
  },
  {
    id: "jjin-mandu", category: "shareable", ko: "찐만두", en: "Jjin Mandu",
    desc: "Steamed juicy pork dumplings", locations: ALL,
  },

  // ── HOT STONE ─────────────────────────────────────────
  {
    id: "mushroom-curry-hot-stone", category: "hot-stone", ko: "돌솥버섯커리", en: "Mushroom Curry Hot Stone",
    desc: "Sautéed mushroom with truffle oil, rice and curry on hot stone", locations: ALL,
  },
  {
    id: "brisket-hot-stone", category: "hot-stone", ko: "돌솥우삼겹", en: "Brisket Hot Stone",
    desc: "Brisket, rice, red onion, bean sprout, corn, scallion on hot stone", locations: ALL,
  },
  {
    id: "bibimbap-hot-stone", category: "hot-stone", ko: "돌솥 비빔밥", en: "Bibimbap Hot Stone",
    desc: "Rice, assorted veggie, pan-fried kimchi, Korean spicy chili paste", locations: ALL,
  },
  {
    id: "bulgogi-hot-stone", category: "hot-stone", ko: "돌솥 불고기", en: "Bulgogi Hot Stone",
    desc: "Sweet & savory marinated beef with rice on hot stone", locations: ALL,
  },
  {
    id: "jeyuk-hot-stone", category: "hot-stone", ko: "돌솥 제육", en: "Spicy Pork Hot Stone",
    desc: "Spicy pork with rice on hot stone", locations: ALL,
  },

  // ── KATSU ─────────────────────────────────────────────
  {
    id: "katsu-combo", category: "katsu", ko: "카츠콤보", en: "Katsu Combo",
    desc: "Pick any two — pork, chicken or fish katsu, or stuffed cheese (cheese, jalapeño, sweet potato)", locations: ALL,
  },
  {
    id: "curry-donkatsu", category: "katsu", ko: "커리 돈까스", en: "Curry Donkatsu",
    desc: "Panko-fried katsu served with rice and curry on hot stone", locations: ALL,
  },
  {
    id: "jalapeno-curry-katsu", category: "katsu", ko: "커리 할라피뇨 돈까스", en: "Jalapeño Cheese Curry Katsu",
    desc: "Cheese-stuffed pork katsu with jalapeño, rice and curry", locations: ALL,
  },
  {
    id: "sweet-potato-curry-katsu", category: "katsu", ko: "고구마 치즈 커리카츠", en: "Sweet Potato Cheese Curry Katsu",
    desc: "Cheese-stuffed pork katsu with sweet potato puree, curry", locations: ALL,
  },
  {
    id: "cheese-curry-katsu", category: "katsu", ko: "치즈커리카츠", en: "Cheese Curry Katsu",
    desc: "Cheese-stuffed pork katsu with rice and curry on hot stone", locations: ALL,
  },
];

export function itemsFor(location: LocationId): MenuItem[] {
  return menuItems.filter((i) => i.locations.includes(location));
}
