import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Kurumsal', href: '/kurumsal' },
  {
    name: 'Projeler',
    href: '/projeler',
    dropdown: [
      { name: 'Tüm Projeler', href: '/projeler' },
      { name: 'Konut Projeleri', href: '/projeler?type=residential' },
      { name: 'Ticari Projeler', href: '/projeler?type=commercial' },
      { name: 'Endüstriyel Projeler', href: '/projeler?type=industrial' }
    ]
  },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Referanslar', href: '/referanslar' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              src="/images/logo.png"
              alt="Boztaşlar İnşaat"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className="inline-flex items-center text-sm font-medium group transition-colors duration-300 text-gray-900 hover:text-primary-600"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-60 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="py-2 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-300
                              opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                              ${index === 0 ? 'rounded-t-lg' : ''} 
                              ${index === item.dropdown.length - 1 ? 'rounded-b-lg' : ''}
                            `}
                            style={{
                              transitionDelay: `${index * 100}ms`
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="relative text-sm font-medium transition-colors duration-300 text-gray-900 hover:text-primary-500 group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300 text-gray-900 hover:text-primary-500"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="transition-transform hover:scale-105"
            >
              <img
                src="/images/logo.png"
                alt="Boztaşlar İnşaat"
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4">
            {navigation.map((item, index) => (
              <div 
                key={item.name} 
                className={`mb-4 opacity-0 translate-y-4 ${
                  mobileMenuOpen ? 'animate-slideUp' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.dropdown ? (
                  <div className="space-y-2">
                    <Link
                      to={item.href}
                      className="block text-lg font-medium text-gray-900 hover:text-primary-500 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-gray-600 hover:text-primary-500 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{ animationDelay: `${(index * 100) + (subIndex * 50)}ms` }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-lg font-medium text-gray-900 hover:text-primary-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}