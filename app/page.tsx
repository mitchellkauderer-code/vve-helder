import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, PiggyBank, Wrench, CheckCircle, FileText, AlertTriangle, Hammer, ArrowRightLeft } from "lucide-react";
import DienstCard from "@/components/DienstCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "VvE Helder | Professioneel VvE Beheer Nederland",
  description:
    "Zorgeloos VvE beheer voor heel Nederland. Wij regelen de administratie, financiën en technisch onderhoud van uw Vereniging van Eigenaren.",
};

export default function HomePage() {
  return (
    <>
      <section className="bg-white pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-blue-600 mb-6 tracking-widest uppercase">VvE Beheer Nederland</p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-gray-900 leading-none mb-8 max-w-3xl">
            VvE beheer<br />zonder zorgen.
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mb-12 leading-relaxed">
            Professioneel en transparant beheer van uw Vereniging van Eigenaren.
            Administratief, financieel en technisch — één aanspreekpunt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/offerte-aanvragen" className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors inline-block text-center">
              Offerte aanvragen
            </Link>
            <Link href="/diensten" className="text-gray-700 px-7 py-3 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors inline-block text-center">
              Bekijk diensten
            </Link>
          </div>
        </div>
      </section>

      {/* Actieblok */}
      <section className="px-6 pb-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 mb-5">Hoe kunnen we u helpen?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: FileText, label: "Offerte aanvragen", sub: "Vrijblijvend en binnen 1 werkdag", href: "/offerte-aanvragen", accent: true },
              { icon: AlertTriangle, label: "Schade melden", sub: "Snel en eenvoudig doorgeven", href: "/schade-melden", accent: false },
              { icon: Hammer, label: "Reparatie indienen", sub: "Onderhoud of storing melden", href: "/reparatie-indienen", accent: false },
              { icon: ArrowRightLeft, label: "Overstapservice", sub: "Wij regelen de overstap", href: "/overstapservice", accent: false },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all group ${
                  item.accent
                    ? "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
                    : "bg-white border-gray-100 hover:border-gray-300 text-gray-900"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.accent ? "bg-blue-500" : "bg-gray-50"}`}>
                  <item.icon size={18} className={item.accent ? "text-white" : "text-blue-600"} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${item.accent ? "text-white" : "text-gray-900"}`}>{item.label}</p>
                  <p className={`text-xs mt-0.5 ${item.accent ? "text-blue-100" : "text-gray-400"}`}>{item.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Transparante tarieven" },
              { label: "Vaste contactpersoon" },
              { label: "Heel Nederland" },
              { label: "Snel op meldingen" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="text-blue-600 shrink-0" size={16} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Onze diensten</h2>
            <p className="text-gray-500 max-w-lg">
              Van vergaderverslagen tot storingsherstel — wij ontzorgen uw VvE volledig.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <DienstCard icon={ClipboardList} title="Administratief beheer" description="Vergaderingen organiseren, notulen, correspondentie en archief — volledig geregeld." href="/diensten/administratief-beheer" />
            <DienstCard icon={PiggyBank} title="Financieel beheer" description="Servicekosten, begroting, jaarrekening en reservefonds transparant beheerd." href="/diensten/financieel-beheer" />
            <DienstCard icon={Wrench} title="Technisch beheer" description="Onderhoud, storingen en renovaties professioneel afgehandeld." href="/diensten/technisch-beheer" />
          </div>
        </div>
      </section>

      {/* Waarom wij */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Waarom VvE Helder?</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Wij geloven dat goed VvE beheer draait om duidelijkheid en betrokkenheid. Geen bureaucratie, geen verrassingen.
              </p>
              <ul className="space-y-4">
                {[
                  "Vaste contactpersoon voor uw VvE",
                  "Transparante rapportage en financieel overzicht",
                  "Snel schakelen bij storingen en urgente zaken",
                  "Werkzaam door heel Nederland",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle className="text-blue-600 mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/over-ons" className="mt-8 inline-block text-sm text-blue-600 hover:underline">
                Lees meer over ons →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "100+", label: "VvE's beheerd" },
                { number: "Heel NL", label: "Werkgebied" },
                { number: "24/7", label: "Bij calamiteiten" },
                { number: "1 dag", label: "Reactietijd" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-8 border border-gray-100">
                  <p className="text-3xl font-semibold text-gray-900 tracking-tight mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
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
