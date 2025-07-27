
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success('Produto adicionado ao carrinho!');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Fora de Estoque</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-sm text-cyan-500 font-medium mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
