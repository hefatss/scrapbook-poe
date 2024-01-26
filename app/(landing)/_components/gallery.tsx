'use client'
import React from 'react'
//@ts-ignore
import ImageGallery from 'react-image-gallery'

const Gallery = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/'
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/'
        }
    ]

    return (
        <div>
            <div className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Our Memories
            </div>

            <ImageGallery items={images} />
        </div>
    )
}

export default Gallery
