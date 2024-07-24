import React from 'react'
import Image from 'next/image'
import Cross from '../public/close-logo.svg'
import Box from '../public/box-logo.svg'
import SelectedArrow from '../public/selected-arrow.svg'
import NotSelectedArrow from '../public/not-selected-arrow.svg'

const PersonalInformation = () => {
  return (
    <div className='bg-white rounded-3xl' style={{width: "559px"}}>
        <div className='flex w-full justify-end'>
            <Image src={Cross} alt="Close Logo" className='mt-4 mr-4'/>
        </div>
        <div className='flex w-full justify-center mt-0'>
            <div style={{width: "506px"}}>
                <div className='w-full flex justify-start gap-4'>
                    <Image src={Box} alt="Box Logo"/>
                    <p className='personal-info-txt'>Personal Information</p>
                </div>
                <div className='w-full flex justify-start' style={{marginTop: "6px"}}>
                    <p className='personal-info-txt2'>Add personal information</p>
                </div>
                <div className='w-full flex' style={{gap: "6px"}}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalInformation