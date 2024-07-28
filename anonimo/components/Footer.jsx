import React from 'react'
import HeartLogo from '../public/heart-logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex w-full justify-center absolute items-center h-[50px] 2xl:mt-[2327px] xl:mt-[2190px]'>
        <div className='flex justify-between' style={{width: "95.39065%"}}>
            <div>
                <Link href="#"><p className='footer-txt2'>Anonimo</p></Link>
            </div>

            <div className='flex justify-between lg:gap-12 md:gap-6 sm:gap-4 lg:ml-[167px] md:ml-[120px] sm:ml-[90px]'>
                <a href="https://www.github.com/aryannaik225/anonimo"><p className='footer-txt'>GitHub</p></a>
                <a href="https://www.instagram.com/aryannaik225"><p className='footer-txt'>Instagram</p></a>
                <a href="mailto:aryann2203@gmail.com?subject=Anonimo%20Website"><p className='footer-txt'>Email me</p></a>
            </div>

            <div className='flex flex-nowrap' style={{gap: "6px"}}>
                <p className='footer-txt2'>Made by Aryan Naik</p>
                <Image src={HeartLogo} className='pointer-events-none'/>
            </div>
        </div>
    </div>
  )
}

export default Footer