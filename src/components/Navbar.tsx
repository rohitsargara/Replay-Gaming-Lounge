import React, { useState } from 'react';
import { Menu as MenuIcon, X as XIcon, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action) */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DDCF] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-editorial text-2xl md:text-3xl font-semibold tracking-tight text-[#221F1C] whitespace-nowrap shrink-0 hover:text-[#B95333] transition-colors"
          >
            REPLAY <span className="font-sans text-xs font-normal tracking-widest text-[#7C7164] uppercase ml-1">Lounge &amp; Cafe</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5C5348]">
            <a
              href="#spaces"
              className="hover:text-[#B95333] transition-colors whitespace-nowrap shrink-0"
            >
              The Spaces
            </a>
            <a
              href="#gaming"
              className="hover:text-[#B95333] transition-colors whitespace-nowrap shrink-0"
            >
              Gaming Rigs
            </a>
            <a
              href="#menu"
              className="hover:text-[#B95333] transition-colors whitespace-nowrap shrink-0"
            >
              Cafe &amp; Kitchen
            </a>
            <a
              href="#tariffs"
              className="hover:text-[#B95333] transition-colors whitespace-nowrap shrink-0"
            >
              Rates &amp; Booking
            </a>
            <a
              href="#location"
              className="hover:text-[#B95333] transition-colors whitespace-nowrap shrink-0"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-xs text-[#6E6354] hover:text-[#221F1C] flex items-center gap-1.5 transition-colors"
              title="Call Lounge Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#B95333]" />
              <span className="font-mono tabular-nums">{BUSINESS_INFO.formattedPhone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B95333] hover:bg-[#933E25] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              Reserve a Station
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white bg-[#B95333] rounded-md"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A433A] hover:text-[#221F1C] rounded-md focus-visible:outline-2 focus-visible:outline-[#B95333]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 z-30 bg-[#FAF7F2] border-b border-[#E5DDCF] shadow-lg px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4A433A]">
            <a
              href="#spaces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EBE4D8] hover:text-[#B95333]"
            >
              The Spaces &amp; Ambience
            </a>
            <a
              href="#gaming"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EBE4D8] hover:text-[#B95333]"
            >
              High-Performance Gaming Rigs
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EBE4D8] hover:text-[#B95333]"
            >
              Artisanal Cafe &amp; Kitchen Menu
            </a>
            <a
              href="#tariffs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EBE4D8] hover:text-[#B95333]"
            >
              Tariffs &amp; Price Calculator
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EBE4D8] hover:text-[#B95333]"
            >
              Location &amp; Hours (Santosh Nagar)
            </a>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-center text-white bg-[#B95333] rounded-md"
              >
                Reserve a Station or Table
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-[#4A433A] bg-[#F1EAE0] rounded-md"
              >
                <Phone className="w-4 h-4 text-[#B95333]" />
                Call {BUSINESS_INFO.formattedPhone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
