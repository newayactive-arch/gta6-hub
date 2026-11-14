import { Sparkles, Flame } from 'lucide-react';

const FACTS: string[] = [
  'Sortie le 19 novembre 2026 sur PS5 et Xbox Series X|S',
  'Première protagoniste féminine jouable : Lucia',
  'Map : état de Leonida — 6 régions majeures',
  'Jason & Lucia au cœur de l\'histoire',
  'Vice City enfin de retour depuis GTA Vice City 2002',
  '70+ screenshots officiels déjà publiés',
  'Trailer 2 sorti le 2 mai 2025',
  'Gameplay révélé via Netflix le 27 août 2026',
  'PS5 Pro Enhanced confirmé',
  'Développé par Rockstar Games',
];

export function FactsTicker() {
  const items = [...FACTS, ...FACTS];

  return (
    <div className="relative overflow-hidden glass border-y border-white/30 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 flex items-center gap-2 px-4 z-10 bg-gradient-to-r from-[var(--neon-pink)]/20 to-transparent">
          <Flame className="w-4 h-4 text-[var(--neon-pink)] animate-pulse-glow" />
          <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[var(--neon-pink)]">
            En direct
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {items.map((fact, i) => (
              <span
                key={i}
                className="text-sm text-foreground/80 font-medium inline-flex items-center gap-3"
              >
                <Sparkles className="w-3 h-3 text-[var(--neon-cyan)]" />
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
