import React, { useState } from 'react';
import { GAMING_ZONES, GamingZone } from '../data/businessData';
import { GamingStationVisual, SnookerVisual, HeroArchitecturalVisual } from './ArchitecturalVisuals';
import { ArrowRight, Monitor, Gamepad2, Trophy, Users } from 'lucide-react';

interface SpacesSectionProps {
  onBookZone: (zoneId: string) => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onBookZone }) => {
  const [selectedId, setSelectedId] = useState<string>('pc-battlestations');

  const activeZone = GAMING_ZONES.find((z) => z.id === selectedId) || GAMING_ZONES[0];

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'pc':
        return <Monitor className="w-4 h-4" />;
      case 'console':
        return <Gamepad2 className="w-4 h-4" />;
      case 'snooker':
        return <Trophy className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const renderVisual = (id: string) => {
    if (id === 'pc-battlestations') {
      return <GamingStationVisual className="w-full aspect-[4/3]" />;
    }
    if (id === 'snooker-saloon') {
      return <SnookerVisual className="w-full aspect-[4/3]" />;
    }
    return <HeroArchitecturalVisual className="w-full aspect-[4/3]" />;
  };

  return (
    <section id="spaces" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E3DACB] pb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B95333] mb-2 flex items-center gap-2">
            <span>01</span>
            <span>·</span>
            <span>The Spaces &amp; Rigs</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#221F1C] tracking-tight text-balance">
            Four Spaces Conceived for Play, Focus &amp; Leisure
          </h2>
        </div>
        <p className="text-sm text-[#685F53] max-w-md leading-relaxed">
          From competitive tactical battle stations to conversational snooker tables and low-slung PS5 lounges, each area is acoustically treated and naturally ventilated for effortless long sessions.
        </p>
      </div>

      {/* Interactive Space Navigation Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {GAMING_ZONES.map((zone) => {
          const isActive = zone.id === selectedId;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedId(zone.id)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#EFE8DC] border-[#B95333] shadow-xs'
                  : 'bg-white/60 hover:bg-[#F6F1E7] border-[#E5DDCF]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`p-2 rounded-md ${
                    isActive ? 'bg-[#B95333] text-white' : 'bg-[#E7DED0] text-[#554C41]'
                  }`}
                >
                  {getIcon(zone.category)}
                </span>
                <span className="font-mono tabular-nums text-xs text-[#7A6F62]">
                  ₹{zone.hourlyRate}/hr
                </span>
              </div>
              <div>
                <h4 className="font-editorial text-lg text-[#221F1C] font-semibold leading-snug">
                  {zone.title}
                </h4>
                <div className="text-[11px] text-[#7A6F62] uppercase tracking-wider mt-1 truncate">
                  {zone.highlight}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Asymmetric Spotlight Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#F4EFE6] rounded-2xl border border-[#E3DACB] p-6 lg:p-10">
        {/* Left Visual Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {renderVisual(activeZone.id)}
        </div>

        {/* Right Editorial Details (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-4 lg:pt-0">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#7E7265]">
              <span>SPACE SPECIFICATION</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#B95333] font-semibold uppercase">{activeZone.highlight}</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#221F1C] font-semibold leading-tight">
              {activeZone.title}
            </h3>

            <p className="text-sm text-[#665D50] leading-relaxed">
              {activeZone.description}
            </p>

            {/* Hardware / Amenity Specs */}
            <div className="space-y-2.5 pt-4 border-t border-[#E3DACB]">
              <div className="text-[11px] uppercase tracking-wider text-[#8A7D70] font-semibold">
                Equipment &amp; Ergonomics
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeZone.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/70 border border-[#E4DCCF] text-xs text-[#3D352B] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B95333] shrink-0" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Reservation Action */}
          <div className="pt-6 border-t border-[#E3DACB] flex items-center justify-between">
            <div>
              <div className="text-[11px] text-[#8A7D70] uppercase tracking-wider">Hourly Rate</div>
              <div className="font-mono tabular-nums text-2xl font-bold text-[#221F1C]">
                ₹{activeZone.hourlyRate}
                <span className="text-xs font-normal text-[#786D60] font-sans ml-1">/ hour</span>
              </div>
            </div>
            <button
              onClick={() => onBookZone(activeZone.id)}
              className="px-6 py-3 bg-[#B95333] hover:bg-[#933E25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Reserve Station</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
