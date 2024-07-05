import React from 'react';
import CarouselCircle from '../public/carousel_circle.svg';
import Image from 'next/image';

const TextCarousel = () => {
  return (
    <div className='carouselWrapperWrap'>
          <div className='carouselWrapper'>
            <div className='item item1'>What do you think of this project that I have created?</div>
            <Image src={CarouselCircle} />
            <div className='item item2'>What are your thoughts on my approach to this problem?</div>
            <Image src={CarouselCircle} />
            <div className='item item3'>How can I improve this idea further?</div>
            <Image src={CarouselCircle} />
            <div className='item item4'>What features would you like to see added?</div>
            <Image src={CarouselCircle} />
            <div className='item item5'>Is the user interface intuitive and easy to use?</div>
            <Image src={CarouselCircle} />
            <div className='item item6'>How do you find the overall concept of this platform?</div>
            <Image src={CarouselCircle} />
            <div className='item item7'>What challenges do you foresee with this project?</div>
            <Image src={CarouselCircle} />
            <div className='item item8'>Do you have any suggestions for enhancements?</div>
            <Image src={CarouselCircle} />
            <div className='item item9'>Is the platform meeting your expectations?</div>
            <Image src={CarouselCircle} />
            <div className='item item10'>What do you think about the design and layout?</div>
            <Image src={CarouselCircle} />
        </div>
    </div>
  )
}

export default TextCarousel