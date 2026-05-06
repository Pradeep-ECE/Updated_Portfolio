import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Direct DOM manipulation — zero React state, zero reconciliation per frame
    const move = ({ clientX: x, clientY: y }) => {
      ring.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };

    const handleEnter = (e) => {
      const isInteractive = e.target.closest('button, a, input, textarea, .interactive');
      if (isInteractive) {
        ring.classList.add('cursor-hover');
        dot.classList.add('cursor-dot-hover');
      } else {
        ring.classList.remove('cursor-hover');
        dot.classList.remove('cursor-dot-hover');
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', handleEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleEnter);
    };
  }, []);

  return (
    <>
      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ willChange: 'transform' }}
      />
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
