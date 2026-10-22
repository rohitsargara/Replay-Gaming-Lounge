import React, { useState } from 'react';
import { X, Check, Calendar, Clock, User, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, GAMING_ZONES } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedZoneId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedZoneId,
}) => {
  const [zoneId, setZoneId] = useState<string>(preselectedZoneId || 'pc-battlestations');
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('16:00');
  const [durationHours, setDurationHours] = useState<number>(2);
  const [players, setPlayers] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const currentZone = GAMING_ZONES.find((z) => z.id === zoneId) || GAMING_ZONES[0];
  const estimatedCost = currentZone.hourlyRate * durationHours;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `REP-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello Replay Gaming Lounge & Cafe! I would like to reserve a station.%0A%0A*Booking Ref:* ${bookingRef}%0A*Zone:* ${currentZone.title}%0A*Date:* ${date}%0A*Time:* ${timeSlot}%0A*Duration:* ${durationHours} hr(s)%0A*Players:* ${players}%0A*Name:* ${name}%0A*Contact:* ${contactNumber}${specialRequests ? `%0A*Note:* ${specialRequests}` : ''}%0A%0AThank you!`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-xl border border-[#E3DACB] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-[#F2EDE2] border-b border-[#E3DACB] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#8A7C6B] font-semibold block">
              Direct Reservation
            </span>
            <h3 className="font-editorial text-2xl text-[#221F1C] font-semibold">
              Reserve Your Station or Table
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6154] hover:text-[#221F1C] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E5ECE0] text-[#4E5942] flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-editorial text-2xl text-[#221F1C] mb-1">
                  Reservation Request Received
                </h4>
                <p className="text-sm text-[#6A6153] max-w-md mx-auto">
                  Your reference is <strong className="font-mono text-[#221F1C]">{bookingRef}</strong> for {currentZone.title} on {date} at {timeSlot}.
                </p>
              </div>

              <div className="bg-[#F2ECE1] p-4 rounded-lg text-left text-xs space-y-2 border border-[#E2D8C7] max-w-md mx-auto font-sans">
                <div className="flex justify-between text-[#6B6154]">
                  <span>Zone:</span>
                  <span className="font-medium text-[#221F1C]">{currentZone.title}</span>
                </div>
                <div className="flex justify-between text-[#6B6154]">
                  <span>Estimated Rate:</span>
                  <span className="font-mono tabular-nums font-semibold text-[#B95333]">₹{estimatedCost} ({durationHours} hrs)</span>
                </div>
                <div className="flex justify-between text-[#6B6154]">
                  <span>Guest:</span>
                  <span className="font-medium text-[#221F1C]">{name} ({contactNumber})</span>
                </div>
                <div className="flex justify-between text-[#6B6154]">
                  <span>Location:</span>
                  <span className="text-[#221F1C]">13, Tekri Madri Link Road, Udaipur</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#4E5942] hover:bg-[#3D4733] text-white rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-2.5 bg-[#F2EDE2] border border-[#DCD3C3] text-[#221F1C] hover:bg-[#EBE3D5] rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B95333]" />
                  Call Front Desk
                </a>
              </div>

              <p className="text-[11px] text-[#8C8274] pt-2">
                Our front desk holds reservations for 15 minutes past scheduled time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Zone Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1.5">
                  Choose Station or Space
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {GAMING_ZONES.map((zone) => {
                    const isSelected = zone.id === zoneId;
                    return (
                      <button
                        type="button"
                        key={zone.id}
                        onClick={() => setZoneId(zone.id)}
                        className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#EFE8DC] border-[#B95333] shadow-xs'
                            : 'bg-white/60 border-[#E4DC CF] hover:bg-[#F7F3EB]'
                        }`}
                      >
                        <div className="text-xs font-semibold text-[#24211D]">{zone.title}</div>
                        <div className="text-[11px] text-[#786D5F] font-mono tabular-nums mt-0.5">
                          ₹{zone.hourlyRate} / hr
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 bg-white border border-[#DDD3C2] rounded-md text-sm text-[#221F1C] focus:border-[#B95333] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#DDD3C2] rounded-md text-sm text-[#221F1C] focus:border-[#B95333] focus:outline-none"
                  >
                    <option value="11:00">11:00 AM (Morning Session)</option>
                    <option value="13:00">1:00 PM (Afternoon)</option>
                    <option value="15:00">3:00 PM (Late Afternoon)</option>
                    <option value="16:00">4:00 PM (Prime Evening)</option>
                    <option value="18:00">6:00 PM (Prime Evening)</option>
                    <option value="20:00">8:00 PM (Night Battle)</option>
                    <option value="21:30">9:30 PM (Late Night Session)</option>
                  </select>
                </div>
              </div>

              {/* Duration & Guests */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Duration
                  </label>
                  <div className="flex items-center gap-1.5 p-1 bg-[#EFE8DC] rounded-lg">
                    {[1, 2, 3, 4].map((hr) => (
                      <button
                        type="button"
                        key={hr}
                        onClick={() => setDurationHours(hr)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                          durationHours === hr
                            ? 'bg-white text-[#221F1C] shadow-xs'
                            : 'text-[#6A6052] hover:text-[#221F1C]'
                        }`}
                      >
                        {hr}h
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Players / Guests
                  </label>
                  <div className="flex items-center gap-1.5 p-1 bg-[#EFE8DC] rounded-lg">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setPlayers(num)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                          players === num
                            ? 'bg-white text-[#221F1C] shadow-xs'
                            : 'text-[#6A6052] hover:text-[#221F1C]'
                        }`}
                      >
                        {num === 6 ? '6+' : num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Mehta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#DDD3C2] rounded-md text-sm text-[#221F1C] focus:border-[#B95333] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#DDD3C2] rounded-md text-sm text-[#221F1C] focus:border-[#B95333] focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A6052] mb-1">
                  Notes / Game Titles (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Valorant / CS2 / FIFA 24 / Birthday setup"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-[#DDD3C2] rounded-md text-sm text-[#221F1C] focus:border-[#B95333] focus:outline-none"
                />
              </div>

              {/* Pricing & Submit */}
              <div className="pt-2 border-t border-[#E8DFC\-F] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#7C7164] uppercase tracking-wider">Estimated Tariff</div>
                  <div className="font-mono tabular-nums text-lg font-semibold text-[#B95333]">
                    ₹{estimatedCost}
                    <span className="text-xs text-[#7C7164] font-normal font-sans ml-1">
                      ({durationHours} hrs × ₹{currentZone.hourlyRate}/hr)
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#B95333] hover:bg-[#933E25] text-white rounded-md text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
