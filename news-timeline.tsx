import {
  Film,
  Image as ImageIcon,
  Newspaper,
  Eye,
  Gamepad2,
  Calendar,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';

type EventType = 'trailer' | 'screenshot' | 'leak' | 'news' | 'release' | 'preview';

interface TimelineEvent {
  date: string;
  dateISO: string;
  title: string;
  description: string;
  type: EventType;
  tag?: string;
  highlight?: boolean;
  image: string;
  imageAlt: string;
}

const EVENTS: TimelineEvent[] = [
  {
    date: '5 décembre 2023',
    dateISO: '2023-12-05',
    title: 'Trailer 1 — Révélation officielle',
    description:
      'Rockstar dévoile le premier trailer de GTA 6 en avance suite à une fuite. On découvre Lucia, le retour à Vice City, l\'ambiance floridienne, les réseaux sociaux in-game et le duo Jason & Lucia.',
    type: 'trailer',
    tag: 'Trailer 1',
    highlight: true,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0eea46efb271.jpg',
    imageAlt: 'GTA 6 Trailer 1 — Vice City reveal',
  },
  {
    date: '2 mai 2025',
    dateISO: '2025-05-02',
    title: 'Trailer 2 — Jason & Lucia au cœur de l\'histoire',
    description:
      'Rockstar sort le second trailer qui se concentre sur la relation entre Jason et Lucia, présente la conspiration centrale, et élargit le casting secondaire. Le report à mai 2026 est annoncé dans la foulée.',
    type: 'trailer',
    tag: 'Trailer 2',
    highlight: true,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/863a8d367d9a.png',
    imageAlt: 'GTA 6 Trailer 2 — Jason et Lucia',
  },
  {
    date: 'Mai 2025',
    dateISO: '2025-05-15',
    title: '70 screenshots officiels',
    description:
      'Rockstar publie 70 captures officielles couvrant les protagonistes, le casting secondaire, Vice City, les Leonida Keys, Port Gellhorn, Ambrosia, Grassrivers et le Mount Kalaga National Park.',
    type: 'screenshot',
    tag: 'Screenshots',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/96e71e91a43a.png',
    imageAlt: 'GTA 6 screenshots officiels — Leonida',
  },
  {
    date: '18 août 2026',
    dateISO: '2026-08-18',
    title: 'Leaks CyberLeek — Footage de gameplay',
    description:
      'Un hacker nommé CyberLeek publie en ligne des clips inédits de GTA 6 et un aperçu de la map. On y voit le système de tracking de véhicules, les caméras de trafic, les clés à cloner et des changements de combat.',
    type: 'leak',
    tag: 'CyberLeek',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0624fefe6ae3.jpg',
    imageAlt: 'GTA 6 leaks CyberLeek — gameplay footage',
  },
  {
    date: '27 août 2026',
    dateISO: '2026-08-27',
    title: 'Extended Look — Partenariat Netflix',
    description:
      'Rockstar s\'associe à Netflix pour diffuser Grand Theft Auto VI : An Extended Look, une présentation de gameplay de 26 minutes qui montre le jeu en action pour la première fois.',
    type: 'preview',
    tag: 'Netflix',
    highlight: true,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b08ed38544b4.jpg',
    imageAlt: 'GTA 6 Extended Look Netflix — gameplay',
  },
  {
    date: 'Octobre 2026',
    dateISO: '2026-10-01',
    title: 'Phase finale de marketing',
    description:
      'Rockstar accélère la communication : interviews, spots TV, partnerships. Les précommandes sont officiellement ouvertes et le battage médiatique atteint son apogée à un mois de la sortie.',
    type: 'news',
    tag: 'Marketing',
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4eba2a9caf6c.jpg',
    imageAlt: 'GTA 6 phase marketing finale — precommande',
  },
  {
    date: '19 novembre 2026',
    dateISO: '2026-11-19',
    title: 'SORTIE OFFICIELLE DE GTA 6',
    description:
      'Grand Theft Auto VI sort mondialement sur PlayStation 5 et Xbox Series X|S. Le retour à Vice City et l\'état de Leonida s\'ouvrent enfin aux joueurs. La version PS5 Pro est Enhanced.',
    type: 'release',
    tag: 'Release',
    highlight: true,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad7692f7ee99.jpg',
    imageAlt: 'GTA 6 sortie officielle — Leonida',
  },
];

const TYPE_CONFIG: Record<
  EventType,
  { icon: typeof Film; color: string; bg: string; border: string; label: string }
> = {
  trailer: {
    icon: Film,
    color: 'text-[var(--neon-pink)]',
    bg: 'bg-[var(--neon-pink)]/15',
    border: 'border-[var(--neon-pink)]/40',
    label: 'Trailer',
  },
  screenshot: {
    icon: ImageIcon,
    color: 'text-[var(--neon-cyan)]',
    bg: 'bg-[var(--neon-cyan)]/15',
    border: 'border-[var(--neon-cyan)]/40',
    label: 'Screenshot',
  },
  leak: {
    icon: Eye,
    color: 'text-[var(--neon-yellow)]',
    bg: 'bg-[var(--neon-yellow)]/15',
    border: 'border-[var(--neon-yellow)]/40',
    label: 'Leak',
  },
  news: {
    icon: Newspaper,
    color: 'text-[var(--neon-purple)]',
    bg: 'bg-[var(--neon-purple)]/15',
    border: 'border-[var(--neon-purple)]/40',
    label: 'News',
  },
  preview: {
    icon: Eye,
    color: 'text-[var(--neon-cyan)]',
    bg: 'bg-[var(--neon-cyan)]/15',
    border: 'border-[var(--neon-cyan)]/40',
    label: 'Preview',
  },
  release: {
    icon: Gamepad2,
    color: 'text-[var(--neon-pink)]',
    bg: 'bg-[var(--neon-pink)]/15',
    border: 'border-[var(--neon-pink)]/40',
    label: 'Release',
  },
};

export function NewsTimeline() {
  return (
    <div className="relative">
      {/* Vertical gradient line */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 sm:-translate-x-1/2 rounded-full bg-gradient-to-b from-[var(--neon-pink)] via-[var(--neon-purple)] to-[var(--neon-cyan)] opacity-60" />

      <div className="space-y-8 sm:space-y-12">
        {EVENTS.map((event, index) => {
          const config = TYPE_CONFIG[event.type];
          const Icon = config.icon;
          const isLeft = index % 2 === 0;

          return (
            <RevealOnScroll
              key={event.dateISO}
              direction={isLeft ? 'left' : 'right'}
              distance={40}
              delay={index * 60}
            >
              <div
                className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
              >
                {/* Animated pulse dot */}
                <div
                  className={`absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border-2 ${config.border} ${config.bg} backdrop-blur-md animate-pulse-glow`}
                >
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>

                {/* Card */}
                <div
                  className={`ml-14 sm:ml-0 sm:w-[calc(50%-3rem)] ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}
                >
                  <article
                    className={`group relative overflow-hidden rounded-2xl border-2 glass hover-lift hover-glow transition-all duration-300 ${
                      event.highlight
                        ? 'border-[var(--neon-pink)]/60'
                        : config.border
                    }`}
                  >
                    {/* Image en haut de la card */}
                    <div className="relative h-44 sm:h-52 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.imageAlt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Color overlay */}
                      <div
                        className={`absolute inset-0 ${config.bg} mix-blend-multiply`}
                      />
                      {/* Dark gradient bottom pour la lisibilité */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      {/* Sunburst top accent */}
                      <div className="absolute inset-0 sunburst-bg opacity-20" />

                      {/* Date + tag badges en haut */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          <Calendar className="w-3 h-3" />
                          {event.date}
                        </span>
                        {event.tag && (
                          <Badge
                            variant="outline"
                            className={`text-[10px] uppercase tracking-wider font-bold ${config.bg} ${config.color} ${config.border} backdrop-blur-md`}
                          >
                            {event.tag}
                          </Badge>
                        )}
                      </div>

                      {/* Titre en bas de l'image */}
                      <h3 className="absolute bottom-3 left-3 right-3 font-display text-lg sm:text-xl font-extrabold text-white drop-shadow-2xl leading-tight">
                        {event.title}
                      </h3>
                    </div>

                    {/* Body texte */}
                    <div className="p-5">
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
