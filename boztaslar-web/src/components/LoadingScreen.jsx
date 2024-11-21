import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 saniye sonra loading ekranı kaybolacak

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Boztaşlar İnşaat"
            className="w-32 h-auto animate-pulse"
          />
          
          {/* Loading İndikatör */}
          <div className="mt-4 flex justify-center">
            <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary-500 animate-loading-bar rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}