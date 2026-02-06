"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#cf471a] border border-main-color/30 rounded-full px-6 py-2 mb-4">
            <span className="text-white font-semibold">تواصل معنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا وسنكون سعداء بتلبية
            احتياجاتكم
          </p>
        </div>

        <div className="space-y-6">
          {/* Contact Cards */}
          <div className="bg-[#cf471a] border border-white/5 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              معلومات التواصل
            </h3>

            <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {/* Phone */}
              {phone && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">اتصل بنا</p>
                    <a
                      target="_blank"
                      href={`tel:${phone}`}
                      className="text-white text-left">
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Email */}
              {email && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">راسلنا</p>
                    <a
                      target="_blank"
                      href={`mailto:${email}`}
                      className="text-white dir-ltr text-left">
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {address && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">موقعنا</p>
                    <p className="text-white">{address}</p>
                  </div>
                </div>
              )}

              {/* WhatsApp */}
              {whatsapp && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">واتس آب</p>
                    <a
                      target="_blank"
                      href={`https://wa.me/${whatsapp?.includes("+") ? whatsapp.split("+").join("") : whatsapp}?text=`}
                      className="text-white dir-ltr text-left">
                      {whatsapp}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
