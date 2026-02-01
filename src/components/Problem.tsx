"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Fragmented Systems",
    description: "A systematic disconnect between finance, technology, and legal/governance frameworks prevents cohesive action on nature restoration.",
  },
  {
    title: "Misaligned Priorities",
    description: "Traditional nature finance projects prioritize funders over local ecosystems and the communities who depend on them.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 bg-brand-brown-dark overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000')" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-light mb-4">
            The Problem We're Solving
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-white leading-tight">
            Our systems were not designed for the restoration of life.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-brown-medium/40 backdrop-blur-sm p-8 border border-brand-white/10 rounded-sm"
            >
              <h4 className="text-xl font-serif text-brand-white mb-4">{problem.title}</h4>
              <p className="text-brand-white/70 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-olive p-8 md:p-12 text-center rounded-sm shadow-2xl"
        >
          <p className="text-xl md:text-2xl font-serif text-brand-white max-w-3xl mx-auto">
            <span className="font-sans text-sm font-bold tracking-widest uppercase block mb-4 opacity-80">
              Our approach
            </span>
            Integrated frameworks that protect ecosystems while strengthening the livelihoods of the communities who are their natural guardians.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
