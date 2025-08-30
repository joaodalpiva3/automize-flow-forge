import { Bot, Workflow, Cog, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Agentes de IA Personalizados",
      description: "Desenvolvemos agentes inteligentes sob medida para automatizar atendimento, análise de dados e tomada de decisões estratégicas.",
      features: ["Chatbots inteligentes", "Análise preditiva", "Processamento de linguagem natural", "Integração com APIs"]
    },
    {
      icon: Workflow,
      title: "Workflows Inteligentes com n8n",
      description: "Criamos fluxos de trabalho automatizados que conectam diferentes sistemas e otimizam processos complexos.",
      features: ["Automação visual", "Integrações múltiplas", "Triggers inteligentes", "Monitoramento em tempo real"]
    },
    {
      icon: Cog,
      title: "Automações de Processos",
      description: "Identificamos e automatizamos processos repetitivos, liberando sua equipe para tarefas estratégicas.",
      features: ["Mapeamento de processos", "RPA (Robotic Process Automation)", "Otimização de workflows", "Redução de erros"]
    },
    {
      icon: Users,
      title: "Consultoria em Tecnologia",
      description: "Oferecemos consultoria especializada para identificar oportunidades de automação e modernização tecnológica.",
      features: ["Auditoria tecnológica", "Estratégia de automação", "Implementação guiada", "Treinamento de equipes"]
    }
  ];

  return (
    <section className="section-padding" id="servicos">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para transformar seus processos e acelerar resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;