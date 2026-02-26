import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Calendar } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contato" className="py-20 md:py-28 bg-gradient-cta relative overflow-hidden">
      <div ref={ref} className={`container mx-auto px-4 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <Heart className="w-12 h-12 text-primary-foreground/30 mx-auto mb-6" />
        <h2 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Seu pet merece o melhor cuidado. Agende agora mesmo.
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
          Nossa equipe está pronta para receber você e seu companheiro com todo carinho e profissionalismo.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-full font-heading font-black text-lg hover:scale-105 transition-transform shadow-brand"
        >
          <Calendar className="w-6 h-6" />
          Agendar Consulta Agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
