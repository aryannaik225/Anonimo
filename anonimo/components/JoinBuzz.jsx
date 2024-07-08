import React from 'react'
import Image from 'next/image'
import BgImg from '../public/home-bottom-sec-bg.png'
import BlackArrow from '../public/black-arrow.svg'

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
                <p className='buzz-text'>
                    join<br/>the buzz
                </p>
            </div>
        </div>
    </div>
  )
}

export default JoinBuzz