import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FolderOpenDot, House, Mail, User} from "lucide-react"

const Sidebar = () => {
    return (
      <div className='w-14 h-1/2 fixed  top-1/2 transform -translate-y-1/2 flex justify-center rounded-lg bg-[#374151] shadow-lg'>
          <ul className='flex flex-col items-center justify-center h-full'>
              <li className='my-4'>
                  <Link href='/'><House className='text-white size-6' /></Link>
              </li>
              <li className='my-4'>
                  <Link href='/'><User className='text-white size-6' /></Link>
              </li>
              <li className='my-4'>
                  <Link href='/'><FolderOpenDot className='text-white size-6' /></Link>
              </li>
              <li className='my-4'>
                  <Link href='/'><Mail className='text-white size-6'/></Link>
              </li>
          </ul>
      </div>
    )
  }
  
  export default Sidebar;
  