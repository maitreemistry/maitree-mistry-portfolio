'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type RoleTypingAnimationProps = {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
};

export function RoleTypingAnimation({
  roles,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
  className,
}: RoleTypingAnimationProps) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(deletingSpeed);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(pauseDuration);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(typingSpeed);
      }
    };

    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn(className, "inline-flex items-center")}>
      {text}
      <span className="w-px h-7 bg-primary ml-1 animate-blink" aria-hidden="true" />
    </span>
  );
}
