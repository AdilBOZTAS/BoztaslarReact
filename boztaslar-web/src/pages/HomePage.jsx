import HomeHero from '../components/home/HomeHero';
import Stats from '../components/home/Stats';
import FeaturedProjects from '../components/home/FeaturedProjects';

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <Stats />
      <FeaturedProjects />
    </div>
  );
}