import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, PiggyBank, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import DienstCard from "@/components/DienstCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "VvE Helder | Professioneel VvE Beheer Nederland",
  description:
    "Zorgeloos VvE beheer voor heel Nederland. Wij regelen de administratie, financiën en technisch onderhoud van uw Vereniging van Eigenaren.",
};

const usps = [
  "Transparante vaste tarieven",
  "Persoonlijke contactpersoon",
  "Heel Nederland",
  "Snel reageren op meldingen",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              VvE beheer zonder zorgen
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Professioneel en transparant beheer van uw Vereniging van
              Eigenaren. Administratief, financieel én technisch — één aanspreekpunt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/offerte-aanvragen"
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Offerte aanvragen
              </Link>
              <Link
                href="/diensten"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Bekijk diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usps.map((usp) => (
              <div key={usp} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="text-primary-600 shrink-0" size={18} />
                <span className="text-sm font-medium">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze diensten</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Van vergaderverslagen tot storingsherstel — wij ontzorgen uw VvE volledig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DienstCard
              icon={ClipboardList}
              title="Administratief beheer"
              description="Vergaderingen organiseren, notulen, correspondentie en archief — volledig geregeld."
              href="/diensten/administratief-beheer"
            />
            <DienstCard
              icon={PiggyBank}
              title="Financieel beheer"
              description="Servicekosten, begroting, jaarrekening en reservefonds transparant beheerd."
              href="/diensten/financieel-beheer"
            />
            <DienstCard
              icon={Wrench}
              title="Technisch beheer"
              description="Onderhoud, storingen en renovaties professioneel afgehandeld."
              href="/diensten/technisch-beheer"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800"
            >
              Alle diensten bekijken <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Waarom VvE Helder?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Wij geloven dat goed VvE beheer draait om duidelijkheid en
                betrokkenheid. Geen bureaucratie, geen verrassingen — gewoon
                helder communiceren en zorgen dat alles goed geregeld is.
              </p>
              <ul className="space-y-3">
                {[
                  "Vaste contactpersoon voor uw VvE",
                  "Transparante rapportage en financieel overzicht",
                  "Snel schakelen bij storingen en urgente zaken",
                  "Werkzaam door heel Nederland",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="text-primary-600 mt-0.5 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/over-ons"
                className="mt-6 inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800"
              >
                Lees meer over ons <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-primary-700 mb-2">100+</p>
              <p className="text-gray-600 mb-6">tevreden VvE's beheerd</p>
              <p className="text-5xl font-bold text-primary-700 mb-2">Heel NL</p>
              <p className="text-gray-600">werkgebied</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
