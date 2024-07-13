import React from 'react';
import Image from 'next/image';
import Marquee from 'react-marquee-slider';

const TextCarousel = () => {
  const items = [
    "What do you think of this project that I have created?",
    "•",
    "What are your thoughts on my approach to this problem?",
    "•",
    "How can I improve this idea further?",
    "•",
    "What features would you like to see added?",
    "•",
    "Is the user interface intuitive and easy to use?",
    "•",
    "How do you find the overall concept of this platform?",
    "•",
    "What challenges do you foresee with this project?",
    "•",
    "Do you have any suggestions for enhancements?",
    "•",
    "Is the platform meeting your expectations?",
    "•",
    "What do you think about the design and layout?",
    "•"
  ];

  return (
    <div className='carouselWrapperWrap' id='anonimo'> 
        <Marquee velocity={20} pauseOnHover={true}>
          {items.map((item, index) => (
            <div key={index} className='item'>
              {item}
            </div>
        ))}
      </Marquee>
    </div>
  );
};
export default TextCarousel;