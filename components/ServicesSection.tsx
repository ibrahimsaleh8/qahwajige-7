import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, RefreshCw, Heart, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users: RefreshCw,
  Heart,
  Building2: Coffee,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section className="py-20 px-4 bg-slate-50" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-white flex mb-5 bg-[#cf471a] w-fit px-6 py-2.5 rounded-full text-sm md:text-base max-w-2xl mx-auto">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4A4A4A] mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items &&
            items.map((card) => {
              const IconComponent =
                iconMap[card.icon as keyof typeof iconMap] || Coffee;
              return (
                <div
                  key={card.title}
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 text-right">
                  <div className="w-14 h-14 bg-main-color/10 rounded-2xl flex items-center justify-center mb-6 text-main-color">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                    <span>خدمة متكاملة وفق أعلى المعايير</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
