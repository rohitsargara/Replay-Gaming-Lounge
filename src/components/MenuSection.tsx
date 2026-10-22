import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/businessData';
import { CulinaryVisual } from './ArchitecturalVisuals';
import { Plus, Check, ShoppingBag, Utensils, Sparkles } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [tablePlanItems, setTablePlanItems] = useState<{ [id: string]: number }>({});
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Curated Menu' },
    { id: 'signatures', label: 'House Signatures' },
    { id: 'pizzas', label: 'Stone-Fired Pizzas' },
    { id: 'bites', label: 'Small Bites' },
    { id: 'beverages', label: 'Craft Brews & Coolers' },
    { id: 'mains', label: 'Sizzlers & Mains' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const toggleItemInPlan = (item: MenuItem) => {
    setTablePlanItems((prev) => {
      const currentQty = prev[item.id] || 0;
      if (currentQty > 0) {
        const next = { ...prev };
        delete next[item.id];
        return next;
      } else {
        return { ...prev, [item.id]: 1 };
      }
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setTablePlanItems((prev) => {
      const current = prev[itemId] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return { ...prev, [itemId]: updated };
    });
  };

  const totalPlanCount = Object.values(tablePlanItems).reduce((sum, q) => sum + q, 0);
  const totalPlanCost = Object.entries(tablePlanItems).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <section id="menu" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E3DACB] pb-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B95333] mb-2 flex items-center gap-2">
            <span>02</span>
            <span>·</span>
            <span>Artisanal Kitchen &amp; Brew Bar</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#221F1C] tracking-tight text-balance">
            Handcrafted Flavors for Extended Sessions
          </h2>
        </div>
        <p className="text-sm text-[#685F53] max-w-md leading-relaxed">
          Crafted in-house from stone deck pizzas to our acclaimed Mexican Honey Chilli Potatoes and single-origin Arabica roasts. Fresh, wholesome dining that fuels conversation.
        </p>
      </div>

      {/* Asymmetrical Layout: Left Feature Visual + Right Menu Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 Cols): Culinary Plate Visual & Table Tasting Estimator Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <CulinaryVisual className="aspect-[4/3] w-full" />

          {/* Tasting Tray / Order Planner Card */}
          <div className="bg-[#F2ECE1] p-6 rounded-xl border border-[#E3DACB] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A6F62] font-semibold block">
                  Table Tasting Planner
                </span>
                <h4 className="font-editorial text-xl text-[#221F1C] font-semibold">
                  Curate Your Session Dining
                </h4>
              </div>
              <div className="p-2.5 bg-white/70 rounded-full text-[#B95333] border border-[#DDD3C2]">
                <Utensils className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs text-[#6B6153] leading-relaxed">
              Select dishes below to estimate your group dining. Average check in Udaipur is approx. <strong className="text-[#221F1C]">₹600 for two</strong>.
            </p>

            {totalPlanCount > 0 ? (
              <div className="space-y-3 pt-2 border-t border-[#E0D5C3]">
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {Object.entries(tablePlanItems).map(([id, qty]) => {
                    const dish = MENU_ITEMS.find((m) => m.id === id);
                    if (!dish) return null;
                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between text-xs py-1 border-b border-[#E5DAC8] last:border-0"
                      >
                        <div className="truncate pr-2">
                          <span className="font-medium text-[#221F1C]">{dish.name}</span>
                          <span className="text-[11px] text-[#7A6F62] ml-1.5 font-mono tabular-nums">
                            ₹{dish.price} × {qty}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => updateQuantity(id, -1)}
                            className="w-5 h-5 rounded bg-white text-[#4A4237] flex items-center justify-center font-mono hover:bg-[#EBE2D3]"
                          >
                            -
                          </button>
                          <span className="w-4 text-center font-mono tabular-nums font-semibold text-[#221F1C]">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity(id, 1)}
                            className="w-5 h-5 rounded bg-white text-[#4A4237] flex items-center justify-center font-mono hover:bg-[#EBE2D3]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#E0D5C3]">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7A6F62]">Estimated Total:</span>
                    <div className="font-mono tabular-nums text-lg font-bold text-[#B95333]">
                      ₹{totalPlanCost}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const msg = `Hi Replay Udaipur! Here is what we'd love to order at our visit:%0A${Object.entries(
                        tablePlanItems
                      )
                        .map(([id, qty]) => {
                          const dish = MENU_ITEMS.find((m) => m.id === id);
                          return `• ${dish?.name} (x${qty}) - ₹${(dish?.price || 0) * qty}`;
                        })
                        .join('%0A')}%0A*Total:* ₹${totalPlanCost}`;
                      window.open(`https://wa.me/919829636900?text=${msg}`, '_blank');
                    }}
                    className="px-4 py-2 bg-[#4E5942] hover:bg-[#3D4733] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Send Pre-Order
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-4 text-center border border-dashed border-[#DDD3C2] rounded-lg">
                <span className="text-xs text-[#877C6E]">
                  Click the + button on any dish below to add to your dining tray.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (7 Cols): Menu Filter Tabs & Itemized List */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Filter Controls (Allowed buttons for state selector) */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F2ECE1] rounded-lg border border-[#E3DACB]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#221F1C] shadow-xs font-semibold'
                      : 'text-[#6A6052] hover:text-[#221F1C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Dish Listings with Zero-Pill Typography */}
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isAdded = !!tablePlanItems[item.id];
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-white/70 hover:bg-white border border-[#E6DDD0] transition-all hover:shadow-[0_4px_20px_-10px_rgba(40,30,20,0.08)] group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#7F7466]">
                        {item.tag && (
                          <>
                            <span className="text-[#B95333] font-medium tracking-wide">
                              {item.tag}
                            </span>
                            <span aria-hidden="true">·</span>
                          </>
                        )}
                        <span>{item.category.toUpperCase()}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#4E5942] font-medium">100% Vegetarian Friendly</span>
                      </div>

                      {/* Dish Title */}
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#221F1C] font-semibold group-hover:text-[#B95333] transition-colors">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#665D51] leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Add CTA */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-mono tabular-nums text-base sm:text-lg font-bold text-[#221F1C]">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => toggleItemInPlan(item)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                          isAdded
                            ? 'bg-[#4E5942] text-white'
                            : 'bg-[#F2ECE1] text-[#3D362C] hover:bg-[#E5DDD0]'
                        }`}
                        title="Add to visit tasting plan"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Tray</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 p-4 rounded-lg bg-[#FAF4EA] border border-[#E8DFC\-F] text-xs text-[#766A5C] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>Special dietary or spicy customization available upon request at your table.</span>
            <span className="font-medium text-[#221F1C]">Freshly made on order · No artificial bases</span>
          </div>
        </div>
      </div>
    </section>
  );
};
