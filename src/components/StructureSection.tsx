import { useScrollReveal } from '@/hooks/useScrollReveal';
import structureImg from '@/assets/structure.jpg';
import structureImg2 from '@/assets/structure-2.jpg';
import { Monitor, Wifi, Shield, Cpu } from 'lucide-react';

const features = [
  { icon: Monitor, text: 'Radiografia e ultrassonografia digital' },
  { icon: Cpu, text: 'Laboratório interno com resultados em minutos' },
  { icon: Shield, text: 'Centro cirúrgico com monitoramento multiparamétrico' },
  { icon: Wifi, text: 'Prontuário eletrônico e telemedicina' },
];

const StructureSection = () => {
  const { ref: r1, isVisible: v1 } = useScrollReveal();
  const { ref: r2, isVisible: v2 } = useScrollReveal();

  return (
    <section id="estrutura" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4">
        <div ref={r1} className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${v1 ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Estrutura & Tecnologia</span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Equipamentos de <span className="text-gradient-brand">última geração</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Investimos constantemente em tecnologia para oferecer diagnósticos precisos e tratamentos
              eficazes. Nossa infraestrutura é referência na região.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-body text-sm text-foreground font-medium">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={structureImg} alt="Estrutura moderna" className="w-full h-80 md:h-[400px] object-cover" />
          </div>
        </div>

        <div ref={r2} className={`rounded-2xl overflow-hidden shadow-card ${v2 ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <img src={structureImg2} alt="Laboratório veterinário" className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
