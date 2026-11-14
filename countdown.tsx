'use client';

import { useSyncExternalStore } from 'react';

const RELEASE_DATE = new Date('2026-11-19T00:00:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isReleased: boolean;
}

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const difference = RELEASE_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isReleased: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isReleased: false,
  };
}

const SERVER_SNAPSHOT: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isReleased: false,
};

let clientSnapshot: TimeLeft | null = null;
function getClientSnapshot(): TimeLeft {
  if (clientSnapshot === null) {
    clientSnapshot = calculateTimeLeft();
    setTimeout(() => {
      clientSnapshot = null;
    }, 1000);
  }
  return clientSnapshot;
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): TimeLeft {
  return getClientSnapshot();
}

function getServerSnapshot(): TimeLeft {
  return SERVER_SNAPSHOT;
}

interface TimeBlockProps {
  value: number;
  label: string;
  accent?: 'pink' | 'cyan' | 'purple' | 'yellow';
}

function TimeBlock({ value, label, accent = 'pink' }: TimeBlockProps) {
  const accentClasses: Record<string, { border: string; text: string; bg: string }> = {
    pink: {
      border: 'border-[var(--neon-pink)]',
      text: 'text-[var(--neon-pink)]',
      bg: 'from-[var(--neon-pink)]/15 to-[var(--neon-pink)]/5',
    },
    cyan: {
      border: 'border-[var(--neon-cyan)]',
      text: 'text-[var(--neon-cyan)]',
      bg: 'from-[var(--neon-cyan)]/15 to-[var(--neon-cyan)]/5',
    },
    purple: {
      border: 'border-[var(--neon-purple)]',
      text: 'text-[var(--neon-purple)]',
      bg: 'from-[var(--neon-purple)]/15 to-[var(--neon-purple)]/5',
    },
    yellow: {
      border: 'border-[var(--neon-yellow)]',
      text: 'text-[var(--neon-yellow)]',
      bg: 'from-[var(--neon-yellow)]/15 to-[var(--neon-yellow)]/5',
    },
  };

  const styles = accentClasses[accent];
  const displayValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div
        className={`relative w-[4.5rem] h-[5rem] sm:w-28 sm:h-32 md:w-32 md:h-40 rounded-2xl border-2 ${styles.border} bg-gradient-to-br ${styles.bg} backdrop-blur-md flex items-center justify-center overflow-hidden hover-lift`}
      >
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        {/* Top corner accents */}
        <div className={`absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 ${styles.border}`} />
        <div className={`absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 ${styles.border}`} />
        <div className={`absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 ${styles.border}`} />
        <div className={`absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 ${styles.border}`} />
        {/* Scan line */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent animate-scan opacity-50 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
        <span
          className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tabular-nums ${styles.text}`}
          style={{ textShadow: '0 2px 8px oklch(0 0 0 / 15%)' }}
          suppressHydrationWarning
        >
          {displayValue}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const timeLeft = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (timeLeft.isReleased) {
    return (
      <div className="text-center py-12 animate-bounce-in">
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold gradient-text animate-pulse-glow">
          GTA 6 EST LÀ
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          Bienvenue à Leonida. Bon jeu.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-6">
        <TimeBlock value={timeLeft.days} label="Jours" accent="pink" />
        <TimeBlock value={timeLeft.hours} label="Heures" accent="cyan" />
        <TimeBlock value={timeLeft.minutes} label="Minutes" accent="purple" />
        <TimeBlock value={timeLeft.seconds} label="Secondes" accent="yellow" />
      </div>
      <p className="text-xs sm:text-sm text-foreground/70 text-center max-w-md font-medium">
        Sortie officielle le{' '}
        <span className="font-display font-bold gradient-text-sunset">
          19 novembre 2026
        </span>{' '}
        sur PlayStation 5 et Xbox Series X|S.
      </p>
    </div>
  );
}
