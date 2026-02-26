import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 89',
    period: '/mês',
    popular: false,
    features: ['2 consultas/ano', 'Vacinação inclusa', 'Desconto em exames', 'Banho mensal'],
  },
  {
    name: 'Premium',
    price: 'R$ 159',
    period: '/mês',
    popular: true,
    features: ['4 consultas/ano', 'Vacinação completa', 'Exames laboratoriais', 'Banho e tosa mensal', 'Emergência 24h', 'Desconto em cirurgias'],
  },
  {
    name: 'VIP',
    price: 'R$ 249',
    period: '/mês',
    popular: false,
    features: ['Consultas ilimitadas', 'Vacinação completa', 'Exames e check-up', 'Banho e tosa semanal', 'Emergência 24h', 'Cirurgias incluídas', 'Internação s/ custo adicional'],
  },
];

const PlansSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Planos & Convênios</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            Escolha o melhor plano para o <span className="text-gradient-brand">seu pet</span>
          </h2>
        </div>

        <div ref={ref} className={"grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-opacity duration-700 " + (isVisible ? 'opacity-100' : 'opacity-0')}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={"relative bg-card rounded-2xl p-8 shadow-card transition-all duration-500 hover:shadow-brand flex flex-col " + (plan.popular ? 'ring-2 ring-primary scale-105 md:scale-110' : '')}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold font-body flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Mais Escolhido
                </div>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-black text-4xl text-primary">{plan.price}</span>
                <span className="font-body text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-body text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={"block text-center py-3 rounded-full font-heading font-bold transition-all " + (plan.popular ? 'bg-primary text-primary-foreground hover:brightness-110 shadow-brand' : 'bg-primary/10 text-primary hover:bg-primary/20')}
              >
                Assinar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
