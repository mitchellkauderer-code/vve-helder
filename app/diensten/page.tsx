import type { Metadata } from "next";
import { ClipboardList, PiggyBank, Wrench } from "lucide-react";
import DienstCard from "@/components/DienstCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bekijk alle VvE beheer diensten van VvE Helder: administratief, financieel en technisch beheer voor uw VvE.",
};

export default function DienstenPage() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Onze diensten</h1>
          <p className="text-gray-500 max-w-2xl text-lg">
            VvE Helder biedt een compleet pakket voor het beheer van uw Vereniging
            van Eigenaren. Kies wat bij uw situatie past of neem contact op voor maatwerk.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DienstCard
              icon={ClipboardList}
              title="Administratief beheer"
              description="Vergaderingen, notulen, correspondentie en archivering volledig verzorgd."
              href="/diensten/administratief-beheer"
            />
            <DienstCard
              icon={PiggyBank}
              title="Financieel beheer"
              description="Inning van servicekosten, boekhouding, begroting en jaarrekening."
              href="/diensten/financieel-beheer"
            />
            <DienstCard
              icon={Wrench}
              title="Technisch beheer"
              description="Onderhoud plannen, storingen oplossen, renovaties begeleiden."
              href="/diensten/technisch-beheer"
            />
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
