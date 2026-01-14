import { MenuCategory } from "@/lib/types";

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters & Bites",
    description: "Begin your journey with our fresh coastal appetizers.",
    items: [
      {
        id: "crab-cakes",
        name: "Crispy Crab Cakes",
        description:
          "Hand-picked crab meat mixed with herbs, breaded and fried to golden perfection.",
        price: 12.5,
        currency: "$",
        category: "starters",
        image: "/assets/images/menu/crab-cakes.jpg",
        spiceLevel: 1,
        isGlutenFree: false,
      },
      {
        id: "shrimp-cocktail",
        name: "Classic Shrimp Cocktail",
        description:
          "Chilled jumbo shrimp served with our signature zesty cocktail sauce.",
        price: 14.0,
        currency: "$",
        category: "starters",
        image: "/assets/images/menu/shrimp-cocktail.jpg",
        isGlutenFree: true,
      },
    ],
  },
  {
    id: "mains",
    title: "Signature Crabs",
    description:
      "The main event. Freshly caught and prepared to your spice preference.",
    items: [
      {
        id: "garlic-butter-crab",
        name: "Garlic Butter Mud Crab",
        description: "Whole mud crab wok-tossed in rich garlic butter sauce.",
        price: 45.0,
        currency: "$",
        category: "mains",
        image: "/assets/images/menu/garlic-crab.jpg",
        isGlutenFree: true,
      },
      {
        id: "chili-crab",
        name: "Singapore Chili Crab",
        description:
          "Our famous sweet and savory tomato-chili based sauce. Best eaten with fried mantou.",
        price: 48.0,
        currency: "$",
        category: "mains",
        image: "/assets/images/menu/chili-crab.jpg",
        isSpicy: true,
        spiceLevel: 2,
      },
    ],
  },
];
