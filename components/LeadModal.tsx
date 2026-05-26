"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PlanityWidget from "./PlanityWidget";

interface Props {
  onClose: () => void;
}

export default function LeadModal({ onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Réservation BG Barbershop",
      });
    }
    setSubmitted(true);
  }

  /* ── Après soumission : overlay plein écran pour le widget ── */
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col bg-surface overflow-hidden" style={{ width: "100vw", maxWidth: "100vw" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div>
            <p className="text-or text-xs tracking-[0.4em] uppercase">Réservation</p>
            <h2 className="text-lg text-blanc">Choisissez votre créneau</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gris hover:text-blanc transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Widget Planity — prend tout l'espace restant */}
        <div className="flex-1 bg-white overflow-x-hidden w-full">
          <PlanityWidget />
        </div>
      </div>
    );
  }

  /* ── Formulaire : modal centré ── */
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-noir/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-md bg-surface border border-border overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gris hover:text-blanc transition-colors z-10"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <p className="text-or text-xs tracking-[0.4em] uppercase mb-2">Réservation</p>
          <h2 className="text-2xl text-blanc mb-1">Avant de continuer</h2>
          <p className="text-gris text-sm mb-8 leading-relaxed">
            Laissez vos coordonnées pour accéder au calendrier de réservation.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs tracking-widest uppercase text-gris mb-2">
                Nom complet
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jean Dupont"
                className="w-full bg-noir border border-border px-4 py-3 text-blanc text-sm placeholder:text-gris focus:outline-none focus:border-or transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-gris mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="06 00 00 00 00"
                className="w-full bg-noir border border-border px-4 py-3 text-blanc text-sm placeholder:text-gris focus:outline-none focus:border-or transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-gris mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jean@email.com"
                className="w-full bg-noir border border-border px-4 py-3 text-blanc text-sm placeholder:text-gris focus:outline-none focus:border-or transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full px-8 py-4 bg-or text-noir text-sm font-bold tracking-[0.2em] uppercase hover:bg-or-clair transition-colors"
            >
              Accéder à la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
