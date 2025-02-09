import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='b w-full flex items-center h-screen'>
        <div className='w-2/3  h-2/3 flex flex-col gap-6 items-start justify-center px-36'>
            <h1 className='text-8xl font-black'>
                My Projects
            </h1>
            <p className='text-2xl text-gray-400'>
                Here are some of the projects I have worked on.
            </p>
            <button className='px-8 py-3 bg-[#374151] text-white rounded-2xl font-medium hover:bg-slate-400'>
                View Projects
            </button>

        </div>
        <div className=' mx-12 w-auto h-auto overflow-hidden '>
            <Image src='/project.jpg' width={400} height={400} alt=''className="grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"  />
        </div>  

    </div>
  )
}

export default Projects