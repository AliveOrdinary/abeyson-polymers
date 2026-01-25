
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/data';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              Leading manufacturer of high-quality plastic solutions in Kerala since {COMPANY_INFO.established}. 
              Committed to quality, sustainability, and customer satisfaction.
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Quote <ArrowUpRight size={16} />
            </a>
          </div>
          
          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-background/70 hover:text-background transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-background/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-background/70 hover:text-background transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-background/70">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-background/70 hover:text-background transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-background/70 hover:text-background transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>Quality in Every Seal</p>
        </div>
      </div>
    </footer>
  );
}
