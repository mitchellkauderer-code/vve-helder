"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900">
            VvE Helder
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/offerte-aanvragen"
              className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              Offerte aanvragen
            </Link>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/offerte-aanvragen"
            className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Offerte aanvragen
          </Link>
        </div>
      )}
    </nav>
  );
}
