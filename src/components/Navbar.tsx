"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--primary-light)]/95 backdrop-blur-sm border-b border-[var(--primary-dark)]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="font-[var(--font-heading)] text-2xl font-light tracking-[0.2em] text-[var(--text-dark)]">
              Y
            </span>
            <span className="text-[var(--accent)] text-2xl font-light">|</span>
            <span className="font-[var(--font-heading)] text-2xl font-light tracking-[0.2em] text-[var(--text-dark)]">
              K
            </span>
            <span className="ml-2 text-xs tracking-[0.3em] uppercase text-[var(--text-dark)]">
              Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm tracking-wide text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm tracking-wide text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/catalog"
              className="text-sm tracking-wide text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors"
            >
              Catalog
            </Link>
            <Link
              href="/collections"
              className="text-sm tracking-wide text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[var(--primary-dark)] text-[var(--text-light)] text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] bg-[var(--text-dark)] transition-all ${isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
              />
              <span
                className={`block h-[1.5px] bg-[var(--text-dark)] transition-all ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-[1.5px] bg-[var(--text-dark)] transition-all ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[var(--primary-light)] border-t border-[var(--primary-dark)]/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-[var(--text-dark)]"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-[var(--text-dark)]"
            >
              Services
            </Link>
            <Link
              href="/catalog"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-[var(--text-dark)]"
            >
              Catalog
            </Link>
            <Link
              href="/collections"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide text-[var(--text-dark)]"
            >
              Collections
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block text-center px-6 py-3 bg-[var(--primary-dark)] text-[var(--text-light)] text-xs tracking-[0.15em] uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
