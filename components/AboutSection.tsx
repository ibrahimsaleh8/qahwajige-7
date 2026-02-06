import { AboutSectionData } from "@/lib/responseType";
import { Star } from "lucide-react";
import AboutImage from "./AnimatedComponents/AboutImage";
export default function AboutSection({
  description1,
  label,
  title,
  image,
}: AboutSectionData) {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5F5F5]" id="about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - RTL: left side */}
          {image && <AboutImage imageUrl={image} />}

          {/* Content - RTL: right side */}
          <div
            className={`text-center lg:text-right ${image ? "order-1 lg:order-2" : "lg:col-span-2 max-w-3xl mx-auto"}`}>
            {label && (
              <p className="text-white flex mb-5 bg-[#cf471a] w-fit px-6 py-2.5 rounded-full text-sm md:text-base max-w-2xl">
                {label}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A]-dark mb-5 leading-tight">
              {title}
            </h2>

            <div className="bg-white p-5 rounded-2xl shadow-sm mt-5">
              {description1 && (
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 lg:mr-0">
                  {description1}
                </p>
              )}

              {/* Stats - compact row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8">
                <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-slate-200 min-w-30">
                  <div className="text-2xl md:text-3xl font-bold text-main-color">
                    10+
                  </div>
                  <div className="text-slate-600 text-sm">سنوات الخبرة</div>
                </div>
                <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-slate-200 min-w-30">
                  <div className="text-2xl md:text-3xl font-bold text-main-color-dark">
                    500+
                  </div>
                  <div className="text-slate-600 text-sm">مناسبة ناجحة</div>
                </div>
                <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-slate-200 min-w-30">
                  <div className="flex items-center justify-center gap-0.5 mb-1">
                    <Star className="w-5 h-5 fill-main-color text-main-color" />
                    <span className="text-xl font-bold text-main-color-dark">
                      4.9
                    </span>
                  </div>
                  <div className="text-slate-600 text-sm">تقييم العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
