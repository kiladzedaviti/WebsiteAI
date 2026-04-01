"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, MessageCircle, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  budget: z.string().optional(),
  services: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { language } = useLanguage();
  const t = translations.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const inputStyles =
    "w-full px-4 py-3 text-sm bg-background border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/20 transition-all duration-200";

  return (
    <section id="contact" className="py-24 sm:py-32">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register("name")}
                  placeholder={t.form.namePlaceholder[language]}
                  className={`${inputStyles} ${errors.name ? "border-red-500/50" : ""}`}
                />
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder={t.form.emailPlaceholder[language]}
                  className={`${inputStyles} ${errors.email ? "border-red-500/50" : ""}`}
                />
              </div>
              <div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder={t.form.messagePlaceholder[language]}
                  className={`${inputStyles} resize-none ${errors.message ? "border-red-500/50" : ""}`}
                />
              </div>
              <div>
                <select {...register("budget")} className={inputStyles}>
                  <option value="">{t.form.selectBudget[language]}</option>
                  {t.form.budgetOptions[language].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.form.service[language]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {t.form.serviceOptions[language].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm text-foreground cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={opt}
                        {...register("services")}
                        className="w-4 h-4 rounded border-border text-[#2563EB] focus:ring-[#2563EB]/20"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="group w-full px-6 py-3 text-sm font-medium rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {t.form.submit[language]}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pl-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    {t.info.whatsapp.number}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t.info.whatsapp.label[language]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.info.email.label[language]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.info.email.value}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.info.location.label[language]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.info.location.value[language]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t.info.worldwide[language]}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/995574441351"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle size={16} />
              {t.info.whatsapp.button[language]}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
