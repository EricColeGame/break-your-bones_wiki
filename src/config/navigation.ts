export type NavItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
