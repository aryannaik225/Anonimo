import React, { useState } from 'react';
import Image from 'next/image'
import Cross from '../public/close-logo.svg'
import Box from '../public/box-logo.svg'
import SelectedArrow from '../public/selected-arrow.svg'
import NotSelectedArrow from '../public/not-selected-arrow.svg'
import WhiteArrow from '../public/white-arrow-2.svg'

const PersonalInformation = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      setIsValid(value === '' || /\S+@\S+\.\S+/.test(value));
    }

    
  return (
    <div className='rounded-3xl' style={{width: "559px", backgroundColor: "#FFF6F6"}}>
        <div className='flex w-full justify-end'>
            <a href="/"><Image src={Cross} alt="Close Logo" className='mt-4 mr-4 cursor-pointer'/></a>
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
                <div className='w-full flex mt-7 items-center' style={{gap: "6px"}}>
                    <div className='flex' style={{gap: "5px"}}>
                        <a href='../FeedbackForm/Personal-Informata href="#"' className='flex justify-center items-center' style={{width: "17px", height: "15px", backgroundColor: "#FF9695", borderRadius: "7.5px"}}> 
                            <p className='personal-info-txt3'>01</p>
                        </a>
                        <a href='../FeedbackForm/Personal-Information'><p className='personal-info-txt4'>User Info</p></a>
                    </div>
                    <div>
                        <Image src={NotSelectedArrow} alt="Not Selected Arrow"/>
                    </div>
                    <div className='flex' style={{gap: "5px"}}>
                        <a href="#" className='flex justify-center items-center personal-info-gray-circle'>
                            <p className='personal-info-txt5'>02</p>
                        </a>
                        <a href="#"><p className='personal-info-txt6'>Question Setup</p></a>
                    </div>
                    <div>
                        <Image src={NotSelectedArrow} alt="Not Selected Arrow"/>
                    </div>
                    <div className='flex' style={{gap: "5px"}}>
                        <a href="#" className='flex justify-center items-center personal-info-gray-circle'>
                            <p className='personal-info-txt5'>03</p>
                        </a>
                        <a href="#"><p className='personal-info-txt6'>Review & Submit</p></a>
                    </div>
                    <div>
                        <Image src={NotSelectedArrow} alt="Not Selected Arrow"/>
                    </div>
                    <div className='flex' style={{gap: "5px"}}>
                        <a href="#" className='flex justify-center items-center personal-info-gray-circle'>
                            <p className='personal-info-txt5'>04</p>
                        </a>
                        <a href="#"><p className='personal-info-txt6'>Circle Management</p></a>
                    </div>
                </div>

                <div className='mt-6 smol-box' style={{width: "100%"}}>
                    <div className='mt-5 mb-5 gap-5 flex flex-col mx-5'>
                        <div className='gap-2 flex flex-col'>
                            <div className='flex gap-0'>
                                <p className='form-txt1'>Name</p>
                                <p className='form-astric'>*</p>
                            </div>
                            <div>
                                <input type="text" className='input-box' placeholder="Enter Name"/>
                            </div>
                        </div>

                        <div className='gap-2 flex flex-col'>
                            <div className='flex gap-0'>
                                <p className='form-txt1'>Email</p>
                                <p className='form-astric'>*</p>
                            </div>
                            <div>
                                <input type="mail" placeholder="Enter Name" value={email} onChange={handleChange} className={`input-box2 ${!isValid && email ? 'invalid' : ''}`}/>
                            </div>
                        </div>

                        <div className='gap-2 flex flex-col'>
                            <div className='flex gap-0'>
                                <p className='form-txt1'>Username &#40;optional&#41;</p>
                            </div>
                            <div>
                                <input type="text" className='input-box' placeholder="Enter Username"/>
                            </div>
                            <div>
                                <p className='form-txt2'>Give a username to be shown instead of your name</p>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="" className='mt-4 w-full rounded-md bg-[#FF9695] flex justify-center items-center h-8 mb-11 cursor-pointer hover:bg-[#DD6968] ease-in duration-200'>
                    <div className='flex gap-1'>
                        <p className='next-step-txt'>Next Step</p>
                        <Image src={WhiteArrow} alt="White Arrow"/>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default PersonalInformation