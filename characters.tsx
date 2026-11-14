import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';
import { Crown, Heart, Shield, Sparkles } from 'lucide-react';

interface Character {
  name: string;
  role: string;
  description: string;
  tag: string;
  accent: 'pink' | 'cyan' | 'purple' | 'yellow';
  image: string;
  icon: typeof Crown;
}

const CHARACTERS: Character[] = [
  {
    name: 'Lucia Caminos',
    role: 'Protagoniste',
    description:
      'Première protagoniste féminine jouable de la série. Originaire de Liberty City, elle se bat pour sa famille et son avenir. Sortie de prison au début du jeu, elle s\'installe avec Jason à Vice City.',
    tag: 'Jouable',
    accent: 'pink',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6f4ca3ba4bdf.jpg',
    icon: Crown,
  },
  {
    name: 'Jason Duval',
    role: 'Protagoniste',
    description:
      'Ancien soldat de l\'armée travaillant pour les cartels des Leonida Keys. Il veut se sortir de cette vie et pense que Lucia est la bonne personne pour l\'aider à y parvenir.',
    tag: 'Jouable',
    accent: 'cyan',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/30fbc40f7cb5.jpg',
    icon: Shield,
  },
  {
    name: 'Cal Hampton',
    role: 'Allié — Hackeur',
    description:
      'Hackeur et ami de Jason depuis l\'armée. Il vit reclus et trouve des contrats et des opportunités pour le duo dans le monde du crime à Vice City.',
    tag: 'Allié',
    accent: 'purple',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b08ed38544b4.jpg',
    icon: Heart,
  },
  {
    name: 'Boobie Ike',
    role: 'Businessman',
    description:
      'Propriétaire de strip club et prêteur sur gages à Vice City. Il est connu pour ses revenus en cash et son manque de patience pour les erreurs.',
    tag: 'Contact',
    accent: 'yellow',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4eba2a9caf6c.jpg',
    icon: Sparkles,
  },
  {
    name: 'Dre\'Quan Priest',
    role: 'Influenceur',
    description:
      'Créateur de contenu et streamer montant à Vice Beach. Il a construit un empire de la musique et un studio en expansion avec son associé Brian Heder.',
    tag: 'Influenceur',
    accent: 'pink',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/863a8d367d9a.png',
    icon: Sparkles,
  },
  {
    name: 'Real Dimez',
    role: 'Influenceuses',
    description:
      'Un duo d\'influenceuses toujours à l\'affût du prochain grand moment. Elles connaissent tout le monde et disposent d\'informations sur tout ce qui se passe en ville.',
    tag: 'Influenceuses',
    accent: 'cyan',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/96e71e91a43a.png',
    icon: Sparkles,
  },
  {
    name: 'Raul Bautista',
    role: 'Braqueur',
    description:
      'Vétéran des braquages de banques qui cherche toujours le prochain gros coup. Il recrute les meilleures équipes pour des opérations toujours plus ambitieuses.',
    tag: 'Braqueur',
    accent: 'purple',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad7692f7ee99.jpg',
    icon: Shield,
  },
  {
    name: 'Brian Heder',
    role: 'Associé',
    description:
      'Associé de Dre\'Quan Priest et gérant de son studio. Il pense être l\'esprit business du duo et cherche constamment la prochaine opportunité d\'expansion.',
    tag: 'Associé',
    accent: 'yellow',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/68804a3e714a.jpg',
    icon: Heart,
  },
];

const ACCENT_STYLES: Record<
  Character['accent'],
  { ring: string; text: string; badge: string; overlay: string }
> = {
  pink: {
    ring: 'border-[var(--neon-pink)]/50',
    text: 'text-[var(--neon-pink)]',
    badge: 'bg-[var(--neon-pink)]/15 text-[var(--neon-pink)] border-[var(--neon-pink)]/30',
    overlay: 'from-[var(--neon-pink)]/40',
  },
  cyan: {
    ring: 'border-[var(--neon-cyan)]/50',
    text: 'text-[var(--neon-cyan)]',
    badge: 'bg-[var(--neon-cyan)]/15 text-[var(--neon-cyan)] border-[var(--neon-cyan)]/30',
    overlay: 'from-[var(--neon-cyan)]/40',
  },
  purple: {
    ring: 'border-[var(--neon-purple)]/50',
    text: 'text-[var(--neon-purple)]',
    badge: 'bg-[var(--neon-purple)]/15 text-[var(--neon-purple)] border-[var(--neon-purple)]/30',
    overlay: 'from-[var(--neon-purple)]/40',
  },
  yellow: {
    ring: 'border-[var(--neon-yellow)]/50',
    text: 'text-[var(--neon-yellow)]',
    badge: 'bg-[var(--neon-yellow)]/15 text-[var(--neon-yellow)] border-[var(--neon-yellow)]/30',
    overlay: 'from-[var(--neon-yellow)]/40',
  },
};

export function Characters() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {CHARACTERS.map((character, i) => {
        const styles = ACCENT_STYLES[character.accent];
        const Icon = character.icon;
        return (
          <RevealOnScroll
            key={character.name}
            delay={i * 80}
            direction="up"
            distance={30}
          >
            <Card
              className={`group relative overflow-hidden border-2 ${styles.ring} glass hover-lift hover-glow transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${styles.overlay} via-transparent to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute top-3 right-3 w-9 h-9 rounded-full ${styles.badge} backdrop-blur-md border flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </div>
                {/* Name on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-lg font-extrabold text-white drop-shadow-lg">
                    {character.name}
                  </h3>
                  <p className={`text-xs font-semibold ${styles.text} drop-shadow-md`}>
                    {character.role}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <p className="text-xs text-foreground/70 leading-relaxed line-clamp-4">
                  {character.description}
                </p>
                <Badge
                  variant="outline"
                  className={`text-[10px] uppercase tracking-wider font-semibold ${styles.badge}`}
                >
                  {character.tag}
                </Badge>
              </div>
            </Card>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
