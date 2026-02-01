"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-brand-cream border-y border-brand-brown-dark/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-8">
            Our Mission
          </h2>
          
            <blockquote className="text-3xl md:text-5xl font-serif text-brand-brown-dark mb-10 leading-tight">
            "Thriving ecosystems and thriving communities go hand in hand."
          </blockquote>
          
          <div className="h-px w-24 bg-brand-green-primary/30 mx-auto mb-10" />
          
          <p className="text-lg md:text-xl text-brand-brown-medium leading-relaxed mb-0">
            We provide the replicable infrastructure and engineering necessary to empower local communities as guardians of nature, giving them the tools, authority, and resources to protect and restore the ecosystems that sustain them. Our framework enables scalable, investable nature restoration solutions globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
