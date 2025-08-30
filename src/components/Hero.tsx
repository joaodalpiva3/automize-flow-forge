import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automatize o{" "}
            <span className="text-gradient">futuro</span>{" "}
            da sua empresa
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme seus processos com agentes de IA personalizados, automações inteligentes e 
            soluções tecnológicas que aceleram resultados e reduzem custos operacionais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="hero-button group">
              Fale com a gente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="hero-button-outline group">
              <Play className="mr-2 h-5 w-5" />
              Ver demonstração
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">500+</div>
            <div className="text-muted-foreground">Processos automatizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">95%</div>
            <div className="text-muted-foreground">Redução de tempo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">24/7</div>
            <div className="text-muted-foreground">Operação contínua</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;