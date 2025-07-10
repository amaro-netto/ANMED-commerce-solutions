
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Álcool Gel 70% - 500ml',
    price: 15.90,
    originalPrice: 19.90,
    image: 'https://images.unsplash.com/photo-1584634428108-a5c78d015c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Álcool Gel',
    inStock: true,
    rating: 4.8,
    discount: 20
  },
  {
    id: 2,
    name: 'Desinfetante Hospitalar - 1L',
    price: 32.50,
    originalPrice: 38.90,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Desinfetantes',
    inStock: true,
    rating: 4.9,
    discount: 16
  },
  {
    id: 3,
    name: 'Máscara Cirúrgica - 50un',
    price: 45.00,
    originalPrice: 55.00,
    image: 'https://images.unsplash.com/photo-1584634428123-a5c78d015c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Proteção',
    inStock: true,
    rating: 4.7,
    discount: 18
  },
  {
    id: 4,
    name: 'Termômetro Digital',
    price: 89.90,
    originalPrice: 109.90,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Instrumentos',
    inStock: true,
    rating: 4.6,
    discount: 18
  },
  {
    id: 5,
    name: 'Kit Primeiros Socorros',
    price: 125.00,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Emergência',
    inStock: true,
    rating: 4.8,
    discount: 17
  },
  {
    id: 6,
    name: 'Estetoscópio Profissional',
    price: 299.90,
    originalPrice: 349.90,
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Instrumentos',
    inStock: true,
    rating: 4.9,
    discount: 14
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-600">
            Os mais vendidos da nossa loja
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
