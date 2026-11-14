import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Palmtree, Anchor, Factory, Waves, Mountain } from 'lucide-react';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';

interface Region {
  name: string;
  type: string;
  description: string;
  icon: typeof MapPin;
  accent: 'pink' | 'cyan' | 'purple' | 'yellow';
  image: string;
}

const REGIONS: Region[] = [
  {
    name: 'Vice City',
    type: 'Métropole',
    description:
      'La ville principale inspirée de Miami. Plages, vie nocturne, quartiers populaires et résidentiels, autoroutes, immeubles et gratte-ciels modernes. Le cœur urbain de Leonida.',
    icon: Palmtree,
    accent: 'pink',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1b8dc9af3416.jpg',
  },
  {
    name: 'Leonida Keys',
    type: 'Îles tropicales',
    description:
      'Archipel d\'îles tropicales reliées par des routes en bord de mer, inspiré des Florida Keys. Ambiance balnéaire, complexes hôteliers et yachts de luxe.',
    icon: Waves,
    accent: 'cyan',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d723beb7220d.jpg',
  },
  {
    name: 'Port Gellhorn',
    type: 'Zone industrielle',
    description:
      'Communauté industrielle et portuaire avec entrepôts, chantiers, et un port actif. Zone de missions et de braquages potentiels.',
    icon: Anchor,
    accent: 'purple',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/86240fe57e4d.jpg',
  },
  {
    name: 'Ambrosia',
    type: 'Communauté industrielle',
    description:
      'Communauté périphérique avec son industriel, fermes et zones rurales. Cœur conservateur et rural de Leonida.',
    icon: Factory,
    accent: 'yellow',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1a8ae68d5c2a.jpg',
  },
  {
    name: 'Grassrivers',
    type: 'Marécages',
    description:
      'Vastes zones humides inspirées des Everglades. Marécages, mangroves, alligators et small towns cachées dans la nature sauvage floridienne.',
    icon: Waves,
    accent: 'cyan',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0624fefe6ae3.jpg',
  },
  {
    name: 'Mount Kalaga',
    type: 'Parc national',
    description:
      'Parc national montagneux avec forêts, lacs, sentiers et faune sauvage. Le poumon vert de Leonida pour les activités de plein air.',
    icon: Mountain,
    accent: 'purple',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad7692f7ee99.jpg',
  },
];

const ACCENT_STYLES: Record<
  Region['accent'],
  { text: string; border: string; overlay: string; badge: string }
> = {
  pink: {
    text: 'text-[var(--neon-pink)]',
    border: 'group-hover:border-[var(--neon-pink)]/60',
    overlay: 'from-[var(--neon-pink)]/50',
    badge: 'bg-[var(--neon-pink)]/15 text-[var(--neon-pink)]',
  },
  cyan: {
    text: 'text-[var(--neon-cyan)]',
    border: 'group-hover:border-[var(--neon-cyan)]/60',
    overlay: 'from-[var(--neon-cyan)]/50',
    badge: 'bg-[var(--neon-cyan)]/15 text-[var(--neon-cyan)]',
  },
  purple: {
    text: 'text-[var(--neon-purple)]',
    border: 'group-hover:border-[var(--neon-purple)]/60',
    overlay: 'from-[var(--neon-purple)]/50',
    badge: 'bg-[var(--neon-purple)]/15 text-[var(--neon-purple)]',
  },
  yellow: {
    text: 'text-[var(--neon-yellow)]',
    border: 'group-hover:border-[var(--neon-yellow)]/60',
    overlay: 'from-[var(--neon-yellow)]/50',
    badge: 'bg-[var(--neon-yellow)]/15 text-[var(--neon-yellow)]',
  },
};

export function MapRegions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {REGIONS.map((region, i) => {
        const styles = ACCENT_STYLES[region.accent];
        const Icon = region.icon;
        return (
          <RevealOnScroll
            key={region.name}
            delay={i * 80}
            direction="up"
            distance={30}
          >
            <Card
              className={`group relative overflow-hidden border-2 border-border ${styles.border} glass hover-lift hover-glow transition-all duration-300`}
            >
              <CardContent className="p-0">
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${styles.overlay} via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Icon + type badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg ${styles.badge} backdrop-blur-md border border-white/20 flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${styles.badge} backdrop-blur-md border border-white/20`}>
                      {region.type}
                    </span>
                  </div>
                  {/* Region name on image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white drop-shadow-lg flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${styles.text} drop-shadow-md`} />
                      {region.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
