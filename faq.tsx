import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Quand sort GTA 6 officiellement ?',
    a: 'Grand Theft Auto VI sortira le 19 novembre 2026 sur PlayStation 5 et Xbox Series X|S. Rockstar a confirmé cette date après un report initialement annoncé pour mai 2026. La version PS5 Pro est également "PS5 Pro Enhanced". Le jeu est pour l\'instant prévu uniquement en single-player à son lancement.',
  },
  {
    q: 'Qui sont les protagonistes de GTA 6 ?',
    a: 'GTA 6 met en scène deux protagonistes : Lucia Caminos — première héroïne jouable de la série, sortie de prison et originaire de Liberty City — et Jason Duval, ancien soldat reconverti dans les activités criminelles aux Leonida Keys. Leur relation amoureuse et leur descente dans le crime forment le cœur narratif, dans une inspiration clairement revendiquée du mythe Bonnie & Clyde.',
  },
  {
    q: 'Où se déroule GTA 6 ?',
    a: 'L\'action se déroule dans l\'état fictif de Leonida, inspiré de la Floride. Il comprend six régions majeures : Vice City (inspirée de Miami), les Leonida Keys (façon Florida Keys), Port Gellhorn (zone industrielle), Ambrosia (communauté industrielle), Grassrivers (marécages façon Everglades) et le Mount Kalaga National Park. La map est décrite comme la plus grande jamais créée pour un GTA.',
  },
  {
    q: 'GTA 6 sortira-t-il sur PC ?',
    a: 'À ce jour, Rockstar n\'a pas annoncé de version PC pour le lancement. Historiquement, les versions PC de GTA sortent 1 à 2 ans après les versions consoles (GTA V est sorti sur PC 18 mois après la version PS3/Xbox 360). Il est donc probable que la version PC arrive courant 2027 ou 2028, mais aucune confirmation officielle n\'existe.',
  },
  {
    q: 'Y aura-t-il un mode online pour GTA 6 ?',
    a: 'Rockstar n\'a pas encore officiellement annoncé de mode online pour GTA 6. Cependant, vu le succès colossal de GTA Online (toujours mis à jour plus de 10 ans après sa sortie), un successeur est très probablement prévu. Les serveurs FiveM et RageMP continueront probablement d\'exister en parallèle pour le roleplay communautaire.',
  },
  {
    q: 'Le retour à Vice City est-il confirmé ?',
    a: 'Oui, absolument. Vice City est officiellement de retour dans GTA 6, plus de 20 ans après Grand Theft Auto : Vice City (2002). Les trailers ont montré une ville modernisée, sombre et néon, fidèle à l\'esprit Miami tout en se démarquant de l\'ambiance 80s du jeu original.',
  },
  {
    q: 'Combien de trailers de GTA 6 sont sortis ?',
    a: 'À ce jour, Rockstar a publié : Trailer 1 (5 décembre 2023), Trailer 2 (2 mai 2025), 70+ screenshots officiels, et des clips vidéo individuels pour chaque personnage secondaire. Un troisième trailer et une présentation gameplay officielle sont attendus avant la sortie du 19 novembre 2026.',
  },
  {
    q: 'Que sont les leaks CyberLeek ?',
    a: 'En août 2026, un hacker sous le pseudo CyberLeek a publié en ligne des clips inédits de gameplay GTA 6 et un aperçu de la map. Les leaks ont révélé des détails sur le système de tracking de véhicules, les caméras de trafic, les clés à cloner, et des changements dans le combat. Rockstar a réagi en s\'associant avec Netflix pour diffuser un "Extended Look" officiel de 26 minutes le 27 août 2026.',
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQS.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-border"
        >
          <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:text-[var(--neon-pink)] transition-colors">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
