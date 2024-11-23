// src/pages/admin/settings/AdminSettings.jsx

import { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Globe, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Save
} from 'lucide-react';

export default function AdminSettings() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('site'); // site, social, contact

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API çağrısı yapılacak
      console.log('Ayarlar kaydedildi');
      // Başarılı mesajı göster
    } catch (error) {
      console.error('Hata:', error);
      // Hata mesajı göster
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    {
      id: 'site',
      name: 'Site Ayarları',
      icon: Globe
    },
    {
      id: 'social',
      name: 'Sosyal Medya',
      icon: Facebook
    },
    {
      id: 'contact',
      name: 'İletişim Bilgileri',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
          <p className="mt-1 text-sm text-gray-500">
            Site ayarlarını ve bilgilerini yönetin
          </p>
        </div>

        {/* Tab Menü */}
        <div className="mb-8">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 flex items-center space-x-2 rounded-lg transition-colors
                    ${activeTab === tab.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Site Ayarları */}
          {activeTab === 'site' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 space-y-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Site Ayarları
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Başlığı
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Açıklaması
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Anahtar Kelimeleri
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      placeholder="kelime1, kelime2, kelime3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Site Logo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="mt-1 block w-full text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Favicon
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="mt-1 block w-full text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sosyal Medya */}
          {activeTab === 'social' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 space-y-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Sosyal Medya Hesapları
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <input
                      type="url"
                      placeholder="Facebook URL"
                      className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <input
                      type="url"
                      placeholder="Instagram URL"
                      className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <input
                      type="url"
                      placeholder="Twitter URL"
                      className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    <input
                      type="url"
                      placeholder="LinkedIn URL"
                      className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* İletişim Bilgileri */}
          {activeTab === 'contact' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 space-y-6">
                <h2 className="text-xl font-medium text-gray-900">
                  İletişim Bilgileri
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      E-posta Adresi
                    </label>
                    <div className="mt-1 flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telefon
                    </label>
                    <div className="mt-1 flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Adres
                    </label>
                    <div className="mt-1 flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <textarea
                        rows={3}
                        className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Harita Koordinatları
                    </label>
                    <input
                      type="text"
                      placeholder="Enlem, Boylam"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Çalışma Saatleri
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Pazartesi - Cumartesi 09:00 - 18:00"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Kaydet Butonu */}
          <div className="flex justify-end">
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
  );
}