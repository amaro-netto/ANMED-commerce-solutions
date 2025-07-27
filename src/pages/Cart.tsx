
import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShippingCalculator from '@/components/ShippingCalculator';

const Cart = () => {
  const { items, updateQuantity, removeItem, total } = useCart();
  const [shippingCost, setShippingCost] = useState(0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-8">Adicione alguns produtos para continuar</p>
            <Link
              to="/products"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Continuar Comprando
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/products"
            className="text-cyan-500 hover:text-cyan-600 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Continuar Comprando
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Carrinho de Compras</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-cyan-500 font-bold text-xl">R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Shipping Calculator */}
            <ShippingCalculator onShippingCalculated={setShippingCost} />

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resumo do Pedido</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Frete
                  </span>
                  <span className="font-semibold">
                    {shippingCost > 0 ? `R$ ${shippingCost.toFixed(2)}` : 'Calcular'}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-cyan-500">R$ {(total + shippingCost).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-cyan-500 text-white py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors text-lg">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
