import { useState } from 'react';

// Referans kategorileri
const categories = [
  { id: 'all', name: 'Tüm Projeler' },
  { id: 'residential', name: 'Konut Projeleri' },
  { id: 'commercial', name: 'Ticari Projeler' },
  { id: 'industrial', name: 'Endüstriyel Projeler' }
];

// Örnek veriler
const references = [
  {
    id: 1,
    title: 'Park Vista Residence',
    category: 'residential',
    location: 'İstanbul, Başakşehir',
    area: '25,000 m²',
    year: '2023',
    description: '120 dairelik lüks konut projesi',
    features: ['2+1', '3+1', '4+1', 'Sosyal Tesisler', 'Kapalı Otopark']
  },
  {
    id: 2,
    title: 'Golden Business Center',
    category: 'commercial',
    location: 'İstanbul, Maslak',
    area: '35,000 m²',
    year: '2022',
    description: 'A+ ofis projesi',
    features: ['Ofis Katları', 'Toplantı Salonları', 'Restoranlar', 'Otopark']
  },
  {
    id: 3,
    title: 'Blue Garden Residence',
    category: 'residential',
    location: 'İstanbul, Beylikdüzü',
    area: '30,000 m²',
    year: '2023',
    description: '180 dairelik karma proje',
    features: ['1+1', '2+1', '3+1', 'Yüzme Havuzu', 'Spor Salonu']
  },
  {
    id: 4,
    title: 'Tech Industry Complex',
    category: 'industrial',
    location: 'İstanbul, Tuzla',
    area: '50,000 m²',
    year: '2022',
    description: 'Teknoloji üretim tesisi',
    features: ['Üretim Alanı', 'Depo', 'Ofisler', 'AR-GE Merkezi']
  }
];

export default function ReferencesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReferences = activeCategory === 'all'
    ? references
    : references.filter(ref => ref.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Referans Projelerimiz
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            40 yıllık tecrübemizle hayata geçirdiğimiz seçkin projelerimiz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReferences.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/90">{project.location}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-primary-600 font-medium">{project.year}</p>
                    <p className="text-sm text-gray-600">{project.area}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                    {project.category === 'residential' ? 'Konut' 
                      : project.category === 'commercial' ? 'Ticari' 
                      : 'Endüstriyel'}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Özellikler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredReferences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Bu kategoride henüz referans bulunmamaktadır.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sizin Projeniz İçin Hazırız
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-flex px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}