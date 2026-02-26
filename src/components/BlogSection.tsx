import { useScrollReveal } from '@/hooks/useScrollReveal';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    img: blog1,
    tag: 'Saúde',
    title: '5 sinais de que seu cão precisa ir ao veterinário',
    excerpt: 'Aprenda a identificar os sinais mais comuns que indicam que algo não está bem com a saúde do seu pet.',
    date: '15 Fev 2026',
  },
  {
    img: blog2,
    tag: 'Prevenção',
    title: 'Calendário de vacinação: tudo o que você precisa saber',
    excerpt: 'Entenda a importância de manter a vacinação do seu pet em dia e quais vacinas são essenciais.',
    date: '10 Fev 2026',
  },
  {
    img: blog3,
    tag: 'Bem-estar',
    title: 'Banho e tosa: mais do que estética, é saúde',
    excerpt: 'Descubra como os cuidados com a higiene e pelagem impactam diretamente na saúde do seu animal.',
    date: '05 Fev 2026',
  },
];

const BlogSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="py-20 md:py-28 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Blog</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mt-2">
            Conteúdos para <span className="text-gradient-brand">tutores conscientes</span>
          </h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-3 gap-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-brand transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary font-body font-bold text-xs px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="font-body text-muted-foreground text-xs">{post.date}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center gap-2 font-body font-bold text-primary text-sm group-hover:gap-3 transition-all">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
