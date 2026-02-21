
import { Folder, ShoppingBag, Leaf, Droplets, ScrollText, CloudRain } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  specs: Record<string, string | string[]>;
  features: string[];
  image?: string; // path to image
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: any;
  image: string;
  heroImage: string; // landscape image for hero section
  products: Product[];
}

export const COMPANY_INFO = {
  name: "ABEYSON POLYMERS",
  tagline: "Quality in Every Seal",
  established: "1990",
  founder: "Manoj Thomas",
  location: "Kottayam, Kerala",
  pin: "686515",
  phone: "+91 94470 57769",
  email: "abeysonpolymers@gmail.com",
  address: "Pulickal Kavala, Kottayam, Kerala - 686515",
  whatsapp: "919447057769", // Pure number for API
  usps: [
    { title: "31+ Years of Stability", description: "Decades of trust in the Kerala market." },
    { title: "Commitment to Quality", description: "Quality is the primary focus since day one." },
    { title: "Technical Versatility", description: "From simple bags to specialized industrial rolls." },
    { title: "Govt Approved", description: "Adherence to government thickness norms." },
  ]
};

export const PRODUCTS: Category[] = [
  {
    id: "garbage-bags",
    title: "Garbage Bags",
    slug: "garbage-bags",
    description: "High-puncture resistant bags for homes, offices, and industries.",
    icon: Folder,
    image: "/images/garbage-bags.png",
    heroImage: "/images/heroes/garbage-bags.png",
    products: [
      {
        id: "gb-small",
        name: "Small Garbage Bags",
        slug: "small-garbage-bags",
        description: "Ideal for offices and restrooms.",
        categoryId: "garbage-bags",
        specs: {
          "Sizes": ["17x19 inches", "19x21 inches"],
          "Colors": ["Black", "Green", "White", "Blue"]
        },
        features: ["High-puncture resistance", "Leak-proof"]
      },
      {
        id: "gb-medium",
        name: "Medium Garbage Bags",
        slug: "medium-garbage-bags",
        description: "Perfect for household and kitchen waste.",
        categoryId: "garbage-bags",
        specs: {
          "Sizes": ["22x35 inches", "24x30 inches", "30x30 inches"],
          "Colors": ["Black", "Green", "White", "Blue"]
        },
        features: ["High capacity", "Durable"]
      },
      {
        id: "gb-large",
        name: "Large Industrial Bags",
        slug: "large-industrial-bags",
        description: "Heavy duty bags for hospitals, hospitality, and outdoor use.",
        categoryId: "garbage-bags",
        specs: {
          "Sizes": ["30x36 inches", "30x50 inches", "36x50 inches"],
          "Colors": ["Black", "Green", "White", "Blue"]
        },
        features: ["Extra strength", "Tear resistant"]
      }
    ]
  },
  {
    id: "grocery-bags",
    title: "Grocery Bags",
    slug: "grocery-bags",
    description: "High-tensile strength carry bags for retail.",
    icon: ShoppingBag,
    image: "/images/grocery-bags.png",
    heroImage: "/images/heroes/grocery-bags.png",
    products: [
      {
        id: "grocery-std",
        name: "Standard Grocery Bags",
        slug: "standard-grocery-bags",
        description: "Reliable carry bags for daily sticking.",
        categoryId: "grocery-bags",
        specs: {
          "Capacities": ["0.25kg", "0.5kg", "1kg", "2kg", "3kg", "5kg", "10kg", "15kg", "20kg", "25kg"],
          "Standards": "Govt approved micron thickness"
        },
        features: ["High-tensile strength", "Food grade material available"]
      }
    ]
  },
  {
    id: "biodegradable",
    title: "Biodegradable Bags",
    slug: "biodegradable-bags",
    description: "Eco-friendly compostable bags.",
    icon: Leaf,
    image: "/images/biodegradable.png",
    heroImage: "/images/heroes/biodegradable.png",
    products: [
      {
        id: "bio-bags",
        name: "Compostable Carry Bags",
        slug: "compostable-carry-bags",
        description: "100% biodegradable & plastic with bio-additives.",
        categoryId: "biodegradable",
        specs: {
          "Sizes": ["10x14", "13x11", "16x20", "17x23", "24x30", "27x36 (inches)"],
          "Material": "Bio-plastic / Bio-additives",
          "Handle Types": ["T-shirt", "D-cut"]
        },
        features: ["Eco-friendly"]
      }
    ]
  },
  {
    id: "nursery-bags",
    title: "Nursery Bags",
    slug: "nursery-bags",
    description: "Specialized bags for agricultural saplings.",
    icon: Droplets,
    image: "/images/nursery.png",
    heroImage: "/images/heroes/nursery.png",
    products: [
      {
        id: "nursery-std",
        name: "Seedling Bags",
        slug: "seedling-bags",
        description: "Designed for healthy root growth in plantations.",
        categoryId: "nursery-bags",
        specs: {
          "Small Sizes": ["4x6", "5x7", "5x8"],
          "Medium Sizes": ["6x8", "7x9", "8x10"],
          "Large Sizes": ["10x12", "12x14", "14x18", "16x18"],
          "Colors": ["Black (UV protection)", "White", "Transparent"]
        },
        features: ["Integrated 3-hole drainage system", "UV Protection (Black)"]
      }
    ]
  },
  {
    id: "rain-guard",
    title: "Rain Guard Sheets",
    slug: "rain-guard-sheets",
    description: "Protection for rubber tapping panels.",
    icon: CloudRain,
    image: "/images/rain-guard.png",
    heroImage: "/images/heroes/rain-guard.png",
    products: [
      {
        id: "rain-guard-std",
        name: "Rubber Rain Gen",
        slug: "rubber-rain-guard",
        description: "Essential protection during monsoon for rubber trees.",
        categoryId: "rain-guard",
        specs: {
          "Standard Widths": ["18 inches", "24 inches", "30 inches", "48 inches"]
        },
        features: ["Ensures maximum latex collection", "Durable material"]
      }
    ]
  },
  {
    id: "treated-rolls",
    title: "Treated Rolls",
    slug: "treated-rolls",
    description: "Corona treated rolls for industrial printing.",
    icon: ScrollText,
    image: "/images/treated-rolls.png",
    heroImage: "/images/heroes/treated-rolls.png",
    products: [
      {
        id: "corona-rolls",
        name: "Industrial Printing Rolls",
        slug: "industrial-printing-rolls",
        description: "Superior ink adhesion for packaging industry.",
        categoryId: "treated-rolls",
        specs: {
          "Materials": ["LDPE", "HDPE"],
          "Customization": "100% Client-Driven (Width, Length, Gauge)"
        },
        features: ["Corona Treated", "Superior ink adhesion"]
      }
    ]
  }
];
