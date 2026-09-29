import { WhyUsSectionData } from "@/lib/responseType";
import WhyUsImage from "./AnimatedComponents/WhyUsImage";
import WhyUsIcon from "./WhyUsIcon";

export function WhyUsSection({
  description,
  features,
  label,
  title,
}: WhyUsSectionData) {
  return (
    <section id="about" className="py-20 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 rounded-2xl  gap-12 lg:gap-16 items-center">
          {/* Content - RTL: right side, teal background block */}
          <div className="p-8 lg:p-10 text-[#161616]">
            <p className="text-white mb-5 bg-[#cf471a] w-fit px-5 py-3 rounded-full text-base md:text-lg max-w-2xl">
              {label}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-[#161616] text-base md:text-lg leading-relaxed mb-8">
                {description}
              </p>
            )}
            <ul className="space-y-5">
              {features &&
                features.map((feature, i) => {
                  return (
                    <li
                      key={`${feature.title}-${i}`}
                      className="flex items-start gap-4">
                      <WhyUsIcon icon={feature.icon} />

                      <div>
                        <p className="font-bold text-[#161616] mb-0.5">
                          {feature.title}
                        </p>
                        {feature.description && (
                          <p className="text-[#161616]/96 text-sm">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Image - RTL: left side */}
          <WhyUsImage />
        </div>
      </div>
    </section>
  );
}
