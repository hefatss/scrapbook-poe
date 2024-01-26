'use client'
import React, { useState, useRef } from 'react'

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [firstClick, setFirstClick] = useState(false)
    const audioPlayerRef = useRef<HTMLAudioElement>(null)

    const togglePlay = () => {
        const audioPlayer = audioPlayerRef.current

        if (!firstClick) {
            setFirstClick(true)
        }

        if (audioPlayer) {
            if (isPlaying) {
                audioPlayer.pause()
            } else {
                audioPlayer.play()
            }

            setIsPlaying(!isPlaying)
        }
    }

    return (
        <>
            <div
                className={`bg-gradient-to-b from-[#f7f1d9] to-[#bbaa87] w-full h-full fixed top-0 left-0 z-50 flex flex-col items-center justify-center gap-3 transition-all duration-1000 ease-in-out ${
                    firstClick ? 'top-[-100%]' : ''
                }`}>
                <div className='font-dmserif text-brown-700 text-2xl text-center -mb-3'>
                    Welcome to
                </div>
                <div className='font-dmserif text-brown-700 text-6xl text-center mb-5'>
                    Extsocial Class
                </div>
                <div
                    className='bg-brown-100 px-10 py-3 rounded-full hover:bg-brown-300 cursor-pointer'
                    onClick={togglePlay}>
                    Open Our Memory
                </div>
            </div>
            <div className='fixed bottom-7 right-7 z-50'>
                <audio ref={audioPlayerRef} className='hidden' controls>
                    <source src='/music/music.mp3' type='audio/mpeg' />
                </audio>
            </div>
        </>
    )
}

export default MusicPlayer
