import { Clock, DollarSign, TrendingUp, Shield, Zap, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza até 95% do tempo gasto em tarefas repetitivas",
      metric: "95%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Diminua custos operacionais com automação inteligente",
      metric: "70%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Aumento da Produtividade",
      description: "Acelere processos e melhore a eficiência operacional",
      metric: "300%",
      color: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Redução de Erros",
      description: "Minimize erros humanos com processos automatizados",
      metric: "99%",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Disponibilidade 24/7",
      description: "Operação contínua sem interrupções ou pausas",
      metric: "24/7",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Satisfação da Equipe",
      description: "Libere talentos para atividades mais estratégicas",
      metric: "90%",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios que <span className="text-gradient">Transformam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossas soluções impactam positivamente o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="service-card text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-gradient mb-2">
                {benefit.metric}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Casos de Sucesso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="text-sm text-primary font-semibold mb-2">E-commerce</div>
              <h4 className="font-semibold mb-2">Automação de Atendimento</h4>
              <p className="text-sm text-muted-foreground">
                Implementação de chatbot IA que reduziu tempo de resposta em 90% e aumentou satisfação do cliente.
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="text-sm text-secondary font-semibold mb-2">Logística</div>
              <h4 className="font-semibold mb-2">Otimização de Rotas</h4>
              <p className="text-sm text-muted-foreground">
                Sistema inteligente que otimiza rotas de entrega, reduzindo custos logísticos em 40%.
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="text-sm text-primary font-semibold mb-2">Financeiro</div>
              <h4 className="font-semibold mb-2">Análise Preditiva</h4>
              <p className="text-sm text-muted-foreground">
                IA para análise de crédito que aumentou precisão em 85% e reduziu inadimplência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;