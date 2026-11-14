# GTA 6 Hub — Guide de déploiement

Site Next.js 16 prêt pour la production. Toutes les configurations SEO sont en place.

## Option A — Utiliser l'URL preview (GRATUIT, recommandé pour démarrer)

Le système fournit une URL preview fonctionnelle immédiatement, aucun achat de domaine requis :

```
https://preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai/
```

**Avantages :**
- ✅ Gratuit, 0€
- ✅ Aucun achat de domaine
- ✅ Site accessible immédiatement
- ✅ SEO de base fonctionnel (canonical, sitemap, structured data déjà configurés pour cette URL)
- ✅ Google Search Console fonctionne avec cette URL
- ✅ Partageable immédiatement

**Limites :**
- ⚠️ URL longue et moins mémorable
- ⚠️ Google AdSense peut refuser l'approbation sur une URL preview (préfère les domaines custom)
- ⚠️ SEO moins premium qu'un domaine dédié

**Si tu choisis cette option :** ne change rien, tout est déjà configuré ! ✅

## Option B — Acheter un nom de domaine (recommandé pour scaler)

Si tu veux un domaine propre comme `gta6-hub.fr`, voici les étapes :

### 1. Acheter un domaine
- OVH : ~10€/an pour un `.fr`
- Namecheap : ~10€/an pour un `.com`
- Gandi : ~12€/an

### 2. Mettre à jour les URLs dans le code

Dans `src/app/layout.tsx`, remplace :
```ts
const SITE_URL = "https://preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai";
```
par :
```ts
const SITE_URL = "https://TON-DOMAINE.fr";
```

Dans `public/robots.txt` :
```
Sitemap: https://TON-DOMAINE.fr/sitemap.xml
```

Dans `public/sitemap.xml` — remplace toutes les URLs `preview-chat-...` par ton domaine.

Dans `public/manifest.json` — remplace le `start_url`.

Dans `public/.well-known/security.txt` — remplace les URLs.

### 3. Configurer le DNS
Chez ton registrar, ajoute un enregistrement CNAME qui pointe vers :
```
preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai
```
ou un enregistrement A qui pointe vers l'IP du serveur.

## Checklist pré-déploiement (SEO déjà configuré ✅)

- [x] Meta title + description français optimisés
- [x] 37 mots-clés dans la balise `keywords`
- [x] OpenGraph + Twitter Cards
- [x] 5 schémas JSON-LD structurés (WebSite, VideoGame, FAQPage, BreadcrumbList, Organization)
- [x] Canonical URL + hreflang (fr-FR)
- [x] `robots.txt` avec sitemap
- [x] `sitemap.xml` avec 6 URLs + images
- [x] `manifest.json` PWA installable
- [x] Favicon + apple-touch-icon
- [x] Security headers (CSP, HSTS, X-Frame-Options, etc.)
- [x] URLs cohérentes avec l'URL preview

## Configuration finale (à faire après mise en ligne)

### A. Google Search Console (OBLIGATOIRE pour être indexé)
1. Va sur https://search.google.com/search-console
2. Ajoute ton URL : `https://preview-chat-0fdd7422-787e-4802-9bde-7ffe779c4881.space-z.ai`
3. Choisis la vérification "balise meta"
4. Récupère le code Google te donne
5. Remplace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` dans `src/app/layout.tsx` :
```ts
verification: {
  google: "TON_CODE_GOOGLE",
}
```
6. Soumets ton sitemap : `https://preview-chat-...space-z.ai/sitemap.xml`
7. Demande l'indexation de la page d'accueil manuellement

### B. Bing Webmaster Tools (optionnel mais recommandé)
1. Crée un compte sur https://www.bing.com/webmasters
2. Ajoute ton URL preview
3. Récupère le code de vérification
4. Remplace `BING_VERIFICATION_CODE` dans `src/app/layout.tsx`

### C. Google AdSense (monétisation — recommandé AVEC un domaine custom)
⚠️ **Important** : Google AdSense est très exigeant sur la qualité du domaine.
Une URL preview risque de ne pas être approuvée. Pour maximiser tes chances :

1. Achète un domaine custom (Option B ci-dessus) — fortement recommandé
2. Crée un compte sur https://www.google.com/adsense
3. Ajoute ton URL (préfère un domaine custom à l'URL preview)
4. Récupère ton ID publisher (format : `ca-pub-XXXXXXXXXXXXXXXX`)
5. Crée un fichier `.env.local` à la racine du projet :
```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```
6. Crée 4 unités publicitaires dans AdSense et remplace les noms de slots
   dans `src/components/site/adsense.tsx`
7. Attends la validation Google (1 à 7 jours en moyenne)

### D. Google Analytics 4 (suivi de trafic — fonctionne avec URL preview)
1. Va sur https://analytics.google.com
2. Crée une propriété "GTA 6 Hub"
3. Récupère le `Measurement ID` (format : `G-XXXXXXXXXX`)
4. Ajoute dans `.env.local` :
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Test SEO final après mise en ligne

- **PageSpeed Insights** : https://pagespeed.web.dev
- **Mobile-Friendly Test** : https://search.google.com/test/mobile-friendly
- **Rich Results Test** : https://search.google.com/test/rich-results
- **Structured Data Testing** : https://validator.schema.org
- **OpenGraph preview** : https://www.opengraph.xyz

## Structure SEO du site

```
public/
├── robots.txt          # Règles de crawl + sitemap
├── sitemap.xml         # 6 URLs à indexer avec images
├── manifest.json       # PWA installable
├── logo.svg            # Logo SVG
├── favicon.ico         # Favicon
└── .well-known/
    └── security.txt    # Contact sécurité

src/app/
├── layout.tsx          # SEO principal + 5 JSON-LD + verification tags
├── page.tsx            # Contenu unique (1 h1, 6 h2, 30+ h3 hiérarchie propre)
└── globals.css         # Theme Vice City sunset
```

## Mots-clés ciblés (déjà dans le contenu)

### Primaire
- GTA 6, GTA VI, Grand Theft Auto VI
- GTA 6 sortie, GTA 6 release date, GTA 6 countdown
- GTA 6 trailer, GTA 6 news

### Secondaire
- Vice City, Leonida
- Jason, Lucia, Lucia Caminos, Jason Duval
- Rockstar Games, PS5, Xbox Series X|S

### Longue traîne
- "Quand sort GTA 6" → FAQ Q1
- "GTA 6 date de sortie" → countdown + FAQ
- "GTA 6 personnages" → section personnages
- "GTA 6 carte Leonida" → section map
- "GTA 6 leaks CyberLeek" → timeline
- "GTA 6 sur PC" → FAQ

## Performance

- ✅ Font Inter + Bricolage Grotesque via `next/font` (no layout shift)
- ✅ `loading="lazy"` sur toutes les images secondaires
- ✅ `loading="eager"` + `fetchPriority="high"` sur l'image hero
- ✅ `preconnect` + `dns-prefetch` vers les domaines externes
- ✅ `preload` sur l'image OG
- ✅ Cache-Control immutable sur les assets statiques
- ✅ Compression gzip/brotli activée
- ✅ Images optimisées via Next.js Image (avif/webp)
