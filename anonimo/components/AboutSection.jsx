import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'
import CameraImg from '../public/camera-img-1.png'
import NotebookImg from '../public/notebook-img.png'
import Diag1 from '../public/about-convo-cloud-pic.png'
import Diag2 from '../public/about-convo-cloud-art.png'
import AboutPic1 from '../public/about-us-pic1.png'
import AboutPic2 from '../public/about-us-pic2.png'
import AnonimoLogo from '../public/Anonimo-about.png'
import StarImg from '../public/star-img.png'
import RocketImg from '../public/rocket-img.png'
import JoinBuzzAbout from './JoinBuzzAbout'
import FooterFAQ from './FooterFAQ'

const AboutSection = () => {
  return (
    <div className="w-full mt-10">
        <div className='flex w-full justify-center'>
          <NavBar />
        </div>
        <div className='lg:mt-32 mt-24 w-full flex justify-center'>
          <p className='about-us-title'>unlock<br/>honest insights</p>
        </div>
        <div className='w-full flex justify-center mt-14'>
            <div className='about-pic-bg flex justify-center' style={{width: "73.5156%", height: "435px"}}>
                <div className='top-6 relative' style={{width: "930.646px", height: "450.691px"}}>
                  <div className='camera-about-div'>
                      <Image src={CameraImg} alt="camera" className='camera-about-img pointer-events-none'/>
                  </div>
                  
                  <div className='notebook-about-div '>
                      <Image src={NotebookImg} alt="notebook" className='notebook-about-img pointer-events-none'/>
                  </div>
                  
                  <div className='about-diag-1-div '>
                    <Image src={Diag1} alt="diag1" className='about-diag-1 pointer-events-none'/>
                    <div className='about-diag1-inner flex justify-center items-center'>
                      <p className='about-diag-text'>How is this pic I clicked? &lt;3</p>
                    </div>
                  </div>

                  <div className='about-diag-2-div'>
                    <Image src={Diag2} alt="diag2" className='about-diag-2 pointer-events-none'/>
                    <div className='about-diag2-inner flex justify-center items-center'>
                      <p className='about-diag-text'>How can I improve my art?</p>
                    </div>
                  </div>

                  <div className='about-pics-div'>
                    <Image src={AboutPic1} alt="about-pic1" className='about-pic1 floatee3 pointer-events-none'/>
                    <Image src={AboutPic2} alt="about-pic2" className='about-pic2 floatee2 pointer-events-none'/>
                  </div>

                </div>
            </div>
        </div>
        <div className='mt-24 w-full flex justify-center'>
          <div style={{width: "87.73%", maxWidth: "1123px"}}>
            
            <div className='flex justify-between items-center'>
                <div>
                  <p className='about-us-ques'>who am i?</p>
                  <p className='about-us-ans mt-4'>I am a third-year B.Tech student specializing in Artificial Intelligence and Data Science, currently honing my web development skills. With a deep passion for technology and innovation, I created Anonymous Circle Feedback as part of my portfolio and practice projects.</p>
                  <p className='about-us-ans mt-9'>This platform is born out of my desire to foster genuine communication by providing a space for honest, unbiased feedback. I believe that anonymity can help remove the fear of judgment and social pressure, allowing for more truthful and meaningful interactions.</p>
                </div>

                <div>
                  <Image src={AnonimoLogo} alt="Anonimo-logo" className='about-us-anonimo floatee pointer-events-none'/>
                </div>
            </div>

            <div className='flex justify-between items-center mt-6'>
                <div>
                  <Image src={StarImg} alt="star-img" className='about-us-star floatee3 pointer-events-none'/>
                </div>

                <div>
                  <p className='about-us-ans'>As a solo developer, I have poured my knowledge and enthusiasm into building this platform. Anonymous Circle Feedback is designed to help you gain true insights and make informed decisions based on candid feedback from your trusted circle.</p>
                </div>
            </div>

            <div className='flex justify-between items-center mt-36'>
                <div>
                    <p className='about-us-ques'>my goal</p>
                    <p className='about-us-ans mt-8'>The goal is to create a platform that fosters genuine, honest communication by enabling anonymous feedback. We aim to provide a safe space where individuals can share and receive unbiased opinions from their circle of friends, family, and colleagues. By removing the fear of judgment and social pressure, we strive to help users gain valuable insights, make informed decisions, and promote personal and professional growth.</p>
                </div>

                <div>
                  <Image src={RocketImg} alt="rocket-img" className='about-us-rocket floatee2 pointer-events-none'/>
                </div>
            </div>
          </div>
        </div>
        <div className='mt-24 w-full justify-center'>
          <JoinBuzzAbout />
        </div>
        <div className='w-full absolute' style={{top: "3175px"}}>
            <FooterFAQ />
        </div>
    </div>
  )
}

export default AboutSection