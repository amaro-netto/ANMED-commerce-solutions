
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingManager from '@/components/PricingManager';
import { Settings, Package, DollarSign, BarChart3, Users, Image } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('pricing');

  const tabs = [
    { id: 'pricing', name: 'Preços', icon: DollarSign },
    { id: 'products', name: 'Produtos', icon: Package },
    { id: 'media', name: 'Mídia', icon: Image },
    { id: 'analytics', name: 'Relatórios', icon: BarChart3 },
    { id: 'settings', name: 'Configurações', icon: Settings }
  ];

  const MediaManager = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Image className="h-6 w-6 text-cyan-500" />
        Gerenciamento de Mídia
      </h2>
      
      <div className="space-y-6">
        {/* Logo Management */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Logo da Empresa</h3>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/0f4bfa84-3607-4685-abd1-294709e5d076.png" 
                alt="Logo atual" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors mb-2">
                Alterar Logo
              </button>
              <p className="text-sm text-gray-600">
                Formatos aceitos: PNG, JPG, SVG<br />
                Tamanho recomendado: 200x80px
              </p>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Imagens de Produtos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <Package className="h-8 w-8 text-gray-400" />
                </div>
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded text-sm hover:bg-gray-200 transition-colors">
                  Adicionar Imagem
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const Analytics = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <BarChart3 className="h-6 w-6 text-cyan-500" />
        Relatórios e Analytics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-cyan-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-cyan-600">1,234</div>
          <div className="text-sm text-gray-600">Vendas Totais</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">R$ 45,678</div>
          <div className="text-sm text-gray-600">Receita</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">567</div>
          <div className="text-sm text-gray-600">Clientes</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">89</div>
          <div className="text-sm text-gray-600">Produtos</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Produtos Mais Vendidos</h3>
          <div className="space-y-3">
            {['Álcool Gel 70%', 'Desinfetante Hospitalar', 'Máscara Cirúrgica'].map((product, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-gray-700">{product}</span>
                <span className="font-semibold text-cyan-500">{120 - i * 20} vendas</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Vendas por Categoria</h3>
          <div className="space-y-3">
            {['Álcool Gel', 'Desinfetantes', 'Proteção'].map((category, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-gray-700">{category}</span>
                <span className="font-semibold text-green-500">R$ {(5000 - i * 800).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Painel Administrativo</h1>
          <p className="text-gray-600">Gerencie preços, produtos e configurações da loja</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-cyan-500 text-cyan-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'pricing' && <PricingManager />}
          {activeTab === 'media' && <MediaManager />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'products' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerenciamento de Produtos</h2>
              <p className="text-gray-600">Funcionalidade em desenvolvimento...</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Configurações</h2>
              <p className="text-gray-600">Funcionalidade em desenvolvimento...</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
