import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin/layout/AdminLayout';

// Site Sayfaları
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';

// Admin Sayfaları
import AdminLogin from './pages/admin/auth/AdminLogin';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import AdminProjects from './pages/admin/projects/AdminProjects';
import AdminProjectAdd from './pages/admin/projects/AdminProjectAdd';
import AdminProjectEdit from './pages/admin/projects/AdminProjectEdit';
import AdminMessages from './pages/admin/messages/AdminMessages';
import AdminMessageDetail from './pages/admin/messages/AdminMessageDetail';
import AdminMedia from './pages/admin/media/AdminMedia';
import AdminSettings from './pages/admin/settings/AdminSettings';
import AdminProfile from './pages/admin/settings/AdminProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Site Rotaları */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/kurumsal" element={<AboutPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/projeler/:projectId" element={<ProjectDetail />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/referanslar" element={<ReferencesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Route>

        {/* Admin Rotaları */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          
          {/* Projeler Yönetimi */}
          <Route path="projects">
            <Route index element={<AdminProjects />} />
            <Route path="add" element={<AdminProjectAdd />} />
            <Route path="edit/:id" element={<AdminProjectEdit />} />
          </Route>
          
          {/* Mesajlar */}
          <Route path="messages">
            <Route index element={<AdminMessages />} />
            <Route path=":id" element={<AdminMessageDetail />} />
          </Route>
          
          {/* Medya */}
          <Route path="media" element={<AdminMedia />} />
          
          {/* Ayarlar */}
          <Route path="settings">
            <Route index element={<AdminSettings />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;