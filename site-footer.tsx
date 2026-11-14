import { Gamepad2, Github, Twitter, Youtube, Twitch, Heart } from 'lucide-react';

const DONATION_URL = 'https://uipvvrko.mychariow.shop/prd_mrjuh1i8';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto glass border-t border-white/30">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 font-display font-extrabold text-lg">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunset)] to-[var(--neon-purple)] flex items-center justify-center shadow-lg shadow-[var(--neon-pink)]/30">
                <Gamepad2 className="w-5 h-5 text-white drop-shadow" />
              </div>
              GTA 6{' '}
              <span className="gradient-text-sunset">Hub</span>
            </div>
            <p className="text-sm text-foreground/70 max-w-sm leading-relaxed">
              Le hub francophone de référence pour tout savoir sur Grand Theft Auto
              VI avant sa sortie le 19 novembre 2026. News, trailers, countdown et
              communautés de joueurs.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#countdown', label: 'Countdown' },
                { href: '#news', label: 'Timeline des news' },
                { href: '#trailers', label: 'Trailers' },
                { href: '#characters', label: 'Personnages' },
                { href: '#map', label: 'Carte de Leonida' },
                { href: '#donation', label: 'Faire un don' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-foreground/70 hover:text-[var(--neon-pink)] hover:translate-x-1 inline-block transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Nous suivre
            </h3>
            <div className="flex gap-2">
              {[
                { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-[var(--neon-cyan)]/20 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]/50' },
                { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-[var(--neon-pink)]/20 hover:text-[var(--neon-pink)] hover:border-[var(--neon-pink)]/50' },
                { icon: Twitch, href: '#', label: 'Twitch', color: 'hover:bg-[var(--neon-purple)]/20 hover:text-[var(--neon-purple)] hover:border-[var(--neon-purple)]/50' },
                { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-[var(--neon-yellow)]/20 hover:text-[var(--neon-yellow)] hover:border-[var(--neon-yellow)]/50' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl border border-white/30 bg-white/40 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-foreground/60 font-semibold">
              #GTA6 #Leonida #ViceCity
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg bg-[var(--neon-pink)]/10 border border-[var(--neon-pink)]/30 text-xs font-bold text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/20 hover:scale-105 transition-all"
            >
              <Heart className="w-3 h-3 fill-[var(--neon-pink)]" />
              Soutiens le hub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-foreground/60">
          <p>
            © {year} GTA 6 Hub. Site fan non-officiel. Non affilié à Rockstar
            Games ou Take-Two Interactive.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
