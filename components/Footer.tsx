import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="text-white font-semibold text-lg tracking-tight mb-4">VvE Helder</p>
            <p className="text-sm leading-relaxed max-w-xs">
              Professioneel VvE beheer voor heel Nederland. Administratief,
              financieel en technisch — wij regelen het.
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">Diensten</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/diensten/administratief-beheer" className="hover:text-white transition-colors">Administratief beheer</Link></li>
              <li><Link href="/diensten/financieel-beheer" className="hover:text-white transition-colors">Financieel beheer</Link></li>
              <li><Link href="/diensten/technisch-beheer" className="hover:text-white transition-colors">Technisch beheer</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-medium mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>Klopperman 53, Wateringen</li>
              <li>085-8006008</li>
              <li>info@vvehelder.nl</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} VvE Helder. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
            <Link href="/over-ons" className="hover:text-gray-400 transition-colors">Over ons</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
