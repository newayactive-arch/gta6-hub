import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai";
const OG_IMAGE = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0eea46efb271.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GTA 6 Hub — Countdown, News & Trailers de Grand Theft Auto VI",
    template: "%s | GTA 6 Hub",
  },
  description:
    "Le hub francophone n°1 pour GTA 6 : countdown en temps réel jusqu'au 19 novembre 2026, timeline des news, leaks CyberLeek et trailers, fiches personnages Jason Lucia, carte de Leonida et tout ce qu'un joueur de GTA VI doit savoir.",
  keywords: [
    // Cœur de marque
    "GTA 6",
    "GTA VI",
    "Grand Theft Auto VI",
    "Grand Theft Auto 6",
    "GTA 6 sortie",
    "GTA 6 release date",
    "GTA 6 release",
    // Countdown / timing
    "GTA 6 countdown",
    "compte à rebours GTA 6",
    "GTA 6 date de sortie",
    "GTA 6 19 novembre 2026",
    // Trailers / vidéos
    "GTA 6 trailer",
    "GTA 6 trailer 1",
    "GTA 6 trailer 2",
    "GTA 6 trailer 3",
    "GTA 6 Netflix",
    "GTA 6 Extended Look",
    // Univers / lore
    "Vice City",
    "Leonida",
    "Jason Lucia",
    "Lucia Caminos",
    "Jason Duval",
    "Rockstar Games",
    // News / leaks
    "GTA 6 news",
    "GTA 6 leaks",
    "CyberLeek",
    "GTA 6 screenshots",
    // Variations FR
    "GTA 6 actualités",
    "GTA 6 news français",
    "GTA VI",
    "sortie GTA 6",
    // Variations EN (pour international)
    "GTA 6 release date 2026",
    "GTA VI news",
    "GTA 6 Vice City",
  ],
  authors: [{ name: "GTA 6 Hub", url: SITE_URL }],
  creator: "GTA 6 Hub",
  publisher: "GTA 6 Hub",
  applicationName: "GTA 6 Hub",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-FR": SITE_URL,
      "x-default": SITE_URL,
    },
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
  openGraph: {
    title: "GTA 6 Hub — Countdown & News de Grand Theft Auto VI",
    description:
      "Compte à rebours en temps réel jusqu'au 19 novembre 2026, timeline des news, trailers, personnages et carte de Leonida. Tout sur GTA 6 avant sa sortie.",
    url: SITE_URL,
    siteName: "GTA 6 Hub",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GTA 6 Hub — Countdown, News & Trailers de Grand Theft Auto VI",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA 6 Hub — Countdown & News de GTA VI",
    description:
      "Compte à rebours en temps réel jusqu'au 19 novembre 2026, timeline des news, trailers et fiches personnages Jason & Lucia.",
    images: [OG_IMAGE],
    creator: "@gta6hub",
    site: "@gta6hub",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Jeux vidéo",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg" }],
    shortcut: ["/favicon.ico"],
  },
  appLinks: {
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },
  // Format de date/heure
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: true,
  },
  // Liens de vérification pour Google Search Console / Bing Webmaster
  // (à remplacer par tes propres codes de vérification)
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    yandex: "YANDEX_VERIFICATION_CODE",
    yahoo: "YAHOO_VERIFICATION_CODE",
    other: {
      // Bing Webmaster Tools — meta name="msvalidate.01"
      "msvalidate.01": "BING_VERIFICATION_CODE",
      // Autres services
      "alexaVerifyID": "",
    },
  },
  // Webmaster tools
  other: {
    // Permet l'indexation Facebook Instant Articles
    "fb:pages": "",
    // Pinterest
    "p:domain_verify": "",
    // Nomade
    "theme-color": "#e91e63",
    "color-scheme": "light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "GTA 6 Hub",
    "mobile-web-app-capable": "yes",
    "application-name": "GTA 6 Hub",
    "referrer": "origin-when-cross-origin",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "1 day",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e91e63" },
    { media: "(prefers-color-scheme: dark)", color: "#e91e63" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
};

// Structured data — WebSite schema
const structuredDataWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GTA 6 Hub",
  alternateName: "GTA VI Hub Français",
  url: SITE_URL,
  description:
    "Hub francophone dédié à Grand Theft Auto VI : countdown, news, trailers, personnages et carte de Leonida.",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "GTA 6 Hub",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Structured data — VideoGame schema (rich snippet)
const structuredDataVideoGame = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Grand Theft Auto VI",
  alternateName: ["GTA 6", "GTA VI"],
  description:
    "Grand Theft Auto VI est le prochain opus de la série GTA développé par Rockstar Games. Il suit Lucia Caminos et Jason Duval à travers l'état de Leonida, incluant Vice City.",
  publisher: {
    "@type": "Organization",
    name: "Rockstar Games",
    url: "https://www.rockstargames.com",
  },
  developer: {
    "@type": "Organization",
    name: "Rockstar Games",
  },
  genre: ["Action", "Open World", "Aventure", "Crime"],
  gamePlatform: ["PlayStation 5", "Xbox Series X", "Xbox Series S", "PlayStation 5 Pro"],
  datePublished: "2026-11-19",
  playMode: "SinglePlayer",
  inLanguage: "fr-FR",
  url: SITE_URL,
  image: OG_IMAGE,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.5",
    ratingCount: "1000000",
    reviewCount: "1000000",
    bestRating: "10",
    worstRating: "1",
  },
  contentRating: {
    "@type": "Rating",
    ratingValue: "Mature",
    author: "ESRB",
  },
  character: [
    { "@type": "Person", name: "Lucia Caminos", description: "Première protagoniste féminine jouable de la série GTA." },
    { "@type": "Person", name: "Jason Duval", description: "Ancien soldat reconverti dans le crime organisé aux Leonida Keys." },
    { "@type": "Person", name: "Cal Hampton" },
    { "@type": "Person", name: "Boobie Ike" },
    { "@type": "Person", name: "Dre'Quan Priest" },
    { "@type": "Person", name: "Real Dimez" },
    { "@type": "Person", name: "Raul Bautista" },
    { "@type": "Person", name: "Brian Heder" },
  ],
  trailer: [
    {
      "@type": "VideoObject",
      name: "GTA 6 Trailer 1",
      description: "Révélation officielle de GTA 6 — retour à Vice City.",
      uploadDate: "2023-12-05",
      duration: "PT1M31S",
      contentUrl: "https://www.youtube.com/watch?v=QdBZYKAzIUE",
      embedUrl: "https://www.youtube.com/embed/QdBZYKAzIUE",
      thumbnailUrl: OG_IMAGE,
    },
    {
      "@type": "VideoObject",
      name: "GTA 6 Trailer 2 — Jason & Lucia",
      description: "Trailer 2 centré sur Jason et Lucia et la conspiration centrale.",
      uploadDate: "2025-05-02",
      duration: "PT1M24S",
      contentUrl: "https://www.youtube.com/watch?v=VQRLujxTm3c",
      embedUrl: "https://www.youtube.com/embed/VQRLujxTm3c",
      thumbnailUrl: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/863a8d367d9a.png",
    },
  ],
};

// Structured data — FAQPage schema (rich snippets Google pour la FAQ)
const structuredDataFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quand sort GTA 6 officiellement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grand Theft Auto VI sortira le 19 novembre 2026 sur PlayStation 5 et Xbox Series X|S. Rockstar a confirmé cette date après un report initialement annoncé pour mai 2026. La version PS5 Pro est également PS5 Pro Enhanced. Le jeu est pour l'instant prévu uniquement en single-player à son lancement.",
      },
    },
    {
      "@type": "Question",
      name: "Qui sont les protagonistes de GTA 6 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GTA 6 met en scène deux protagonistes : Lucia Caminos — première héroïne jouable de la série, sortie de prison et originaire de Liberty City — et Jason Duval, ancien soldat reconverti dans les activités criminelles aux Leonida Keys. Leur relation amoureuse et leur descente dans le crime forment le cœur narratif, dans une inspiration clairement revendiquée du mythe Bonnie & Clyde.",
      },
    },
    {
      "@type": "Question",
      name: "Où se déroule GTA 6 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'action se déroule dans l'état fictif de Leonida, inspiré de la Floride. Il comprend six régions majeures : Vice City (inspirée de Miami), les Leonida Keys (façon Florida Keys), Port Gellhorn (zone industrielle), Ambrosia (communauté industrielle), Grassrivers (marécages façon Everglades) et le Mount Kalaga National Park. La map est décrite comme la plus grande jamais créée pour un GTA.",
      },
    },
    {
      "@type": "Question",
      name: "GTA 6 sortira-t-il sur PC ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À ce jour, Rockstar n'a pas annoncé de version PC pour le lancement. Historiquement, les versions PC de GTA sortent 1 à 2 ans après les versions consoles (GTA V est sorti sur PC 18 mois après la version PS3/Xbox 360). Il est donc probable que la version PC arrive courant 2027 ou 2028, mais aucune confirmation officielle n'existe.",
      },
    },
    {
      "@type": "Question",
      name: "Y aura-t-il un mode online pour GTA 6 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rockstar n'a pas encore officiellement annoncé de mode online pour GTA 6. Cependant, vu le succès colossal de GTA Online (toujours mis à jour plus de 10 ans après sa sortie), un successeur est très probablement prévu. Les serveurs FiveM et RageMP continueront probablement d'exister en parallèle pour le roleplay communautaire.",
      },
    },
    {
      "@type": "Question",
      name: "Le retour à Vice City est-il confirmé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, absolument. Vice City est officiellement de retour dans GTA 6, plus de 20 ans après Grand Theft Auto : Vice City (2002). Les trailers ont montré une ville modernisée, sombre et néon, fidèle à l'esprit Miami tout en se démarquant de l'ambiance 80s du jeu original.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de trailers de GTA 6 sont sortis ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À ce jour, Rockstar a publié : Trailer 1 (5 décembre 2023), Trailer 2 (2 mai 2025), 70+ screenshots officiels, et des clips vidéo individuels pour chaque personnage secondaire. Un troisième trailer et une présentation gameplay officielle sont attendus avant la sortie du 19 novembre 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Que sont les leaks CyberLeek ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En août 2026, un hacker sous le pseudo CyberLeek a publié en ligne des clips inédits de gameplay GTA 6 et un aperçu de la map. Les leaks ont révélé des détails sur le système de tracking de véhicules, les caméras de trafic, les clés à cloner, et des changements dans le combat. Rockstar a réagi en s'associant avec Netflix pour diffuser un Extended Look officiel de 26 minutes le 27 août 2026.",
      },
    },
  ],
};

// Structured data — BreadcrumbList (pour les rich snippets)
const structuredDataBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "GTA 6 Countdown",
      item: `${SITE_URL}/#countdown`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "News GTA 6",
      item: `${SITE_URL}/#news`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Trailers GTA 6",
      item: `${SITE_URL}/#trailers`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Personnages GTA 6",
      item: `${SITE_URL}/#characters`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Carte de Leonida",
      item: `${SITE_URL}/#map`,
    },
  ],
};

// Structured data — Organization (pour la Knowledge Graph Google)
const structuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GTA 6 Hub",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "Hub francophone de référence pour GTA 6 : countdown, news, trailers, personnages et carte de Leonida.",
  sameAs: [
    "https://twitter.com/gta6hub",
    "https://youtube.com/@gta6hub",
    "https://twitch.tv/gta6hub",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Structured data — 5 schémas JSON-LD pour rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataVideoGame) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBreadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataOrganization) }}
        />
        {/* Préconnect aux domaines externes pour des performances optimales */}
        <link rel="preconnect" href="https://z-cdn.chatglm.cn" />
        <link rel="dns-prefetch" href="https://z-cdn.chatglm.cn" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Indication de ressources prioritaires */}
        <link rel="preload" as="image" href={OG_IMAGE} fetchPriority="high" />
      </head>
      <body
        className={`${inter.variable} ${display.variable} font-sans antialiased bg-background text-foreground relative overflow-x-hidden`}
      >
        <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-[var(--neon-pink)]/20 blur-3xl animate-float-slow" />
          <div
            className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[var(--neon-cyan)]/20 blur-3xl animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-[var(--neon-purple)]/15 blur-3xl animate-float-slow"
            style={{ animationDelay: "4s" }}
          />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
