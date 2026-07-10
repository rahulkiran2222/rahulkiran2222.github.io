"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Journey", href: "/journey" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tighter">
          RAHUL <span className="text-accent">KIRAN</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link 
          href="/contact" 
          className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
