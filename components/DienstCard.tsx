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
      className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
    >
      <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
        <Icon className="text-primary-600" size={24} />
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      <span className="text-primary-600 text-sm font-medium mt-4 inline-block">
        Meer informatie →
      </span>
    </Link>
  );
}
