import { useEffect, useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
      />

      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto">
            Cuidado, carinho e tecnologia para quem faz parte da sua família.
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-medium">
            A Barley Pets oferece atendimento veterinário completo com equipamentos de última geração,
            profissionais dedicados e o amor que seu pet merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-heading font-bold text-lg hover:scale-105 transition-transform shadow-brand"
            >
              <Calendar className="w-5 h-5" />
              Agendar Consulta
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;