export const siteLocales = ["en", "es", "pt", "de"] as const;

export type SiteLocale = (typeof siteLocales)[number];

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly SiteLocale[];
  defaultLocale: SiteLocale;
}

export const siteConfig: SiteConfig = {
  name: "Break your Bones Wiki",
  shortName: "Break your Bones",
  logoText: "B",
  tagline: "Crash Challenges, Physics Tips & Score Guides",
  description:
    "Break your Bones Wiki provides gameplay guides, challenge information, mechanics explanations, codes, and useful tips to help players master the physics-based bone-breaking game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://break-your-bones.wiki",
  supportEmail: "support@break-your-bones.wiki",
  gameUrl: "https://www.roblox.com/games/123821081589134/Break-your-Bones",
  heroVideoId: "WB7zdU-USTw", // Break your Bones gameplay showcase
  social: {
    discord: "https://www.roblox.com/communities/17327542/High-Effort-Projects",
    youtube: "https://www.youtube.com/results?search_query=break+your+bones+roblox",
  },
  locales: siteLocales,
  defaultLocale: "en",
};
