
import React from 'react';
import TeaserSwiper from '@/components/TeaserSwiper';
import { useIsMobile } from '@/hooks/use-mobile';

const teasers = [
  {
    id: 1,
    title: "Design Excellence",
    description: "Discover the perfect balance of form and function with our award-winning design approach.",
    imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(59, 130, 246, 0.1)"
  },
  {
    id: 2,
    title: "Intuitive Experience",
    description: "Experience seamless interaction designed around how people really think and work.",
    imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(236, 72, 153, 0.1)"
  },
  {
    id: 3,
    title: "Precision Crafted",
    description: "Every detail matters in the pursuit of excellence and uncompromising quality.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(245, 158, 11, 0.1)"
  },
  {
    id: 4,
    title: "Revolutionary Tech",
    description: "Pushing boundaries with cutting-edge technology that enhances human capability.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(16, 185, 129, 0.1)"
  },
  {
    id: 5,
    title: "Sustainable Innovation",
    description: "Creating solutions that are better for users and better for the planet.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(52, 211, 153, 0.1)"
  },
  {
    id: 6,
    title: "Minimal Aesthetic",
    description: "Less but better - focused on the essential aspects, back to purity, back to simplicity.",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(139, 92, 246, 0.1)"
  },
  {
    id: 7,
    title: "Thoughtful Details",
    description: "The difference between good and great lies in attention to the smallest details.",
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(244, 63, 94, 0.1)"
  },
  {
    id: 8,
    title: "Seamless Integration",
    description: "Products that work together as a harmonious system, greater than the sum of their parts.",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(8, 145, 178, 0.1)"
  }
];

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 md:px-10 lg:px-16 flex flex-col items-center text-center animate-fade-in">
        <div className="inline-block mb-2 px-3 py-1 rounded-full bg-black/5 backdrop-blur-sm">
          <span className="text-xs font-medium tracking-wider text-gray-700">
            PREMIUM SHOWCASE
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-4">
          Discover Excellence
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mt-2">
          Explore our curated collection of refined products, each designed with meticulous attention to detail and uncompromising quality.
        </p>
      </header>

      {/* Main content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Featured Collection</h2>
          <TeaserSwiper 
            teasers={teasers} 
            itemsPerView={isMobile ? 1.2 : 4}
          />
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8">Popular Selection</h2>
          <TeaserSwiper 
            teasers={[...teasers].reverse()} 
            itemsPerView={isMobile ? 1.2 : 4}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-50 border-t border-gray-100 py-8 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Premium Showcase. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
