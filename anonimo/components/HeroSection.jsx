import React from 'react'
import Image from 'next/image';
import NavBar from './NavBar';
import HandWave from '../public/home-hand-wave.png';
import RedHeart from '../public/red-heart.png';
import AnonimousFace from '../public/anonymous-guy.png';

const HeroSection = () => {
  return (
    <div className='mt-5 flex justify-center w-full'>
      <div className='hero-bg absolute' style={{width: '94.375%'}}>
        <div className='w-full flex justify-center mt-7'>
          <NavBar />
        </div>
        <div className='mt-12 w-full flex justify-center'>
          <p className='hero-text'>
            <span className=''>real</span><br/>
            <span className=''>feedback</span><br/>
            <span className=''>zero pressure</span>
          </p>
        </div>
        <div className='w-full flex justify-center mt-7'>
          <a href="/FeedbackForm/Personal-Information">
            <div className='btn-bg h-20 rounded-full bg-white flex justify-center items-center overflow-hidden relative mb-16' style={{width: "277px"}}>
              <div className='hover-layer'></div>
              <p className='button-text'>Get Started</p>
            </div>
          </a>
        </div>
        <div className='absolute floatee' style={{top: "78px", left: "139px"}}>
          <Image src={HandWave} alt="Hand Wave" className='pointer-events-none home-hand-wave'/>
        </div>
        <div className='absolute floatee2' style={{top: "102px", right: "270.29px"}}>
          <Image src={RedHeart} alt="Red Heart" className="pointer-events-none home-red-heart"/>
        </div>
        <div className='absolute floatee3' style={{top: "424px", right: "101.9px"}}>
          <Image src={AnonimousFace} alt="Anonymous Guy" className="pointer-events-none home-anonymous-guy"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection