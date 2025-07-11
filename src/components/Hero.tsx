
import React from 'react';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Produtos Médicos de 
              <span className="text-cyan-500"> Alta Qualidade</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Especialistas em produtos de limpeza e higienização hospitalar. 
              Garantimos a segurança e eficácia que seu ambiente médico necessita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Ver Produtos
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-cyan-500 text-cyan-500 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="/image/imagen001.png" 
                alt="Produtos de limpeza hospitalar" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700">Certificação ANVISA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700">Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-cyan-500" />
                  <span className="text-gray-700">Qualidade Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
