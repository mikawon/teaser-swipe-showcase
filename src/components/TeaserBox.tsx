
import React from 'react';
import { cn } from '@/lib/utils';

interface TeaserBoxProps {
  title: string;
  index: number;
  imageUrl?: string;
  accentColor?: string;
}

const TeaserBox: React.FC<TeaserBoxProps> = ({
  title,
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
        
        <div className="p-4 flex flex-col h-full">
          <div className="mb-3 overflow-hidden rounded-md aspect-video bg-gray-100">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              loading="lazy"
            />
          </div>
          
          <div className="content-appear flex-grow flex items-center justify-center">
            <h3 className="text-lg font-medium tracking-tight text-center">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaserBox;
