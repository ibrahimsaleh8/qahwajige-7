import { Phone, ClipboardList, Users, Star } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "تواصل معنا",
    description:
      "تواصل معنا عبر واتساب أو الهاتف لمناقشة احتياجاتك وتفاصيل مناسبتك. فريقنا متاح على مدار الساعة للرد على استفساراتك.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "تحديد متطلبات الحفل",
    description:
      "نحدد معك عدد الضيوف، نوع المناسبة، الموعد والمكان، وكل التفاصيل اللازمة لتقديم خدمة متكاملة تلائم توقعاتك.",
  },
  {
    icon: Users,
    number: "03",
    title: "إرسال فريق القهوجين",
    description:
      "نُرسل لك فريقاً من القهوجين المحترفين في الوقت المحدد، مجهزين بأفضل أدوات الضيافة وأجود أنواع البن العربي الأصيل.",
  },
  {
    icon: Star,
    number: "04",
    title: "تجربة لا تُنسى",
    description:
      "نضمن لك وضيوفك تجربة ضيافة استثنائية تعكس أصالة الكرم السعودي، وتترك أثراً طيباً في قلوب جميع الحضور.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="py-20 md:py-28 px-4 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#cf471a]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#cf471a]/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#cf471a] text-white text-sm font-semibold px-6 py-2.5 rounded-full mb-5">
            كيف نعمل
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-snug">
            خطوات بسيطة لضيافة{" "}
            <span className="text-[#cf471a]">استثنائية</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            من أول تواصل حتى نهاية المناسبة، نحن معك في كل خطوة
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-gradient-to-l from-[#cf471a]/40 to-transparent z-0" />
                )}

                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#cf471a]/20 group-hover:border-[#cf471a]/40 transition-all duration-500 shadow-lg">
                  <Icon className="w-9 h-9 text-[#cf471a]" />
                  {/* Step number badge */}
                  <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#cf471a] text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#cf471a] text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-[#b33d15] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            ابدأ الآن
          </a>
        </div>
      </div>
    </section>
  );
}
