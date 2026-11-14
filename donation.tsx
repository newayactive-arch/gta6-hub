'use client';

import { Heart, ExternalLink, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RevealOnScroll } from '@/components/site/reveal-on-scroll';

// URL de donation fournie par l'utilisateur
const DONATION_URL = 'https://uipvvrko.mychariow.shop/prd_mrjuh1i8';

export function Donation() {
  return (
    <RevealOnScroll direction="up">
      <div className="relative max-w-3xl mx-auto">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[var(--neon-pink)] via-[var(--sunset)] to-[var(--neon-purple)] opacity-60 blur-xl animate-pulse-glow" />

        <div className="relative glass border border-white/30 rounded-3xl p-6 sm:p-10 overflow-hidden">
          {/* Déco coin */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--neon-pink)]/30 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--neon-purple)]/30 to-transparent rounded-tr-full" />

          <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Icône */}
            <div className="shrink-0 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)] flex items-center justify-center shadow-lg shadow-[var(--neon-pink)]/40">
                <Heart className="w-8 h-8 text-white fill-white animate-pulse-glow" />
              </div>
            </div>

            {/* Texte */}
            <div className="flex-1 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--neon-pink)]/20 border border-[var(--neon-pink)]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-pink)] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--neon-pink)]">
                  Soutiens le hub
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                Soutiens <span className="gradient-text">GTA 6 Hub</span>
              </h3>
              <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed">
                Le hub reste 100% gratuit et sans pub intrusive. Ta donation
                aide à payer l'hébergement, le nom de domaine et le temps passé
                à traquer chaque leak et trailer de GTA VI.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[var(--neon-pink)] via-[var(--sunset)] to-[var(--neon-purple)] text-white hover:scale-105 transition-transform shadow-xl shadow-[var(--neon-pink)]/40 border-0 font-bold"
                >
                  <Heart className="w-4 h-4 mr-2 fill-white" />
                  Faire un don
                  <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
                </Button>
              </a>
              <p className="text-[10px] text-white/50 text-center mt-2 font-medium">
                Paiement sécurisé · Toute somme compte
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
