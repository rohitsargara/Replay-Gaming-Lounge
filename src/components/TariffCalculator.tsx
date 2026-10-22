import React, { useState } from 'react';
import { GAMING_ZONES, BUSINESS_INFO } from '../data/businessData';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

interface TariffCalculatorProps {
  onBookZone: (zoneId: string) => void;
}

export const TariffCalculator: React.FC<TariffCalculatorProps> = ({ onBookZone }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('pc-battlestations');
  const [hours, setHours] = useState<number>(2);
  const [players, setPlayers] = useState<number>(2);
  const [includeBeverageCombo, setIncludeBeverageCombo] = useState<boolean>(true);

  const currentZone = GAMING_ZONES.find((z) => z.id === selectedZoneId) || GAMING_ZONES[0];
  const baseRate = currentZone.hourlyRate * hours;
  const comboRate = includeBeverageCombo ? 150 * players : 0;
  const totalTariff = baseRate + comboRate;

  return (
    <section id="tariffs" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E3DACB] pb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B95333] mb-2 flex items-center gap-2">
            <span>03</span>
            <span>·</span>
            <span>Transparent Tariffs</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#221F1C] tracking-tight text-balance">
            Honest Hourly Rates &amp; Group Packages
          </h2>
        </div>
        <p className="text-sm text-[#685F53] max-w-md leading-relaxed">
          No hidden entry fees or token markups. Enjoy tournament-grade esports hardware, private console banquettes, or championship snooker at fixed hourly rates.
        </p>
      </div>

      {/* Grid: 4 Space Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {GAMING_ZONES.map((zone) => {
          const isSelected = zone.id === selectedZoneId;
          return (
            <div
              key={zone.id}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#F2ECE1] border-[#B95333] shadow-md ring-1 ring-[#B95333]'
                  : 'bg-white/70 hover:bg-white border-[#E4DCCF] hover:shadow-xs'
              }`}
            >
              <div>
                <div className="text-xs text-[#7B7062] font-medium uppercase tracking-wider mb-2">
                  {zone.highlight}
                </div>
                <h3 className="font-editorial text-2xl text-[#221F1C] font-semibold mb-1">
                  {zone.title}
                </h3>
                <p className="text-xs text-[#6B6153] leading-relaxed mb-4">
                  {zone.subtitle}
                </p>
                <div className="space-y-1.5 pt-3 border-t border-[#E6DDD0] mb-6">
                  {zone.specs.map((spec, idx) => (
                    <div key={idx} className="text-xs text-[#524B41] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#B95333]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DDD0] flex items-end justify-between">
                <div>
                  <div className="text-[11px] text-[#867B6E] uppercase tracking-wider">Tariff</div>
                  <div className="font-mono tabular-nums text-xl font-bold text-[#221F1C]">
                    ₹{zone.hourlyRate}
                    <span className="text-xs font-normal text-[#7B7062] font-sans ml-1">/ hour</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookZone(zone.id);
                  }}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#221F1C] hover:bg-[#B95333] text-white rounded-md transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Session Estimator Box */}
      <div className="bg-[#EFE9DF] rounded-2xl border border-[#DED4C5] p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B95333] font-semibold">
                Real-Time Session Estimator
              </span>
              <h3 className="font-editorial text-3xl text-[#221F1C] font-semibold mt-1">
                Customize Your Visit Duration &amp; Add-ons
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Duration picker */}
              <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C7]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685D50] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B95333]" />
                  <span>Session Length</span>
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 3, 4].map((hr) => (
                    <button
                      key={hr}
                      onClick={() => setHours(hr)}
                      className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        hours === hr
                          ? 'bg-[#B95333] text-white shadow-xs'
                          : 'bg-[#F2ECE1] text-[#4A4237] hover:bg-[#E6DDD0]'
                      }`}
                    >
                      {hr} hr{hr > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Player count picker */}
              <div className="bg-white/80 p-4 rounded-xl border border-[#DFD6C7]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#685D50] mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#B95333]" />
                  <span>Group Size</span>
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 4, 6].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlayers(p)}
                      className={`py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        players === p
                          ? 'bg-[#B95333] text-white shadow-xs'
                          : 'bg-[#F2ECE1] text-[#4A4237] hover:bg-[#E6DDD0]'
                      }`}
                    >
                      {p} {p === 1 ? 'Gamer' : p === 6 ? '6+' : 'Gamers'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Optional Combo Toggle */}
            <div
              onClick={() => setIncludeBeverageCombo(!includeBeverageCombo)}
              className="flex items-center justify-between p-4 bg-white/70 hover:bg-white rounded-xl border border-[#DFD6C7] cursor-pointer transition-all"
            >
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#221F1C]">
                  Include Welcome Beverage &amp; Artisan Snack Combo
                </div>
                <div className="text-xs text-[#73685B]">
                  Adds cold brew / frappe + sharing honey chilli potatoes (+₹150/person)
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                  includeBeverageCombo
                    ? 'bg-[#4E5942] border-[#4E5942] text-white'
                    : 'bg-white border-[#C9BEAE]'
                }`}
              >
                {includeBeverageCombo && <ShieldCheck className="w-4 h-4" />}
              </div>
            </div>
          </div>

          {/* Right Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 lg:p-8 rounded-xl border border-[#D9CFC0] shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#8A7E71] font-semibold">
                Estimated Visit Breakdown
              </span>
              <h4 className="font-editorial text-2xl text-[#221F1C] font-semibold">
                {currentZone.title}
              </h4>
            </div>

            <div className="space-y-2.5 text-xs text-[#635A4E] border-y border-[#E6DED1] py-4">
              <div className="flex justify-between">
                <span>Station Base Rate:</span>
                <span className="font-mono tabular-nums text-[#221F1C]">
                  {hours} hr(s) × ₹{currentZone.hourlyRate} = ₹{baseRate}
                </span>
              </div>
              {includeBeverageCombo && (
                <div className="flex justify-between">
                  <span>Beverage &amp; Bite Combo:</span>
                  <span className="font-mono tabular-nums text-[#221F1C]">
                    {players} guest(s) × ₹150 = ₹{comboRate}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-[#857A6C]">
                <span>Taxes &amp; Wi-Fi:</span>
                <span>Included (Complimentary)</span>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#857A6C]">Total Estimated:</span>
                <div className="font-mono tabular-nums text-3xl font-bold text-[#B95333]">
                  ₹{totalTariff}
                </div>
              </div>
              <button
                onClick={() => onBookZone(currentZone.id)}
                className="px-6 py-3 bg-[#B95333] hover:bg-[#933E25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Reserve Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
