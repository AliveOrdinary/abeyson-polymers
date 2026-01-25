
'use client';

import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
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
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Bulk orders, custom specifications, or general inquiries—we&apos;re here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground text-sm">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone & WhatsApp</h3>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="p-6 bg-foreground text-background">
                <h3 className="font-display font-bold mb-2">Prefer WhatsApp?</h3>
                <p className="text-background/70 text-sm mb-4">Get an instant response for urgent requirements.</p>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Message on WhatsApp <ArrowRight size={16} />
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted aspect-video w-full flex items-center justify-center text-muted-foreground border border-border">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Map Coming Soon</p>
                  <p className="text-xs">Pulickal Kavala, Kottayam</p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border border-border p-8 md:p-10 bg-card"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
              <p className="text-muted-foreground text-sm mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground" 
                      placeholder="Your company" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">Product of Interest *</label>
                  <select 
                    id="product" 
                    required
                    className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground"
                  >
                    <option value="">Select a product...</option>
                    {PRODUCTS.map(product => (
                      <option key={product.id} value={product.title}>{product.title}</option>
                    ))}
                    <option value="Other">Other / Custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Requirements / Quantity</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none" 
                    placeholder="Describe your requirements, quantities, specifications..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-foreground text-background font-semibold py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Request
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  * This form is a demo. For immediate response, please use WhatsApp.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
