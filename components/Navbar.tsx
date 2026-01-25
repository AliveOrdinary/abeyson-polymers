
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
               <div className="relative h-10 w-10">
                  <Image
                    src="/logo.png"
                    alt="Abeyson Polymers Logo"
                    fill
                    className="object-contain"
                  />
               </div>
               <span className="font-display font-bold text-lg tracking-tight text-foreground hidden sm:block">
                 {COMPANY_INFO.name}
               </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-foreground px-4 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-accent text-accent-foreground hover:opacity-90 px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <span>Get Quote</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent block px-3 py-3 text-base font-medium border-b border-border last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                 href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-4 w-full bg-accent text-accent-foreground px-4 py-3 font-semibold flex items-center justify-center gap-2"
              >
                Get Quote <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
