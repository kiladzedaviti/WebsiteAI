"use client";

import { motion } from "framer-motion";
import { Palette, Code, Layers } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const icons = [Palette, Code, Layers];

export default function Services() {
  const { language } = useLanguage();
  const t = translations.services;

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.title[language]}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {t.subtitle[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-xl border border-border/30 bg-card hover:border-[#2563EB]/30 transition-all duration-300"
              >
                {/* Popular Badge */}
                {"popular" in service && service.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#2563EB] text-white">
                      {t.mostPopular[language]}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title[language]}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.subServices[language].map((sub, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#2563EB] flex-shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/30 pt-4">
                  <p className="text-sm font-semibold text-[#2563EB]">
                    {service.price[language]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.contactForPrice[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
