
import React, { useState } from 'react';
import { Calculator, Percent, DollarSign, Save } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  costPrice: number;
  sellingPrice: number;
  profitMargin: number;
}

const PricingManager = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Álcool Gel 70% - 500ml', costPrice: 12.50, sellingPrice: 15.90, profitMargin: 27.2 },
    { id: 2, name: 'Desinfetante Hospitalar - 1L', costPrice: 25.00, sellingPrice: 32.50, profitMargin: 30.0 },
    { id: 3, name: 'Máscara Cirúrgica - 50un', costPrice: 35.00, sellingPrice: 45.00, profitMargin: 28.6 }
  ]);
  
  const [globalMargin, setGlobalMargin] = useState(30);

  const calculatePrice = (costPrice: number, margin: number) => {
    return costPrice * (1 + margin / 100);
  };

  const updateProductPrice = (id: number, field: 'costPrice' | 'profitMargin', value: number) => {
    setProducts(prev => prev.map(product => {
      if (product.id === id) {
        if (field === 'costPrice') {
          const newSellingPrice = calculatePrice(value, product.profitMargin);
          return { ...product, costPrice: value, sellingPrice: newSellingPrice };
        } else {
          const newSellingPrice = calculatePrice(product.costPrice, value);
          return { ...product, profitMargin: value, sellingPrice: newSellingPrice };
        }
      }
      return product;
    }));
  };

  const applyGlobalMargin = () => {
    setProducts(prev => prev.map(product => ({
      ...product,
      profitMargin: globalMargin,
      sellingPrice: calculatePrice(product.costPrice, globalMargin)
    })));
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Calculator className="h-6 w-6 text-cyan-500" />
          Gerenciamento de Preços
        </h2>
        <p className="text-gray-600 mt-2">Configure margens de lucro e atualize preços automaticamente</p>
      </div>

      <div className="p-6">
        {/* Global Margin Control */}
        <div className="bg-cyan-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Percent className="h-5 w-5 text-cyan-500" />
            Margem Global
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Margem de Lucro (%)
              </label>
              <input
                type="number"
                value={globalMargin}
                onChange={(e) => setGlobalMargin(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
            <button
              onClick={applyGlobalMargin}
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Aplicar a Todos
            </button>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Produto</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Preço de Custo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Margem (%)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Preço de Venda</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Lucro</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={product.costPrice.toFixed(2)}
                        onChange={(e) => updateProductPrice(product.id, 'costPrice', Number(e.target.value))}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        step="0.01"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={product.profitMargin.toFixed(1)}
                        onChange={(e) => updateProductPrice(product.id, 'profitMargin', Number(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        step="0.1"
                        min="0"
                        max="100"
                      />
                      <Percent className="h-4 w-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-cyan-500">
                      R$ {product.sellingPrice.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-green-600">
                      R$ {(product.sellingPrice - product.costPrice).toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 bg-gray-50 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Resumo</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {products.length}
              </div>
              <div className="text-sm text-gray-600">Produtos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-500">
                {(products.reduce((sum, p) => sum + p.profitMargin, 0) / products.length).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Margem Média</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                R$ {products.reduce((sum, p) => sum + (p.sellingPrice - p.costPrice), 0).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Lucro Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingManager;
