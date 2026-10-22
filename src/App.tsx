import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroArchitecturalVisual } from './components/ArchitecturalVisuals';
import { SpacesSection } from './components/SpacesSection';
import { MenuSection } from './components/MenuSection';
import { TariffCalculator } from './components/TariffCalculator';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BUSINESS_INFO } from './data/businessData';
import { ArrowRight, Star, Clock, Coffee, Gamepad2, Compass } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedZone, setPreselectedZone] = useState<string>('pc-battlestations');

  const handleOpenBooking = (zoneId?: string) => {
    if (zoneId) {
      setPreselectedZone(zoneId);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221F1C] flex flex-col font-sans selection:bg-[#E8DDD1] selection:text-[#B95333]">
      {/* Top Bar Contract (Wordmark - 4-5 Nav Links - 1 Action) */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* HERO SECTION: Editorial Asymmetrical Layout */}
        <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              {/* Clean Unboxed Metadata Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#7F7365] font-medium">
                <span className="text-[#B95333] font-semibold">UDAIPUR, RAJASTHAN</span>
                <span aria-hidden="true">·</span>
                <span>TEKRI MADRI LINK ROAD</span>
                <span aria-hidden="true">·</span>
                <span>EST. 2017</span>
              </div>

              {/* Refined Display Headline */}
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[4.25rem] text-[#221F1C] font-semibold leading-[1.08] tracking-tight text-balance">
                A warm sanctuary where tournament play meets slow dining.
              </h1>

              {/* Editorial Prose Measure */}
              <p className="text-base sm:text-lg text-[#61574A] leading-relaxed max-w-xl font-normal">
                Conceived as Udaipur's premier leisure destination, Replay pairs tournament-spec esports battle rigs, private PS5 console lounges, and English snooker tables with hand-stretched stone deck pizzas and artisanal coffee.
              </p>

              {/* Primary Call to Action Pair */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => handleOpenBooking()}
                  className="px-7 py-3.5 bg-[#B95333] hover:bg-[#933E25] text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Reserve a Station or Table</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#menu"
                  className="px-6 py-3.5 bg-[#F2ECE1] hover:bg-[#E7DFD1] text-[#2A241D] rounded-md text-xs font-semibold uppercase tracking-wider text-center transition-colors border border-[#DDD3C2]"
                >
                  Explore Cafe Menu
                </a>
              </div>

              {/* Quiet Attributable Trust Marker */}
              <div className="pt-4 border-t border-[#E8DFD1] flex items-center gap-3">
                <div className="flex text-[#D97736]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-[#6F6456]">
                  <strong className="font-mono text-sm text-[#221F1C]">{BUSINESS_INFO.rating}</strong>
                  <span className="ml-1 text-[#7A6F62]">
                    / 5.0 rating on Google across {BUSINESS_INFO.reviewsCount}+ verified visitor reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Right Architectural Photographic Moment (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <HeroArchitecturalVisual className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]" />
            </div>
          </div>

          {/* Full-Width 4-Column Metric / Trust Strip (Below Hero Split) */}
          <div className="mt-16 pt-10 border-t border-[#E5DDCF] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#7C7063]">
                Verified Reputation
              </div>
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-bold text-[#221F1C]">
                4.6 ★
              </div>
              <div className="text-xs text-[#73685B]">924+ Google reviews</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#7C7063]">
                Lounge Heritage
              </div>
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-bold text-[#221F1C]">
                Since 2017
              </div>
              <div className="text-xs text-[#73685B]">Udaipur’s original lounge</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#7C7063]">
                Daily Schedule
              </div>
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-bold text-[#221F1C]">
                10:30A – 11P
              </div>
              <div className="text-xs text-[#73685B]">Open 7 days every week</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#7C7063]">
                Cafe Benchmark
              </div>
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-bold text-[#221F1C]">
                ₹600 for Two
              </div>
              <div className="text-xs text-[#73685B]">Multi-cuisine fresh dining</div>
            </div>
          </div>
        </section>

        {/* SECTION 01: The Spaces & Architectural Gaming Rigs */}
        <div id="gaming">
          <SpacesSection onBookZone={(zoneId) => handleOpenBooking(zoneId)} />
        </div>

        {/* SECTION 02: Artisanal Cafe & Kitchen Menu */}
        <MenuSection />

        {/* SECTION 03: Rates & Session Tariff Calculator */}
        <TariffCalculator onBookZone={(zoneId) => handleOpenBooking(zoneId)} />

        {/* SECTION 04: Location & Operating Hours */}
        <LocationSection />

        {/* SECTION 05: Verified Reviews & Guest FAQs */}
        <ReviewsSection />
      </main>

      {/* Clean Architectural Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedZoneId={preselectedZone}
      />
    </div>
  );
}
