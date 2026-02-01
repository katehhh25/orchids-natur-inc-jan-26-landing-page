import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-footer py-16 text-brand-white">
      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/nature__inc__logo.webp"
                  alt="Nature Inc Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-brand-white/60 max-w-md leading-relaxed">
                Creating replicable frameworks that protect ecosystems while empowering the communities who depend on them.
              </p>
            </div>
  
            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand-green-light mb-6">
                Contact Us
              </h4>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="mailto:kate@natureinc.co" 
                        className="text-brand-white/60 hover:text-brand-white transition-colors"
                      >
                        kate@natureinc.co
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:pooja@natureinc.co" 
                        className="text-brand-white/60 hover:text-brand-white transition-colors"
                      >
                        pooja@natureinc.co
                      </a>
                    </li>
                  </ul>
            </div>
          </div>

        <div className="pt-8 border-t border-brand-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-white/40">
            © 2025 Nature Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-brand-white/40 hover:text-brand-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-brand-white/40 hover:text-brand-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
