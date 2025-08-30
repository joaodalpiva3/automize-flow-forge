import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto para <span className="text-white/90">transformar</span> seu negócio?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Agende uma consulta gratuita e descubra como a automação pode revolucionar seus processos e acelerar seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar uma reunião
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-lg font-semibold mb-2">Resposta Rápida</div>
              <div className="text-white/80">Retornamos em até 2 horas</div>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-2">Consultoria Gratuita</div>
              <div className="text-white/80">Primeira análise sem custo</div>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-2">Implementação Rápida</div>
              <div className="text-white/80">Primeiros resultados em 30 dias</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;