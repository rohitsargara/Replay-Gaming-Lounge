import React from 'react';

/**
 * Architectural and Culinary Visual Assets
 * Rendered using precision SVG & CSS with Warm Contemporary tones:
 * Warm Ivory, Sand, Terracotta, Muted Olive, Travertine, Fluted Timber & Brass.
 */

export const HeroArchitecturalVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#F2ECE1] rounded-2xl shadow-[0_20px_50px_-20px_rgba(50,40,30,0.12)] border border-[#E4DCCF] ${className}`}>
      <svg
        viewBox="0 0 1200 680"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Architectural interior of Replay Gaming Lounge & Cafe"
      >
        <defs>
          <linearGradient id="wallWash" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9F6F0" />
            <stop offset="60%" stopColor="#EDE5D8" />
            <stop offset="100%" stopColor="#E2D8C7" />
          </linearGradient>
          <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D9CEBC" />
            <stop offset="100%" stopColor="#C9BCB0" />
          </linearGradient>
          <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C66243" />
            <stop offset="100%" stopColor="#9C4429" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97736" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#F6C28B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7E9B70" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="warmLightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7E6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFF7E6" stopOpacity="0.0" />
          </linearGradient>
          <pattern id="flutedTimber" width="20" height="40" patternUnits="userSpaceOnUse">
            <rect width="10" height="40" fill="#75563D" />
            <rect x="10" width="10" height="40" fill="#654832" />
          </pattern>
          <pattern id="linenWeave" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#E8DEC\-B" />
            <path d="M0 4h8 M4 0v8" stroke="#D7CBB7" strokeWidth="0.8" opacity="0.4" />
          </pattern>
        </defs>

        {/* Limewash Walls */}
        <rect width="1200" height="500" fill="url(#wallWash)" />

        {/* Polished Microcement Floor */}
        <polygon points="0,500 1200,500 1200,680 0,680" fill="url(#floorGrad)" />
        <line x1="0" y1="500" x2="1200" y2="500" stroke="#BAAEA0" strokeWidth="2" opacity="0.6" />

        {/* Acoustic Fluted Wood Feature Wall (Left Alcove) */}
        <rect x="70" y="90" width="340" height="410" fill="url(#flutedTimber)" rx="4" />
        <rect x="70" y="90" width="340" height="410" fill="#000000" opacity="0.12" />

        {/* Minimalist Recessed Architectural Gaming Rig Inset */}
        <rect x="110" y="140" width="260" height="190" rx="8" fill="#25211E" stroke="#483F37" strokeWidth="2" />
        {/* Curved Ultra-wide Monitor */}
        <rect x="135" y="165" width="210" height="120" rx="4" fill="#141211" stroke="#3A332C" strokeWidth="1" />
        <rect x="140" y="170" width="200" height="110" rx="2" fill="url(#screenGlow)" />
        {/* Soft UI Wireframe silhouette on screen */}
        <circle cx="240" cy="225" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
        <line x1="170" y1="260" x2="310" y2="260" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
        {/* Minimalist Walnut Desk */}
        <rect x="90" y="325" width="300" height="22" rx="3" fill="#4E3B2C" />
        {/* Ergonomic Lounge Chair Silhouette */}
        <path d="M210,345 C210,320 270,320 270,345 L265,460 C265,475 215,475 215,460 Z" fill="#2E2823" opacity="0.9" />
        <rect x="235" y="460" width="10" height="40" fill="#1C1815" />
        <circle cx="240" cy="500" r="18" fill="#1C1815" />

        {/* Sunlit Large Architectural Window (Center-Right) */}
        <rect x="490" y="60" width="380" height="420" rx="6" fill="#FBF9F4" stroke="#D3C7B6" strokeWidth="3" />
        {/* Window Mullions */}
        <line x1="680" y1="60" x2="680" y2="480" stroke="#D3C7B6" strokeWidth="3" />
        <line x1="490" y1="230" x2="870" y2="230" stroke="#D3C7B6" strokeWidth="3" />
        <line x1="490" y1="360" x2="870" y2="360" stroke="#D3C7B6" strokeWidth="2" opacity="0.6" />
        {/* Sunlight cast beam */}
        <polygon points="560,60 870,60 1100,680 720,680" fill="url(#warmLightBeam)" />

        {/* Deep Sand Linen Banquette / Lounge Sofa */}
        <rect x="520" y="390" width="460" height="110" rx="8" fill="#D7CCBC" stroke="#C3B6A3" strokeWidth="1.5" />
        <rect x="540" y="405" width="200" height="85" rx="6" fill="#C9BDAE" />
        <rect x="760" y="405" width="200" height="85" rx="6" fill="#C9BDAE" />
        {/* Terracotta Decorative Cushion */}
        <rect x="555" y="420" width="60" height="60" rx="10" fill="url(#terracottaGrad)" />
        <rect x="880" y="420" width="65" height="55" rx="8" fill="#4B5640" />

        {/* Sculptural Travertine Coffee Table */}
        <ellipse cx="750" cy="545" rx="130" ry="42" fill="#EAE3D5" stroke="#D6CBBB" strokeWidth="2" />
        {/* Ceramic Artisan Cups & Pour-Over on Table */}
        <rect x="735" y="525" width="18" height="16" rx="2" fill="#B95333" />
        <ellipse cx="744" cy="525" rx="9" ry="3" fill="#D36B4A" />
        <rect x="765" y="520" width="22" height="24" rx="3" fill="#3D4534" />

        {/* Large Potted Olive Tree in Terracotta Urn (Right) */}
        <ellipse cx="1020" cy="530" rx="48" ry="14" fill="#A89E90" opacity="0.5" />
        <path d="M980,520 L995,440 L1045,440 L1060,520 Z" fill="url(#terracottaGrad)" />
        <ellipse cx="1020" cy="440" rx="25" ry="6" fill="#843920" />
        {/* Olive Tree Branches & Leaves */}
        <path d="M1020,440 Q1015,360 990,280 Q980,240 960,190" stroke="#5C4836" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M1005,340 Q1050,300 1080,250" stroke="#5C4836" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M980,290 Q940,260 920,230" stroke="#5C4836" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Foliage Clusters (Muted Olive & Sage) */}
        <circle cx="950" cy="190" r="38" fill="#525E45" opacity="0.88" />
        <circle cx="980" cy="160" r="42" fill="#627053" opacity="0.85" />
        <circle cx="1070" cy="240" r="40" fill="#4D583F" opacity="0.9" />
        <circle cx="920" cy="225" r="32" fill="#6A7A5A" opacity="0.8" />
        <circle cx="1020" cy="200" r="45" fill="#444E38" opacity="0.92" />

        {/* Hanging Brass Linear Luminaire */}
        <line x1="240" y1="0" x2="240" y2="105" stroke="#9A8358" strokeWidth="2" />
        <line x1="750" y1="0" x2="750" y2="85" stroke="#9A8358" strokeWidth="2" />
        <rect x="180" y="105" width="120" height="6" rx="2" fill="#C5A86A" />
        <rect x="660" y="85" width="180" height="7" rx="3" fill="#C5A86A" />
        {/* Ambient Warm Halo below lamps */}
        <circle cx="240" cy="115" r="40" fill="#FFECC2" opacity="0.18" />
        <circle cx="750" cy="98" r="60" fill="#FFECC2" opacity="0.22" />

        {/* Ambient Subtle Vignette */}
        <rect width="1200" height="680" fill="none" stroke="#D8CEBD" strokeWidth="1" />
      </svg>

      {/* Floating Quiet Architectural Plaque */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#FAF7F2]/95 backdrop-blur-md px-5 py-3 rounded-lg border border-[#E3DACB] shadow-sm max-w-xs">
        <div className="text-[11px] uppercase tracking-wider text-[#8A7F72] font-semibold mb-0.5">
          Atmospheric Interior · Udaipur
        </div>
        <div className="font-editorial text-lg text-[#26211C] leading-snug">
          Where tournament precision meets tactile calm.
        </div>
      </div>
    </div>
  );
};

export const CulinaryVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#FAF5EC] rounded-xl border border-[#E5DDCF] shadow-[0_10px_30px_-15px_rgba(50,40,30,0.08)] ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Handcrafted cafe food at Replay: Mexican honey chilli potatoes, stone deck pizza, and cold brew"
      >
        <defs>
          <linearGradient id="tableWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFD5C5" />
            <stop offset="100%" stopColor="#CEC0AE" />
          </linearGradient>
          <radialGradient id="terracottaBowl" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#D96E4C" />
            <stop offset="80%" stopColor="#A84B30" />
            <stop offset="100%" stopColor="#7E331B" />
          </radialGradient>
          <radialGradient id="pizzaDough" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#E3BB88" />
            <stop offset="90%" stopColor="#B37A43" />
            <stop offset="100%" stopColor="#885023" />
          </radialGradient>
        </defs>

        {/* Rustic Natural Timber Table Top */}
        <rect width="600" height="450" fill="url(#tableWood)" />
        {/* Soft Organic Linen Runner */}
        <polygon points="40,0 240,0 320,450 120,450" fill="#EFE8DC" opacity="0.8" />
        <line x1="240" y1="0" x2="320" y2="450" stroke="#D3C6B2" strokeWidth="1" strokeDasharray="3 3" />

        {/* 1. Terracotta Platter with Signature Mexican Honey Chilli Potatoes (Left) */}
        <ellipse cx="200" cy="220" rx="145" ry="110" fill="#9C8F7E" opacity="0.25" />
        <ellipse cx="200" cy="215" rx="140" ry="105" fill="url(#terracottaBowl)" stroke="#E58769" strokeWidth="1.5" />
        <ellipse cx="200" cy="215" rx="120" ry="88" fill="#883821" opacity="0.6" />

        {/* Crispy Golden Glazed Batons */}
        <g transform="translate(130, 160)">
          <rect x="20" y="40" width="75" height="18" rx="6" transform="rotate(-15)" fill="#D48628" stroke="#F1B662" strokeWidth="1.5" />
          <rect x="45" y="25" width="80" height="18" rx="6" transform="rotate(25)" fill="#C27318" stroke="#F6C37A" strokeWidth="1.5" />
          <rect x="60" y="55" width="70" height="17" rx="5" transform="rotate(-5)" fill="#DB8B2B" stroke="#FED995" strokeWidth="1.5" />
          <rect x="35" y="65" width="85" height="18" rx="6" transform="rotate(12)" fill="#B56715" stroke="#EAA24B" strokeWidth="1.5" />
          <rect x="75" y="30" width="60" height="16" rx="5" transform="rotate(45)" fill="#DE9233" stroke="#FFE0A6" strokeWidth="1.5" />
          {/* Honey Glistening Dots & Sesame Seeds */}
          <circle cx="50" cy="45" r="2" fill="#FFFFFF" />
          <circle cx="78" cy="35" r="2.2" fill="#FFFFFF" />
          <circle cx="102" cy="55" r="2" fill="#FFFFFF" />
          <circle cx="85" cy="70" r="1.8" fill="#FFFFFF" />
          <circle cx="40" cy="68" r="2" fill="#FFFFFF" />
          {/* Fresh Spring Scallion Ribbons (Olive / Green) */}
          <path d="M40,40 Q55,30 65,42" stroke="#68844D" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M80,50 Q95,45 105,60" stroke="#526A3B" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M60,65 Q70,75 85,70" stroke="#779657" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* 2. Artisanal Stone Oven Pizza Board (Top Right) */}
        <g transform="translate(380, 80)">
          {/* Wooden Round Board */}
          <ellipse cx="120" cy="110" rx="100" ry="85" fill="#A27F5C" stroke="#7E5F40" strokeWidth="2" />
          <rect x="180" y="160" width="45" height="20" rx="4" transform="rotate(35)" fill="#8D6C4B" />
          {/* Pizza Base */}
          <ellipse cx="120" cy="110" rx="90" ry="75" fill="url(#pizzaDough)" />
          {/* Rich Tomato Sauce & Melted Mozzarella */}
          <ellipse cx="120" cy="110" rx="76" ry="62" fill="#BD3C1B" />
          <path d="M80,85 Q110,65 150,85 Q170,120 145,145 Q100,160 85,130 Z" fill="#F4EAD1" opacity="0.88" />
          {/* Charred Basil Leaves */}
          <ellipse cx="100" cy="95" rx="10" ry="6" transform="rotate(-20)" fill="#3D4B31" />
          <ellipse cx="140" cy="120" rx="12" ry="7" transform="rotate(30)" fill="#4B5C3D" />
          <ellipse cx="125" cy="85" rx="9" ry="5" transform="rotate(10)" fill="#36432B" />
          {/* Charred blister spots on crust */}
          <circle cx="50" cy="100" r="3" fill="#422915" />
          <circle cx="160" cy="65" r="4" fill="#3D2513" />
          <circle cx="195" cy="130" r="3.5" fill="#4B2C15" />
        </g>

        {/* 3. Chilled Cold Brew Glass with Ice (Bottom Right) */}
        <g transform="translate(420, 260)">
          <ellipse cx="50" cy="140" rx="45" ry="14" fill="#8C7F70" opacity="0.3" />
          {/* Glass Contour */}
          <path d="M25,50 L32,130 Q50,140 68,130 L75,50 Z" fill="#FFFFFF" fillOpacity="0.25" stroke="#E3DACB" strokeWidth="1.5" />
          {/* Dark Amber Brew */}
          <path d="M28,75 L33,128 Q50,136 67,128 L72,75 Z" fill="#2E180E" opacity="0.9" />
          {/* Clear Ice Cubes Floating */}
          <rect x="36" y="80" width="16" height="16" rx="2" fill="#E8DEC\-B" fillOpacity="0.4" stroke="#FFFFFF" strokeWidth="0.8" />
          <rect x="48" y="92" width="15" height="15" rx="2" fill="#E8DEC\-B" fillOpacity="0.35" stroke="#FFFFFF" strokeWidth="0.8" />
          {/* Glass Rim highlight */}
          <ellipse cx="50" cy="50" rx="25" ry="6" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
        </g>

        {/* Botanical Rosemary Sprig */}
        <path d="M60,340 Q110,310 160,350" stroke="#4D583F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="90" y1="330" x2="85" y2="315" stroke="#5D6A4D" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="328" x2="115" y2="312" stroke="#5D6A4D" strokeWidth="2" strokeLinecap="round" />
        <line x1="130" y1="335" x2="135" y2="320" stroke="#5D6A4D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export const GamingStationVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#1E1B18] rounded-xl border border-[#3A332C] shadow-[0_12px_36px_-12px_rgba(20,16,12,0.3)] ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-label="High-refresh esports battle rig at Replay"
      >
        <defs>
          <linearGradient id="amberBacklight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#DF7B38" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#C45620" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1E1B18" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="monitorDisplay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121110" />
            <stop offset="40%" stopColor="#1A1816" />
            <stop offset="100%" stopColor="#25211D" />
          </linearGradient>
          <pattern id="slats" width="16" height="40" patternUnits="userSpaceOnUse">
            <rect width="6" height="40" fill="#3D3024" />
            <rect x="6" width="10" height="40" fill="#292018" />
          </pattern>
        </defs>

        {/* Fluted Oak Acoustic Backdrop */}
        <rect width="600" height="450" fill="url(#slats)" />

        {/* Warm Ambient Halo Behind Station */}
        <ellipse cx="300" cy="200" rx="220" ry="160" fill="url(#amberBacklight)" />

        {/* Solid Walnut Desk Surface */}
        <polygon points="40,320 560,320 600,450 0,450" fill="#2E241B" stroke="#483B2E" strokeWidth="1.5" />
        <line x1="40" y1="320" x2="560" y2="320" stroke="#715C47" strokeWidth="2" />

        {/* 240Hz Pro Tournament Ultra-Wide Display */}
        <g transform="translate(110, 80)">
          {/* Aluminum Monitor Stand */}
          <polygon points="175,210 205,210 200,245 180,245" fill="#4B433C" />
          <polygon points="140,245 240,245 220,252 160,252" fill="#332D28" />
          {/* Display Bezel */}
          <rect x="0" y="0" width="380" height="215" rx="6" fill="#0E0D0C" stroke="#2D2823" strokeWidth="2" />
          {/* Anti-Glare Screen Surface */}
          <rect x="6" y="6" width="368" height="203" rx="4" fill="url(#monitorDisplay)" />
          {/* Tactical Game Crosshair / Telemetry HUD */}
          <circle cx="190" cy="107" r="32" fill="none" stroke="#D97736" strokeWidth="1.2" opacity="0.6" strokeDasharray="6 3" />
          <line x1="150" y1="107" x2="175" y2="107" stroke="#D97736" strokeWidth="1.5" opacity="0.8" />
          <line x1="205" y1="107" x2="230" y2="107" stroke="#D97736" strokeWidth="1.5" opacity="0.8" />
          <line x1="190" y1="70" x2="190" y2="92" stroke="#D97736" strokeWidth="1.5" opacity="0.8" />
          <line x1="190" y1="122" x2="190" y2="144" stroke="#D97736" strokeWidth="1.5" opacity="0.8" />
          {/* Frame-Rate / Latency Indicator Overlay */}
          <text x="20" y="30" fill="#78A66D" fontSize="12" fontFamily="monospace" letterSpacing="1">
            240 FPS · 8ms PING
          </text>
          <text x="290" y="30" fill="#C5AA7B" fontSize="11" fontFamily="sans-serif">
            RTX 40-SERIES
          </text>
        </g>

        {/* Compact 75% Mechanical Keyboard */}
        <g transform="translate(180, 345)">
          <rect x="0" y="0" width="240" height="75" rx="6" fill="#1C1917" stroke="#3D3630" strokeWidth="1.5" />
          {/* Subtle Keycap Rows */}
          <line x1="10" y1="18" x2="230" y2="18" stroke="#332D28" strokeWidth="8" strokeDasharray="14 3" />
          <line x1="10" y1="32" x2="230" y2="32" stroke="#332D28" strokeWidth="8" strokeDasharray="14 3" />
          <line x1="10" y1="46" x2="230" y2="46" stroke="#332D28" strokeWidth="8" strokeDasharray="14 3" />
          <line x1="40" y1="60" x2="180" y2="60" stroke="#443D36" strokeWidth="8" />
        </g>

        {/* Precision Esports Mouse & Cord-Free Pad */}
        <g transform="translate(450, 355)">
          <rect x="-10" y="-10" width="100" height="90" rx="4" fill="#171513" stroke="#2B2621" strokeWidth="1" />
          <ellipse cx="40" cy="35" rx="18" ry="28" fill="#24201D" stroke="#50453B" strokeWidth="1.2" />
          <line x1="40" y1="12" x2="40" y2="30" stroke="#D97736" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export const SnookerVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#22271E] rounded-xl border border-[#373F2F] shadow-[0_12px_36px_-12px_rgba(20,25,18,0.25)] ${className}`}>
      <svg
        viewBox="0 0 600 450"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Tournament standard English pool and snooker table at Replay"
      >
        <defs>
          <linearGradient id="clothOlive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3C4831" />
            <stop offset="50%" stopColor="#2E3825" />
            <stop offset="100%" stopColor="#242C1D" />
          </linearGradient>
          <radialGradient id="brassCone" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#D9B774" />
            <stop offset="100%" stopColor="#8C6E33" />
          </radialGradient>
        </defs>

        {/* Ambient Warm Lounge Background */}
        <rect width="600" height="450" fill="#1B1E17" />

        {/* Overhead Brass Light Cone on Cloth */}
        <polygon points="120,40 480,40 560,420 40,420" fill="#FFF9ED" opacity="0.09" />

        {/* Snooker Table Cushion Frame (Rich Dark Walnut) */}
        <polygon points="60,110 540,110 570,390 30,390" fill="#3D2E22" stroke="#5C4736" strokeWidth="3" />
        {/* Cushion Bevel */}
        <polygon points="85,130 515,130 540,370 60,370" fill="#291F17" />

        {/* Tournament Muted Olive Cloth */}
        <polygon points="95,140 505,140 530,360 70,360" fill="url(#clothOlive)" stroke="#4A593D" strokeWidth="1" />

        {/* Pockets */}
        <ellipse cx="90" cy="135" rx="14" ry="10" fill="#0D0F0C" />
        <ellipse cx="510" cy="135" rx="14" ry="10" fill="#0D0F0C" />
        <ellipse cx="300" cy="133" rx="12" ry="7" fill="#0D0F0C" />
        <ellipse cx="65" cy="365" rx="16" ry="12" fill="#0D0F0C" />
        <ellipse cx="535" cy="365" rx="16" ry="12" fill="#0D0F0C" />
        <ellipse cx="300" cy="367" rx="14" ry="8" fill="#0D0F0C" />

        {/* Baulk Line and 'D' */}
        <line x1="180" y1="145" x2="160" y2="355" stroke="#E3E6DC" strokeWidth="1" opacity="0.4" />
        <path d="M170,220 A 40 40 0 0 1 170 280" stroke="#E3E6DC" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Snooker Balls on Cloth */}
        {/* Cue Ball (Ivory) */}
        <circle cx="150" cy="250" r="11" fill="#FAF6EE" stroke="#E2DAC9" strokeWidth="1" />
        <circle cx="147" cy="247" r="3" fill="#FFFFFF" opacity="0.8" />

        {/* Object Balls (Terracotta Red Triangle Pack) */}
        <g transform="translate(360, 230)">
          <circle cx="0" cy="20" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          <circle cx="16" cy="11" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          <circle cx="16" cy="29" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          <circle cx="32" cy="2" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          <circle cx="32" cy="20" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          <circle cx="32" cy="38" r="10" fill="#B9492E" stroke="#D66043" strokeWidth="1" />
          {/* Black Ball on Spot */}
          <circle cx="85" cy="20" r="10.5" fill="#181816" stroke="#3D3B36" strokeWidth="1" />
          <circle cx="83" cy="17" r="3" fill="#6A675F" opacity="0.6" />
        </g>

        {/* Tapered Ash Cue Resting along table */}
        <line x1="20" y1="410" x2="380" y2="290" stroke="#BA9C72" strokeWidth="4" strokeLinecap="round" />
        <line x1="20" y1="410" x2="100" y2="383" stroke="#221C16" strokeWidth="5" strokeLinecap="round" />
        <circle cx="380" cy="290" r="2.5" fill="#4B6DA8" />

        {/* Overhead Brass Pendant Fixture */}
        <line x1="240" y1="0" x2="240" y2="35" stroke="#AA8C51" strokeWidth="2" />
        <line x1="360" y1="0" x2="360" y2="35" stroke="#AA8C51" strokeWidth="2" />
        <rect x="200" y="32" width="200" height="14" rx="4" fill="url(#brassCone)" />
        <circle cx="250" cy="48" r="18" fill="#FFF2D6" opacity="0.4" />
        <circle cx="350" cy="48" r="18" fill="#FFF2D6" opacity="0.4" />
      </svg>
    </div>
  );
};
