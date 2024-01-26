import Image from 'next/image'
import React from 'react'

const Members = () => {
    return (
        <div>
            <div className='font-dmserif text-brown-700 text-5xl md:text-6xl text-center mb-10 mt-20'>
                Members
            </div>

            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
                <div className="item-member">
                    <Image src='/images/sample-image.png' width={671} height={809} alt='member' />
                </div>
            </div>
        </div>
    )
}

export default Members
