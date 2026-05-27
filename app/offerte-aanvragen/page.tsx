"use client";

import { useState } from "react";

export default function OfferteAanvragenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    aantalAppartementen: "",
    bericht: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Offerte aanvragen</h1>
          <p className="text-gray-500 text-lg">
            Vul het formulier in en wij nemen binnen 1 werkdag contact met u op.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <p className="text-2xl font-bold text-green-800 mb-2">Bedankt voor uw aanvraag!</p>
              <p className="text-green-700">Wij nemen binnen 1 werkdag contact met u op.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                    <input
                      type="text"
                      name="naam"
                      value={form.naam}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                    <input
                      type="tel"
                      name="telefoon"
                      value={form.telefoon}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="06-12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Aantal appartementen</label>
                    <select
                      name="aantalAppartementen"
                      value={form.aantalAppartementen}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecteer...</option>
                      <option value="2-5">2 – 5</option>
                      <option value="6-15">6 – 15</option>
                      <option value="16-50">16 – 50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                  <textarea
                    name="bericht"
                    value={form.bericht}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Vertel ons meer over uw VvE of situatie..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Offerte aanvragen
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
