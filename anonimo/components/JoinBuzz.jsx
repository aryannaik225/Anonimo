import React from 'react'
import Image from 'next/image'
import BgImg from '../public/home-bottom-sec-bg.png'
import BlackArrow from '../public/black-arrow.svg'
import LightBlubImg from '../public/home-bulb.png'
import PhoneImg from '../public/home-phone.png'
import CamImg from '../public/home-cam.png'
import StarImg from '../public/home-star.png'

const JoinBuzz = () => {
  return (
    <div className='flex w-full justify-center absolute' style={{marginTop: "1740px"}}>
        <div className='absolute bottom-bg' style={{width: "94.375%"}}>
            <div className='w-full flex justify-center items-center mt-1'>
                <Image src={BlackArrow} />
                <p className='ml-1 scroll-more2'>
                    Scroll More
                </p>
            </div>
            <div className='w-full flex justify-center' style={{marginTop: "74px"}}>
                <p className='buzz-text'>join<br/> the buzz</p>
            </div>

            <div className='w-full flex justify-center' style={{marginTop: "74px", marginBottom: "75px"}}>
                <div className='w-56 h-20 rounded-full bg-white cursor-pointer'>
                    <div className='w-full h-full flex justify-center items-center g-s-btn-main'>
                        <div style={{width: "137px", height: "31px"}} className='g-s-btn overflow-hidden'> 
                            <p className='buzz-text2'>get started</p>
                            <p className='buzz-text3'>get started</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='light-bulb-div floatee pointer-events-none'>
                <Image src={LightBlubImg} className='light-bulb-img'/>
            </div>
            
            <div className='phone-div floatee2 pointer-events-none'>
                <Image src={PhoneImg} className='phone-img'/>
            </div>

            <div className='cam-div floatee3 pointer-events-none'>
                <Image src={CamImg} className='cam-img' />
            </div>

            <div className='star-div floatee2 pointer-events-none'>
                <Image src={StarImg} className='star-img'/>
            </div>

        </div>
    </div>
  )
}

export default JoinBuzz;