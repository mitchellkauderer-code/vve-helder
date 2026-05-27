import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met VvE Helder.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Contact</h1>
          <p className="text-gray-500 text-lg">
            Heeft u een vraag of wilt u meer informatie? Wij staan voor u klaar.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">
                Contactgegevens
              </h2>
              <ul className="space-y-6">
                {[
                  { icon: MapPin, label: "Adres", value: "Klopperman 53, 2292 JE Wateringen" },
                  { icon: Phone, label: "Telefoon", value: "085-8006008" },
                  { icon: Mail, label: "E-mail", value: "info@vvehelder.nl" },
                  { icon: Clock, label: "Bereikbaarheid", value: "Ma - Vr: 08:30 - 17:30" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-blue-600" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-gray-900">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 self-start">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
                Liever direct een offerte?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Vul het aanvraagformulier in en ontvang binnen 1 werkdag een vrijblijvende offerte op maat.
              </p>
              <a href="/offerte-aanvragen" className="block bg-gray-900 text-white text-center px-6 py-3 rounded-full text-sm font-medium">
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
