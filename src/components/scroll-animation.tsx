'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-from-left' | 'slide-in-from-right';
  delay?: number;
};

export function ScrollAnimation({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // A short delay to ensure the animation is smooth
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-700 ease-out',
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
