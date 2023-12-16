// ScrollToBottomArrow.js

import React, { useState, useEffect } from 'react';
import { BsArrowDown } from 'react-icons/bs';


const ScrollToBottomArrow = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollThreshold = 400;
    const isScrolledDown = window.scrollY > scrollThreshold;
    setIsVisible(!isScrolledDown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-bottom-container ${isVisible ? 'visible' : 'hidden'}`} onClick={onClick}>
        <div className="scroll-to-bottom-arrow animated">
            <BsArrowDown />
        </div>
    </div>
  );
};

export default ScrollToBottomArrow;
