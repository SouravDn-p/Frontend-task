"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative z-50">
      <div className="flex items-center h-10">
        <Image
          src="/assets/logo.png"
          alt="ScapeSync Logo"
          width={140}
          height={140}
        />
      </div>
      <div>
        <Link
          href="/register"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg cursor-pointer inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
