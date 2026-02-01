"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
{
  name: "UK",
  description: "Legal Personhood Campaigns"
},
{
  name: "Colombia",
  description: "Atrato River — Community Governance"
},
{
  name: "Philippines",
  description: "Marine Stewardship Project"
}];


export default function Map() {
  return (
    <section id="projects" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-4">
            Where We Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-brown-dark">
            Pilot Projects in Development
          </h3>
        </div>

        <div className="relative w-full aspect-[16/10] max-w-5xl mx-auto rounded-sm overflow-hidden shadow-sm border border-brand-brown-dark/5">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a32508a4-183d-42a0-a07f-46c7d9afe143/ChatGPT-Image-Jan-27-2026-05_58_28-PM-1769537334689.png?width=8000&height=8000&resize=contain"
            alt="World Map - Pilot Projects"
            fill
            className="object-contain bg-white" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {locations.map((loc, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center">

              <div className="w-2 h-2 bg-brand-green-primary rounded-full mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-brown-dark mb-2">{loc.name}</h4>
              <p className="text-xs text-brand-brown-medium !whitespace-pre-line">{loc.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}