import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 uppercase'>
                Extsocial
            </div>
            <Image
                className='w-full rounded-xl aspect-[21/9] max-sm:aspect-video object-cover'
                src='/images/_MG_0024.jpg'
                width={2000}
                height={1000}
                alt=''
            />
        </div>
    )
}

export default Hero
