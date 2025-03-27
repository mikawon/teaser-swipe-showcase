
import React from 'react';
import TeaserSwiper from '@/components/TeaserSwiper';
import { useIsMobile } from '@/hooks/use-mobile';

const teasers = [
  {
    id: 1,
    title: "Design Excellence",
    imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(59, 130, 246, 0.1)"
  },
  {
    id: 2,
    title: "Intuitive Experience",
    imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(236, 72, 153, 0.1)"
  },
  {
    id: 3,
    title: "Precision Crafted",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(245, 158, 11, 0.1)"
  },
  {
    id: 4,
    title: "Revolutionary Tech",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(16, 185, 129, 0.1)"
  },
  {
    id: 5,
    title: "Sustainable Innovation",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(52, 211, 153, 0.1)"
  },
  {
    id: 6,
    title: "Minimal Aesthetic",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(139, 92, 246, 0.1)"
  },
  {
    id: 7,
    title: "Thoughtful Details",
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(244, 63, 94, 0.1)"
  },
  {
    id: 8,
    title: "Seamless Integration",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    accentColor: "rgba(8, 145, 178, 0.1)"
  }
];

const Index = () => {
  const isMobile = useIsMobile();
  
  // Split teasers into two rows
  const firstRowTeasers = teasers.slice(0, 4);
  const secondRowTeasers = teasers.slice(4);
  
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
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 space-y-12">
        <div>
          <h2 className="text-2xl font-medium mb-8">Featured Collection</h2>
          <TeaserSwiper 
            teasers={firstRowTeasers} 
            itemsPerView={isMobile ? 1.2 : 4}
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-medium mb-8">Popular Selection</h2>
          <TeaserSwiper 
            teasers={secondRowTeasers} 
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
