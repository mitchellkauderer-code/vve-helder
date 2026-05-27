import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Technisch VvE Beheer",
  description:
    "Professioneel technisch VvE beheer: onderhoud, storingen en renovaties vakkundig geregeld door VvE Helder.",
};

const taken = [
  "Opstellen en uitvoeren van een meerjarenonderhoudsplan (MJOP)",
  "Afhandelen van storingsmeldingen",
  "Coördineren van onderhoudswerkzaamheden",
  "Begeleiden van renovatieprojecten",
  "Contractbeheer met leveranciers en aannemers",
  "Inspecties van gemeenschappelijke ruimten",
  "24/7 bereikbaarheid bij calamiteiten",
];

export default function TechnischBeheerPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-600 font-medium mb-2">Diensten</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technisch VvE beheer</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Van dagelijks onderhoud tot grote renovaties — wij zorgen dat uw
            gebouw altijd in goede staat verkeert en problemen snel worden opgelost.
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
