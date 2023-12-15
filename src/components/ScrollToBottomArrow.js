// ScrollToBottomArrow.js

import React from 'react';
import { BsArrowDown } from 'react-icons/bs';


const ScrollToBottomArrow = ({ onClick }) => {
  return (
    <div className="scroll-to-bottom-container" onClick={onClick}>
        <div className="scroll-to-bottom-arrow">
            <BsArrowDown />
        </div>
    </div>
    
  );
};

export default ScrollToBottomArrow;
