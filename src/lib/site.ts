// SITE.url is the site ORIGIN only (no path). The base path is configured in
// astro.config.mjs and applied at use time via link()/absoluteUrl() in
// src/lib/path.ts. Keep this in sync with the SITE_URL in astro.config.mjs.
export const SITE = {
  url: import.meta.env.SITE ?? 'https://greydgl.github.io',
  title: 'Tech Security Review',
  tagline: 'Security tools reviewed for crypto users, Web3 teams, and high-risk tech workflows.',
  description:
    'Independent tech security reviews with a crypto focus, covering hardware wallets, multisig, transaction simulation, wallet protection, custody controls, and Web3 threat monitoring.',
  author: {
    name: 'Gelei',
    aboutPath: '/about',
    email: 'gelei@quantstamp.com',
    sameAs: [] as string[],
  },
  locale: 'en_US',
  defaultOgImage: '/og-default.png',
  cloudflareAnalyticsToken: '',
  navLinks: [
    { label: 'Reviews', href: '/reviews' },
    { label: 'About', href: '/about' },
    { label: 'RSS', href: '/rss.xml' },
  ] as const,
} as const;
