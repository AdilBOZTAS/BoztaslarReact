import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Ruler,
  Home,
  Users,
  Car,
  Trophy,
  Check
} from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ShareButtons from '../components/share/ShareButtons';
import LocationMap from '../components/map/LocationMap';

// Örnek proje verisi
const projectData = {
  id: 1,
  title: "Modern Life Residence",
  status: "completed", // completed, ongoing
  location: "İstanbul, Başakşehir",
  address: "Başak Mahallesi, İnşaat Caddesi No:123",
  completionDate: "2023",
  area: "25,000 m²",
  description: `Modern Life Residence, şehrin merkezinde lüks ve konforu bir araya getiren prestijli bir konut projesidir. 
  Sürdürülebilir yapı teknolojileri ve çevre dostu malzemeler kullanılarak inşa edilen proje, modern yaşamın tüm gereksinimlerini karşılamaktadır.`,
  features: [
    "7/24 Güvenlik",
    "Kapalı Otopark",
    "Spor Salonu",
    "Yüzme Havuzu",
    "Çocuk Oyun Alanı",
    "Yeşil Alan",
    "Sosyal Tesisler",
    "Market"
  ],
  specifications: {
    "Daire Tipleri": "1+1, 2+1, 3+1, 4+1",
    "Toplam Daire": "120 Ünite",
    "Blok Sayısı": "3 Blok",
    "Kat Sayısı": "15 Kat",
    "Isıtma": "Merkezi Sistem",
    "Teslim Tarihi": "2023 Q4"
  },
  images: [
    "/images/projects/project1-main.jpg",
    "/images/projects/project1-2.jpg",
    "/images/projects/project1-3.jpg",
    "/images/projects/project1-4.jpg"
  ],
  highlights: [
    {
      icon: Users,
      title: "120",
      description: "Daire"
    },
    {
      icon: MapPin,
      title: "Merkezi",
      description: "Konum"
    },
    {
      icon: Car,
      title: "150",
      description: "Araçlık Otopark"
    },
    {
      icon: Trophy,
      title: "A+",
      description: "Enerji Sınıfı"
    }
  ]
};

// ImageGallery bileşenini ProjectDetail.jsx içinde güncelleyin
function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
  
    // Lightbox için görselleri hazırla
    const slides = images.map(src => ({ src }));
  
    // Ana görsele tıklandığında
    const handleMainImageClick = () => {
      const currentIndex = images.findIndex(img => img === selectedImage);
      setLightboxIndex(currentIndex);
      setIsLightboxOpen(true);
    };
  
    // Thumbnail'e tıklandığında
    const handleThumbnailClick = (image, index) => {
      setSelectedImage(image);
      setLightboxIndex(index);
    };
  
    return (
      <div>
        {/* Ana Görsel */}
        <div 
          className="aspect-video rounded-xl overflow-hidden mb-4 cursor-pointer"
          onClick={handleMainImageClick}
        >
          <img
            src={selectedImage}
            alt="Proje Görseli"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Thumbnail'ler */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(image, index)}
              className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === image
                  ? 'border-primary-500 shadow-lg'
                  : 'border-transparent hover:border-primary-300'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
  
        {/* Lightbox */}
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
          }}
        />
      </div>
    );
  }

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData; // Gerçek uygulamada ID'ye göre veri çekilecek

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className={`px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              project.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Öne Çıkan Özellikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {project.highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {highlight.title}
                </div>
                <div className="text-gray-600">
                  {highlight.description}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sol Kolon - Görsel Galeri */}
          <div className="lg:col-span-2">
            <ImageGallery images={project.images} />
            
            {/* Açıklama */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Proje Hakkında
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Özellikler Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kolon - Teknik Detaylar */}
          <div className="lg:col-span-1 space-y-6">
            

            {/* Teknik Detaylar */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Proje Detayları
              </h3>
              <div className="space-y-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Konum ve Harita */}
            <LocationMap address={`${project.title}, ${project.address}, ${project.location}`} />
            {/* CTA */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Daha Fazla Bilgi İçin
              </h3>
              <p className="text-gray-600 mb-4">
                Bu proje hakkında detaylı bilgi almak için bizimle iletişime geçin.
              </p>
              <a
                href="/iletisim"
                className="block w-full text-center bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                İletişime Geç
              </a>
            </div>
            {/* Paylaşım Butonları */}
<ShareButtons project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}