import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Yaşam Vadisi Projesi',
    location: 'Başakşehir',
    image: '/images/projects/project1.jpg',
    description: 'Modern mimarisi ve sosyal olanaklarıyla öne çıkan yaşam projesi'
  },
  {
    id: 2,
    title: 'Marina Rezidans',
    location: 'Beylikdüzü',
    image: '/images/projects/project2.jpg',
    description: 'Deniz manzaralı, lüks yaşam alanları'
  },
  {
    id: 3,
    title: 'Park Avenue',
    location: 'Esenyurt',
    image: '/images/projects/project3.jpg',
    description: 'Yeşil alanları ve modern tasarımıyla dikkat çeken proje'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Öne Çıkan Projelerimiz
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            En son tamamlanan ve devam eden prestijli projelerimiz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Link
                  to={`/projeler/${project.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Detayları İncele
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}