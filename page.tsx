'use client';

import { SiteHeader } from '@/components/site/site-header';
import { SiteFooter } from '@/components/site/site-footer';
import { FactsTicker } from '@/components/site/facts-ticker';
import { Countdown } from '@/components/site/countdown';
import { NewsTimeline } from '@/components/site/news-timeline';
import { Characters } from '@/components/site/characters';
import { MapRegions } from '@/components/site/map-regions';
import { Trailers, TrailerCta } from '@/components/site/trailers';
import { Newsletter } from '@/components/site/newsletter';
import { Faq } from '@/components/site/faq';
import { Donation } from '@/components/site/donation';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';
import {
  AdHeaderBanner,
  AdInContent,
  AdFooterBanner,
} from '@/components/site/adsense';
import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  Sparkles,
  Trophy,
  Users,
  MapPin,
  Calendar,
  Sun,
  Palmtree,
  Waves,
} from 'lucide-react';

const STATS: Array<{ icon: typeof Trophy; value: string; label: string; accent: string }> = [
  {
    icon: Calendar,
    value: '19 nov. 2026',
    label: 'Date de sortie officielle',
    accent: 'var(--neon-pink)',
  },
  {
    icon: Users,
    value: '8',
    label: 'Personnages confirmés',
    accent: 'var(--neon-cyan)',
  },
  {
    icon: MapPin,
    value: '6',
    label: 'Régions de Leonida',
    accent: 'var(--neon-purple)',
  },
  {
    icon: Trophy,
    value: '200M+',
    label: 'Vues du trailer 1',
    accent: 'var(--neon-yellow)',
  },
];

// GTA 6 images officielles récupérées via image-search
const HERO_BG = 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0eea46efb271.jpg';
const HERO_BG_2 = 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad7692f7ee99.jpg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <SiteHeader />
      <FactsTicker />

      {/* Ad bannière en-tête */}
      <AdHeaderBanner />

      <main className="flex-1 relative z-10">
        {/* HERO + COUNTDOWN avec image de fond GTA 6 */}
        <section
          id="top"
          className="relative overflow-hidden"
        >
          {/* Background image GTA 6 */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_BG}
              alt="GTA 6 — Vice City"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Sunset gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-pink)]/30 via-[var(--sunset)]/20 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)]/25 via-transparent to-[var(--neon-cyan)]/25" />
            <div className="absolute inset-0 grid-bg opacity-30" />
          </div>

          {/* Animated sun glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[var(--sunset)]/40 blur-3xl animate-pulse-glow pointer-events-none z-0" />

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 hidden md:block animate-float pointer-events-none z-10">
            <Palmtree className="w-16 h-16 text-[var(--neon-pink)]/40" />
          </div>
          <div
            className="absolute top-32 right-10 hidden md:block animate-float-slow pointer-events-none z-10"
            style={{ animationDelay: '1.5s' }}
          >
            <Sun className="w-20 h-20 text-[var(--neon-yellow)]/40" />
          </div>
          <div
            className="absolute bottom-32 left-1/4 hidden md:block animate-float pointer-events-none z-10"
            style={{ animationDelay: '3s' }}
          >
            <Waves className="w-14 h-14 text-[var(--neon-cyan)]/40" />
          </div>

          <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <RevealOnScroll direction="up" distance={20}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pink border border-[var(--neon-pink)]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--neon-pink)] animate-pulse-glow" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--neon-pink)]">
                    Sortie dans moins d'un mois
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={100} distance={30}>
                <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                  <span className="block text-foreground text-stroke">
                    GRAND THEFT
                  </span>
                  <span className="block gradient-text animate-pulse-glow drop-shadow-2xl">
                    AUTO VI
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={200} distance={30}>
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">
                  Le hub francophone de référence pour GTA 6. Suivez en temps
                  réel le countdown, l'actualité, les trailers et tout ce qu'il
                  faut savoir avant le grand retour à{' '}
                  <span className="gradient-text-sunset font-display font-extrabold">
                    Vice City
                  </span>
                  .
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={300} distance={40}>
                <div className="pt-4">
                  <Countdown />
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={400} distance={30}>
                <div className="flex flex-wrap justify-center gap-3 pt-6">
                  <a href="#news">
                    <Button
                      variant="outline"
                      className="glass border-[var(--neon-pink)]/50 text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/15 hover:text-[var(--neon-pink)] hover:scale-105 transition-all border-2"
                    >
                      Voir la timeline
                      <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
                    </Button>
                  </a>
                  <a href="#trailers">
                    <Button className="bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-white hover:scale-105 transition-transform shadow-lg shadow-[var(--neon-pink)]/40 border-0">
                      Regarder les trailers
                    </Button>
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Stats */}
          <div className="container mx-auto px-4 pb-12 sm:pb-16 relative z-10">
            <RevealOnScroll direction="up" distance={40}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <RevealOnScroll
                      key={i}
                      delay={i * 80}
                      direction="up"
                      distance={20}
                    >
                      <div className="group relative rounded-2xl glass-pink p-4 sm:p-5 text-center hover-lift hover-glow transition-all">
                        <Icon
                          className="w-6 h-6 mx-auto mb-2 group-hover:scale-125 transition-transform"
                          style={{ color: stat.accent }}
                        />
                        <div
                          className="font-display text-lg sm:text-xl font-extrabold"
                          style={{ color: stat.accent }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-foreground/70 uppercase tracking-wider mt-1 font-bold">
                          {stat.label}
                        </div>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* NEWS TIMELINE */}
        <section id="news" className="container mx-auto px-4 py-12 sm:py-20">
          <RevealOnScroll direction="up">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-pink)] mb-3">
                Chronologie
              </p>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                Tout ce qui s'est passé{' '}
                <span className="gradient-text">depuis l'annonce</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                De la révélation en décembre 2023 jusqu'au jour de la sortie,
                retrouvez chaque étape clé de la campagne GTA 6 : trailers
                officiels, screenshots, leaks, partenariats et dates importantes.
              </p>
            </div>
          </RevealOnScroll>
          <NewsTimeline />
        </section>

        {/* Ad in-content */}
        <AdInContent />

        {/* TRAILERS */}
        <section id="trailers" className="container mx-auto px-4 py-12 sm:py-20">
          <RevealOnScroll direction="up">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-cyan)] mb-3">
                Vidéos officielles
              </p>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                Les trailers{' '}
                <span className="gradient-text">de GTA 6</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                Les deux trailers officiels publiés par Rockstar Games, plus le
                gameplay extended look diffusé en partenariat avec Netflix en
                août 2026.
              </p>
              <div className="mt-6 inline-block">
                <TrailerCta />
              </div>
            </div>
          </RevealOnScroll>
          <Trailers />
        </section>

        {/* CHARACTERS */}
        <section id="characters" className="container mx-auto px-4 py-12 sm:py-20">
          <RevealOnScroll direction="up">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-pink)] mb-3">
                Casting
              </p>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                Les personnages{' '}
                <span className="gradient-text">de Leonida</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                Du duo de protagonistes Jason & Lucia au casting secondaire
                d'influenceurs, businessman et braqueurs — les visages qui
                peuplent l'univers de GTA 6.
              </p>
            </div>
          </RevealOnScroll>
          <Characters />
        </section>

        {/* Ad in-content */}
        <AdInContent />

        {/* MAP REGIONS */}
        <section id="map" className="container mx-auto px-4 py-12 sm:py-20">
          <RevealOnScroll direction="up">
            <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-purple)] mb-3">
                Géographie
              </p>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                L'état de{' '}
                <span className="gradient-text">Leonida</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                Plus vaste qu'un simple retour à Vice City, GTA 6 couvre l'état
                fictif de Leonida inspiré de la Floride. Six régions majeures
                offrent une diversité de biomes et d'ambiances.
              </p>
            </div>
          </RevealOnScroll>
          <MapRegions />
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-12 sm:py-20 max-w-3xl">
          <RevealOnScroll direction="up">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--neon-yellow)] mb-3">
                Questions fréquentes
              </p>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                Tout savoir{' '}
                <span className="gradient-text">sur GTA 6</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
                Les réponses aux questions les plus posées par la communauté
                avant la sortie du jeu.
              </p>
            </div>
          </RevealOnScroll>
          <Faq />
        </section>

        {/* Ad in-content */}
        <AdInContent />

        {/* NEWSLETTER CTA */}
        <section
          id="newsletter"
          className="relative overflow-hidden py-16 sm:py-24"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_BG_2}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-pink)]/40 via-[var(--neon-purple)]/30 to-[var(--neon-cyan)]/40" />
            <div className="absolute inset-0 grid-bg opacity-30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <RevealOnScroll direction="up">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--neon-pink)] animate-pulse-glow" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Reste informé
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-2xl">
                  Sois le premier{' '}
                  <span className="gradient-text">au courant</span>
                </h2>
                <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
                  Trailer 3, date de précommande, leaks, screenshots exclusifs,
                  analyses gameplay — reçois une alerte dès que Rockstar bouge.
                  Pas de spam, juste l'essentiel.
                </p>
                <Newsletter />
                <div className="flex flex-wrap justify-center gap-6 pt-6 text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-pink)]" />
                    2-3 emails / mois
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-cyan)]" />
                    Désinscription 1 clic
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-purple)]" />
                    0 spam, 100% GTA 6
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Ad footer */}
        <AdFooterBanner />

        {/* DONATION */}
        <section id="donation" className="container mx-auto px-4 py-12 sm:py-20">
          <Donation />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
