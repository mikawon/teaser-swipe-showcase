
import React from 'react';
import { cn } from '@/lib/utils';

interface TeaserBoxProps {
  title: string;
  description: string;
  index: number;
  imageUrl?: string;
  accentColor?: string;
}

const TeaserBox: React.FC<TeaserBoxProps> = ({
  title,
  description,
  index,
  imageUrl = '/placeholder.svg',
  accentColor = 'rgba(0, 0, 0, 0.03)'
}) => {
  return (
    <div 
      className="w-full h-full teaser-hover"
      style={{ '--index': index } as React.CSSProperties}
    >
      <div 
        className={cn(
          "relative overflow-hidden rounded-lg h-full",
          "transition-all duration-300 ease-out",
          "shadow-sm hover:shadow-md",
          "bg-white dark:bg-gray-900",
          "border border-gray-100 dark:border-gray-800"
        )}
      >
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ background: accentColor }}
        />
        
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 overflow-hidden rounded-md aspect-video bg-gray-100">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              loading="lazy"
            />
          </div>
          
          <div className="space-y-2 flex-grow content-appear">
            <h3 className="text-lg font-medium tracking-tight">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          </div>
          
          <div className="pt-4 content-appear">
            <div className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
              Learn more
              <svg 
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaserBox;
