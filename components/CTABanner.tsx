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
    <section className="bg-primary-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-primary-100 mb-8 text-lg">{subtitle}</p>
        <Link
          href="/offerte-aanvragen"
          className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block"
        >
          Offerte aanvragen
        </Link>
      </div>
    </section>
  );
}
