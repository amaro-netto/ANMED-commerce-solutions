
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/image/logowhite.png" 
              alt="ANMED Produtos Médicos" 
              className="h-12 filter brightness-0 invert"
            />
            <p className="text-gray-300">
              Especialistas em produtos médicos e de limpeza hospitalar. 
              Qualidade e segurança para seu ambiente de saúde.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-cyan-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-cyan-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-cyan-500 transition-colors">Início</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-cyan-500 transition-colors">Produtos</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-cyan-500 transition-colors">Categorias</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-cyan-500 transition-colors">Sobre Nós</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-cyan-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-300 hover:text-cyan-500 transition-colors">Entrega e Frete</a></li>
              <li><a href="/returns" className="text-gray-300 hover:text-cyan-500 transition-colors">Trocas e Devoluções</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-cyan-500 transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-cyan-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-cyan-500 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-500" />
                <span className="text-gray-300">(21) 97613-122</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-500" />
                <span className="text-gray-300">contato@anmed.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-500" />
                <span className="text-gray-300">Duque de Caxias, RJ - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ANMED Produtos Médicos | Desenvolvido por <a href="https://github.com/amaro-netto">Amaro Netto Todos os direitos reservados. </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
