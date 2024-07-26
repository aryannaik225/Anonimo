'use client'

import FormMidSection2 from '@components/components/FormMidSection2'
import TextCarousel from '@components/components/TextCarousel'
import React from 'react'

export default function Home() {
    return (
        <main className='bg-black'>
            <TextCarousel />
            <FormMidSection2 />
        </main>
    )
}