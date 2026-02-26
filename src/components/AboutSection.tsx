import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutImg from '@/assets/about-clinic.jpg';
import { Heart, Eye, Target } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Missão', text: 'Proporcionar saúde e bem-estar animal com excelência, carinho e tecnologia de ponta.' },
  { icon: Eye, title: 'Visão', text: 'Ser referência em medicina veterinária no Brasil, reconhecida pela humanização e inovação.' },
  { icon: Target, title: 'Valores', text: 'Ética, empatia, respeito à vida animal, transparência e compromisso com a família do pet.' },
];

const AboutSection = () => {
  const { ref: ref1, isVisible: v1 } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4">
        <div ref={ref1} className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${v1 ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={aboutImg} alt="Clínica Barley Pets" className="w-full h-80 md:h-[450px] object-cover" />
          </div>
          <div>
            <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Sobre Nós</span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Uma história de amor <span className="text-gradient-brand">pelos animais</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Fundada com o sonho de transformar o cuidado veterinário no Brasil, a Barley Pets nasceu da
              paixão por animais e do compromisso com a excelência. Nossa equipe é formada por profissionais
              apaixonados que tratam cada paciente como membro da própria família.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Com mais de 10 anos de experiência, investimos constantemente em tecnologia e formação
              para oferecer o melhor atendimento possível ao seu companheiro.
            </p>
          </div>
        </div>

        <div ref={ref2} className={`grid md:grid-cols-3 gap-8 ${v2 ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-brand transition-shadow duration-500 group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
