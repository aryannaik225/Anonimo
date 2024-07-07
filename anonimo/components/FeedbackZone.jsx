import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import WhiteArrow from '../public/white-arrow.svg'
import AnonymousCloud from '../public/home-cloud.png'
import AnonymousGradHat from '../public/graduation-hat.png'
import AnonymousPinkHeart from '../public/pink-heart.png'
import AnonymousCloudConv1 from '../public/home-convo-cloud-1.png'
import AnonymousCloudConv2 from '../public/home-convo-cloud-2.png'
import AnonymousCloudConv3 from '../public/home-convo-cloud-3.png'
import AnonymousCloudConv4 from '../public/home-convo-cloud-4.png'
import WorkplaceLikeImg from '../public/like-image.png'
import WorkplaceRocketImg from '../public/rocket-image.png'
import WorkplaceShieldImg from '../public/shield-image.png'
import WorkplaceBriefcaseImg from '../public/briefcase-image.png'


const FeedbackZone = () => {
    const [hovered, setHovered] = useState('subtext1');

    const handleMouseEnter = (text) => {
        setHovered(text);
    }

    useEffect(() => {
        setHovered('subtext1')
    }, []);

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
            <p className='feedback-subtext flex flex-col'>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext1')} >anonymous opinions</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext2')} >workplace insights</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext3')} >personal growth</span><br/>
                <span className='feedback-subtext-text' onMouseEnter={() => handleMouseEnter('subtext4')} >relationships</span>
            </p>
        </div>
        
    {/* ------------------------ Anonymous Opinions ---------------------------- */}

            <div className={`anonymous-cloud floatee ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousCloud} className={`anonymous-cloud-img ${hovered}`} /> {/* Added hovered class */}
            </div>

            <div className={`anonymous-grad-hat floatee2 ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousGradHat} className={`anonymous-grad-hat-img ${hovered}`} /> {/* Added hovered class */}
            </div>

            <div className={`anonymous-pink-heart floatee3 ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousPinkHeart} className={`anonymous-pink-heart-img ${hovered}`} /> {/* Added hovered class */}
            </div>

            <div className={`anonymous-convo-1 floatee ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousCloudConv1} className={`anonymous-convo-1-img ${hovered}`} /> {/* Added hovered class */}
                <p className={`anonymous-convo-text anonymous-convo-1-text ${hovered}`}>What do you think about my recent project?</p> {/* Added hovered class */}
            </div>

            <div className={`anonymous-convo-2 floatee3 ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousCloudConv2} className={`anonymous-convo-2-img ${hovered}`} /> {/* Added hovered class */}
                <p className={`anonymous-convo-text anonymous-convo-2-text ${hovered}`}>What are your thoughts on my latest blog post?</p> {/* Added hovered class */}
            </div>

            <div className={`anonymous-convo-3 floatee2 ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousCloudConv3} className={`anonymous-convo-3-img ${hovered}`} /> {/* Added hovered class */}
                <p className={`anonymous-convo-text anonymous-convo-3-text ${hovered}`}>What is your opinion on the current social media <br/>strategy?</p> {/* Added hovered class */}
            </div>

            <div className={`anonymous-convo-4 floatee3 ${hovered}`}> {/* Added hovered class */}
                <Image src={AnonymousCloudConv4} className={`anonymous-convo-4-img ${hovered}`} /> {/* Added hovered class */}
                <p className={`anonymous-convo-text anonymous-convo-4-text ${hovered}`}>How would you rate my presentation skills?</p> {/* Added hovered class */}
            </div>

     {/* ----------------------------- Workplace Insights -------------------------------  */}

        <div className={`workplace-like floatee ${hovered}`}>
            <Image src={WorkplaceLikeImg} className={`workplace-like-img ${hovered}`} />
        </div>

        <div className={`workplace-rocket floatee2 ${hovered}`}>
            <Image src={WorkplaceRocketImg} className={`workplace-rocket-img ${hovered}`} />
        </div>

        <div className={`workplace-shield floatee3 ${hovered}`}>
            <Image src={WorkplaceShieldImg} className={`workplace-shield-img ${hovered}`} />
        </div>

        <div className={`workplace-briefcase floatee ${hovered}`}>
            <Image src={WorkplaceBriefcaseImg} className={`workplace-briefcase-img ${hovered}`} />
        </div>

        <div className={`workplace-convo-1 floatee ${hovered}`}>
            <Image src={AnonymousCloudConv1} className={`workplace-convo-1-img ${hovered}`} />
            <p className={`workplace-convo-text workplace-convo-1-text ${hovered}`}>Do you feel that your contributions are valued?</p>
        </div>

        <div className={`workplace-convo-2 floatee3 ${hovered}`}>
            <Image src={AnonymousCloudConv2} className={`workplace-convo-2-img ${hovered}`} />
            <p className={`workplace-convo-text workplace-convo-2-text ${hovered}`}>What changes do you want at work?</p>
        </div>

        <div className={`workplace-convo-3 floatee2 ${hovered}`}>
            <Image src={AnonymousCloudConv3} className={`workplace-convo-3-img ${hovered}`} />
            <p className={`workplace-convo-text workplace-convo-3-text ${hovered}`}>What do you honestly think about the management style here?</p>
        </div>

        <div className={`workplace-convo-4 floatee3 ${hovered}`}>
            <Image src={AnonymousCloudConv4} className={`workplace-convo-4-img ${hovered}`} />
            <p className={`workplace-convo-text workplace-convo-4-text ${hovered}`}>Are there any team members who consistently cause problems?</p>
        </div>
          
    </div>
  )
}

export default FeedbackZone