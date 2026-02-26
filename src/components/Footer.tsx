import logoTransparent from '@/assets/logo-transparent.png';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-brand-warm-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={logoTransparent} alt="Barley Pets" className="h-16 object-contain mb-4 brightness-0 invert" />
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Cuidado veterinário premium com carinho, tecnologia e profissionalismo. Seu pet é da família.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 font-body text-sm opacity-70">
              {['Sobre', 'Serviços', 'Equipe', 'Planos', 'Blog', 'Contato'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 font-body text-sm opacity-70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (11) 3456-9999</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> (11) 99999-9999</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Av. Paulista, 1578 - Sala 302, São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/lukikuthi.dev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-warm-white/10 flex items-center justify-center hover:bg-brand-warm-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-warm-white/10 flex items-center justify-center hover:bg-brand-warm-white/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-warm-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs opacity-50">
              © 2026 Barley Pets Clínica Veterinária Ltda. — Feito para portfólio pelo melhor desenvolvedor - Lucas Kikuthi.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 font-body text-xs opacity-50 text-center md:text-left">
              <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</a>
              <span className="text-xs opacity-50">Desenvolvido por Lucas Kikuthi</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
