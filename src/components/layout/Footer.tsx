export const Footer = () => {
  return (
    <div className='w-full mt-32 mb-16'>
      <div className='bg-[#08080963] py-8 flex gap-4 flex-col justify-center items-center'>
        <div className='flex flex-col text-center'>
          <p className='font-bold'>King of the Hill Reforger</p> <p>© 2024. All rights reserved.</p>
        </div>
        <p className=' text-[#7195c1]'>
          Crafted with ❤️ by{' '}
          <a href='https://github.com/3umaGH' target='_blank' rel='noopener noreferrer'>
            3uma
          </a>
        </p>
      </div>
    </div>
  )
}
