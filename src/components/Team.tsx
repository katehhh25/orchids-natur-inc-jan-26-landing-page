"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  objectPosition?: string;
}

const founders: Founder[] = [
    {
    name: "Kate Chan",
    role: "Co-Founder",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEoiSwIZkv7rA/profile-displayphoto-shrink_800_800/B56ZSC.a.XGoAc-/0/1737364190006?e=1771459200&v=beta&t=yvHiI9-pL3uLr0781HLRILONPfCu1JFZzVXDzwrsSg0",
    bio: "Tri-qualified lawyer with extensive experience in climate/nature finance projects, environmental technology investments, and ESG/sustainability governance. Kate advises climate/nature investors and technology companies, sits on the advisory board of Earth Law Centre, and serves as the legal engineer of the Nature on the Board initiative.",
    linkedin: "https://www.linkedin.com/in/kate-chan-7439224a/",
  },
      {
        name: "Pooja Sharma",
        role: "Co-Founder",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGlqgsnO98Zdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712607616381?e=1771459200&v=beta&t=X26ZpK32SzTovbG-EP3XjiQqukza4q_J-L2SJ-WULm4",
        bio: "Lead attorney for Earth Law Center's Lough Neagh legal personhood campaign. Pooja brings experienced legal, governance, and nonprofit advisory expertise. She developed ecocentric legal tools and trained over 30 global nature proxies, leading strategic governance at Earth Law Center's Nature Governance Agency.",
        linkedin: "https://www.linkedin.com/in/poojaksharma/",
      },
    ];
  
  export default function Team() {
    return (
      <section id="team" className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-green-primary mb-4">
              Our Leadership
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-brown-dark">
              Meet the Co-Founders
            </h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-brand-white p-8 rounded-sm shadow-sm border border-brand-brown-dark/5"
              >
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ objectPosition: founder.objectPosition || "center" }}
                  />
                </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h4 className="text-2xl font-serif text-brand-brown-dark">{founder.name}</h4>
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <Image 
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/in-logo/fg/brand-inlogo-logo-dsk-v01.jpg/jcr:content/renditions/brand-inlogo-logo-dsk-v01-2x.jpg" 
                        alt="LinkedIn" 
                        width={24} 
                        height={24}
                        className="rounded-sm"
                      />
                    </a>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-green-primary mb-6">{founder.role}</p>
                <p className="text-brand-brown-medium text-sm leading-relaxed text-left border-t border-brand-brown-dark/10 pt-6">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
