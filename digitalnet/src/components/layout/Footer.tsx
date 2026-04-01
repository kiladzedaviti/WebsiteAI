"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";

const navLinks = [
  { key: "home" as const, href: "/" },
  { key: "services" as const, href: "#services" },
  { key: "portfolio" as const, href: "#portfolio" },
  { key: "about" as const, href: "#about" },
  { key: "contact" as const, href: "#contact" },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold tracking-tight mb-3">
              <span className="text-foreground">Digital</span>
              <span className="text-[#2563EB]">Net</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.tagline[language]}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t.menu[language]}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {nav[link.key][language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t.servicesTitle[language]}
            </h4>
            <ul className="space-y-2.5">
              {t.serviceLinks[language].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Geography */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t.geography[language]}
            </h4>
            <ul className="space-y-2.5">
              {t.geoLinks[language].map((geo) => (
                <li key={geo}>
                  <span className="text-sm text-muted-foreground">{geo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {t.contactTitle[language]}
            </h4>
            <ul className="space-y-2.5">
              {t.contactLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground text-center">
            {t.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
}
