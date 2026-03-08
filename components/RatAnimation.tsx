import React, { useEffect, useState, useRef } from 'react';

// Simple SVG Rat Icon
const RatIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.9 2 10 2.9 10 4V6H5C3.9 6 3 6.9 3 8V14C3 15.1 3.9 16 5 16H7V18C7 19.1 7.9 20 9 20H15C16.1 20 17 19.1 17 18V16H19C20.1 16 21 15.1 21 14V8C21 6.9 20.1 6 19 6H14V4C14 2.9 13.1 2 12 2ZM5 8H19V14H5V8ZM9 16H15V18H9V16ZM12 4H14V6H10V4H12Z" />
    <path d="M21.5 13C21.5 13 18 13.5 16 12C15 11.25 15 9 15 9C15 9 13.5 8 11.5 8C9.5 8 8 9 8 9C8 9 8 11.25 7 12C5 13.5 1.5 13 1.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M16 12L22 18M7 12L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="1" fill="red" />
  </svg>
);

const RatAnimation: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scuttle = () => {
    // Start position (random edge)
    const startSide = Math.random() > 0.5 ? 'left' : 'right';
    const startY = Math.random() * (window.innerHeight - 50);
    const startX = startSide === 'left' ? -100 : window.innerWidth + 100;
    
    // End position (opposite side)
    const endX = startSide === 'left' ? window.innerWidth + 100 : -100;
    const endY = Math.random() * (window.innerHeight - 50);

    setPosition({ x: startX, y: startY });
    setRotation(startSide === 'left' ? 90 : -90); // Simple rotation logic
    setIsActive(true);

    // Animate across
    const duration = 3000 + Math.random() * 2000; // 3-5 seconds
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      // Add some jitter for realistic scuttling
      const jitterY = Math.sin(progress * 20) * 20;

      setPosition({ x: currentX, y: currentY + jitterY });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsActive(false);
        scheduleNextScuttle();
      }
    };

    requestAnimationFrame(animate);
  };

  const scheduleNextScuttle = () => {
    const delay = 5000 + Math.random() * 10000; // 5-15 seconds break
    timeoutRef.current = setTimeout(scuttle, delay);
  };

  useEffect(() => {
    scheduleNextScuttle();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!isActive) return null;

  return (
    <div 
      className="fixed z-0 pointer-events-none text-neutral-800 opacity-80"
      style={{ 
        left: position.x, 
        top: position.y,
        transform: `rotate(${rotation}deg)`,
        width: '60px',
        height: '60px',
        transition: 'transform 0.1s linear' // Smooth rotation, manual position update
      }}
    >
      <RatIcon className="w-full h-full text-neutral-500 fill-current" />
    </div>
  );
};

export default RatAnimation;