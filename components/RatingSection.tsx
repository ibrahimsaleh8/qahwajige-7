"use client";

import { useState, useEffect } from "react";
import { Star, Sparkles } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] focus-visible:ring-offset-2"
              aria-label={`تقييم ${star} من 5`}>
              <Star
                className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 ${
                  star <= value
                    ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                    : "fill-[#f3f4f6] text-[#f3f4f6]"
                }`}
              />
            </button>
          ) : (
            <Star
              className={`w-10 h-10 md:w-12 md:h-12 ${
                star <= value
                  ? "fill-amber-400 text-amber-400 drop-shadow-sm"
                  : "fill-[#f3f4f6] text-[#f3f4f6]"
              }`}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden bg-[#f9fafb]">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-[#ea580c]/5 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-40 rounded-full bg-[#ea580c]/5 blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <motion.div
          className="rounded-2xl bg-white border border-[#f3f4f6] hover:border-[#ea580c]/20 transition-colors duration-300 shadow-[0_1px_3px_rgba(15,23,42,0.06),0_4px_24px_rgba(15,23,42,0.06)] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#ea580c] to-[#c2410c]" />

          <div className="p-8 md:p-12 text-center">
            {/* Label */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fff7ed] border border-[#ea580c]/20 text-[#ea580c] text-xs font-bold tracking-widest uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              آراء العملاء
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0f172a] mb-3 leading-tight">
              قيّم{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#ea580c]">تجربتك</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#ea580c]/15 rounded-sm -z-0" />
              </span>{" "}
              معنا
            </h2>

            <p className="text-[#6b7280] text-base md:text-lg mb-8 max-w-md mx-auto">
              رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-10 bg-[#ea580c]/30 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
              <div className="h-px w-10 bg-[#ea580c]/30 rounded-full" />
            </div>

            {/* Stats row */}
            {(averageRating > 0 || totalRatings > 0) && (
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                {averageRating > 0 && (
                  <div className="flex items-center gap-2.5 bg-[#fff7ed] px-5 py-2.5 rounded-xl border border-[#ea580c]/10">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-[#6b7280] text-sm">/ 5</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.round(averageRating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-[#f3f4f6] text-[#f3f4f6]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div className="flex items-center gap-1.5 bg-[#f9fafb] px-5 py-2.5 rounded-xl border border-[#f3f4f6] text-[#6b7280] text-sm md:text-base">
                    <span className="font-bold text-[#0f172a] text-lg">
                      {totalRatings}
                    </span>
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                )}
              </div>
            )}

            {/* Stars interaction */}
            {submitted !== null && mounted ? (
              <motion.div
                className="py-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}>
                {renderStars(submitted, false)}
                <p className="text-[#ea580c] font-bold mt-5 text-lg">
                  شكراً لتقييمك! 🎉
                </p>
                <p className="text-[#6b7280] text-sm mt-1.5">
                  نسعد بتقييمك وسنعمل على تحسين تجربتك
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {renderStars(displayRating || 0, true)}
                <p className="text-[#6b7280] text-sm min-h-[1.25rem]">
                  {mounted && !isLoading
                    ? "انقر على النجم المناسب للتقييم"
                    : ""}
                  {isLoading && (
                    <span className="inline-flex items-center gap-1.5 text-[#ea580c]">
                      <span className="w-3.5 h-3.5 border-2 border-[#ea580c]/30 border-t-[#ea580c] rounded-full animate-spin" />
                      جاري الإرسال...
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
