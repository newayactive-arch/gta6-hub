'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLink {
  href: string;
  label: string;
}

const LINKS: NavLink[] = [
  { href: '#countdown', label: 'Countdown' },
  { href: '#news', label: 'News' },
  { href: '#trailers', label: 'Trailers' },
  { href: '#characters', label: 'Personnages' },
  { href: '#map', label: 'Map' },
  { href: '#donation', label: 'Don' },
  { href: '#newsletter', label: 'Newsletter' },
];

const DONATION_URL = 'https://uipvvrko.mychariow.shop/prd_mrjuh1i8';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/30 shadow-lg shadow-[var(--neon-pink)]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display font-extrabold text-lg sm:text-xl group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunset)] to-[var(--neon-purple)] flex items-center justify-center shadow-lg shadow-[var(--neon-pink)]/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <Gamepad2 className="w-5 h-5 text-white drop-shadow" />
            <div className="absolute inset-0 rounded-xl animate-shimmer opacity-50" />
          </div>
          <span className="hidden sm:inline">
            GTA 6{' '}
            <span className="gradient-text-sunset">Hub</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-[var(--neon-pink)] transition-colors rounded-lg hover:bg-[var(--neon-pink)]/10 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--neon-pink)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a href={DONATION_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="ghost"
              className="text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10 hover:text-[var(--neon-pink)] border border-[var(--neon-pink)]/30 hover:border-[var(--neon-pink)]/60"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-[var(--neon-pink)]" />
              Don
            </Button>
          </a>
          <a href="#newsletter">
            <Button
              size="sm"
              className="bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-white hover:scale-105 transition-transform shadow-lg shadow-[var(--neon-pink)]/30 border-0"
            >
              Rejoindre
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-[var(--neon-pink)]/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden glass border-t border-white/30 animate-bounce-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-foreground/70 hover:text-[var(--neon-pink)] hover:bg-[var(--neon-pink)]/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block mt-2"
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full text-[var(--neon-pink)] border-[var(--neon-pink)]/40 hover:bg-[var(--neon-pink)]/10"
              >
                <Heart className="w-4 h-4 mr-2 fill-[var(--neon-pink)]" />
                Faire un don
              </Button>
            </a>
            <a
              href="#newsletter"
              onClick={() => setMobileOpen(false)}
              className="block mt-2"
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-white border-0"
              >
                Rejoindre la newsletter
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
