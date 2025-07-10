import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Sprout, ShieldCheck, Thermometer, Heart, Stethoscope } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Desinfetantes',
    icon: Droplets,
    count: 45,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Álcool Gel',
    icon: Sprout,
    count: 32,
    image: 'https://images.unsplash.com/photo-1584634428108-a5c78d015c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Equipamentos de Proteção',
    icon: ShieldCheck,
    count: 28,
    image: 'https://images.unsplash.com/photo-1584634428123-a5c78d015c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Termômetros',
    icon: Thermometer,
    count: 15,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Primeiros Socorros',
    icon: Heart,
    count: 38,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'Instrumentos Médicos',
    icon: Stethoscope,
    count: 22,
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Categorias de Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa ampla variedade de produtos médicos e de limpeza hospitalar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-500 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-gray-200">{category.count} produtos</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white text-cyan-500 px-3 py-1 rounded-full text-sm font-semibold">
                  Ver Todos
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
