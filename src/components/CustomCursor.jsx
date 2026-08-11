import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Don't show custom cursor on touch devices
  }

  // Determine dot size based on state
  let dotSize = 12; // default size
  if (isHovering) dotSize = 24; // larger on hover
  if (isClicking) dotSize = 8; // shrink on click

  return (
    <>
      {/* Simple Solid Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-[#1A61F7] dark:bg-blue-400 rounded-full pointer-events-none z-[9999] shadow-sm flex items-center justify-center mix-blend-exclusion"
        animate={{
          x: mousePosition.x - (dotSize / 2),
          y: mousePosition.y - (dotSize / 2),
          width: dotSize,
          height: dotSize,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "white" : "#1A61F7"
        }}
        // Instant follow (no trailing/spring), just smooth size/color transitions
        transition={{ 
          x: { duration: 0 }, 
          y: { duration: 0 },
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 },
          backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
}
