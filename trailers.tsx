import { Play, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';

interface Trailer {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  youtubeId: string;
  accent: 'pink' | 'cyan';
}

const TRAILERS: Trailer[] = [
  {
    id: 'trailer-1',
    title: 'Trailer 1 — Révélation Officielle',
    date: '5 décembre 2023',
    duration: '1:31',
    description:
      'Le premier aperçu de GTA 6. On y découvre Lucia, le retour à Vice City, les réseaux sociaux in-game et l\'ambiance floridienne. Visionné plus de 200 millions de fois en 24h.',
    youtubeId: 'QdBZYKAzIUE',
    accent: 'pink',
  },
  {
    id: 'trailer-2',
    title: 'Trailer 2 — Jason & Lucia',
    date: '2 mai 2025',
    duration: '1:24',
    description:
      'Le second trailer se concentre sur la relation entre Jason et Lucia, présente la conspiration centrale et élargit le casting secondaire. Annonce du report à 2026.',
    youtubeId: 'VQRLujxTm3c',
    accent: 'cyan',
  },
];

export function Trailers() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {TRAILERS.map((trailer, i) => {
        const isPink = trailer.accent === 'pink';
        const accentColor = isPink ? 'var(--neon-pink)' : 'var(--neon-cyan)';
        return (
          <RevealOnScroll
            key={trailer.id}
            delay={i * 120}
            direction={isPink ? 'left' : 'right'}
            distance={40}
          >
            <Card
              className="group overflow-hidden border-2 glass hover-lift hover-glow transition-all duration-300"
              style={{ borderColor: `color-mix(in oklch, ${accentColor} 40%, transparent)` }}
            >
              {/* Video wrapper */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <div className="absolute inset-0 sunburst-bg opacity-20" />
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${trailer.youtubeId}`}
                  title={trailer.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
                {/* Play badge top-left */}
                <div
                  className="absolute top-3 left-3 w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center pointer-events-none"
                  style={{
                    background: `color-mix(in oklch, ${accentColor} 25%, transparent)`,
                    borderColor: `color-mix(in oklch, ${accentColor} 50%, transparent)`,
                  }}
                >
                  <Play className="w-4 h-4 text-white" fill="currentColor" />
                </div>
              </div>
              {/* Info */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase tracking-wider font-bold"
                    style={{
                      color: accentColor,
                      borderColor: `color-mix(in oklch, ${accentColor} 40%, transparent)`,
                      background: `color-mix(in oklch, ${accentColor} 10%, transparent)`,
                    }}
                  >
                    {trailer.date}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-bold">
                    {trailer.duration}
                  </Badge>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-foreground">
                  {trailer.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {trailer.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${trailer.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline transition-transform hover:translate-x-1"
                  style={{ color: accentColor }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir sur YouTube
                </a>
              </div>
            </Card>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}

export function TrailerCta() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-warm border border-[var(--neon-yellow)]/40">
      <Play className="w-4 h-4 text-[var(--neon-pink)] animate-pulse-glow" fill="currentColor" />
      <span className="text-sm font-medium text-foreground/80">
        Reste connecté — le{' '}
        <strong className="gradient-text-sunset font-display">Trailer 3</strong>{' '}
        et la présentation gameplay officielle devraient arriver prochainement.
      </span>
    </div>
  );
}
