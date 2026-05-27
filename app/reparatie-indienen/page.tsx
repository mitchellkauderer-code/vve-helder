"use client";

import { useState } from "react";

export default function ReparatieIndienenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    adres: "",
    soort: "",
    omschrijving: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-widest">Direct regelen</p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Reparatie indienen</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Storing of onderhoud nodig? Dien hier uw reparatieverzoek in en wij zorgen voor een snelle afhandeling.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <p className="text-2xl font-semibold text-green-800 mb-2">Reparatieverzoek ontvangen</p>
              <p className="text-green-700 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                    <input type="text" name="naam" value={form.naam} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Uw naam" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="uw@email.nl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                    <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="06-12345678" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adres woning</label>
                    <input type="text" name="adres" value={form.adres} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Straat 1, Stad" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Soort reparatie</label>
                  <select name="soort" value={form.soort} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Selecteer...</option>
                    <option value="loodgieter">Loodgieter / lekkage</option>
                    <option value="elektra">Elektra</option>
                    <option value="kozijn">Kozijn / raam / deur</option>
                    <option value="dak">Dak / gevel</option>
                    <option value="lift">Lift</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Omschrijving *</label>
                  <textarea name="omschrijving" value={form.omschrijving} onChange={handleChange} rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Beschrijf het probleem zo duidelijk mogelijk..." />
                </div>
                <button onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                  Reparatie indienen
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
