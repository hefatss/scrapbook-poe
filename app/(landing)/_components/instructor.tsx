'use client'
import { INSTRUCTOR } from '@/constants/instructor'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Instructor = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className='font-dmserif text-white text-5xl md:text-6xl text-center mb-10 mt-20'>
                Instructor
            </motion.div>

            <div className='grid grid-cols-2 gap-3 max-md:grid-cols-2 max-sm:grid-cols-2 w-fit place-items-center pl-72 pr-72 max-sm:pl-0 max-sm:pr-0 max-md:pl-0 max-md:pr-0'>
                {INSTRUCTOR.map((instructor, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        key={index}
                        className='item-instructor'>
                        <Image
                            src={instructor.images || '/images/sample-image.png'}
                            width={400}
                            height={440}
                            alt={`Instructor ${index + 1}`}
                        />

                        {/* <div className='text-center mt-3'>
                            <p className='text-white italic'>
                                &quot;{instructor.quote}&quot;
                            </p>
                        </div> */}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Instructor
