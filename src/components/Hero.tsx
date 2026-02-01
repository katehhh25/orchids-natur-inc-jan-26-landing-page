"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vh] h-[110vw] rotate-90 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a32508a4-183d-42a0-a07f-46c7d9afe143/luis-lanca-l6ueIzd9How-unsplash-resized-1769974449445.jpg?width=8000&height=8000&resize=contain')"
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1 mb-6 border border-brand-green-light/30 bg-brand-green-primary/10 backdrop-blur-sm rounded-full">

          <span className="text-brand-green-light text-xs font-bold tracking-widest uppercase">
            Non-Profit Organization
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-brand-white mb-6 leading-tight max-w-5xl mx-auto">

          We give nature rights — and build the structures to protect them.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-brand-white/80 mb-10 mx-auto leading-relaxed !w-[768px] !h-[98px] !max-w-screen-md">

          We create replicable legal-tech-financial structures for nature-based projects worldwide, empowering communities as guardians of the ecosystems that sustain them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
            href="mailto:kate@natureinc.co"
            className="w-full sm:w-auto px-8 py-4 border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-brown-dark font-bold rounded-sm transition-all duration-300 uppercase tracking-widest text-sm text-center">

              Email Us
            </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-brand-white/50">

        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 !whitespace-pre-line"></span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-white/50 to-transparent" />
      </motion.div>
    </section>);

}