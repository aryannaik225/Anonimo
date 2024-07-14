import React from 'react'
import Image from 'next/image';
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import AnonimoLogo from '../public/anonimo-logo.svg';
import Github from '../public/github-logo.svg';
import Instagram from '../public/instagram-logo.svg';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center' style={{width: '95.28%'}}>
        <div>
          <a href="/"><Image src={AnonimoLogo}/></a>
        </div> 
        <div className='flex gap-12 relative'>
            <Link href="/FAQ"><p className='nav-links cursor-pointer'>FAQ</p></Link>
            <Link href="/About"><p className='nav-links cursor-pointer'>About</p></Link>
            <p className='nav-links cursor-pointer'>Feedbacks</p>
            <Link href="mailto:aryann2203@gmail.com?subject=Anonimo%20Website"><p className='nav-links cursor-pointer'>Contact us</p></Link>
        </div>
        <div className='bg-black rounded-full flex justify-center items-center gap-8' style={{width: '123px', height: '51px'}}>
            <a href="https://www.github.com/aryannaik225"><Image src={Github} className='hover-git-insta'/></a>
            <a href="https://www.instagram.com/aryannaik225"><Image src={Instagram} className='hover-git-insta'/></a>
        </div>
    </div>
  )
}

export default NavBar