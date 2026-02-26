import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Fernanda',
    pet: 'Tutora do Thor (Golden Retriever)',
    text: 'A equipe da Barley Pets salvou a vida do meu Thor. Profissionalismo, carinho e muita dedicação. Recomendo de olhos fechados!',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    pet: 'Tutor da Luna (Gata Persa)',
    text: 'A Luna precisou de uma cirurgia delicada e todo o processo foi impecável. Desde a consulta até a recuperação, nos sentimos acolhidos.',
    stars: 5,
  },
  {
    name: 'Ana Paula',
    pet: 'Tutora do Bento (Bulldog)',
    text: 'O atendimento de emergência às 3 da manhã me mostrou o quanto essa equipe é comprometida. Gratidão eterna!',
    stars: 5,
  },
  {
    name: 'Roberto Almeida',
    pet: 'Tutor do Rex (Pastor Alemão)',
    text: 'A estrutura é incrível. Equipamentos modernos e profissionais qualificados. O Rex adora ir na Barley Pets!',
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            O que dizem <span className="text-gradient-brand">nossos clientes</span>
          </h2>
        </div>

        <div ref={ref} className={`max-w-3xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/15" />
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="font-body text-muted-foreground text-sm">{t.pet}</p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-primary/30'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
