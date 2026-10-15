import type { NavIcon } from "@/config/nav-types";

export type NavLink = {
  href: string;
  label: string;
  icon: NavIcon;
};

export type NavFeature = {
  href: string;
  title: string;
  art: string;
};

export type NavMenu = {
  type: "menu";
  label: string;
  heading: string;
  variant: "compact" | "mega";
  columns: 1 | 2;
  items: NavLink[];
  feature?: NavFeature;
};

export type NavDirect = {
  type: "link";
  label: string;
  href: string;
};

export type NavEntry = NavMenu | NavDirect;

export const quoteLink = {
  href: "/contact",
  label: "Request A Quote",
} as const;

const company: NavMenu = {
  type: "menu",
  label: "Company",
  heading: "Company",
  variant: "compact",
  columns: 1,
  items: [
    { href: "/about", label: "About us", icon: "about" },
    { href: "/contact", label: "Contact us", icon: "mail" },
    { href: "/work", label: "Portfolio", icon: "work" },
  ],
};

const services: NavMenu = {
  type: "menu",
  label: "Services",
  heading: "Services",
  variant: "mega",
  columns: 1,
  items: [
    { href: "/web-development", label: "Web Development", icon: "code" },
    { href: "/android-app-development", label: "Android App Development", icon: "android" },
    { href: "/mobile-app-development", label: "Mobile App Development", icon: "mobile" },
    { href: "/custom-software-development", label: "Custom Software Development", icon: "software" },
    { href: "/custom-mobile-app-development", label: "Custom Mobile App Development", icon: "app" },
  ],
  feature: {
    href: "/how-to-hire-a-dedicated-software-development-team",
    title: "How to Hire a Dedicated Software Development Team",
    art: "Dedicated team",
  },
};

const industries: NavMenu = {
  type: "menu",
  label: "Industries",
  heading: "Industries we serve",
  variant: "mega",
  columns: 2,
  items: [
    { href: "/dating-app-development", label: "Dating App Development", icon: "heart" },
    { href: "/healthcare-app-development", label: "Healthcare App Development", icon: "health" },
    { href: "/travel-app-development", label: "Travel App Development", icon: "plane" },
    { href: "/ecommerce-development-company", label: "Ecommerce Development", icon: "cart" },
    { href: "/food-delivery-app-development", label: "Food Delivery App Development", icon: "food" },
    { href: "/car-rental-development", label: "Car Rental Development", icon: "car" },
    { href: "/astrology-app-development", label: "Astrology App Development", icon: "stars" },
    { href: "/plumber-app-development", label: "Plumber App Development", icon: "wrench" },
    { href: "/tutor-app-development", label: "Tutor App Development", icon: "tutor" },
    { href: "/telemedicine-app-development", label: "Telemedicine App Development", icon: "medic" },
    { href: "/fitness-app-development", label: "Fitness App Development", icon: "fitness" },
    { href: "/real-estate-app-development", label: "Real Estate App Development", icon: "building" },
    { href: "/matrimonial-app-development", label: "Matrimonial App Development", icon: "gem" },
  ],
  feature: {
    href: "/how-to-convert-my-dating-app-idea-into-a-mobile-app",
    title: "How to Convert a Dating App Idea into a Mobile App",
    art: "From idea to app",
  },
};

const crypto: NavMenu = {
  type: "menu",
  label: "Crypto Services",
  heading: "Crypto services",
  variant: "mega",
  columns: 2,
  items: [
    { href: "/advanced-crypto-exchange-development", label: "Advanced Crypto Exchange Development", icon: "candles" },
    { href: "/crypto-exchange-development", label: "Crypto Exchange Development", icon: "exchange" },
    { href: "/mlm-software-development", label: "MLM Software Development", icon: "network" },
    { href: "/crypto-token-development", label: "Crypto Token Development", icon: "coins" },
    { href: "/blockchain-development-services", label: "Blockchain Development Services", icon: "boxes" },
    { href: "/white-label-crypto-exchange-solutions", label: "White Label Crypto Exchange", icon: "tag" },
    { href: "/p2p-crypto-exchange-development", label: "P2P Crypto Exchange Development", icon: "users" },
    { href: "/ico-development-company", label: "ICO Development", icon: "rocket" },
    { href: "/smart-contract-development", label: "Smart Contract Development", icon: "contract" },
    { href: "/decentralized-exchange-development", label: "Decentralized Exchange Development", icon: "shuffle" },
  ],
  feature: {
    href: "/how-to-create-a-cryptocurrency-exchange",
    title: "How to Create a Cryptocurrency Exchange",
    art: "Crypto services",
  },
};

const nft: NavDirect = {
  type: "link",
  label: "NFT Marketplace",
  href: "/nft-marketplace-development",
};

const forex: NavDirect = {
  type: "link",
  label: "Forex Trading",
  href: "/forex-trading-development",
};

const games: NavMenu = {
  type: "menu",
  label: "Game Development",
  heading: "Game development",
  variant: "mega",
  columns: 1,
  items: [
    { href: "/ludo-game-development", label: "Ludo Game Development", icon: "dice" },
    { href: "/teenpatti-game-development", label: "Teen Patti Game Development", icon: "spade" },
    { href: "/chess-game-development", label: "Chess Game Development", icon: "crown" },
    { href: "/poker-game-development", label: "Poker Game Development", icon: "club" },
    { href: "/multigame-development", label: "Multi Game Development", icon: "grid" },
    { href: "/rummy-game-development", label: "Rummy Game Development", icon: "layers" },
    { href: "/fantasy-app-development", label: "Fantasy App Development", icon: "trophy" },
  ],
  feature: {
    href: "/how-to-hire-ludo-game-developers",
    title: "How to Hire Ludo Game Developers",
    art: "Game studio",
  },
};

export const primaryNav: NavEntry[] = [company, services, industries, crypto, nft, forex, games];
