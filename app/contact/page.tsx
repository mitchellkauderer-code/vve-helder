import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met VvE Helder. Telefoon, e-mail of stuur een bericht.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-gray-500 text-lg">
            Heeft u een vraag of wilt u meer informatie? Wij staan voor u klaar.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h2>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, label: "Adres", value: "Klopperman 53, 2292 JE Wateringen" },
                  { icon: Phone, label: "Telefoon", value: "085-8006008" },
                  { icon: Mail, label: "E-mail", value: "info@vvehelder.nl" },
                  { icon: Clock, label: "Bereikbaarheid", value: "Ma – Vr: 08:30 – 17:30" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-900">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Liever direct een offerte?</h3>
              <p className="text-gray-600 mb-4">
                Vul het aanvraagformulier in en ontvang binnen 1 werkdag een vrijblijvende offerte op maat.
              </p>
              <a href="/offerte-aanvragen" className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
