// src/pages/admin/projects/AdminProjects.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Eye,
  Filter,
  MoreVertical 
} from 'lucide-react';

// Örnek proje verileri
const projects = [
  {
    id: 1,
    title: 'Modern Life Residence',
    type: 'residential',
    location: 'İstanbul, Başakşehir',
    status: 'ongoing',
    image: '/images/projects/project1.jpg',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Business Plaza',
    type: 'commercial',
    location: 'İstanbul, Maslak',
    status: 'completed',
    image: '/images/projects/project2.jpg',
    createdAt: '2023-12-20'
  },
  // Daha fazla proje eklenebilir...
];

export default function AdminProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Projeleri filtrele
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || project.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Proje silme fonksiyonu
  const handleDelete = (projectId) => {
    if (window.confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      // API çağrısı yapılacak
      console.log('Proje silindi:', projectId);
    }
  };

  return (
    <div className="space-y-6">
      {/* Başlık ve Yeni Proje Butonu */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projeler</h1>
          <p className="mt-1 text-sm text-gray-500">
            Tüm projeleri yönetin
          </p>
        </div>
        <Link
          to="/admin/projects/add"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Yeni Proje
        </Link>
      </div>

      {/* Filtreler ve Arama */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
  type="text"
  placeholder="Proje ara..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full pl-10 pr-4 py-2 border rounded-lg 
    text-gray-900 
    placeholder-gray-500
    border-gray-300
    focus:ring-2 
    focus:ring-primary-500 
    focus:border-primary-500
    bg-white
    transition-colors"
/>
          </div>
        </div>
        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            text-gray-900 
    placeholder-gray-500
    border-gray-300
    focus:ring-2 
    focus:ring-primary-500 
    focus:border-primary-500
    bg-white
    transition-colors"
          >
            <option value="all">Tüm Tipler</option>
            <option value="residential">Konut</option>
            <option value="commercial">Ticari</option>
            <option value="industrial">Endüstriyel</option>
          </select>
        </div>
        <div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            text-gray-900 
    placeholder-gray-500
    border-gray-300
    focus:ring-2 
    focus:ring-primary-500 
    focus:border-primary-500
    bg-white
    transition-colors"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="ongoing">Devam Eden</option>
            <option value="completed">Tamamlanan</option>
          </select>
        </div>
      </div>

      {/* Projeler Tablosu */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Proje
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tip
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Konum
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img 
                          className="h-10 w-10 rounded-lg object-cover" 
                          src={project.image} 
                          alt={project.title} 
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {project.type === 'residential' ? 'Konut' : 
                       project.type === 'commercial' ? 'Ticari' : 'Endüstriyel'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{project.location}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${project.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(project.createdAt).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <Link
                        to={`/admin/projects/edit/${project.id}`}
                        className="text-primary-600 hover:text-primary-900 p-1"
                      >
                        <Edit2 className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <Link
                        to={`/projeler/${project.id}`}
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 p-1"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}