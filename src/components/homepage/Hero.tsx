import HERO_BG from '../../assets/hero_bg.webp'
import LOGO from '../../assets/logo.webp'
import { ServerItem } from '../ServerList/ServerItem'

export const Hero = () => {
  return (
    <div className='flex justify-center items-center select-none'>
      <div className='w-screen max-h-[1200px] md:max-h-[1000px] overflow-clip flex justify-center items-center relative'>
        <div
          className='w-full min-h-[1200px] md:min-h-[1000px] bg-no-repeat  bg-cover bg-center animate-blur opacity-75'
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />

        <div className='absolute h-full flex  justify-between items-center flex-col p-8'>
          <img src={LOGO} width='100%' height='auto' className=' md:max-w-[600px] mt-24' />

          <div className='flex gap-4 flex-col mt-8 h-full justify-around'>
            <h1 className='text-xl sm:text-3xl font-bold text-center italic'>
              Dominate the hill, rule the battlefield!
            </h1>

            <div className='flex gap-12 xl:gap-32 md:gap-16 justify-around mt-8 flex-wrap'>
              <ServerItem status='online' name={'EU-1'} map='meaux' maxSlots={85} totalPlayers={76} />
              <ServerItem status='restarting' name={'EU-2'} map='chotain' maxSlots={0} totalPlayers={0} />
              <ServerItem status='offline' name={'EU-3'} map='chotain' maxSlots={0} totalPlayers={0} />
            </div>

            <a
              className='md:text-right text-center font-bold no-underline transition-color duration-100 hover:text-gray-200'
              href='#servers'>
              View All Servers...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
