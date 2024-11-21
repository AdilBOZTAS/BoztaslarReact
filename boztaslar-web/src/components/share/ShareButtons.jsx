import { QRCodeSVG } from 'qrcode.react';
import { Download } from 'lucide-react';

const ShareButtons = ({ project }) => {
  const shareUrl = window.location.href;
  const shareText = `${project.title} - ${project.location} | Boztaşlar İnşaat`;

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${project.title}-qr-kod.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    {
      name: 'X',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="white"/>
          <path d="M31.3337 16.6663H29.667C27.9337 16.6663 26.5003 18.0997 26.5003 19.833V21.4997H24.667V24.333H26.5003V31.333H29.3337V24.333H31.1663L31.5003 21.4997H29.3337V20.1663C29.3337 19.733 29.6003 19.4663 30.0337 19.4663H31.5003V16.6663H31.3337Z" fill="black"/>
        </svg>
      )
    },
    
  ];  

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Projeyi Paylaş</h3>
      
      {/* Sosyal Medya Paylaşım Butonları */}
      <div className="flex flex-wrap gap-3 mb-6">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-4 py-2 ${link.bgColor} ${link.hoverColor} text-white rounded-lg transition-colors duration-300`}
          >
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        ))}
      </div>

      {/* QR Kod Bölümü */}
      <div className="border-t pt-6">
        <h4 className="text-sm font-medium text-gray-900 mb-4">QR Kod ile Paylaş</h4>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg border">
          {/* QR Kod */}
          <div className="bg-white p-2 rounded-lg mb-4">
            <QRCodeSVG
              id="qr-code"
              value={shareUrl}
              size={160}
              level="H"
              includeMargin
              imageSettings={{
                src: "/images/logo.png" ,
                height: 24,
                width: 24,
                excavate: true,
              }}
            />
          </div>
          
          {/* QR Kod İndirme Butonu */}
          <button
            onClick={downloadQRCode}
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-300 text-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            QR Kodu İndir
          </button>
          
          {/* Açıklama */}
          <p className="text-xs text-gray-500 text-center mt-3">
            QR kodu telefonunuzla tarayarak projeyi görüntüleyebilirsiniz
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;