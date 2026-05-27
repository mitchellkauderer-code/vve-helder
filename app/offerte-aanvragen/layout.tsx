import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag vrijblijvend een offerte aan voor VvE beheer door VvE Helder.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
