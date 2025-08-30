import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Automize</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especialistas em automação e inteligência artificial, transformando processos 
              empresariais com soluções inovadoras e personalizadas.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>contato@automize.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Agentes de IA</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Workflows n8n</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Automação de Processos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Consultoria Tecnológica</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Casos de sucesso</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Automize. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 glow-on-hover"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 glow-on-hover"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 glow-on-hover"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;