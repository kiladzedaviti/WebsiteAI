"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const companies = [
  "TechGeo",
  "BuildCo",
  "RetailPro",
  "MediaHub",
  "FinServe",
  "CloudNine",
  "DataFlow",
  "NexGen",
];

export default function LogoStrip() {
  const { language } = useLanguage();
  const t = translations.logoStrip;

  return (
    <section className="py-16 border-y border-border/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          {t.title[language]}
        </motion.p>
      </div>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 mx-10 text-xl font-bold text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors duration-300 select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
