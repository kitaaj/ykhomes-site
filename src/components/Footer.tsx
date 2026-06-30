import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-[var(--text-light)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-[var(--font-heading)] text-2xl font-light tracking-[0.2em]">
                Y
              </span>
              <span className="text-[var(--accent)] text-2xl font-light">|</span>
              <span className="font-[var(--font-heading)] text-2xl font-light tracking-[0.2em]">
                K
              </span>
            </div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Homes</p>
            <p className="text-sm text-white/70 leading-relaxed">
              We believe the best homes are layered, timeless, beautiful,
              comfortable, and a reflection of the people who live in them.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  Our Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  Client Enquiry Form
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  Furniture Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">
              Collections
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/asili"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  Asili Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">
              Follow Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/yk_homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  <FaInstagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@yk_homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  <FaTiktok size={16} />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ykhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  <FaYoutube size={16} />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/ykhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  <FaPinterest size={16} />
                  <span>Pinterest</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/50">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/70">+254-792-516-691</li>
              <li className="text-sm text-white/70">Karen Village, Nairobi</li>
              <li>
                <a
                  href="mailto:hello@ykhomes.co.ke"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  hello@ykhomes.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; 2026 YK Homes. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs text-white/50 hover:text-[var(--accent)] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/returns-policy" className="text-xs text-white/50 hover:text-[var(--accent)] transition-colors">Returns Policy</Link>
          </div>
          <p className="text-xs text-white/50 hidden md:block">
            YK Homes Design Studio &mdash; Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
