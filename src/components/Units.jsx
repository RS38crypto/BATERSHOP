// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Units({ units = {} }) {
  const defaultMessage = encodeURIComponent("Olá, preciso de uma bateria");

  function formatPhone(phone) {
    if (!phone) return phone;
    const d = phone.replace(/\D/g, "");
    if (d.length === 13 && d.startsWith("55")) {
      return `+${d.slice(0,2)} ${d.slice(2,4)} ${d.slice(4,9)}-${d.slice(9)}`;
    }
    if (d.length === 12) {
      return `+${d.slice(0,2)} ${d.slice(2,4)} ${d.slice(4,8)}-${d.slice(8)}`;
    }
    return phone;
  }

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Nossas unidades</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(units).map((u) => (
            <div key={u.id} className="bg-white/3 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-white">{u.name}</h4>
              <p className="text-sm text-gray-200 mt-2">{u.address}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={`https://wa.me/${u.whatsapp}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Chamar no WhatsApp ({formatPhone(u.whatsapp)})
                </a>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(u.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent border border-white/20 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Ver no mapa
                </a>
              </div>

              {u.mapEmbedSrc && (
                <div className="mt-4">
                  <div className="w-full h-48 md:h-64 rounded-md overflow-hidden">
                    <iframe
                      src={u.mapEmbedSrc}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
