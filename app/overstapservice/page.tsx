import type { Metadata } from "next";
import { CheckCircle, ArrowRightLeft } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Overstapservice",
  description:
    "Overstappen naar VvE Helder? Wij regelen de volledige overstap van uw huidige VvE beheerder. Snel, eenvoudig en zonder gedoe.",
};

const stappen = [
  { step: "01", title: "Vrijblijvend gesprek", desc: "Wij leren uw VvE kennen en bespreken uw wensen en de huidige situatie." },
  { step: "02", title: "Offerte op maat", desc: "U ontvangt een heldere offerte zonder verborgen kosten." },
  { step: "03", title: "Wij regelen de overstap", desc: "Na akkoord nemen wij contact op met uw huidige beheerder en regelen de overdracht." },
  { step: "04", title: "Vliegende start", desc: "Wij zorgen voor een soepele overgang zodat uw VvE geen dag stilstaat." },
];

export default function OvoverstapservicePage() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-widest">Overstappen</p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Overstapservice</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Niet tevreden over uw huidige VvE beheerder? Wij maken de overstap eenvoudig en zorgeloos voor u.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Waarom overstappen?</h2>
              <ul className="space-y-4">
                {[
                  "Slechte communicatie met uw huidige beheerder",
                  "Onduidelijke of hoge kosten",
                  "Trage afhandeling van meldingen en reparaties",
                  "Geen vast aanspreekpunt",
                  "Ontevredenheid over financiële rapportages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="text-blue-600 mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                Herkent u dit? Dan is het tijd voor een betere partner. VvE Helder regelt de volledige overstap — u hoeft er niets voor te doen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Hoe werkt het?</h2>
              <div className="space-y-5">
                {stappen.map((s) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-blue-600">{s.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{s.title}</p>
                      <p className="text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Klaar om over te stappen?"
        subtitle="Vraag vrijblijvend een offerte aan. Wij regelen de rest."
      />
    </>
  );
}
