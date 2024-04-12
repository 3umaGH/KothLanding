import HERO_BG from '../../assets/hero_bg.webp'
import LOGO from '../../assets/logo.webp'
import { ServerItem } from '../ServerList/ServerItem'

export const Hero = () => {
  return (
    <div className='flex items-center justify-center select-none'>
      <div className='w-screen max-h-[1200px] md:max-h-[1000px] overflow-clip flex justify-center items-center relative'>
        <div
          className='w-full min-h-[1200px] md:min-h-[1000px] bg-no-repeat  bg-cover bg-center animate-blur opacity-75'
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />

        <div className='absolute flex flex-col items-center justify-between h-full p-8'>
          <img src={LOGO} width='100%' height='auto' className=' md:max-w-[600px] mt-24' />

          <div className='flex flex-col justify-around h-full gap-4 mt-8'>
            <h1 className='text-xl italic font-bold text-center sm:text-3xl'>
              Dominate the hill, rule the battlefield!
            </h1>

            <div className='flex flex-wrap justify-around gap-12 mt-8 xl:gap-32 md:gap-16'>
              <ServerItem status='online' name={'EU-1'} map='meaux' maxSlots={85} totalPlayers={76} />
              <ServerItem status='restarting' name={'EU-2'} map='chotain' maxSlots={0} totalPlayers={0} />
              <ServerItem status='offline' name={'EU-3'} map='chotain' maxSlots={0} totalPlayers={0} />
            </div>

            <a
              className='font-bold text-center no-underline duration-100 md:text-right transition-color hover:text-gray-200'
              href='#servers'>
              View All Servers...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
