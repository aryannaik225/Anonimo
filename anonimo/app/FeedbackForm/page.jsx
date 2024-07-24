'use client'

import FormMidSection from '@components/components/FormMidSection'
import TextCarousel from '@components/components/TextCarousel'
import React from 'react'

export default function Home() {
    return (
        <main className='bg-black'>
            <TextCarousel />
            <FormMidSection />
        </main>
    )
}