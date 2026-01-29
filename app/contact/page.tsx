
'use client';

import { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { Mail, MapPin, Phone, Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

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

              {/* Google Maps Embed */}
              <div className="aspect-video w-full border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.123!2d76.7458!3d9.5442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzInMzkuMSJOIDc2wrA0NCc0NC45IkU!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abeyson Polymers Location - Pulickal Kavala, Kottayam"
                />
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
              
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">We&apos;ve received your request and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  {/* Hidden field for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                      <AlertCircle size={20} />
                      <p className="text-sm">Something went wrong. Please try again or use WhatsApp.</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground disabled:opacity-50" 
                      placeholder="Your name" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        disabled={formStatus === 'submitting'}
                        className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground disabled:opacity-50" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        disabled={formStatus === 'submitting'}
                        className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground disabled:opacity-50" 
                        placeholder="Your company" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">Product of Interest *</label>
                    <select 
                      id="product" 
                      name="product"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground disabled:opacity-50"
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
                      name="message"
                      rows={4} 
                      disabled={formStatus === 'submitting'}
                      className="w-full px-4 py-3 border border-border bg-background focus:border-foreground outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none disabled:opacity-50" 
                      placeholder="Describe your requirements, quantities, specifications..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-foreground text-background font-semibold py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Request
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
