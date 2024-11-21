import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import ServicesPage from './pages/ServicesPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kurumsal" element={<AboutPage />} />
          <Route path="/projeler" element={<ProjectsPage />} />
          <Route path="/projeler/:projectId" element={<ProjectDetail />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/referanslar" element={<ReferencesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;