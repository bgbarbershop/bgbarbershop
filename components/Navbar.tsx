"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLead } from "./LeadContext";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#localisation", label: "Localisation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLead } = useLead();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-noir/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="BG Barbershop"
            width={110}
            height={63}
            className=""
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-gris-clair hover:text-or transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={openLead}
            className="px-5 py-2 bg-or text-noir text-sm font-semibold tracking-widest uppercase hover:bg-or-clair transition-colors"
          >
            Réserver
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-blanc"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-noir border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-gris-clair hover:text-or transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); openLead(); }}
            className="text-sm tracking-widest uppercase text-or font-semibold text-left transition-colors"
          >
            Réserver
          </button>
        </div>
      )}
    </header>
  );
}
