import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import vet1 from '@/assets/vet-1.jpg';
import vet2 from '@/assets/vet-2.jpg';
import vet3 from '@/assets/vet-3.jpg';

const team = [
  { img: vet1, name: 'Dra. Carolina Mendes', role: 'Clínica Geral e Cirurgia', crmv: 'CRMV-SP 12345', slug: 'dra-carolina-mendes' },
  { img: vet2, name: 'Dr. Rafael Oliveira', role: 'Ortopedia e Traumatologia', crmv: 'CRMV-SP 23456', slug: 'dr-rafael-oliveira' },
  { img: vet3, name: 'Dra. Beatriz Santos', role: 'Dermatologia Veterinária', crmv: 'CRMV-SP 34567', slug: 'dra-beatriz-santos' },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  const handleTeamClick = (slug: string) => {
    navigate(`/equipe/${slug}`);
  };

  return (
    <section id="equipe" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Nossa Equipe</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            Profissionais que <span className="text-gradient-brand">amam o que fazem</span>
          </h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-3 gap-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {team.map((member, i) => (
            <button
              onClick={() => handleTeamClick(member.slug)}
              key={i}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-brand hover:-translate-y-2 transition-all duration-300 text-left w-full"
            >
              <div className="overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-bold text-xl text-foreground">{member.name}</h3>
                <p className="font-body text-primary font-semibold text-sm mt-1">{member.role}</p>
                <p className="font-body text-muted-foreground text-xs mt-1">{member.crmv}</p>
                <span className="inline-block mt-3 text-primary font-body font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Ver perfil →
                </span>
              </div>
            </button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
