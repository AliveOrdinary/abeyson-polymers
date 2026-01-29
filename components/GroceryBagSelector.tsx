'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CapacityOption {
  value: string;
  label: string;
  image: string;
}

const capacityOptions: CapacityOption[] = [
  { value: '500g', label: '500g', image: '/images/grocery-bags/500g.png' },
  { value: '1kg', label: '1 KG', image: '/images/grocery-bags/1kg.png' },
  { value: '2kg', label: '2 KG', image: '/images/grocery-bags/2kg.png' },
  { value: '5kg', label: '5 KG', image: '/images/grocery-bags/5kg.png' },
  { value: '10kg', label: '10 KG', image: '/images/grocery-bags/10kg.png' },
];

export function GroceryBagSelector() {
  const [selectedCapacity, setSelectedCapacity] = useState<CapacityOption>(capacityOptions[2]); // Default to 2kg

  return (
    <div className="bg-card border border-border p-6 lg:p-8">
      <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
        Select Capacity
      </h4>
      
      {/* Capacity pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {capacityOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedCapacity(option)}
            className={`px-4 py-2 text-sm font-medium transition-all border ${
              selectedCapacity.value === option.value
                ? 'bg-accent text-accent-foreground border-accent'
                : 'bg-muted text-muted-foreground border-border hover:border-border-hover hover:text-foreground'
            }`}
          >
            Upto {option.label}
          </button>
        ))}
      </div>

      {/* Image display */}
      <div className="relative aspect-square max-w-md mx-auto bg-muted/30 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCapacity.value}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full"
          >
            <Image
              src={selectedCapacity.image}
              alt={`Grocery bag - Upto ${selectedCapacity.label}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-4">
        Showing: <span className="font-semibold text-foreground">Upto {selectedCapacity.label}</span> capacity bag
      </p>
    </div>
  );
}
