'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

/**
 * Anime un élément quand il entre dans le viewport.
 * Utilise IntersectionObserver (callback async, pas de setState-in-effect).
 * Le state initializer gère le fallback SSR/navigateurs sans IO.
 */
export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  // State initializer: si IO n'est pas supporté, on est visible direct.
  // Sinon, on démarre invisible et c'est l'IO callback qui déclenchera setVisible(true).
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return typeof IntersectionObserver === 'undefined';
  });

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionTransform: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'scale(0.95)',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0) scale(1)' : directionTransform[direction],
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
