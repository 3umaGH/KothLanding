import SECTION_SCREENSHOT from '../../assets/gamemode_overview_bg.webp'

export const GamemodeOverviewSection = () => {
  return (
    <div className='mt-32 flex flex-col lg:flex-row gap-8 px-8 items-center lg:items-start '>
      <div className=''>
        <img src={SECTION_SCREENSHOT} width={'100%'} height={'auto'} className='rounded-md ' />
      </div>
      <div className='flex flex-col gap-4 md:max-w-[500px]'>
        <h3 className='text-3xl'>What is King of the Hill?</h3>
        <p className='text-lg font-semibold'>
          King of the Hill is a three team sector control mission within ArmA 3. As you play you will gain experience
          which will in turn unlock new gear and vehicles to aid your teams efforts to control the zone.
        </p>
      </div>
    </div>
  )
}
