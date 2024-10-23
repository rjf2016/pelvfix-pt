import { useState, useEffect } from 'react';

const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      if (scrollY > lastScrollY && scrollY > threshold) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }

      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 200); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [threshold]);

  return { scrollDirection, scrolling };
};

export default useScrollDirection;
