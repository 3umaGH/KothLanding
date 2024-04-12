import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center overflow-x-clip'>
      <div className='text-white font-dm overflow-clip'>
        <div className='flex flex-col items-center justify-between min-h-screen overflow-x-clip'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
