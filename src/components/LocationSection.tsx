import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Localização</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            Venha nos <span className="text-gradient-brand">visitar</span>
          </h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="rounded-2xl overflow-hidden shadow-card h-80 md:h-full min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1953506994926!2d-46.65471702378!3d-23.563600261746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa63b%3A0xbfc3a8c42d9b7b0b!2sAv.+Paulista%2C+1578+-+Bela+Vista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1709000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barley Pets"
            />
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Endereço</p>
                  <p className="font-body text-muted-foreground text-sm">Av. Paulista, 1578 - Sala 302<br />Bela Vista, São Paulo - SP<br />CEP: 01310-200</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Horário de Funcionamento</p>
                  <p className="font-body text-muted-foreground text-sm">Segunda a Sexta: 8h às 20h<br />Sábado: 8h às 18h<br />Domingo: 9h às 14h<br />Emergência: 24 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Telefone</p>
                  <p className="font-body text-muted-foreground text-sm">(11) 3456-7890<br />(11) 99999-9999 (WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">E-mail</p>
                  <p className="font-body text-muted-foreground text-sm">contato@barleypets.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
