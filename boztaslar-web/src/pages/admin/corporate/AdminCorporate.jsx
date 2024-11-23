// src/pages/admin/corporate/AdminCorporate.jsx

import { useState } from 'react';
import { Save, Plus, X, FileText, Edit2, Trash2 } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Örnek kurumsal sayfa verileri
const initialPages = [
  {
    id: 1,
    title: 'Hakkımızda',
    slug: 'hakkimizda',
    content: 'Şirketimiz 1983 yılında kurulmuş...',
    isActive: true,
    order: 1
  },
  {
    id: 2,
    title: 'Misyon & Vizyon',
    slug: 'misyon-vizyon',
    content: 'Misyonumuz, müşterilerimize...',
    isActive: true,
    order: 2
  },
  {
    id: 3,
    title: 'Kalite Politikamız',
    slug: 'kalite-politikamiz',
    content: 'Kalite politikamızın temelinde...',
    isActive: true,
    order: 3
  }
];

// Quill editör ayarları
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

export default function AdminCorporate() {
  const [pages, setPages] = useState(initialPages);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    isActive: true,
    order: 0
  });

  // Sayfa düzenleme
  const handleEdit = (page) => {
    setFormData(page);
    setIsEditing(true);
    setSelectedPage(page);
  };

  // Yeni sayfa
  const handleNew = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      isActive: true,
      order: pages.length + 1
    });
    setIsEditing(true);
    setSelectedPage(null);
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API çağrısı yapılacak
      console.log('Form Data:', formData);
      
      // Başarılı
      setIsEditing(false);
      setSelectedPage(null);
      // Listeyi güncelle
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Slug oluştur
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kurumsal Sayfalar</h1>
            <p className="mt-1 text-sm text-gray-500">
              Kurumsal sayfaları yönetin
            </p>
          </div>
          <button
            onClick={handleNew}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni Sayfa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sayfa Listesi */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Tüm Sayfalar
              </h2>
            </div>
            <ul className="divide-y">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    selectedPage?.id === page.id ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {page.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          /{page.slug}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(page)}
                        className="p-1 text-gray-400 hover:text-primary-500"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {/* Silme işlemi */}}
                        className="p-1 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isEditing ? (
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sayfa Başlığı
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => {
                          const title = e.target.value;
                          setFormData(prev => ({
                            ...prev,
                            title,
                            slug: generateSlug(title)
                          }));
                        }}
                        className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        URL
                      </label>
                      <div className="mt-1 flex rounded-lg shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                          /kurumsal/
                        </span>
                        <input
                          type="text"
                          value={formData.slug}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            slug: e.target.value
                          }))}
                          className="flex-1 block w-full rounded-none rounded-r-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        İçerik
                      </label>
                      <div className="mt-1">
                        <ReactQuill
                          value={formData.content}
                          onChange={(content) => setFormData(prev => ({
                            ...prev,
                            content
                          }))}
                          modules={modules}
                          className="h-64"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="isActive"
                          checked={formData.isActive}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            isActive: e.target.checked
                          }))}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                          Aktif
                        </label>
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 mr-2">
                          Sıra:
                        </label>
                        <input
                          type="number"
                          value={formData.order}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            order: parseInt(e.target.value)
                          }))}
                          className="w-20 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditing(false);
                          setSelectedPage(null);
                        }}
                        className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        İptal
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white 
                          ${isSubmitting
                            ? 'bg-primary-400 cursor-not-allowed'
                            : 'bg-primary-600 hover:bg-primary-700'
                          }`}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <FileText className="w-12 h-12 mb-4" />
                  <p>Düzenlemek için bir sayfa seçin veya yeni sayfa ekleyin</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}