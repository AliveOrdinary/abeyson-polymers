
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
            >
              Product Catalog
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Comprehensive range of high-quality plastic solutions for industrial, retail, and agricultural needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((category, index) => (
              <Link key={category.id} href={`/products/${category.slug}`}>
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group h-full border border-border hover:border-border-hover transition-all duration-300 overflow-hidden bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-xl font-bold mb-2 text-foreground">
                          {category.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="bg-muted px-2 py-1">
                            {category.products.length} Variations
                          </span>
                          <span className="bg-muted px-2 py-1">
                            {category.slug === 'rain-guard-sheets' ? 'Agriculture' : 
                             category.slug === 'garbage-bags' ? 'Commercial' :
                             category.slug === 'treated-rolls' ? 'Industrial' : 'General'}
                          </span>
                        </div>
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
    </main>
  );
}
