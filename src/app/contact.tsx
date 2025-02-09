import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, MailIcon } from 'lucide-react'

const Contact = () => {
  return (
    <div className='b w-full flex items-center h-screen'>
            <div className='w-2/3  h-2/3 flex flex-col gap-6 items-start justify-center px-36'>
                <h1 className='text-8xl font-black'>
                    Get in Touch
                </h1>
                <p className='text-2xl text-gray-400'>
                    Feel free to contact me if you have any questions or just want to say hi.
                </p>
                <div className='b w-full'>
                    <ul className='flex gap-4'>
                        <li className='bg-[#374151] rounded-full w-16 h-16 flex items-center justify-center ' ><Link href={''} ><MailIcon className='size-10 text-white' /></Link></li>
                        <li className='bg-[#374151] rounded-full w-16 h-16 flex items-center justify-center ' ><Link href={''} > <Github className='size-10 text-white' /> </Link></li>
                        <li className='bg-[#374151] rounded-full w-16 h-16 flex items-center justify-center ' ><Link href={''} ></Link> <Instagram className='size-10 text-white' /> </li>
                        <li className='bg-[#374151] rounded-full w-16 h-16 flex items-center justify-center ' ><Link href={''} ></Link> <Linkedin className='size-10 text-white' /> </li>
                    </ul>

                </div>
    
            </div>
            <div className=' mx-12 w-auto h-auto overflow-hidden '>
                <Image src='/contact.jpg' width={400} height={400} alt=''className="grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"  />
            </div>  
    
        </div>
  )
}

export default Contact