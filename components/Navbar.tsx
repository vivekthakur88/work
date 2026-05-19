"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900">
              Denta<span className="text-blue-600">zone</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-blue-600 relative group ${
                  pathname === link.href ? "text-blue-600" : "text-slate-600"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
              <a href="tel:9970418588" className="flex items-center text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                9970418588
              </a>
              <Button asChild className="rounded-full shadow-[0_8px_20px_rgb(37,99,235,0.2)] hover:shadow-[0_8px_25px_rgb(37,99,235,0.3)] hover:-translate-y-0.5 transition-all bg-blue-600 hover:bg-blue-700 h-10 px-6">
                <Link href="#contact">Book Visit</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-2xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 px-3 flex flex-col space-y-4 border-t border-slate-100">
                <Button asChild className="w-full rounded-2xl h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-2xl h-14 text-lg font-semibold border-2 border-slate-200 bg-white/50 hover:bg-slate-50">
                  <a href="tel:9970418588">
                    <Phone className="w-5 h-5 mr-2" /> Call 9970418588
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
