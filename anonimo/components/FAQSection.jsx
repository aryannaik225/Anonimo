import React from 'react'
import NavBar from './NavBar'
import FooterFAQ from './FooterFAQ'

const FAQSection = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='faq-bg mt-5'>
            <div className='w-full flex justify-center mt-7'>
                <NavBar />
            </div>
            <div className='w-full flex justify-center mt-11'>
                <p className='faq-txt'>
                    <span className=''>FAQ</span>
                </p>
            </div>
            <div className='w-full flex justify-center mt-5 mb-24'>
                <div className='' style={{width: "85.2649%"}}>
                    <div className='mt-0 left-0 w-full'>
                        <div className='flex gap-4 justify-start items-center'>
                            <div className='bg-white w-4 h-4 rounded-full'/>
                            <p className='faq-title'>General Question</p>
                        </div>
                        <div className=' ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>What is Anonimo?</p>
                            <p className='faq-ans'>Anonymous Circle Feedback is a platform that allows you to gather unbiased opinions from your circle anonymously, fostering honest and constructive communication.</p>
                        </div>
                        <div className='ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>How does it work?</p>
                            <p className='faq-ans'>You create a unique feedback link, share it with your circle, and collect anonymous feedback. No login is required, and all responses remain confidential.</p>
                        </div>
                    </div>

                    <div className='w-full flex justify-center mt-16 mb-16'>
                        <div className='bg-white' style={{width: "86.50%", height: "1px"}}/>
                    </div>

                    <div className='mt-0 left-0 w-full'>
                        <div className='flex gap-4 justify-start items-center'>
                            <div className='bg-white w-4 h-4 rounded-full'/>
                            <p className='faq-title'>Using the Platform</p>
                        </div>
                        <div className=' ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>How do I create a feedback link?</p>
                            <p className='faq-ans'>Click on the "Get Started" button in the hero section, fill out the form, and generate your unique link to share.</p>
                        </div>
                        <div className='ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>How do I access my feedback?</p>
                            <p className='faq-ans'>Click on the "Feedback" button in the navigation, enter your unique code, and view your feedback.</p>
                        </div>
                    </div>

                    <div className='w-full flex justify-center mt-16 mb-16'>
                        <div className='bg-white' style={{width: "86.50%", height: "1px"}}/>
                    </div>

                    <div className='mt-0 left-0 w-full'>
                        <div className='flex gap-4 justify-start items-center'>
                            <div className='bg-white w-4 h-4 rounded-full'/>
                            <p className='faq-title'>Privacy and Security</p>
                        </div>
                        <div className=' ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>Is my feedback really anonymous?</p>
                            <p className='faq-ans'>Yes, all feedback collected through the platform is completely anonymous and secure.</p>
                        </div>
                        <div className='ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>How is my data protected?</p>
                            <p className='faq-ans'>We use robust encryption and privacy measures to protect all user data and ensure confidentiality.</p>
                        </div>
                    </div>

                    <div className='w-full flex justify-center mt-16 mb-16'>
                        <div className='bg-white' style={{width: "86.50%", height: "1px"}}/>
                    </div>

                    <div className='mt-0 left-0 w-full'>
                        <div className='flex gap-4 justify-start items-center'>
                            <div className='bg-white w-4 h-4 rounded-full'/>
                            <p className='faq-title'>Troubleshoot</p>
                        </div>
                        <div className=' ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>I lost my unique code. What should I do?</p>
                            <p className='faq-ans'>If you've lost your unique code, please contact us for assistance.</p>
                        </div>
                        <div className='ml-9 mt-7 flex flex-col justify-start'>
                            <p className='faq-ques'>I&apos;m having trouble accessing my feedback.</p>
                            <p className='faq-ans'>Make sure you are entering the correct unique code. If the problem persists, contact our support team.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-5'>
                <FooterFAQ />
            </div>
        </div>
    </div>
  )
}

export default FAQSection