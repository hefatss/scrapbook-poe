import { MEMBERS } from '@/constants/member'
import Image from 'next/image'
import React from 'react'

const Members = () => {
    return (
        <div>
            <div className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Members
            </div>

            <div className='grid grid-cols-4 gap-3 max-md:grid-cols-3 max-sm:grid-cols-2'>
                {MEMBERS.map((member, index) => (
                    <div key={index} className='item-member'>
                        <Image
                            src={member.images || '/images/sample-image.png'}
                            width={671}
                            height={809}
                            alt={`Member ${index + 1}`}
                        />

                        <div className='text-center mt-3'>
                            <p className='text-brown-700 italic'>&quot;{member.quote}&quot;</p>
                            <p className='text-brown-700 font-bold'>{member.instagram}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Members
