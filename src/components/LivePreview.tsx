"use client";
import { forwardRef } from 'react';

interface LivePreviewProps {
  html: string;
  className?: string;
}

const LivePreview = forwardRef<HTMLDivElement, LivePreviewProps>(
  ({ html, className = "" }, ref) => {
    return (
      <div 
        ref={ref}
        className={`relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white aspect-[5/7] min-h-[500px] ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
);

LivePreview.displayName = 'LivePreview';

export default LivePreview; 