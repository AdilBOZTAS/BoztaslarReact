// src/pages/admin/dashboard/AdminDashboard.jsx
import {
  Users,
  Building,
  MessageSquare,
  Eye,
  TrendingUp,
  Calendar,
  BarChart,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Örnek veriler
const stats = [
  {
    id: 1,
    name: 'Toplam Projeler',
    value: '45',
    icon: Building,
    change: '+12%',
    changeType: 'increase',
    changeText: 'geçen yıla göre',
  },
  {
    id: 2,
    name: 'Aktif Ziyaretçiler',
    value: '1,280',
    icon: Eye,
    change: '+18%',
    changeType: 'increase',
    changeText: 'geçen aya göre',
  },
  {
    id: 3,
    name: 'Yeni Mesajlar',
    value: '24',
    icon: MessageSquare,
    change: '-5%',
    changeType: 'decrease',
    changeText: 'geçen haftaya göre',
  },
  {
    id: 4,
    name: 'Toplam Müşteriler',
    value: '1,820',
    icon: Users,
    change: '+8%',
    changeType: 'increase',
    changeText: 'geçen aya göre',
  },
];

// Grafik verileri
const chartData = [
  { name: 'Oca', value: 12 },
  { name: 'Şub', value: 15 },
  { name: 'Mar', value: 18 },
  { name: 'Nis', value: 14 },
  { name: 'May', value: 22 },
  { name: 'Haz', value: 24 },
];

// Son aktiviteler
const recentActivities = [
  {
    id: 1,
    type: 'project',
    title: 'Yeni proje eklendi',
    description: 'Modern Life Residence projesi sisteme eklendi.',
    date: '1 saat önce',
  },
  {
    id: 2,
    type: 'message',
    title: 'Yeni mesaj',
    description: 'Ahmet Yılmaz projeler hakkında bilgi istedi.',
    date: '3 saat önce',
  },
  {
    id: 3,
    type: 'update',
    title: 'Proje güncellendi',
    description: 'Park Vista projesinin görselleri güncellendi.',
    date: '5 saat önce',
  },
  {
    id: 4,
    type: 'message',
    title: 'Yeni mesaj',
    description: 'Mehmet Kaya ile görüşme planlandı.',
    date: '1 gün önce',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Başlık */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Genel istatistikler ve son aktiviteler
        </p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'increase' ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
                <p className="mt-1 text-sm text-gray-500">{stat.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grafik */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Aylık Proje Performansı
            </h2>
            <div className="flex items-center space-x-2">
              <BarChart className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">Son 6 ay</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0284c7" radius={[4, 4, 0, 0]} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Son Aktiviteler */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Son Aktiviteler
            </h2>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">Bugün</span>
            </div>
          </div>
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}