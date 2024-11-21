import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Calendar, Ruler, ArrowRight } from 'lucide-react';

// Örnek projeler verisi
const projects = [
  {
    id: 1,
    title: 'Modern Life Residence',
    type: 'residential', // residential, commercial, industrial
    location: 'İstanbul, Başakşehir',
    year: '2023',
    area: '25,000 m²',
    image: '/images/projects/project1.jpg',
    description: 'Modern mimari ile tasarlanmış 250 dairelik lüks konut projesi',
    features: ['2+1', '3+1', '4+1']
  },
  {
    id: 2,
    title: 'Business Plaza',
    type: 'commercial',
    location: 'İstanbul, Maslak',
    year: '2022',
    area: '35,000 m²',
    image: '/images/projects/project2.jpg',
    description: 'A+ ofis projesi ve alışveriş merkezi kompleksi',
    features: ['Ofis', 'AVM', 'Restoranlar']
  },
  // ... diğer projeler
];

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/projeler/${project.id}`)}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image || '/images/placeholder.jpg'}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-6">
            <div className="flex items-center text-white/90 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {project.location}
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {project.year}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Ruler className="w-4 h-4 mr-1" />
              {project.area}
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-end">
          <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group">
            Detayları İncele
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const projectType = searchParams.get('type') || 'all';

  // URL'deki type parametresine göre projeleri filtrele
  const filteredProjects = projectType === 'all'
    ? projects
    : projects.filter(project => project.type === projectType);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {projectType === 'all' ? 'Tüm Projelerimiz' : 
             projectType === 'residential' ? 'Konut Projeleri' :
             projectType === 'commercial' ? 'Ticari Projeler' :
             'Endüstriyel Projeler'}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Modern mimari ve kaliteli işçilik ile hayata geçirdiğimiz seçkin projelerimiz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Bu kategoride henüz proje bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}