import React from 'react'

export const Footer = () => {
  return (
    <div className='mt-32 mb-16 w-full'>
      <div className='bg-[#08080963] py-8 flex gap-2 flex-col justify-center items-center'>
        <p>
          <span className='font-bold'>King of the Hill Reforger</span> © 2024. All rights reserved.
        </p>
        <p>
          Crafted with ❤️ by{' '}
          <a href='https://github.com/3umaGH' target='_blank' rel='noopener noreferrer'>
            3uma
          </a>
        </p>
      </div>
    </div>
  )
}
