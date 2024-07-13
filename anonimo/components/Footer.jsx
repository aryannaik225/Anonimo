import React from 'react'
import HeartLogo from '../public/heart-logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex w-full justify-center absolute items-center' style={{marginTop: "2327px", height: "50px"}}>
        <div className='flex justify-between' style={{width: "95.39065%"}}>
            <div>
                <Link href="#"><p className='footer-txt2'>Anonimo</p></Link>
            </div>

            <div className='flex justify-between gap-12' style={{marginLeft: "167px"}}>
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