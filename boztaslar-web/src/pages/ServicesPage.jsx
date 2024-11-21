import { Building2, Ruler, HardHat, Wrench, Truck, PaintBucket, Compass, HomeIcon } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Building2,
    title: 'Konut Projeleri',
    description: 'Modern ve konforlu yaşam alanları inşa ediyoruz. Projelerimizde kalite ve estetik ön planda.',
    features: [
      'Modern mimari tasarım',
      'Depreme dayanıklı yapılar',
      'Akıllı ev sistemleri',
      'Sosyal alanlar'
    ]
  },
  {
    id: 2,
    icon: HomeIcon,
    title: 'Ticari Projeler',
    description: 'İş merkezleri, ofisler ve ticari yapılar için profesyonel çözümler sunuyoruz.',
    features: [
      'Ofis ve plaza projeleri',
      'AVM ve iş merkezi inşaatı',
      'Modern iş alanları',
      'Otopark çözümleri'
    ]
  },
  {
    id: 3,
    icon: Ruler,
    title: 'Restorasyon',
    description: 'Tarihi yapıların restorasyonunda uzman ekibimizle hizmet veriyoruz.',
    features: [
      'Tarihi doku koruma',
      'Modern teknikler',
      'Uzman ekip',
      'Detaylı analiz'
    ]
  },
  {
    id: 4,
    icon: HardHat,
    title: 'İnşaat Taahhüt',
    description: 'Anahtar teslim projeler ve profesyonel inşaat taahhüt hizmetleri.',
    features: [
      'Proje yönetimi',
      'Kalite kontrol',
      'Zamanında teslim',
      'Bütçe planlaması'
    ]
  },
  {
    id: 5,
    icon: Compass,
    title: 'Mimari Tasarım',
    description: 'Uzman mimarlarımızla modern ve fonksiyonel tasarımlar oluşturuyoruz.',
    features: [
      '3D modelleme',
      'İç mimari tasarım',
      'Peyzaj tasarımı',
      'Konsept projeler'
    ]
  },
  {
    id: 6,
    icon: PaintBucket,
    title: 'İç Dekorasyon',
    description: 'Yaşam alanlarınız için özel iç dekorasyon ve tasarım hizmetleri.',
    features: [
      'Özel tasarım mobilya',
      'Aydınlatma çözümleri',
      'Renk danışmanlığı',
      'Malzeme seçimi'
    ]
  }
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center 
          group-hover:bg-primary-500 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-center text-gray-700"
          >
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              Profesyonel İnşaat ve Mimari Hizmetleri
            </h1>
            <p className="text-primary-100 text-lg">
              40 yıllık tecrübemizle, modern yapı teknolojilerini kullanarak 
              hayalinizdeki projeleri hayata geçiriyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Projeniz için Teklif Alın
            </h2>
            <p className="text-gray-600">
              Uzman ekibimiz sizinle iletişime geçsin
            </p>
          </div>
          <a
            href="/iletisim"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </div>
  );
}