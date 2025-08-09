import { useRef, useEffect, useState } from 'react';

export const useScrollOverlay = (cardCount: number = 5) => {
  const cardRefs = Array.from({ length: cardCount }, () =>
    useRef<HTMLDivElement>(null)
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;

      for (let i = 0; i < cardRefs.length - 1; i++) {
        const currentCard = cardRefs[i].current;
        const nextCard = cardRefs[i + 1].current;

        if (!currentCard || !nextCard) continue;

        const currentRect = currentCard.getBoundingClientRect();
        const topCardTop = currentRect.top;
        const topCardBottom = currentRect.bottom;
        const windowHeight = window.innerHeight;

        if (topCardBottom < windowHeight && topCardTop < 0) {
          const translateAmount = Math.max(0, Math.abs(topCardTop));
          nextCard.style.position = 'relative';
          nextCard.style.zIndex = `${10 + i}`;
          nextCard.style.transform = `translateY(-${translateAmount}px)`;
          nextCard.style.transition = 'transform 0.05s ease-out';
        } else if (topCardTop > 0) {
          nextCard.style.transform = 'translateY(0)';
          nextCard.style.zIndex = '1';
        }
      }
    };

    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (newIsMobile) {
        cardRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.style.transform = 'translateY(0)';
            ref.current.style.zIndex = '1';
          }
        });
      } else {
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return { cardRefs };
};
