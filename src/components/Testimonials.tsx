import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechCorp",
      company: "Empresa de Tecnologia",
      rating: 5,
      content: "A Automize transformou completamente nossos processos. O chatbot IA implementado reduziu nosso tempo de atendimento em 80% e nossa equipe agora pode focar em atividades estratégicas.",
      avatar: "CS"
    },
    {
      name: "Ana Rodrigues",
      role: "Diretora de Operações",
      company: "LogiFlow Solutions",
      rating: 5,
      content: "As automações criadas pela Automize nos permitiram escalar nosso negócio sem aumentar proporcionalmente nossa equipe. ROI incrível!",
      avatar: "AR"
    },
    {
      name: "Roberto Costa",
      role: "CTO",
      company: "FinanceMax",
      rating: 5,
      content: "Profissionais extremamente qualificados. A implementação foi perfeita e o suporte contínuo é excepcional. Recomendo fortemente!",
      avatar: "RC"
    }
  ];

  return (
    <section className="section-padding" id="depoimentos">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que dizem nossos <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que confiam na Automize para transformar seus processos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card group">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-center italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="text-sm text-muted-foreground mb-8">Confiam na Automize</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center h-16 bg-card rounded-lg border">
              <span className="font-semibold text-lg">TechCorp</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-card rounded-lg border">
              <span className="font-semibold text-lg">LogiFlow</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-card rounded-lg border">
              <span className="font-semibold text-lg">FinanceMax</span>
            </div>
            <div className="flex items-center justify-center h-16 bg-card rounded-lg border">
              <span className="font-semibold text-lg">InnovateLab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;