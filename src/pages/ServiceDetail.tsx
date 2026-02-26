import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Stethoscope, Syringe, FlaskConical, Scissors, BedDouble, Bath, Siren, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const servicesData: Record<string, {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  howItWorks: string[];
}> = {
  'clinica-geral': {
    icon: Stethoscope,
    title: 'Clínica Geral',
    subtitle: 'Consultas completas com avaliação detalhada da saúde do seu pet.',
    description:
      'Nossa clínica geral oferece atendimento completo para cães, gatos e outros animais de estimação. Realizamos check-ups preventivos, diagnósticos precisos e tratamentos personalizados para garantir a saúde e o bem-estar do seu melhor amigo.',
    details: [
      'Exame clínico completo com ausculta cardíaca e pulmonar',
      'Avaliação nutricional e orientação alimentar personalizada',
      'Acompanhamento de doenças crônicas',
      'Prescrição de medicamentos e tratamentos',
      'Check-up preventivo anual com exames complementares',
      'Orientação sobre cuidados em casa',
    ],
    howItWorks: [
      'Agendamento por telefone, WhatsApp ou presencialmente.',
      'Recepção acolhedora com ficha de anamnese detalhada.',
      'Consulta com veterinário especializado (duração média de 30 minutos).',
      'Solicitação de exames complementares quando necessário.',
      'Prescrição e orientações finais com acompanhamento.',
    ],
  },
  vacinacao: {
    icon: Syringe,
    title: 'Vacinação',
    subtitle: 'Protocolo vacinal atualizado e personalizado para cada animal.',
    description:
      'A vacinação é a principal forma de prevenção contra doenças graves e potencialmente fatais. Na Barley Pets, seguimos os protocolos mais atualizados recomendados pela WSAVA, adaptando o calendário vacinal à realidade e necessidades de cada paciente.',
    details: [
      'Vacinas polivalentes (V8/V10) para cães',
      'Vacina antirrábica obrigatória',
      'Vacinas para gatos (Tríplice/Quádrupla felina)',
      'Vacina contra Gripe Canina (Bordetella)',
      'Vacina contra Leishmaniose',
      'Carteirinha de vacinação digital e física',
    ],
    howItWorks: [
      'Avaliação clínica prévia para garantir que o animal está apto.',
      'Aplicação com produtos de laboratórios renomados.',
      'Monitoramento por 15 minutos após aplicação.',
      'Agendamento automático das doses de reforço.',
      'Envio de lembretes por WhatsApp.',
    ],
  },
  'exames-laboratoriais': {
    icon: FlaskConical,
    title: 'Exames Laboratoriais',
    subtitle: 'Hemograma, bioquímica, urinálise e muito mais com resultados rápidos.',
    description:
      'Nosso laboratório interno permite a realização de exames com agilidade e precisão. Resultados rápidos para diagnósticos assertivos, auxiliando no tratamento eficaz do seu pet.',
    details: [
      'Hemograma completo',
      'Bioquímica sérica (renal, hepática, glicemia)',
      'Urinálise e coproparasitológico',
      'Citologia e histopatologia',
      'Testes rápidos (Cinomose, Parvovirose, FIV/FeLV)',
      'Ultrassonografia e radiografia digital',
    ],
    howItWorks: [
      'Coleta de material na própria clínica.',
      'Processamento no laboratório interno.',
      'Resultados em até 24 horas para a maioria dos exames.',
      'Laudo veterinário detalhado.',
      'Discussão dos resultados com o tutor.',
    ],
  },
  cirurgias: {
    icon: Scissors,
    title: 'Cirurgias',
    subtitle: 'Centro cirúrgico equipado com monitoramento completo e anestesia segura.',
    description:
      'Realizamos cirurgias eletivas e de emergência com equipe altamente qualificada, centro cirúrgico moderno e protocolos anestésicos seguros com monitoramento multiparamétrico.',
    details: [
      'Castração (ovariohisterectomia e orquiectomia)',
      'Cirurgias ortopédicas',
      'Cirurgias de tecidos moles',
      'Remoção de tumores e biópsias',
      'Cirurgias oftálmicas',
      'Cesariana e cirurgias obstétricas',
    ],
    howItWorks: [
      'Avaliação pré-cirúrgica com exames de sangue e cardiológicos.',
      'Jejum orientado antes do procedimento.',
      'Anestesia inalatória com monitoramento contínuo.',
      'Procedimento cirúrgico com equipe especializada.',
      'Recuperação em internação com acompanhamento 24h.',
      'Retorno para retirada de pontos e reavaliação.',
    ],
  },
  internacao: {
    icon: BedDouble,
    title: 'Internação',
    subtitle: 'Acompanhamento 24h com carinho e supervisão veterinária constante.',
    description:
      'Nossa internação oferece suporte contínuo para animais que necessitam de cuidados intensivos, pós-operatório ou tratamentos prolongados. Ambiente climatizado, confortável e com supervisão veterinária 24 horas.',
    details: [
      'Baias individuais climatizadas',
      'Monitoramento de sinais vitais contínuo',
      'Fluidoterapia e medicação intravenosa',
      'Alimentação personalizada',
      'Atualizações diárias ao tutor por WhatsApp',
      'Visitas permitidas em horários agendados',
    ],
    howItWorks: [
      'Admissão com avaliação clínica completa.',
      'Plano terapêutico individualizado.',
      'Acompanhamento por equipe em turnos de 12h.',
      'Relatório diário enviado ao tutor.',
      'Alta com orientações detalhadas de cuidados.',
    ],
  },
  'banho-e-tosa': {
    icon: Bath,
    title: 'Banho e Tosa',
    subtitle: 'Estética pet com produtos premium e profissionais especializados.',
    description:
      'Nosso serviço de banho e tosa vai além da estética. Utilizamos produtos hipoalergênicos de alta qualidade, realizamos avaliação dermatológica durante o banho e oferecemos um ambiente tranquilo para o conforto do seu pet.',
    details: [
      'Banho com produtos premium e hipoalergênicos',
      'Tosa higiênica e estética',
      'Hidratação de pelos',
      'Limpeza de ouvidos e corte de unhas',
      'Escovação dentária',
      'Perfumaria pet suave',
    ],
    howItWorks: [
      'Agendamento prévio (leva-e-traz disponível).',
      'Recepção e avaliação da pele e pelagem.',
      'Banho com massagem relaxante.',
      'Secagem com soprador profissional.',
      'Tosa conforme preferência do tutor.',
      'Finalização com perfume suave e laçinho/gravata.',
    ],
  },
  'emergencia-24h': {
    icon: Siren,
    title: 'Emergência 24h',
    subtitle: 'Atendimento de urgência disponível todos os dias, a qualquer hora.',
    description:
      'Entendemos que emergências não esperam. Por isso, nossa equipe está disponível 24 horas, 7 dias por semana, para atender seu pet com rapidez, eficiência e todo o suporte necessário em situações críticas.',
    details: [
      'Atendimento imediato sem agendamento',
      'Estabilização e suporte de vida',
      'Cirurgias de emergência',
      'Intoxicações e envenenamentos',
      'Traumas e fraturas',
      'Partos de emergência',
    ],
    howItWorks: [
      'Ligue para nosso número de emergência ou compareça diretamente.',
      'Triagem imediata na chegada.',
      'Estabilização do paciente com acesso venoso.',
      'Exames de emergência (raio-x, ultrassom, sangue).',
      'Tratamento ou encaminhamento cirúrgico.',
      'Internação para acompanhamento se necessário.',
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? servicesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    sessionStorage.removeItem('scrollPosition');
    navigate('/', { replace: true });
    setTimeout(() => {
      const servicesSection = document.getElementById('servicos');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 0);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Serviço não encontrado</h1>
          <button onClick={() => navigate('/')} className="text-primary font-semibold hover:underline">Voltar ao início</button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

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
            Voltar aos Serviços
          </button>

          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground">{service.title}</h1>
              <p className="font-body text-muted-foreground text-lg mt-1">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-body text-foreground/90 text-lg leading-relaxed mb-12">{service.description}</p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">O que inclui</h2>
              <ul className="space-y-3">
                {service.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Como funciona</h2>
              <ol className="space-y-4">
                {service.howItWorks.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-body text-foreground/85 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
              Quer agendar esse serviço?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Entre em contato conosco pelo WhatsApp e agende o melhor horário.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:scale-105 transition-transform shadow-brand"
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
