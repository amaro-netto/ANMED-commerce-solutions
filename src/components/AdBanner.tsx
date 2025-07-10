
import React from 'react';
import { ExternalLink } from 'lucide-react';

const AdBanner = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Espaço Publicitário Disponível
              </h3>
              <p className="text-gray-600 mb-6">
                Este é um espaço dedicado para anúncios de parceiros e produtos relacionados. 
                Ideal para promover equipamentos médicos, cursos de capacitação ou serviços complementares.
              </p>
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2">
                Anuncie Aqui
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="text-gray-400 text-6xl mb-4">📢</div>
              <p className="text-gray-500">Seu anúncio pode estar aqui</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
