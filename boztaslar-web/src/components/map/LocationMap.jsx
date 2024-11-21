export default function LocationMap({ address }) {
    const encodedAddress = encodeURIComponent(address);
    
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Konum</h3>
        
        {/* Harita */}
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
  
        {/* Navigasyon Butonları */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Google Maps
          </a>
          <a
            href={`https://yandex.com/maps/?text=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Yandex Maps
          </a>
        </div>
      </div>
    );
  }
  