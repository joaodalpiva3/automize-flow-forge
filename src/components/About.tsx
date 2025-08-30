import { Target, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-gradient">Automize</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformação digital, com foco em automação de processos 
            e inteligência artificial. Nossa missão é simplificar operações complexas e 
            acelerar resultados para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar o acesso às tecnologias de automação e IA, 
              tornando-as acessíveis e eficazes para empresas de todos os portes.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em soluções de automação inteligente, 
              impulsionando a inovação e eficiência nos negócios.
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excelência técnica, transparência, inovação contínua e 
              compromisso com o sucesso dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;