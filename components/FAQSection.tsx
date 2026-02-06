"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "لماذا يجب علي اختيار قهوجين محترفين لمناسبتي؟",
    answer:
      "القهوجين المحترفين يضيفون لمسة من الأصالة والفخامة لمناسبتك. يتميزون بالخبرة في تقديم القهوة العربية بالطريقة التقليدية الصحيحة، المظهر الأنيق، والقدرة على التعامل مع الضيوف باحترافية عالية، مما يترك انطباعاً مميزاً لدى ضيوفك.",
  },
  {
    question: "ما الفرق بين خدماتكم وخدمات الآخرين؟",
    answer:
      "نتميز بانتقاء قهوجين ذوي خبرة طويلة ومظهر راقٍ، نستخدم أجود أنواع البن العربي الأصيل، نلتزم تماماً بالمواعيد، ونوفر تجهيزات كاملة بأعلى معايير الجودة. كما نقدم استشارات مجانية لمساعدتك في اختيار الخدمة المناسبة لمناسبتك.",
  },
  {
    question: "هل يمكنني طلب قهوجين بزي معين يتناسب مع طابع المناسبة؟",
    answer:
      "بالتأكيد! نوفر قهوجين بأزياء تقليدية متنوعة تناسب مختلف المناسبات. يمكنك اختيار الزي الذي يتماشى مع طابع فعاليتك سواء كانت رسمية، تراثية، أو عصرية. نحرص على أن يكون المظهر متناسقاً ويعكس هوية مناسبتك.",
  },
  {
    question: "ماذا يحدث في حالة تأخر القهوجين أو عدم الحضور؟",
    answer:
      "نحن نضمن الالتزام التام بالمواعيد، ولدينا فريق احتياطي دائماً جاهز لأي طارئ. في الحالات النادرة جداً التي قد يحدث فيها أي تأخير، نتواصل معك فوراً ونوفر بديلاً فورياً. رضاك ونجاح مناسبتك هو أولويتنا القصوى.",
  },
  {
    question: "هل تقدمون خدمات للفعاليات الكبيرة والمؤتمرات الرسمية؟",
    answer:
      "نعم، لدينا خبرة واسعة في تقديم خدمات الضيافة للفعاليات الكبيرة، المؤتمرات، المعارض، والاحتفالات الرسمية. نوفر فرق عمل كاملة مع منسق خاص لضمان سير الخدمة بسلاسة واحترافية طوال الفعالية.",
  },
  {
    question: "هل يمكنني تجربة القهوة قبل الحجز النهائي؟",
    answer:
      "نعم، نرحب بذلك! يمكنك زيارتنا أو يمكننا ترتيب جلسة تذوق لتجربة القهوة العربية التي نقدمها. نؤمن بأن الجودة تتحدث عن نفسها، ونريدك أن تكون واثقاً تماماً من اختيارك قبل الحجز.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر طرق دفع متعددة لراحتك، بما في ذلك التحويل البنكي، الدفع النقدي، والدفع الإلكتروني. عادةً نطلب دفعة مقدمة لتأكيد الحجز والمبلغ المتبقي يُدفع بعد انتهاء الخدمة. سنوضح لك جميع التفاصيل المالية بشفافية تامة.",
  },
  {
    question: "هل توفرون خدمة تصوير القهوجين أثناء العمل؟",
    answer:
      "نعم، يمكننا التنسيق مع مصورك الخاص لالتقاط أجمل اللحظات أثناء تقديم القهوة. كما يمكننا التوصية بمصورين محترفين متخصصين في تصوير الفعاليات إذا كنت بحاجة لذلك. نحرص على أن تكون كل لحظة موثقة بشكل احترافي.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-16 md:py-24 px-4 bg-white" id="faq">
        <div className="container mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-white mx-auto flex mb-5 bg-[#cf471a] w-fit px-6 py-2.5 rounded-full text-sm md:text-base max-w-2xl">
              الأسئلة الشائعة
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4 leading-tight">
              أسئلة متكررة حول خدمات القهوجين
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وطريقة الحجز
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-slate-100"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}>
                  <h3 className="text-lg md:text-xl font-semibold text-[#4A4A4A] flex-1">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#cf471a] transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 text-lg mb-4">
              لديك سؤال آخر؟ لا تتردد في التواصل معنا
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#cf471a] text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-[#b33d15] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
