// src/pages/admin/projects/AdminProjectAdd.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Plus, ArrowLeft } from 'lucide-react';

export default function AdminProjectAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    type: 'residential',
    location: '',
    address: '',
    status: 'ongoing',
    area: '',
    description: '',
    features: [''],
    specifications: {
      'Daire Tipleri': '',
      'Toplam Daire': '',
      'Blok Sayısı': '',
      'Kat Sayısı': '',
      'Isıtma': '',
      'Teslim Tarihi': ''
    }
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form değişikliklerini yakala
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Özellik ekle/çıkar
  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  // Spesifikasyon değişikliklerini yakala
  const handleSpecificationChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [key]: value
      }
    }));
  };

  // Görsel yükleme
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then(imagePreviews => {
      setImages(prev => [...prev, ...imagePreviews]);
    });
  };

  // Görsel silme
  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API çağrısı yapılacak
      console.log('Form Data:', formData);
      console.log('Images:', images);
      
      // Başarılı olursa projeler sayfasına yönlendir
      navigate('/admin/projects');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Üst Başlık */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/projects')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Yeni Proje Ekle</h1>
            <p className="mt-1 text-sm text-gray-500">
              Yeni bir proje oluşturun
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Ana Bilgiler */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Proje Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Proje Adı
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Proje Tipi
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="residential">Konut</option>
                <option value="commercial">Ticari</option>
                <option value="industrial">Endüstriyel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Konum
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Durum
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="ongoing">Devam Ediyor</option>
                <option value="completed">Tamamlandı</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alan (m²)
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adres
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Açıklama
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Özellikler */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Özellikler</h2>
            <button
              type="button"
              onClick={addFeature}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-lg text-primary-600 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="w-4 h-4 mr-1" />
              Özellik Ekle
            </button>
          </div>
          <div className="space-y-3">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Özellik yazın..."
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Teknik Özellikler */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(formData.specifications).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700">
                  {key}
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleSpecificationChange(key, e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Görseller */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Proje Görselleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Görsel Yükleme Butonu */}
            <div className="relative aspect-video rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">Görsel Yükle</span>
              </div>
            </div>

            {/* Yüklenen Görseller */}
            {images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Form Butonları */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            İptal
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-lg text-white ${
              isSubmitting
                ? 'bg-primary-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
}