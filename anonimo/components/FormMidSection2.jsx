import React from 'react'
import NavBar from './NavBar'
import AddQuestion from './AddQuestion'
import FooterFAQ from './FooterFAQ'
import CloudImage from '../public/create-form-cloud.png'
import PencilImage from '../public/create-form-pencil.png'
import Image from 'next/image'

const FormMidSection2 = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='faq-bg mt-5'>
            <div className='w-full flex justify-center mt-7'>
                <NavBar />
            </div>
            <div className='flex w-full justify-center mt-16'>
                    <p className='form-title-txt'>create a unique link to gather anonymous feedback from your circle.</p>
            </div>
            <div className='flex w-full justify-center mt-8 mb-36'>
                <AddQuestion />
            </div>
            <div className='flex w-full justify-center'>
              <FooterFAQ />
            </div>
            <div className='absolute top-[237px] right-20 pointer-events-none'>
              <Image src={CloudImage} alt="Cloud Image" className='form-cloud floatee drop-shadow-lg pointer-events-none'/>
            </div>
            <div className='absolute top-[696px] left-20 pointer-events-none'>
              <Image src={PencilImage} alt="Pencil Image" className='form-pencil floatee2 drop-shadow-lg pointer-events-none'/>
            </div>
        </div>
    </div>
  )
}

export default FormMidSection2