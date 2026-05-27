import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Administratief VvE Beheer",
  description:
    "Professioneel administratief VvE beheer: vergaderingen, notulen, correspondentie en archivering door VvE Helder.",
};

const taken = [
  "Organiseren en voorzitten van de Algemene Ledenvergadering (ALV)",
  "Opstellen en versturen van notulen",
  "Bijhouden van het ledenregister",
  "Afhandelen van correspondentie met eigenaren",
  "Opstellen en bewaken van het huishoudelijk reglement",
  "Archivering van alle VvE-documenten",
  "Aanspreekpunt voor eigenaren bij vragen",
];

export default function AdministratiefBeheerPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 font-medium mb-2">Diensten</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Administratief VvE beheer</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Een goed georganiseerde VvE begint bij de administratie. Wij zorgen
            dat alle verplichtingen worden nagekomen en eigenaren altijd goed geïnformeerd zijn.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Wat wij voor u regelen</h2>
              <ul className="space-y-3">
                {taken.map((taak) => (
                  <li key={taak} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-0.5 shrink-0" size={18} />
                    <span className="text-gray-700">{taak}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interesse?</h3>
              <p className="text-gray-600 mb-6">
                Vraag een vrijblijvende offerte aan en ontdek wat VvE Helder voor uw VvE kan betekenen.
              </p>
              <a href="/offerte-aanvragen" className="block bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
