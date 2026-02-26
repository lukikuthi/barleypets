import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Syringe, FlaskConical, Scissors, BedDouble, Bath, Siren } from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'Clínica Geral', desc: 'Consultas completas com avaliação detalhada da saúde do seu pet.', slug: 'clinica-geral' },
  { icon: Syringe, title: 'Vacinação', desc: 'Protocolo vacinal atualizado e personalizado para cada animal.', slug: 'vacinacao' },
  { icon: FlaskConical, title: 'Exames Laboratoriais', desc: 'Hemograma, bioquímica, urinálise e muito mais com resultados rápidos.', slug: 'exames-laboratoriais' },
  { icon: Scissors, title: 'Cirurgias', desc: 'Centro cirúrgico equipado com monitoramento completo e anestesia segura.', slug: 'cirurgias' },
  { icon: BedDouble, title: 'Internação', desc: 'Acompanhamento 24h com carinho e supervisão veterinária constante.', slug: 'internacao' },
  { icon: Bath, title: 'Banho e Tosa', desc: 'Estética pet com produtos premium e profissionais especializados.', slug: 'banho-e-tosa' },
  { icon: Siren, title: 'Emergência 24h', desc: 'Atendimento de urgência disponível todos os dias, a qualquer hora.', slug: 'emergencia-24h' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  const handleServiceClick = (slug: string) => {
    navigate(`/servicos/${slug}`);
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            Cuidado completo para o <span className="text-gradient-brand">seu melhor amigo</span>
          </h2>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {services.map((s, i) => (
            <button
              onClick={() => handleServiceClick(s.slug)}
              key={i}
              className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-brand hover:-translate-y-2 transition-all duration-300 text-left w-full"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-4 text-primary font-body font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                Saiba mais →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
