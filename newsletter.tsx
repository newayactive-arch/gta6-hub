'use client';

import { useState } from 'react';
import { Mail, Bell, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: 'Email invalide',
        description: 'Veuillez entrer une adresse email valide.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: 'Inscription confirmée !',
      description: 'Tu recevras les prochaines news GTA 6 directement dans ta boîte mail.',
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4 animate-bounce-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)] mb-4 shadow-lg shadow-[var(--neon-pink)]/40 animate-pulse-glow">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-2 gradient-text">
          Tu es dans la place, reuf !
        </h3>
        <p className="text-sm text-foreground/70 max-w-md mx-auto">
          Sois prêt. On t'envoie le moindre trailer, leak ou info officielle
          dès que Rockstar bouge.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <Input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 glass border-[var(--neon-pink)]/40 focus-visible:border-[var(--neon-pink)] focus-visible:ring-[var(--neon-pink)]/20"
            aria-label="Adresse email"
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-white hover:scale-105 transition-transform shadow-lg shadow-[var(--neon-pink)]/30 border-0"
        >
          {loading ? (
            <>Inscription...</>
          ) : (
            <>
              <Bell className="w-4 h-4 mr-2" />
              Alerte moi
            </>
          )}
        </Button>
      </div>
      <p className="text-[10px] text-foreground/60 text-center">
        Aucun spam. Désinscription en 1 clic. À raison de 2-3 emails par mois maximum.
      </p>
    </form>
  );
}
