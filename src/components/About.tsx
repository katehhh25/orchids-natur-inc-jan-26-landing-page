"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Countries", value: "3" },
  { label: "Founded", value: "2025" },
  { label: "Eco-preneurs", value: "Top 100" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full"
          >
            <Image
              src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/78b1/live/ef01e980-c308-11f0-8669-5560f5c90fbe.jpg.webp"
              alt="Community group in nature"
              fill
              className="object-cover rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green-primary/10 -z-10 rounded-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-4">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight text-brand-brown-dark">
              An interdisciplinary group focused on developing replicable structures for nature recovery.
            </h3>
            <p className="text-lg text-brand-brown-medium mb-6 leading-relaxed">
              We are a non-profit founded in 2025, consisting of an interdisciplinary group of lawyers, technologists, and finance professionals focused on developing legal-tech-financial structures for nature-based projects that can be replicated globally.
            </p>
            <p className="text-lg text-brand-brown-medium mb-8 leading-relaxed">
              Our work spans community-led governance, restoration finance, digital tools for ecological monitoring, and cross-sector partnerships that enable scalable and transparent nature recovery.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-t border-brand-brown-dark/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-serif text-brand-green-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-brown-dark/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
