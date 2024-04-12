import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='text-white font-nunito px-2 w-screen flex flex-col
       items-center'>
      <div className='flex flex-col justify-between items-center min-h-screen'>
        {children}
        <h1>Footer</h1>
      </div>
    </div>
  )
}
