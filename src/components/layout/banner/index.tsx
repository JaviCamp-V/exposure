'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ADBannerProps {
  className?: string;
  content: React.ReactNode | string;
  defaultVisibility?: boolean;
}

const ADBanner: React.FC<ADBannerProps> = ({ className, defaultVisibility = true, content }) => {
  const [isVisible, setIsVisible] = React.useState(defaultVisibility);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn('bg-lime-300 fixed top-0 z-50 w-full text-white max-h-20', className)}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex-grow text-center text-sm md">{content}</div>
        <Button
          type="button"
          variant={'ghost'}
          size={'icon'}
          onClick={handleClose}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ADBanner;
