import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-white font-nunito w-screen flex flex-col items-center'>
      <div className='flex flex-col justify-between items-center min-h-screen'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
