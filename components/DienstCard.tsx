import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface DienstCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function DienstCard({ icon: Icon, title, description, href }: DienstCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-300 transition-all group"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
        <Icon className="text-blue-600" size={20} />
      </div>
      <h3 className="font-semibold text-gray-900 text-lg mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      <span className="text-blue-600 text-sm font-medium group-hover:underline">
        Meer informatie →
      </span>
    </Link>
  );
}
