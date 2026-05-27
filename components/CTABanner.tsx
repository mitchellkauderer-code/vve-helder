import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Klaar voor professioneel VvE beheer?",
  subtitle = "Vraag vrijblijvend een offerte aan. Wij reageren binnen 1 werkdag.",
}: CTABannerProps) {
  return (
    <section className="bg-blue-700 text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-5">{title}</h2>
        <p className="text-blue-100 mb-10 text-lg">{subtitle}</p>
        <Link
          href="/offerte-aanvragen"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors inline-block text-sm"
        >
          Offerte aanvragen
        </Link>
      </div>
    </section>
  );
}
