import { useState } from 'react';

// Ekip üyeleri verileri
const teamMembers = [
  {
    id: 1,
    name: 'Ahmet Boztaş',
    position: 'Yönetim Kurulu Başkanı',
    description: '30 yıllık sektör tecrübesi ile şirketimizi ileriye taşıyor.',
  },
  {
    id: 2,
    name: 'Mehmet Boztaş',
    position: 'Genel Müdür',
    description: 'İnşaat mühendisi olarak 20 yıllık deneyime sahip.',
  },
  {
    id: 3,
    name: 'Ayşe Yılmaz',
    position: 'Baş Mimar',
    description: 'Yenilikçi tasarım yaklaşımı ile projelere yön veriyor.',
  },
  {
    id: 4,
    name: 'Ali Kaya',
    position: 'Proje Müdürü',
    description: '15 yıllık proje yönetimi tecrübesi.',
  }
];

// Tarihçe verileri
const history = [
  {
    year: '1983',
    title: 'Kuruluş',
    description: 'Boztaşlar İnşaat, İstanbul\'da kuruldu.'
  },
  {
    year: '1990',
    title: 'İlk Büyük Proje',
    description: 'İlk toplu konut projemizi tamamladık.'
  },
  {
    year: '2000',
    title: 'Genişleme',
    description: 'Ticari projeler ile faaliyet alanımızı genişlettik.'
  },
  {
    year: '2010',
    title: 'Teknoloji Yatırımı',
    description: 'Modern inşaat teknolojilerine yatırım yaptık.'
  },
  {
    year: '2020',
    title: 'Sürdürülebilirlik',
    description: 'Yeşil bina sertifikalı projelere başladık.'
  }
];

// Hakkımızda bölümü içerikleri
const aboutSections = [
  {
    id: 'about',
    title: 'Hakkımızda',
    content: `Boztaşlar İnşaat, 40 yıllık tecrübesiyle Türkiye'nin önde gelen inşaat şirketlerinden biridir. Modern mimari anlayışı, kaliteli malzeme kullanımı ve güvenilir iş yaklaşımı ile sektörde öncü konumdayız. Müşteri memnuniyeti ve kalite odaklı çalışma prensibiyle, her projemizde en iyiyi sunmaya devam ediyoruz.`
  },
  {
    id: 'mission',
    title: 'Misyonumuz',
    content: 'İnsanların hayallerindeki yaşam alanlarını en kaliteli şekilde inşa etmek, çevreye duyarlı ve sürdürülebilir projeler geliştirmek.'
  },
  {
    id: 'vision',
    title: 'Vizyonumuz',
    content: 'Türkiyenin ve bölgenin en güvenilir ve yenilikçi inşaat şirketi olmak, sektörde standartları belirleyen firma konumuna ulaşmak.'
  }
];

export default function AboutPage() {
  const [selectedTab, setSelectedTab] = useState('company');

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kurumsal
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            40 yıllık tecrübemiz ve güvenilir iş anlayışımızla geleceği inşa ediyoruz
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutSections.map((section) => (
            <div 
              key={section.id}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* History Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tarihçemiz
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
            
            {/* Timeline events */}
            <div className="space-y-12">
              {history.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white" />
                  <div className="flex-1 p-4">
                    <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      <div className="text-primary-600 font-bold mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Yönetim Ekibimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                  {/* Placeholder for team member photo */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
              <div className="text-gray-600">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">250+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Çalışan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1.5M</div>
              <div className="text-gray-600">m² İnşaat Alanı</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}