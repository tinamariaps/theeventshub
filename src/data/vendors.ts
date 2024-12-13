export interface Vendor {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  location: string;
  services: string[];
  image: string;
  website?: string;
  phone?: string;
  email?: string;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "DisplayTech Solutions",
    category: "Exhibition Design",
    description: "Premium exhibition booth design and construction services with over 15 years of experience.",
    rating: 4.8,
    location: "San Francisco, CA",
    services: ["Booth Design", "Construction", "Graphics", "Lighting"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    website: "https://example.com",
    phone: "(555) 123-4567",
    email: "contact@displaytech.com"
  },
  {
    id: 2,
    name: "EventPro Services",
    category: "Event Management",
    description: "Full-service event management and coordination for trade shows and exhibitions.",
    rating: 4.9,
    location: "New York, NY",
    services: ["Event Planning", "Logistics", "Staff Management", "Marketing"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
    website: "https://example.com",
    phone: "(555) 987-6543",
    email: "info@eventpro.com"
  },
  {
    id: 3,
    name: "MakingEvents.us",
    category: "Exhibition Design",
    description: "Innovative booth designs and custom fabrication for trade shows and events.",
    rating: 4.9,
    location: "Orlando, FL",
    services: ["Custom Exhibits", "Rental Solutions", "Graphics Production", "Installation"],
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80",
    website: "https://makingevents.us",
    phone: "(555) 234-5678",
    email: "info@makingevents.us"
  },
  {
    id: 4,
    name: "ExhibitRental Pro",
    category: "Rental Solutions",
    description: "Comprehensive trade show exhibit rental solutions with nationwide service.",
    rating: 4.7,
    location: "Orlando, FL",
    services: ["Exhibit Rentals", "Custom Graphics", "Installation", "Dismantling"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    website: "https://example.com",
    phone: "(555) 345-6789",
    email: "rentals@exhibitpro.com"
  },
  {
    id: 5,
    name: "RentalXpress Events",
    category: "Rental Solutions",
    description: "Quick-turn exhibit rentals and custom solutions for any show or event.",
    rating: 4.8,
    location: "Chicago, IL",
    services: ["Modular Rentals", "Custom Builds", "Logistics", "Storage"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    website: "https://example.com",
    phone: "(555) 456-7890",
    email: "info@rentalxpress.com"
  }
];