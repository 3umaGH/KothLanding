import { GamemodeOverviewSection } from '../components/homepage/GamemodeOverviewSection'
import { Hero } from '../components/homepage/Hero'
import { JoinCommunitySection } from '../components/homepage/JoinCommunitySection'
import { Layout } from '../components/layout/Layout'

export const Homepage = () => {
  return (
    <div className='overflow-x-clip'>
      <Layout>
        <Hero />
        <hr className='w-full my-16 h-[2px] border-t-0 bg-[#1a1c1f]' />
        <JoinCommunitySection />

        <hr className='w-full my-16 h-[2px] border-t-0 bg-[#1a1c1f]' />
        <GamemodeOverviewSection />
      </Layout>
    </div>
  )
}
