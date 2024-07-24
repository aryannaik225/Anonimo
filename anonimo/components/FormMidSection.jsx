import React from 'react'
import NavBar from './NavBar'
import PersonalInformation from './PersonalInformation'

const FormMidSection = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='faq-bg mt-5'>
            <div className='w-full flex justify-center mt-7'>
                <NavBar />
            </div>
            <div className='flex w-full justify-center mt-16'>
                    <p className='form-title-txt'>create a unique link to gather anonymous feedback from your circle.</p>
            </div>
            <div className='flex w-full justify-center mt-8'>
                <PersonalInformation />
            </div>
        </div>
    </div>
  )
}

export default FormMidSection