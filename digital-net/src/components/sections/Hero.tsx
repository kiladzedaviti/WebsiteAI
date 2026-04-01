"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#2563EB]/3 rounded-full blur-[100px]" />
    </div>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations.hero;
  const words = t.rotatingWords[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateWord = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(rotateWord, 2500);
    return () => clearInterval(interval);
  }, [rotateWord]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotGrid />
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            <span className="block text-foreground">{t.headlineStart[language]}</span>
            <span className="block h-[1.2em] relative mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-x-0 text-[#2563EB]"
                >
                  {words[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.subtext[language]}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#services"
              className="px-6 py-3 text-sm font-medium rounded-md border border-border/50 text-foreground hover:bg-accent transition-colors duration-200"
            >
              {t.ctaServices[language]}
            </Link>
            <Link
              href="#contact"
              className="group px-6 py-3 text-sm font-medium rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200 flex items-center gap-2"
            >
              {t.ctaStart[language]}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
