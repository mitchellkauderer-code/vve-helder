import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">VvE Helder</h3>
            <p className="text-sm leading-relaxed">
              Professioneel VvE beheer voor heel Nederland. Administratief,
              financieel en technisch — wij regelen het.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten/administratief-beheer" className="hover:text-white transition-colors">
                  Administratief beheer
                </Link>
              </li>
              <li>
                <Link href="/diensten/financieel-beheer" className="hover:text-white transition-colors">
                  Financieel beheer
                </Link>
              </li>
              <li>
                <Link href="/diensten/technisch-beheer" className="hover:text-white transition-colors">
                  Technisch beheer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                Klopperman 53, 2292 JE Wateringen
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                085-8006008
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                info@vvehelder.nl
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} VvE Helder. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
