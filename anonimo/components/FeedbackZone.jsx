import React, { useState } from 'react'
import Image from 'next/image'
import WhiteArrow from '../public/white-arrow.svg'

const FeedbackZone = () => {
    const [hovered, setHovered] = useState('subtext1');

    const handleMouseEnter = (text) => {
        setHovered(text);
    }

  return (
    <div className='w-full absolute' style={{marginTop: "802px"}}>
        <div className='w-full flex justify-center items-center'>
            <Image src={WhiteArrow} />
            <p className='ml-1 scroll-more1'>
                Scroll More
            </p>
        </div>

        <div className='mt-16 w-full flex justify-center'>
            <p className='feedback-text'>
                <span className=''>feedback</span><br/>
                <span className=''>zone</span>
            </p>
        </div>
        <div className='mt-16 w-full flex justify-center mb-36'>
            <p className='feedback-subtext'>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext1')} >anonymous opinions</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext2')} >workplace insights</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext3')} >personal growth</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext4')} >relationships</span>
            </p>
        </div>
        
    </div>
  )
}

export default FeedbackZone