import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoadingScreen from '../LoadingScreen';

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sayfa ilk yüklendiğinde loading ekranını göster
    setIsLoading(true);

    // Tüm içerik yüklendiğinde
    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 saniye sonra loading ekranını kaldır
    };

    // Eğer window.onload tetiklenmezse
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // En fazla 3 saniye göster

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <LoadingScreen />}
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}