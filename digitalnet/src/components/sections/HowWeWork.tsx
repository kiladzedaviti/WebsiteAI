"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function HowWeWork() {
  const { language } = useLanguage();
  const t = translations.howWeWork;

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {t.title[language]}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex gap-6 sm:gap-8 py-8 border-b border-border/30 last:border-0"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-4xl sm:text-5xl font-bold text-[#2563EB]/20 group-hover:text-[#2563EB]/40 transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {step.title[language]}
                  </h3>
                  <span className="flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-accent text-muted-foreground border border-border/30">
                    {step.duration[language]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
