import React from 'react'
import Hero from './_components/hero'
import Instructor from './_components/instructor'
import Members from './_components/members'
import Gallery from './_components/gallery'
import Bonus from './_components/bonus'
import MusicPlayer from './_components/music_player'

const LandingPage = () => {
    return (
        <div className='min-h-[200vh] pt-20'>
            <div className='max-con max-sm:px-5'>
                <Hero />
                <Instructor />
                <Members />
                <Gallery />
                <Bonus />
                <MusicPlayer />
            </div>
        </div>
    )
}

export default LandingPage
