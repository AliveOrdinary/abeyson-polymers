
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, COMPANY_INFO } from '@/lib/data';
import { SpecTable } from '@/components/SpecTable';
import { Check, ArrowRight, ChevronLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const category = PRODUCTS.find((p) => p.slug === slug);

  if (!category) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with Large Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
        
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link 
            href="/products" 
            className="inline-flex items-center text-background/70 hover:text-background transition-colors mb-6"
          >
            <ChevronLeft size={20} className="mr-1" /> Back to Catalog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-background/70 mb-3">
              Product Category
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              {category.title}
            </h1>
            <p className="text-xl text-background/80 max-w-2xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Available Variations
            </h2>
            <p className="text-muted-foreground">
              {category.products.length} products in this category
            </p>
          </div>

          <div className="space-y-12">
            {category.products.map((product, index) => (
              <motion.article 
                key={product.id} 
                id={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-border bg-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Product Info */}
                  <div className="p-8 lg:p-10 lg:col-span-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      {product.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check size={18} className="text-accent mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                        Specifications
                      </h4>
                      <SpecTable specs={product.specs} productName={product.name} />
                    </div>
                  </div>

                  {/* CTA Sidebar */}
                  <div className="bg-muted p-8 lg:p-10 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2">
                      Interested in this product?
                    </h4>
                    <p className="text-muted-foreground mb-6 text-sm">
                      We offer bulk manufacturing with custom specifications.
                    </p>
                    
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I am interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-accent text-accent-foreground py-4 px-4 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Get a Quote <ArrowRight size={18} />
                    </a>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      Chat directly with our sales team
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-background/70 mb-8">
            We can manufacture products tailored to your exact requirements.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
