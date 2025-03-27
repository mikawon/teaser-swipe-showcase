
import React, { useState, useRef, useEffect } from 'react';
import TeaserBox from './TeaserBox';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Teaser {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  accentColor?: string;
}

interface TeaserSwiperProps {
  teasers: Teaser[];
  itemsPerView?: number;
  gap?: number;
}

const TeaserSwiper: React.FC<TeaserSwiperProps> = ({
  teasers,
  itemsPerView = 4,
  gap = 16
}) => {
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Mobile adjustments
  const effectiveItemsPerView = isMobile ? Math.min(2, itemsPerView) : itemsPerView;
  
  // Calculate dimensions
  const containerWidth = 100;
  const itemWidth = (containerWidth - (gap * (effectiveItemsPerView - 1))) / effectiveItemsPerView;
  
  useEffect(() => {
    const checkScrollability = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    // Initial check
    checkScrollability();
    
    // Hide swipe hint after some time
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
    }

    return () => {
      clearTimeout(timer);
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of the view
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    
    // Hide swipe hint when user actively uses navigation
    setShowSwipeHint(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setShowSwipeHint(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    if (scrollContainerRef.current) {
      const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    if (scrollContainerRef.current) {
      const x = e.touches[0].pageX - (scrollContainerRef.current.offsetLeft || 0);
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
    
    setShowSwipeHint(false);
  };

  return (
    <div className="relative w-full">
      {/* Navigation buttons (hidden on mobile) */}
      {!isMobile && (
        <>
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2",
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white/90 shadow-md backdrop-blur transition-all",
              "hover:bg-white hover:shadow-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2",
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white/90 shadow-md backdrop-blur transition-all",
              "hover:bg-white hover:shadow-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Swipe hint for mobile users */}
      {isMobile && showSwipeHint && canScrollRight && (
        <div className="absolute right-6 top-1/2 z-10 -translate-y-1/2 flex items-center opacity-70">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center swipe-hint">
            <span className="text-xs mr-1">Swipe</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      )}

      {/* Teaser grid with horizontal scrolling */}
      <div 
        ref={scrollContainerRef}
        className={cn(
          "flex gap-x-4 overflow-x-auto pb-6 pt-1 snap-x snap-mandatory no-scrollbar",
          "scroll-px-4 scrollbar-none -mx-4 px-4"
        )}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {teasers.map((teaser, index) => (
          <div 
            key={teaser.id}
            className={cn(
              "snap-start snap-always flex-shrink-0 transition-opacity duration-300",
              "first:pl-0 last:pr-4"
            )}
            style={{ 
              width: `${itemWidth}%`,
              scrollSnapAlign: 'start',
            }}
          >
            <TeaserBox 
              title={teaser.title}
              description={teaser.description}
              index={index}
              imageUrl={teaser.imageUrl}
              accentColor={teaser.accentColor}
            />
          </div>
        ))}
      </div>
      
      {/* Scroll indicator dots */}
      <div className="flex justify-center mt-6 gap-1.5">
        {Array.from({ length: Math.ceil(teasers.length / effectiveItemsPerView) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft = 
                  i * (scrollContainerRef.current.clientWidth * 0.9);
              }
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              canScrollRight && canScrollLeft ? 
                (i === 0 ? "bg-gray-800" : "bg-gray-300") : 
                (canScrollRight ? 
                  (i === 0 ? "bg-gray-800" : "bg-gray-300") : 
                  (i === 1 ? "bg-gray-800" : "bg-gray-300"))
            )}
            aria-label={`Scroll to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeaserSwiper;
