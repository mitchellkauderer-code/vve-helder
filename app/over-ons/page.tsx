import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer VvE Helder kennen. Professioneel VvE beheer met een persoonlijke aanpak voor heel Nederland.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Over VvE Helder</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            Wij zijn een toegewijd team van VvE-specialisten met één doel: zorgen
            dat uw VvE goed beheerd wordt, zonder gedoe.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Onze aanpak</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bij VvE Helder geloven wij dat goed beheer begint bij heldere
                communicatie. Geen ingewikkelde procedures, geen vage tarieven —
                gewoon duidelijke afspraken en een vaste contactpersoon die uw VvE kent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Wij beheren VvE's door heel Nederland en combineren de
                professionaliteit van een groot kantoor met de persoonlijke
                betrokkenheid van een kleine organisatie.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "100+", label: "VvE's beheerd" },
                { number: "Heel NL", label: "Werkgebied" },
                { number: "24/7", label: "Bereikbaar bij calamiteiten" },
                { number: "1 dag", label: "Reactietijd" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-blue-700 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Onze kernwaarden</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Transparantie", desc: "Heldere tarieven, duidelijke rapportages en geen verrassingen. U weet altijd wat wij doen en wat het kost." },
                { title: "Betrokkenheid", desc: "Uw VvE is niet een dossiernummer. Wij kennen uw gebouw, uw eigenaren en uw situatie." },
                { title: "Daadkracht", desc: "Problemen lossen we snel op. Wij schakelen direct en houden u op de hoogte." },
              ].map((waarde) => (
                <div key={waarde.title} className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{waarde.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{waarde.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
