import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, GraduationCap, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import vet1 from '@/assets/vet-1.jpg';
import vet2 from '@/assets/vet-2.jpg';
import vet3 from '@/assets/vet-3.jpg';
import { useEffect } from 'react';

const teamData: Record<string, {
  img: string;
  name: string;
  role: string;
  crmv: string;
  bio: string;
  education: string[];
  specialties: string[];
  philosophy: string;
}> = {
  'dra-carolina-mendes': {
    img: vet1,
    name: 'Dra. Carolina Mendes',
    role: 'Clínica Geral e Cirurgia',
    crmv: 'CRMV-SP 12345',
    bio: 'Apaixonada por animais desde a infância, Dra. Carolina se formou em Medicina Veterinária pela USP e desde então dedica sua carreira ao atendimento clínico e cirúrgico de pequenos animais. Com mais de 10 anos de experiência, é reconhecida pelo acolhimento e atenção aos detalhes em cada consulta.',
    education: [
      'Graduação em Medicina Veterinária — USP (2012)',
      'Residência em Clínica e Cirurgia de Pequenos Animais — UNESP (2014)',
      'Pós-graduação em Cirurgia de Tecidos Moles — Qualittas (2016)',
      'Curso de Ultrassonografia Abdominal — FMVZ-USP (2018)',
    ],
    specialties: [
      'Consultas clínicas gerais',
      'Cirurgias eletivas e de urgência',
      'Medicina preventiva',
      'Geriatria veterinária',
    ],
    philosophy: 'Acredito que a medicina veterinária vai além do diagnóstico. É sobre criar um vínculo de confiança com os tutores e proporcionar conforto e qualidade de vida para cada paciente.',
  },
  'dr-rafael-oliveira': {
    img: vet2,
    name: 'Dr. Rafael Oliveira',
    role: 'Ortopedia e Traumatologia',
    crmv: 'CRMV-SP 23456',
    bio: 'Dr. Rafael é especialista em ortopedia veterinária, com formação pela UNESP e certificações internacionais. Referência em cirurgias ortopédicas minimamente invasivas, já realizou mais de 2.000 procedimentos ao longo de sua carreira.',
    education: [
      'Graduação em Medicina Veterinária — UNESP Botucatu (2010)',
      'Mestrado em Cirurgia Veterinária — UNESP (2013)',
      'Certificação em Ortopedia — AO VET International (2015)',
      'Fellowship em Artroscopia — Universidade de Zurique (2017)',
    ],
    specialties: [
      'Cirurgias ortopédicas (TPLO, TTA)',
      'Fraturas complexas',
      'Artroscopia',
      'Reabilitação pós-operatória',
    ],
    philosophy: 'Cada animal merece recuperar sua mobilidade e alegria. Busco sempre as técnicas mais modernas e menos invasivas para proporcionar uma recuperação rápida e confortável.',
  },
  'dra-beatriz-santos': {
    img: vet3,
    name: 'Dra. Beatriz Santos',
    role: 'Dermatologia Veterinária',
    crmv: 'CRMV-SP 34567',
    bio: 'Dra. Beatriz é especialista em dermatologia veterinária com foco em alergias, doenças autoimunes e otites crônicas. Sua abordagem integrativa combina tratamentos convencionais com terapias complementares para resultados duradouros.',
    education: [
      'Graduação em Medicina Veterinária — PUC-PR (2013)',
      'Residência em Dermatologia Veterinária — FMVZ-USP (2016)',
      'Pós-graduação em Alergia e Imunologia Veterinária — Anclivepa (2018)',
      'Curso de Dermatoscopia Veterinária — ESVD (2020)',
    ],
    specialties: [
      'Dermatites alérgicas e atópicas',
      'Otites crônicas',
      'Doenças autoimunes da pele',
      'Terapia com laser de baixa potência',
    ],
    philosophy: 'A pele é o espelho da saúde do animal. Meu trabalho é investigar a causa raiz de cada problema dermatológico e oferecer tratamentos que trazem alívio real e duradouro.',
  },
};

const TeamDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const member = slug ? teamData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    sessionStorage.removeItem('scrollPosition');
    navigate('/', { replace: true });
    setTimeout(() => {
      const teamSection = document.getElementById('equipe');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 0);
  };

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Profissional não encontrado</h1>
          <button onClick={() => navigate('/')} className="text-primary font-semibold hover:underline">Voltar ao início</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen animate-fade-in">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-primary font-body font-semibold mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à Equipe
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-brand"
            />
            <div>
              <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground">{member.name}</h1>
              <p className="font-body text-primary font-semibold text-lg mt-2">{member.role}</p>
              <p className="font-body text-muted-foreground text-sm mt-1">{member.crmv}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-body text-foreground/90 text-lg leading-relaxed mb-12">{member.bio}</p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="font-heading font-bold text-2xl text-foreground">Formação Acadêmica</h2>
              </div>
              <ul className="space-y-3">
                {member.education.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="font-body text-foreground/85 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="font-heading font-bold text-2xl text-foreground">Especialidades</h2>
              </div>
              <ul className="space-y-3">
                {member.specialties.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="font-body text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="font-heading font-bold text-2xl text-foreground">Filosofia de Trabalho</h2>
            </div>
            <p className="font-body text-foreground/85 text-lg leading-relaxed italic">
              "{member.philosophy}"
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:scale-105 transition-transform shadow-brand"
            >
              <Phone className="w-5 h-5" />
              Agendar com {member.name.split(' ')[0]}. {member.name.split(' ').pop()}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamDetail;
