"use client";

import { motion } from "framer-motion";
import { Layers, Users, DollarSign, Box } from "lucide-react";

const services = [
{
  title: "Rights of Nature Legal Frameworks",
  description: "Designing legal structures that give ecosystems legal standing and protection under the law.",
  icon: Layers
},
{
  title: "Nature Guardian Companies",
  description: "Establishing governance structures where communities act as guardians with legal authority over ecosystems.",
  icon: Users
},
{
  title: "Community-Centred Funding",
  description: "Engineering financial mechanisms that channel resources directly to communities for restoration and stewardship.",
  icon: DollarSign
},
{
  title: "Tech & Partnership Development",
  description: "Building digital tools for ecological monitoring and cross-sector collaborations across jurisdictions.",
  icon: Box
}];


export default function Services() {
  return (
    <section id="work" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-4">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-brown-dark">
            Our Key Impact Areas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 border border-brand-brown-dark/5 hover:border-brand-green-primary/30 hover:shadow-lg transition-all duration-300 bg-brand-cream/30 rounded-sm group">

              <div className="w-12 h-12 bg-brand-green-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-green-primary group-hover:text-brand-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-serif text-brand-brown-dark mb-4 leading-tight !whitespace-pre-line">
                {service.title}
              </h4>
              <p className="text-brand-brown-medium/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}