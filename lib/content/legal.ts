export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
] as const;

export const COOKIE_CONSENT_KEY = "mathnetica-cookie-consent";

export type CookieConsentState = {
  essential: true;
  analytics: boolean;
  updatedAt: string;
};

export const defaultConsent: CookieConsentState = {
  essential: true,
  analytics: false,
  updatedAt: "",
};
