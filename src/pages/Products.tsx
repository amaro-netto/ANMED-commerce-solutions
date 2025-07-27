
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Filter, Grid, List } from 'lucide-react';

const allProducts = [
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
  },
  {
    id: 7,
    name: 'Luvas Cirúrgicas - 100un',
    price: 38.50,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Proteção',
    inStock: true,
    rating: 4.5
  },
  {
    id: 8,
    name: 'Sabonete Antisséptico - 250ml',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1584634428108-a5c78d015c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Higiene',
    inStock: false,
    rating: 4.7
  }
];

const categories = ['Todos', 'Álcool Gel', 'Desinfetantes', 'Proteção', 'Instrumentos', 'Emergência', 'Higiene'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = allProducts.filter(product =>
    selectedCategory === 'Todos' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produtos</h1>
          <p className="text-gray-600">Encontre os melhores produtos médicos e de limpeza hospitalar</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Nome A-Z</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliado</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
