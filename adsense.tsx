'use client';

import { Megaphone } from 'lucide-react';

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
  className?: string;
}

/**
 * Composant AdSense — affiche un placeholder en développement
 * et la vraie pub AdSense en production une fois le code publisher validé.
 *
 * Étapes pour activer AdSense :
 * 1. Créer un compte AdSense (https://www.google.com/adsense)
 * 2. Ajouter le script AdSense dans src/app/layout.tsx (head)
 * 3. Remplacer NEXT_PUBLIC_ADSENSE_CLIENT par ton ID (ca-pub-XXXXXXXX)
 * 4. Soumettre le site pour validation (compter 1-7 jours)
 * 5. Créer des unités publicitaires dans AdSense et remplir 'slot'
 */
export function AdSense({ slot, format = 'auto', className = '' }: AdSenseProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || '';
  const isProduction = process.env.NODE_ENV === 'production' && !!client;

  const dimensions: Record<string, { minHeight: string; label: string }> = {
    auto: { minHeight: '120px', label: 'Responsive' },
    horizontal: { minHeight: '90px', label: 'Bannière 728×90' },
    rectangle: { minHeight: '250px', label: 'Rectangle 336×280' },
    vertical: { minHeight: '600px', label: 'Skyscraper 300×600' },
  };

  const dim = dimensions[format];

  if (isProduction) {
    return (
      <div
        className={`adsense-container ${className}`}
        style={{ minHeight: dim.minHeight }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format === 'auto' ? 'auto' : undefined}
          data-full-width-responsive={format === 'auto' ? 'true' : 'false'}
        />
      </div>
    );
  }

  // Placeholder en mode dev / pré-AdSense
  return (
    <div
      className={`relative rounded-2xl border-2 border-dashed border-[var(--neon-pink)]/30 glass-warm flex items-center justify-center overflow-hidden hover-lift transition-all ${className}`}
      style={{ minHeight: dim.minHeight }}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 sunburst-bg opacity-30 pointer-events-none" />
      <div className="relative flex flex-col items-center gap-2 text-foreground/60 text-center px-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)] flex items-center justify-center shadow-lg shadow-[var(--neon-pink)]/30">
          <Megaphone className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-xs font-display font-bold uppercase tracking-wider text-foreground/80">
            Publicité
          </p>
          <p className="text-[10px] text-foreground/60 mt-1">
            {dim.label} · Slot #{slot}
          </p>
          <p className="text-[10px] text-foreground/40 mt-1">
            Activez AdSense via NEXT_PUBLIC_ADSENSE_CLIENT
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Bandeau d'entête — bannière horizontale au-dessus du contenu.
 * Format recommandé : 728×90 (desktop) / responsive (mobile).
 */
export function AdHeaderBanner() {
  return (
    <div className="container mx-auto px-4 py-3">
      <AdSense
        slot="header-banner"
        format="horizontal"
        className="w-full max-w-3xl mx-auto"
      />
    </div>
  );
}

/**
 * Bloc in-content — inséré entre les sections de contenu.
 * Format recommandé : rectangle 336×280 ou responsive.
 */
export function AdInContent() {
  return (
    <div className="my-8">
      <AdSense
        slot="in-content"
        format="rectangle"
        className="w-full max-w-2xl mx-auto"
      />
    </div>
  );
}

/**
 * Bloc sidebar — colonne latérale sur desktop.
 * Format recommandé : 300×600 skyscraper.
 */
export function AdSidebar() {
  return (
    <aside className="hidden lg:block sticky top-24 self-start">
      <AdSense
        slot="sidebar"
        format="vertical"
        className="w-72"
      />
    </aside>
  );
}

/**
 * Bloc footer — bannière de fin de page.
 * Format recommandé : 728×90 ou 970×90 leaderboard.
 */
export function AdFooterBanner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <AdSense
        slot="footer-banner"
        format="horizontal"
        className="w-full max-w-4xl mx-auto"
      />
    </div>
  );
}
