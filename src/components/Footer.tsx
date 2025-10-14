import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg gradient-solar">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                SimuladorSolar
              </span>
            </div>
            <p className="text-accent-foreground/80 text-sm">
              Economize com energia solar e ajude o planeta. Simule agora e descubra seu potencial de economia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-foreground/80 hover:text-white transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/simulador" className="text-accent-foreground/80 hover:text-white transition-colors text-sm">
                  Simulador
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-accent-foreground/80 hover:text-white transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-accent-foreground/80 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-accent-foreground/80 text-sm">
                <Mail className="h-4 w-4" />
                <span>contato@simuladorsolar.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-accent-foreground/80 text-sm">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-accent-foreground/80 text-sm">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Simulador Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
