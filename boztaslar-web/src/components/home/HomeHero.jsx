import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero/slide1.jpg',
    subtitle: 'İnşaat ve Mimari',
    title: ['Modern', 'Yaşam Alanları', 'İnşa Ediyoruz'],
    description: '40 yıllık tecrübemizle hayallerinizi gerçeğe dönüştürüyoruz.',
  },
  {
    id: 2,
    image: '/images/hero/slide2.jpg',
    subtitle: 'Yüksek Kalite',
    title: ['Geleceğin', 'Yaşam', 'Standartları'],
    description: 'En son teknoloji ve yenilikçi tasarımlarla projeler üretiyoruz.',
  }
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-dark overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50">
            <img
              src={slide.image}
              alt={slide.title.join(' ')}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-20">
          {/* Subtitle */}
          <div className="overflow-hidden mb-4">
            <div className={`transform transition-transform duration-700 ${
              currentSlide === 0 ? 'translate-y-0' : 'translate-y-full'
            }`}>
              <span className="inline-block text-primary-500 font-medium tracking-wider">
                {slides[currentSlide].subtitle}
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-2 mb-8">
            {slides[currentSlide].title.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <div className={`transform transition-transform duration-700 delay-${i}00`}>
                  <h1 className="text-5xl md:text-7xl font-heading font-bold text-white">
                    {line}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="overflow-hidden mb-12 max-w-xl">
            <div className={`transform transition-all duration-700 delay-300`}>
              <p className="text-gray-300 text-lg">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/projeler"
              className="group inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors"
            >
              Projelerimiz
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-full transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Tanıtım Filmimiz
            </button>
          </div>

          {/* Slide Navigation */}
          <div className="absolute bottom-8 left-4 sm:left-8 flex items-center space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary-500 w-24' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}