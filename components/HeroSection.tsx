import { HeroSectionData } from "@/lib/responseType";
import Image from "next/image";
import HeroImage from "@/public/images/wide.jpg";
import HeroLinks from "./AnimatedComponents/HeroLinks";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
}: HeroSectionData) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
      </div>

      {/* Content over image - inspired by new design */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="flex items-center justify-center ">
          {/* Text content - RTL: on the right */}
          <div className="order-1 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-5 py-2 mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-main-color" />
              <span className="text-sm md:text-base text-white/80">
                أصالة الضيافة السعودية
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
              {headline}
            </h1>
            <p className="text-white/85 text-base md:text-lg mb-8 mx-auto leading-relaxed drop-shadow-sm max-w-xl ml-auto">
              {subheadline}
            </p>
            <HeroLinks whatsApp={whatsApp} />
          </div>
        </div>
      </div>
    </section>
  );
}
