# GTA 6 Hub 🌴

> Le hub francophone de référence pour **Grand Theft Auto VI** : countdown en temps réel, timeline des news, trailers, fiches personnages et carte de Leonida.

![GTA 6 Hub](https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0eea46efb271.jpg)

## À propos

Site web Next.js 16 construit pour la sortie de GTA 6 le **19 novembre 2026** sur PlayStation 5 et Xbox Series X|S. Le site couvre :

- ⏱️ **Countdown temps réel** jusqu'au 19 nov 2026
- 📅 **Timeline des news** — 7 événements clés (Trailer 1, Trailer 2, screenshots, leaks CyberLeek, Netflix Extended Look, marketing, release)
- 🎬 **Trailers officiels** intégrés (YouTube)
- 👥 **8 fiches personnages** (Lucia, Jason, Cal Hampton, Boobie Ike, Dre'Quan Priest, Real Dimez, Raul Bautista, Brian Heder)
- 🗺️ **Carte de Leonida** — 6 régions majeures (Vice City, Leonida Keys, Port Gellhorn, Ambrosia, Grassrivers, Mount Kalaga)
- ❓ **FAQ** avec 8 questions/réponses clés
- 📧 **Newsletter** pour alerter les inscrits
- 💰 **4 zones AdSense** stratégiquement placées

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript 5
- **Styling** : Tailwind CSS 4 + shadcn/ui
- **Polices** : Inter + Bricolage Grotesque (next/font)
- **Icônes** : Lucide React
- **Thème** : Vice City Sunset (luminous + néon + glassmorphism)

## Démarrage rapide

```bash
# Installation des dépendances
bun install

# Lancement en dev
bun run dev

# Build de production
bun run build

# Lint
bun run lint
```

Le site se lance sur http://localhost:3000

## Déploiement sur Vercel

### Méthode 1 — Via le dashboard Vercel (recommandé)

1. Push le code sur GitHub
2. Va sur https://vercel.com → Sign up avec GitHub
3. "Add New Project" → Importe le repo
4. Vercel détecte automatiquement Next.js ✅
5. Configure les variables d'environnement (voir `.env.example`)
6. Clique "Deploy"

### Méthode 2 — Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Configuration post-déploiement

Voir [`DEPLOY.md`](./DEPLOY.md) pour le guide complet de :
- Changement de l'URL canonique (`SITE_URL`)
- Vérification Google Search Console
- Vérification Bing Webmaster Tools
- Activation AdSense
- Configuration Google Analytics

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # SEO + 5 JSON-LD + meta tags
│   ├── page.tsx            # Page unique (single-page)
│   └── globals.css         # Thème Vice City Sunset
├── components/
│   ├── site/
│   │   ├── countdown.tsx           # Countdown temps réel
│   │   ├── news-timeline.tsx       # Timeline 7 événements
│   │   ├── characters.tsx          # Grille 8 personnages
│   │   ├── map-regions.tsx         # Grille 6 régions
│   │   ├── trailers.tsx            # Embeds YouTube
│   │   ├── faq.tsx                 # Accordéon 8 Q/R
│   │   ├── newsletter.tsx         # Formulaire email
│   │   ├── facts-ticker.tsx        # Marquee faits clés
│   │   ├── adsense.tsx             # 4 zones AdSense
│   │   ├── reveal-on-scroll.tsx   # Animations au scroll
│   │   ├── site-header.tsx         # Header sticky + nav
│   │   └── site-footer.tsx         # Footer sticky
│   └── ui/                         # shadcn/ui (40+ composants)
└── lib/
    └── utils.ts                   # cn() helper

public/
├── robots.txt             # Règles de crawl
├── sitemap.xml            # 6 URLs à indexer
├── manifest.json          # PWA installable
├── logo.svg               # Logo
└── .well-known/security.txt
```

## Variables d'environnement

Voir `.env.example` pour la liste complète :

- `NEXT_PUBLIC_ADSENSE_CLIENT` — ID AdSense (ca-pub-XXXXXXXX)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — ID Google Analytics 4
- `NEXT_PUBLIC_SITE_URL` — URL canonique du site en prod

## Performance & SEO

- ✅ Meta title + description + 37 mots-clés
- ✅ 5 schémas JSON-LD (WebSite, VideoGame, FAQPage, BreadcrumbList, Organization)
- ✅ OpenGraph + Twitter Cards
- ✅ Canonical URL + hreflang
- ✅ `robots.txt` + `sitemap.xml`
- ✅ PWA manifest
- ✅ Security headers (CSP, HSTS, X-Frame-Options, etc.)
- ✅ Images optimisées (avif/webp via Next.js Image)
- ✅ `loading="lazy"` sur images secondaires
- ✅ `preconnect` + `dns-prefetch` vers domaines externes
- ✅ Fonts via `next/font` (no layout shift)

## Compatibilité navigateurs

- ✅ Chrome / Edge 100+
- ✅ Firefox 100+
- ✅ Safari 15+
- ✅ Mobile Safari iOS 15+
- ✅ Chrome Android

## Mentions légales

Site fan non-officiel. Non affilié à Rockstar Games ou Take-Two Interactive.
Toutes les marques citées (GTA, Grand Theft Auto, Vice City, Leonida, Jason,
Lucia) appartiennent à leurs propriétaires respectifs.

## Licence

MIT — Libre d'utilisation et de modification.
