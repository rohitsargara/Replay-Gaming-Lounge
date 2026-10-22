import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Navigation, Phone, Clock, Copy, Check, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [currentUdaipurTime, setCurrentUdaipurTime] = useState<string>('');

  useEffect(() => {
    // Check Indian Standard Time (UTC+5:30)
    const updateTimeStatus = () => {
      const now = new Date();
      // IST is UTC + 5.5 hours
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 10 * 60 + 30; // 10:30 AM
      const closeMinutes = 23 * 60; // 11:00 PM

      setIsOpenNow(currentMinutes >= openMinutes && currentMinutes < closeMinutes);

      setCurrentUdaipurTime(
        istTime.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateTimeStatus();
    const interval = setInterval(updateTimeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E3DACB] pb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B95333] mb-2 flex items-center gap-2">
            <span>04</span>
            <span>·</span>
            <span>Udaipur Destination</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#221F1C] tracking-tight text-balance">
            Find Us in Santosh Nagar, Udaipur
          </h2>
        </div>
        <p className="text-sm text-[#685F53] max-w-md leading-relaxed">
          Conveniently situated on Tekri Madri Link Road, just 1.2 km from Udaipur City Railway Station. Free guest parking and direct road access.
        </p>
      </div>

      {/* 2-Column Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Card: Business Details & Schedule (5 Cols) */}
        <div className="lg:col-span-5 bg-[#F4EFE6] p-8 lg:p-10 rounded-2xl border border-[#E3DACB] flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            {/* Live Operational Status */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E3DACB]">
              <div>
                <span className="text-[11px] text-[#807466] uppercase tracking-wider block">
                  Udaipur Local Time: <span className="font-mono text-[#221F1C] font-semibold">{currentUdaipurTime || '10:30 AM'}</span>
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? 'bg-[#4E5942]' : 'bg-[#B95333]'
                    }`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#221F1C]">
                    {isOpenNow ? 'Open Now · Closes at 11:00 PM' : 'Currently Closed · Opens 10:30 AM'}
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#807466] font-mono tabular-nums">7 Days / Wk</span>
            </div>

            {/* Address Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#807466]">
                <MapPin className="w-4 h-4 text-[#B95333]" />
                <span>Street Address</span>
              </div>
              <p className="text-sm font-medium text-[#221F1C] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <div className="text-xs text-[#6F6456] flex items-center gap-1.5 pt-1">
                <span>Landmark:</span>
                <span className="font-medium text-[#221F1C]">{BUSINESS_INFO.landmark}</span>
              </div>
            </div>

            {/* Timings Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#807466]">
                <Clock className="w-4 h-4 text-[#B95333]" />
                <span>Operating Hours</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm py-1 border-b border-[#E8DEC\-F]">
                <span className="text-[#6F6456]">Monday – Sunday</span>
                <span className="font-mono tabular-nums font-semibold text-[#221F1C]">
                  {BUSINESS_INFO.hours.open} – {BUSINESS_INFO.hours.close}
                </span>
              </div>
              <div className="text-[11px] text-[#8C8072]">
                Kitchen and gaming desks remain open through all afternoon hours.
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#807466]">
                <Phone className="w-4 h-4 text-[#B95333]" />
                <span>Direct Contact</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-mono tabular-nums text-lg font-bold text-[#221F1C] hover:text-[#B95333] transition-colors"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
                <span className="text-xs text-[#7A6E5F]">Front Desk &amp; Bookings</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#E3DACB] flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-[#B95333] hover:bg-[#933E25] text-white rounded-md text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleCopyAddress}
              className="py-3 px-4 bg-white/80 hover:bg-white text-[#221F1C] border border-[#DDD3C2] rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#4E5942]" /> : <Copy className="w-4 h-4 text-[#6A5F52]" />}
              <span>{copied ? 'Copied' : 'Copy Address'}</span>
            </button>
          </div>
        </div>

        {/* Right Card: Curated Architectural Map Visual & Interactive Coordinate Badge (7 Cols) */}
        <div className="lg:col-span-7 bg-[#EBE4D8] rounded-2xl border border-[#DDD3C2] p-2 relative overflow-hidden flex flex-col min-h-[380px]">
          {/* Architectural Map Rendering */}
          <div className="relative w-full h-full min-h-[360px] rounded-xl overflow-hidden bg-[#F2EDE2]">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Map location of Replay Gaming Lounge & Cafe on Tekri Madri Link Road, Udaipur"
            >
              <defs>
                <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F9F6F0" />
                  <stop offset="100%" stopColor="#EDE5D8" />
                </linearGradient>
              </defs>

              <rect width="800" height="500" fill="url(#mapBg)" />

              {/* City Grid Blocks & Subtle Land Parcels */}
              <rect x="60" y="50" width="160" height="120" rx="4" fill="#E6DFC\-F" opacity="0.7" />
              <rect x="250" y="40" width="220" height="130" rx="4" fill="#E6DFC\-F" opacity="0.6" />
              <rect x="500" y="60" width="240" height="110" rx="4" fill="#E6DFC\-F" opacity="0.7" />

              <rect x="50" y="220" width="190" height="110" rx="4" fill="#E6DFC\-F" opacity="0.6" />
              <rect x="270" y="360" width="230" height="100" rx="4" fill="#E6DFC\-F" opacity="0.7" />
              <rect x="530" y="210" width="220" height="230" rx="4" fill="#E6DFC\-F" opacity="0.6" />

              {/* Major Roads (Udaipur Arteries) */}
              {/* Railway Line & Station Reference */}
              <line x1="0" y1="120" x2="800" y2="120" stroke="#CFC4B2" strokeWidth="6" strokeDasharray="14 10" />
              <text x="30" y="105" fill="#8E8272" fontSize="11" fontFamily="sans-serif" letterSpacing="1">
                UDAIPUR CITY RAILWAY CORRIDOR (~1.2 KM)
              </text>

              {/* Tekri Madri Link Road (Primary Access) */}
              <path d="M120,480 L320,310 L480,240 L780,180" stroke="#DFD5C4" strokeWidth="24" strokeLinecap="round" />
              <path d="M120,480 L320,310 L480,240 L780,180" stroke="#FAF7F2" strokeWidth="16" strokeLinecap="round" />
              <text x="320" y="275" fill="#7C7060" fontSize="11" fontFamily="sans-serif" fontWeight="600" transform="rotate(-23 320 275)">
                TEKRI MADRI LINK ROAD
              </text>

              {/* Connecting Santosh Nagar / Gayariawas Lane */}
              <path d="M480,240 L440,360 L380,480" stroke="#DFD5C4" strokeWidth="16" strokeLinecap="round" />
              <path d="M480,240 L440,360 L380,480" stroke="#FAF7F2" strokeWidth="10" strokeLinecap="round" />

              <path d="M260,120 L320,310" stroke="#DFD5C4" strokeWidth="14" strokeLinecap="round" />
              <path d="M260,120 L320,310" stroke="#FAF7F2" strokeWidth="8" strokeLinecap="round" />

              {/* Replay Destination Marker Pin */}
              <g transform="translate(480, 240)">
                {/* Pulse Aura */}
                <circle cx="0" cy="0" r="36" fill="#B95333" opacity="0.12" />
                <circle cx="0" cy="0" r="22" fill="#B95333" opacity="0.22" />
                {/* Pin Head */}
                <path
                  d="M0,-32 C-14,-32 -24,-22 -24,-8 C-24,10 0,34 0,34 C0,34 24,10 24,-8 C24,-22 14,-32 0,-32 Z"
                  fill="#B95333"
                  stroke="#FAF7F2"
                  strokeWidth="2.5"
                />
                <circle cx="0" cy="-10" r="7" fill="#FAF7F2" />
              </g>

              {/* Label Callout on Map */}
              <g transform="translate(515, 205)">
                <rect x="0" y="0" width="220" height="60" rx="8" fill="#FAF7F2" stroke="#DED4C5" strokeWidth="1.5" />
                <text x="14" y="24" fill="#221F1C" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  Replay Gaming Lounge
                </text>
                <text x="14" y="44" fill="#7C7060" fontSize="11" fontFamily="sans-serif">
                  13, Tekri Madri Link Rd · 4.6 ★
                </text>
              </g>
            </svg>

            {/* Direct Open in Google Maps Banner */}
            <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#DFD5C4] flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-[#221F1C] flex items-center gap-1.5">
                  <span>Coordinates:</span>
                  <span className="font-mono tabular-nums text-[#B95333]">
                    {BUSINESS_INFO.coordinates.lat}°N, {BUSINESS_INFO.coordinates.lng}°E
                  </span>
                </div>
                <div className="text-[11px] text-[#7C7060]">
                  Verified Google Maps business entity in Udaipur
                </div>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#221F1C] hover:bg-[#B95333] text-white text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
