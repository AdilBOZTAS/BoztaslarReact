import { Building2, Users, Award, ThumbsUp, Briefcase, Home } from 'lucide-react';
import useCountUp from '../../hooks/useCountUp';

const stats = [
  {
    id: 1,
    number: 40,
    suffix: '+',
    label: 'Yıllık Tecrübe',
    icon: Building2,
  },
  {
    id: 2,
    number: 1500,
    suffix: '+',
    label: 'Mutlu Aile',
    icon: Users,
  },
  {
    id: 3,
    number: 50,
    suffix: '+',
    label: 'Tamamlanan Proje',
    icon: Briefcase,
  },
  {
    id: 4,
    number: 2000,
    suffix: '+',
    label: 'Teslim Edilen Konut',
    icon: Home,
  }
];

function StatItem({ number, suffix, label, icon: Icon }) {
  const count = useCountUp(number);

  return (
    <div className="p-6 text-center group hover:bg-gray-50 rounded-xl transition-colors duration-300">
      <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-bold mb-2 text-gray-900">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sayılarla Boztaşlar İnşaat
          </h2>
          <p className="text-lg text-gray-600">
            40 yıllık tecrübemizle, müşterilerimize en kaliteli hizmeti sunmaya devam ediyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}