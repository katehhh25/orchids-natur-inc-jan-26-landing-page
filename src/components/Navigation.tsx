"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-brand-white shadow-sm py-4 transition-all duration-300"
    >
      <div className="container mx-auto px-6 flex justify-center items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/nature__inc__logo.webp"
            alt="Nature Inc Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </nav>
  );
}
