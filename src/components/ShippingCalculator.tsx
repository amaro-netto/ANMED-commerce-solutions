
import React, { useState } from 'react';
import { Calculator, MapPin } from 'lucide-react';

interface ShippingCalculatorProps {
  onShippingCalculated: (cost: number) => void;
}

const ShippingCalculator: React.FC<ShippingCalculatorProps> = ({ onShippingCalculated }) => {
  const [cep, setCep] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [shippingOptions, setShippingOptions] = useState<any[]>([]);

  const calculateShipping = async () => {
    if (cep.length !== 8) return;
    
    setIsCalculating(true);
    
    // Simulated shipping calculation - replace with real API
    setTimeout(() => {
      const options = [
        {
          name: 'Sedex',
          price: 25.90,
          days: '1-2 dias úteis'
        },
        {
          name: 'PAC',
          price: 15.50,
          days: '5-7 dias úteis'
        },
        {
          name: 'Expressa',
          price: 35.00,
          days: 'Mesmo dia'
        }
      ];
      
      setShippingOptions(options);
      setIsCalculating(false);
    }, 1500);
  };

  const selectShipping = (option: any) => {
    onShippingCalculated(option.price);
  };

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Calculator className="h-5 w-5" />
        Calcular Frete
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CEP de destino
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder="00000-000"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                maxLength={8}
              />
            </div>
            <button
              onClick={calculateShipping}
              disabled={cep.length !== 8 || isCalculating}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isCalculating ? 'Calculando...' : 'Calcular'}
            </button>
          </div>
        </div>

        {shippingOptions.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Opções de entrega:</h4>
            {shippingOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => selectShipping(option)}
                className="p-3 border border-gray-200 rounded-lg hover:border-cyan-500 cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{option.name}</div>
                    <div className="text-sm text-gray-600">{option.days}</div>
                  </div>
                  <div className="font-bold text-cyan-500">
                    R$ {option.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingCalculator;
