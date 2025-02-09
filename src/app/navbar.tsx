import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-between backdrop-blur-lg bg-[#E6E6E6]/30 border-b border-white/10">
      <div className="h-10 w-fit mx-24 flex items-center gap-2">
        <h1 className="font-bold text-lg">Ripudaman</h1>
      </div>
      <div className="h-10 w-fit flex mx-24 items-center gap-2">
        <Image src="/menu-left-alt.svg" alt="Menu" width={40} height={12} />
      </div>
    </div>
  )
}

export default Navbar
