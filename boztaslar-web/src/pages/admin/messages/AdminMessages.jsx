// src/pages/admin/messages/AdminMessages.jsx

import { useState } from 'react';
import { 
  Mail, 
  Search, 
  Trash2, 
  Star, 
  Calendar,
  Clock,
  ChevronRight,
  Filter
} from 'lucide-react';

// Örnek mesaj verileri
const messages = [
  {
    id: 1,
    sender: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    phone: '0532 123 45 67',
    subject: 'Modern Life Residence Projesi Hakkında',
    message: 'Merhaba, Modern Life Residence projesi hakkında detaylı bilgi almak istiyorum. 3+1 daireler müsait mi?',
    date: '2024-01-15T10:30:00',
    isRead: false,
    isStarred: true
  },
  {
    id: 2,
    sender: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    phone: '0533 987 65 43',
    subject: 'Ticari Alan Kiralama',
    message: 'Business Plaza projesindeki ofisler hakkında bilgi almak istiyorum.',
    date: '2024-01-14T15:45:00',
    isRead: true,
    isStarred: false
  },
  // Daha fazla mesaj eklenebilir...
];

export default function AdminMessages() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, starred

  // Mesajları filtrele
  const filteredMessages = messages.filter(message => {
    const matchesSearch = (
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter === 'unread') return !message.isRead && matchesSearch;
    if (filter === 'starred') return message.isStarred && matchesSearch;
    return matchesSearch;
  });

  // Mesaj silme
  const handleDelete = (messageId) => {
    if (window.confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
      // API çağrısı yapılacak
      console.log('Mesaj silindi:', messageId);
    }
  };

  // Tarih formatla
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR');
  };

  // Saat formatla
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Mesajlar</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Mesajlarda ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">Tüm Mesajlar</option>
                <option value="unread">Okunmamış</option>
                <option value="starred">Yıldızlı</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Mesaj Listesi */}
            <div className="lg:col-span-1 border-r">
              <div className="divide-y">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-gray-50' : ''
                    } ${!message.isRead ? 'bg-blue-50 hover:bg-blue-50/80' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-sm font-medium truncate ${
                            message.isRead ? 'text-gray-900' : 'text-blue-600'
                          }`}>
                            {message.sender}
                          </h3>
                          <span className="ml-2 text-xs text-gray-500">
                            {formatTime(message.date)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-medium truncate">
                          {message.subject}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mesaj Detayı */}
            <div className="lg:col-span-2 p-6">
              {selectedMessage ? (
                <div className="space-y-6">
                  {/* Üst Bilgi */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                      {selectedMessage.subject}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {/* Yıldızlama fonksiyonu */}}
                        className={`p-2 rounded-lg hover:bg-gray-100 ${
                          selectedMessage.isStarred ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                      >
                        <Star className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(selectedMessage.id)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Gönderen Bilgileri */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Gönderen
                        </label>
                        <span className="text-gray-900">
                          {selectedMessage.sender}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          E-posta
                        </label>
                        <a 
                          href={`mailto:${selectedMessage.email}`}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          {selectedMessage.email}
                        </a>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Telefon
                        </label>
                        <a 
                          href={`tel:${selectedMessage.phone}`}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          {selectedMessage.phone}
                        </a>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500">
                          Tarih
                        </label>
                        <span className="text-gray-900">
                          {formatDate(selectedMessage.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mesaj İçeriği */}
                  <div className="prose max-w-none">
                    <p className="text-gray-900">
                      {selectedMessage.message}
                    </p>
                  </div>

                  {/* Yanıt Butonu */}
                  <div className="flex justify-end">
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Yanıtla
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <Mail className="w-12 h-12 mb-4" />
                  <p>Görüntülemek için bir mesaj seçin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}