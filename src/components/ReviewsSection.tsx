import React, { useState } from 'react';
import { VERIFIED_REVIEWS, FAQS, BUSINESS_INFO } from '../data/businessData';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E3DACB] pb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B95333] mb-2 flex items-center gap-2">
            <span>05</span>
            <span>·</span>
            <span>Guest Chronicles &amp; Inquiries</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#221F1C] tracking-tight text-balance">
            Rooted in Udaipur Since 2017
          </h2>
        </div>
        <div className="flex items-center gap-3 bg-[#F2EDE2] px-5 py-3 rounded-xl border border-[#DFD6C7]">
          <div className="flex text-[#D97736]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <div className="text-xs text-[#524B41]">
            <strong className="font-mono text-sm font-bold text-[#221F1C]">{BUSINESS_INFO.rating}</strong>
            <span className="ml-1 text-[#786D5F]">/ 5.0 ({BUSINESS_INFO.reviewsCount}+ Verified Reviews)</span>
          </div>
        </div>
      </div>

      {/* Testimonials Grid (3 Asymmetric Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {VERIFIED_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-8 rounded-2xl bg-white/70 border border-[#E5DDCF] flex flex-col justify-between space-y-6 hover:shadow-[0_8px_30px_-15px_rgba(40,30,20,0.08)] transition-all"
          >
            <div className="space-y-4">
              <Quote className="w-6 h-6 text-[#B95333]/50" />
              <p className="text-sm text-[#4E463C] leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAE2D5] space-y-1">
              <div className="text-sm font-semibold text-[#221F1C]">{rev.author}</div>
              <div className="text-xs text-[#827668] flex items-center gap-2">
                <span>{rev.role}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#4E5942] font-medium">{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Frequently Answered Inquiries */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B95333]">
            Essential Inquiries
          </span>
          <h3 className="font-editorial text-3xl text-[#221F1C] font-semibold">
            Planning Your Visit to Replay
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#E3DACB] bg-[#F7F3EA] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2ECE1] transition-colors"
                >
                  <span className="text-sm font-semibold text-[#221F1C]">
                    {faq.question}
                  </span>
                  <span className="text-[#807466] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#665D50] leading-relaxed border-t border-[#EAE1D3] bg-[#FAF7F2]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
