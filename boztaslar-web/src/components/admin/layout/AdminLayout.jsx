import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Image as ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Bell,
  User
} from 'lucide-react';

// Ana menü öğeleri
const mainMenu = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard'
  },
  {
    name: 'Projeler',
    icon: Building2,
    path: '/admin/projects'
  },
  {
    name: 'Mesajlar',
    icon: MessageSquare,
    path: '/admin/messages',
    badge: '3' // Okunmamış mesaj sayısı
  },
  {
    name: 'Medya',
    icon: ImageIcon,
    path: '/admin/media'
  },
  {
    name: 'Ayarlar',
    icon: Settings,
    path: '/admin/settings'
  }
];

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Aktif menü öğesini kontrol et
  const isActiveMenu = (path) => {
    return location.pathname.startsWith(path);
  };

  // Çıkış fonksiyonu
  const handleLogout = () => {
    // Çıkış işlemleri burada yapılacak
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'
        } lg:translate-x-0 ${isSidebarOpen ? 'lg:w-64' : 'lg:w-20'}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/admin" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            {isSidebarOpen && (
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Admin
              </span>
            )}
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col h-full py-4">
          <ul className="space-y-1 px-3">
            {mainMenu.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors relative ${
                      isActiveMenu(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">{item.name}</span>
                        {item.badge && (
                          <span className="absolute right-2 bg-primary-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-auto mx-3 flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="ml-3">Çıkış Yap</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* Top Bar */}
        <header className="bg-white border-b h-16 fixed right-0 top-0 z-30 w-full">
          <div className="flex items-center justify-between h-full px-4">
            {/* Left */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-gray-600 lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="text-gray-500 hover:text-gray-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-primary-500 rounded-full" />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <span className="font-medium">Admin</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-16 min-h-screen">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}