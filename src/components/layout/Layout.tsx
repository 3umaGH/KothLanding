import React from 'react'
import { Footer } from './Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='text-white font-nunito px-2 w-screen flex flex-col
       items-center'>
      <div className='flex flex-col justify-between items-center min-h-screen'>
        {children}
        <Footer />
      </div>
    </div>
  )
}
