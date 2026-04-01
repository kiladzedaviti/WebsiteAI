"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function AboutStrip() {
  const { language } = useLanguage();
  const t = translations.aboutStrip;

  return (
    <section id="about" className="py-24 sm:py-32 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-foreground mb-6"
            style={{ fontStyle: "italic" }}
          >
            {t.line1[language]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-muted-foreground mb-10"
            style={{ fontStyle: "italic" }}
          >
            {t.line2[language]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="px-6 py-3 text-sm font-medium rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200"
            >
              {t.ctaContact[language]}
            </Link>
            <Link
              href="#about"
              className="px-6 py-3 text-sm font-medium rounded-md border border-border/50 text-foreground hover:bg-accent transition-colors duration-200"
            >
              {t.ctaAbout[language]}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
