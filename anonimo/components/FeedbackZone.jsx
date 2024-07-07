import React, { useState } from 'react'
import Image from 'next/image'
import WhiteArrow from '../public/white-arrow.svg'
import AnonymousCloud from '../public/home-cloud.png'
import AnonymousGradHat from '../public/graduation-hat.png'
import AnonymousPinkHeart from '../public/pink-heart.png'
import AnonymousCloudConv1 from '../public/home-convo-cloud-1.png'
import AnonymousCloudConv2 from '../public/home-convo-cloud-2.png'
import AnonymousCloudConv3 from '../public/home-convo-cloud-3.png'
import AnonymousCloudConv4 from '../public/home-convo-cloud-4.png'


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
        
        <div className='anonymous-cloud floatee'>
            <Image src={AnonymousCloud} className='anonymous-cloud-img'/>
        </div>

        <div className='anonymous-grad-hat floatee2'>
            <Image src={AnonymousGradHat} className='anonymous-grad-hat-img'/>
        </div>

        <div className='anonymous-pink-heart floatee3'>
            <Image src={AnonymousPinkHeart} className='anonymous-pink-heart-img'/>
        </div>

        <div className='anonymous-convo-1 floatee'>
            <Image src={AnonymousCloudConv1} className='anonymous-convo-1-img'/>
            <p className='convo-text anonymous-convo-1-text'>What do you think about my recent project?</p>
        </div>

        <div className='anonymous-convo-2 floatee3'>
            <Image src={AnonymousCloudConv2} className='anonymous-convo-2-img'/>
            <p className='convo-text anonymous-convo-2-text'>What are your thoughts on my latest blog post?</p>
        </div>

        <div className='anonymous-convo-3 floatee2'>
            <Image src={AnonymousCloudConv3} className='anonymous-convo-3-img'/>
            <p className='convo-text anonymous-convo-3-text'>What is your opinion on the current social media <br/>strategy?</p>
        </div>

        <div className='anonymous-convo-4 floate3'>
            <Image src={AnonymousCloudConv4} className='anonymous-convo-4-img'/>
            <p className='convo-text anonymous-convo-4-text'>How would you rate my presentation skills?</p>
        </div>

    </div>
  )
}

export default FeedbackZone