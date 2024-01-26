import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10'>
                Extsocial Class
            </div>
            <Image
                className='w-full rounded-xl aspect-[21/9] object-cover'
                src='/images/hero.png'
                width={1000}
                height={500}
                alt=''
            />
        </div>
    )
}

export default Hero
