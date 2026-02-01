"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section id="contact" className="py-24 bg-brand-brown-dark relative overflow-hidden">
      {/* Texture/Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000')" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-white mb-6">
              Join the Movement
            </h2>
            <p className="text-brand-white/70 text-lg mb-10 leading-relaxed">
              Get updates on our projects, insights on nature rights, and opportunities to get involved in building a future where ecosystems and communities thrive together.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 bg-brand-white/10 border border-brand-white/20 text-brand-white rounded-sm focus:outline-none focus:border-brand-green-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-green-primary hover:bg-brand-green-light text-brand-white font-bold rounded-sm transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
