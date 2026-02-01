"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Recognition() {
  return (
    <section className="py-12 bg-white border-y border-brand-brown-dark/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://www.intracen.org/sites/default/files/styles/card_optional_crop/public/media/image/media_image/2025/02/13/united_nations_convention_to_combat_desertification_0.jpg?itok=xc3s5Bg9"
                  alt="UNCCD Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="https://www.intracen.org/profiles/itc/themes/itc_theme/logo.svg"
                  alt="International Trade Centre Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-center md:text-left"
          >
              <p className="text-brand-brown-medium font-serif text-lg leading-snug">
                Selected as 1 of 100 global <span className="text-brand-green-primary font-bold">Eco-preneurs</span> by the UN International Trade Centre & G20 Land Initiative
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
