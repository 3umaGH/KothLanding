import { useEffect, useState } from 'react'
import LOGO from '../../assets/logo-small.webp'
import { useBreakPoint } from '../../hooks/useBreakpoint'

const links = [
  {
    title: 'Discord',
    subtitle: 'Connect with the community',
    URL: 'https://discord.kothreforged.com',
    openInNewTab: true,
  },
  {
    title: 'Donate',
    subtitle: 'Help us to fund the servers',
    URL: 'https://mee6.gg/m/1130814036603326464',
    openInNewTab: true,
  },
  {
    title: 'Server List',
    subtitle: 'View our other servers',
    URL: '#servers',
    openInNewTab: false,
  },
]

export const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false)
  const currentBreakpoint = useBreakPoint()

  useEffect(() => {
    if (currentBreakpoint === 'lg') setSideMenuOpen(false)

    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [currentBreakpoint, isSideMenuOpen])

  return (
    <div
      className={`absolute z-10 overflow-x-clip h-full w-full transition-colors duration-300 ${
        isSideMenuOpen ? 'bg-[#121315d8]' : ''
      }`}>
      <div className='absolute bg-[#12131576] w-full flex justify-center min-h-[75px]'>
        <div className='p-4 max-w-[1536px] w-full flex justify-between items-center'>
          <img src={LOGO} width={120} className='' />

          <div className='font-semibold uppercase hidden lg:flex gap-16'>
            {links.map(link => (
              <a
                key={link.title}
                href={link.URL}
                target={link.openInNewTab ? '_blank' : undefined}
                rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                className='hover:opacity-80 transition-all duration-250'>
                <p>{link.title}</p>
                <p className='text-[0.75rem] font-thin'>{link.subtitle}</p>
              </a>
            ))}
          </div>

          <div className='block lg:hidden bg-red-500 z-20' onClick={() => setSideMenuOpen(p => !p)}>
            <div className='w-5'>
              <span
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isSideMenuOpen ? 'rotate-45' : ''
                }`}></span>
              <span
                className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                  isSideMenuOpen ? 'opacity-0' : '-translate-y-1.5'
                }`}></span>
              <span
                className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                  isSideMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute right-0 top-0 min-w-[300px] bg-[#121315dc] p-4 pr-16 pt-8 h-[100svh] transition-all duration-500 ${
          isSideMenuOpen ? 'translate-x-0' : 'translate-x-96 invisible'
        }`}>
        {links.map(link => (
          <a
            key={link.title}
            href={link.URL}
            target={link.openInNewTab ? '_blank' : undefined}
            rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
            className='hover:opacity-80 transition-all duration-250'>
            <p className='mt-2'>{link.title}</p>
            <p className='text-[0.75rem] font-thin'>{link.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
