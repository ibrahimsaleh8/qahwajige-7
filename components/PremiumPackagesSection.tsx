"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="py-20 md:py-28 relative overflow-hidden bg-[#f9fafb]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#ea580c]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#ea580c]/5 blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20 max-w-2xl mx-auto"
          dir="rtl">
          {/* Label pill */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fff7ed] border border-[#ea580c]/20 text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            باقاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-snug">
            اختر الباقة{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#ea580c]">المناسبة</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#ea580c]/15 rounded-sm z-0" />
            </span>{" "}
            لك
          </h2>
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-px w-12 bg-[#ea580c]/30 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
            <div className="h-px w-12 bg-[#ea580c]/30 rounded-full" />
          </div>
          <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto w-full">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              key={pkg.id}
              className="group relative flex flex-col h-full w-full rounded-2xl overflow-hidden bg-white
                shadow-[0_1px_3px_rgba(15,23,42,0.06),0_4px_16px_rgba(15,23,42,0.06)]
                hover:shadow-[0_8px_40px_rgba(234,88,12,0.12),0_2px_8px_rgba(15,23,42,0.08)]
                transition-all duration-500 hover:-translate-y-1.5
                border border-[#f3f4f6] hover:border-[#ea580c]/20">
              {/* Colored top accent bar */}
              <div className="h-1 w-full bg-linear-to-r from-[#ea580c] to-[#c2410c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-[#fff7ed]">
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#fff7ed] to-[#ffedd5]">
                    <span className="text-5xl font-extrabold text-[#ea580c]/30">
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                {/* Package badge */}
                <div className="absolute top-3 right-3" dir="rtl">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ea580c] text-white text-xs font-bold shadow-md">
                    الباقة {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7" dir="rtl">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-3 text-right leading-snug">
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-0.5 bg-[#ea580c] rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]/40" />
                </div>

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div className="flex-1 mb-6">
                    <p className="text-[#374151] text-xs font-bold mb-3 text-right uppercase tracking-wider">
                      المميزات
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + i * 0.05,
                            duration: 0.3,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 text-right">
                          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#fff7ed] border border-[#ea580c]/20 flex items-center justify-center">
                            <Check
                              className="w-3 h-3 text-[#ea580c]"
                              strokeWidth={3}
                            />
                          </span>
                          <span className="text-[#374151] text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-6" />
                )}

                {/* CTA Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base
                    transition-all duration-300 flex items-center justify-center gap-2
                    bg-[#ea580c] text-white
                    hover:bg-[#c2410c]
                    shadow-[0_2px_8px_rgba(234,88,12,0.25)]
                    hover:shadow-[0_4px_20px_rgba(234,88,12,0.4)]
                    hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  اطلب الخدمة عبر واتساب
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
