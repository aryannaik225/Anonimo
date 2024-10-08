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
          <a href="/FeedbackForm/Personal-Information" className='h-20 mb-20 rounded-full'>
            <div className='btn-bg xl:h-20 xl:w-[277px] lg:h-[72px] lg:w-[256px] rounded-full bg-white flex justify-center items-center overflow-hidden relative mb-16'>
              <div className='hover-layer'></div>
              <p className='button-text'>Get Started</p>
            </div>
          </a>
        </div>
        <div className='absolute floatee 2xl:top-[78px] 2xl:left-[139px] xl:top-[78px] xl:left-[129px] lg:top-[78px] lg:left-[109px] pointer-events-none'>
          <Image src={HandWave} alt="Hand Wave" className='pointer-events-none home-hand-wave'/>
        </div>
        <div className='absolute floatee2 2xl:top-[102px] 2xl:right-[270.29px] xl:top-[102px] xl:right-[200.29px] lg:top-[102px] lg:right-[130.29px] pointer-events-none'>
          <Image src={RedHeart} alt="Red Heart" className="pointer-events-none home-red-heart"/>
        </div>
        <div className='absolute floatee3 2xl:top-[424px] 2xl:right-[101.9px] xl:top-[424px] xl:right-[1.9px] lg:top-[424px] lg:right-[1.9px] pointer-events-none'>
          <Image src={AnonimousFace} alt="Anonymous Guy" className="pointer-events-none home-anonymous-guy"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection