import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-white font-nunito w-screen max-w-[99svw] overflow-clip'>
        <div className='overflow-x-clip flex flex-col justify-between items-center min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
