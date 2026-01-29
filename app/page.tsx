'use client';

import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { ArrowRight, ArrowUpRight, Factory, Shield, Leaf, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const usps = [
  {
    icon: Factory,
    title: '35+ Years',
    description: 'Decades of manufacturing excellence in Kerala'
  },
  {
    icon: Shield,
    title: 'Certified Quality',
    description: 'Government approved, pollution control compliant'
  },
  {
    icon: Leaf,
    title: 'Eco Options',
    description: 'Biodegradable and compostable product lines'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Reliable bulk order fulfillment across India'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Abeyson Polymers Factory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-background">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-background/70 mb-6"
          >
            Industrial Polymer Manufacturing
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            {COMPANY_INFO.tagline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl mx-auto"
          >
            Trusted manufacturer of high-quality plastic solutions in Kerala since {COMPANY_INFO.established}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <Link 
              href="/products"
              className="bg-background/10 backdrop-blur-sm border border-background/30 text-background px-8 py-4 font-semibold text-lg transition-all hover:bg-background/20 flex items-center justify-center gap-2"
            >
              View Products
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-background/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* USPs Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {usps.map((usp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 border border-border hover:border-border-hover transition-colors"
              >
                <usp.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground text-sm">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Comprehensive range of plastic solutions for industrial, retail, and agricultural needs.
              </p>
            </div>
            <Link 
              href="/products" 
              className="text-foreground font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((category, index) => (
              <Link key={category.id} href={`/products#${category.slug}`} className="block h-full">
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full flex flex-col bg-card border border-border hover:border-border-hover transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-start justify-between gap-4 flex-1">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">{category.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{category.description}</p>
                      </div>
                      <ArrowUpRight 
                        size={20} 
                        className="text-muted-foreground group-hover:text-accent shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                      />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
            Whether you need bulk industrial rolls or retail carry bags, we deliver quality solutions tailored to your needs.
          </p>
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Connect on WhatsApp <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}
