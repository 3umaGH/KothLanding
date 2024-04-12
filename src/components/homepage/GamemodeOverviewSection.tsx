import SECTION_SCREENSHOT from '../../assets/gamemode_overview_bg.webp'

export const GamemodeOverviewSection = () => {
  return (
    <div className='mt-16 flex flex-col lg:flex-row gap-8 px-8 items-center lg:items-start '>
      <div className=''>
        <img src={SECTION_SCREENSHOT} width={'100%'} height={'auto'} className='rounded-md ' />
      </div>
      <div className='flex flex-col gap-4 md:max-w-[500px]'>
        <h3 className='text-3xl'>What is King of the Hill?</h3>
        <p className='text-lg font-semibold'>
          In the game Arma Reforger, King of the Hill involves three teams competing to control sectors. As you
          progress, you earn experience, unlocking gear and vehicles to support your team's efforts in dominating the
          zone.
        </p>
      </div>
    </div>
  )
}
