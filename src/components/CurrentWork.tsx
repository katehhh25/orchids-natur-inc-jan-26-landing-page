"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workItems = [
{
  title: "People-Centric, Collective Farmer Intelligence Infrastructure: UK Feasibility Study",
  body: "Without innovative infrastructure enabling UK farmer participation, even excellent science and technology will fail to achieve adoption. This feasibility study tests whether we can build that missing multidisciplinary infrastructure spanning AI/tech, science, social, and legal/governance domains.",
  image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000",
  category: "Feasibility Study"
},

{
  title: "Selected in the Subak Changemaking Programme",
  location: "London",
  body: "Supporting climate changemakers through structured programmes that accelerate impact in nature restoration and community empowerment. This initiative focuses on scaling systemic solutions through collaborative networks and data-driven insights.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
  category: "Changemaking"
}];


export default function CurrentWork() {
  return (
    <section id="work" className="py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-4">
            Current Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-brown-dark">
            Driving Systemic Change
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {workItems.map((item, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group flex flex-col bg-brand-cream rounded-sm overflow-hidden border border-brand-brown-dark/5 hover:border-brand-green-primary/20 transition-all duration-500">

              <div className="relative h-64 overflow-hidden">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute top-4 left-4 px-3 py-1 bg-brand-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-brand-green-primary">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-xl md:text-2xl font-serif text-brand-brown-dark mb-4 leading-tight !whitespace-pre-line">
                  {item.title}
                </h4>
                {item.location &&
              <p className="text-xs font-bold text-brand-green-primary uppercase mb-4 tracking-wider">
                    {item.location}
                  </p>
              }
                <p className="text-brand-brown-medium text-sm leading-relaxed mb-6">
                  {item.body}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Recognition Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center">

          <div className="inline-flex items-center p-6 bg-brand-cream border border-brand-green-primary/10 rounded-sm shadow-sm max-w-2xl text-center md:text-left flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-brand-white rounded-full flex items-center justify-center shadow-inner border border-brand-green-primary/5">
              {/* Simplified UN-style globe icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-brand-green-primary"
                xmlns="http://www.w3.org/2000/svg">

                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.39 5.05,16.53 6.71,18H17.29C18.95,16.53 20,14.39 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12C18,13.24 17.62,14.39 16.96,15.34L15.54,13.92C15.84,13.35 16,12.7 16,12A4,4 0 0,0 12,8C11.3,8 10.65,8.16 10.08,8.46L8.66,7.04C9.61,6.38 10.76,6 12,6M12,10A2,2 0 0,1 14,12C14,12.35 13.91,12.67 13.76,12.96L11.04,10.24C11.33,10.09 11.65,10 12,10Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-brand-brown-dark leading-relaxed">
                Selected as 1 of 100 global Eco-preneurs by the UN International Trade Centre & G20 Land Initiative
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}