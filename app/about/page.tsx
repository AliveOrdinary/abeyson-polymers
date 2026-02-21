
'use client';

import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/data';
import { Factory, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '31+', label: 'Years of Excellence' },
  { value: '12', label: 'Machines Operating' },
  { value: '6', label: 'Product Lines' },
  { value: '1000+', label: 'Clients Served' },
];

const values = [
  {
    icon: TrendingUp,
    title: 'Steady Growth',
    description: 'From 3 to 12 machines, our growth reflects the trust our clients place in us.'
  },
  {
    icon: Factory,
    title: 'Technical Excellence',
    description: 'Specialized capabilities in Corona treatment and high-precision extrusion.'
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'Strict adherence to government thickness norms and pollution control standards.'
  },
];

export default function About() {
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
              About Us
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              {COMPANY_INFO.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              A legacy of quality manufacturing in Kerala since {COMPANY_INFO.established}.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/hero.png"
                alt="Factory Interior"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by <strong className="text-foreground">Mr. Manoj Thomas</strong> in {COMPANY_INFO.established}, {COMPANY_INFO.name} began as a modest operation with just 3 machines producing a single product—Grocery Bags. 
                </p>
                <p>
                  Over the last 3 decades, our commitment to quality and integrity has driven significant expansion. Today, we operate <strong className="text-foreground">12 state-of-the-art machines</strong>, manufacturing 6 distinct product lines with a dedicated team of skilled professionals.
                </p>
                <p>
                  From simple grocery bags to specialized &quot;Corona Treated&quot; printing rolls and agricultural sheets, we have established ourselves as a trusted partner for industries across Kerala and beyond.
                </p>
              </div>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-foreground font-semibold hover:gap-3 transition-all"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground">Our commitment to quality, technology, and customer satisfaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-border hover:border-border-hover transition-colors"
              >
                <value.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">Our Standards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-background border border-border px-6 py-3 flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium">Pollution Control Board Consent</span>
            </div>
            <div className="bg-background border border-border px-6 py-3 flex items-center gap-3 opacity-60">
              <div className="w-2 h-2 bg-muted-foreground rounded-full" />
              <span className="text-sm font-medium">ISO Certification (Pending)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
