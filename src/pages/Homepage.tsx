import { GamemodeOverviewSection } from '../components/homepage/GamemodeOverviewSection'
import { Hero } from '../components/homepage/Hero'
import { Layout } from '../components/layout/Layout'

export const Homepage = () => {
  return (
    <div className='overflow-x-clip'>
    <Layout>
      <Hero />
      <GamemodeOverviewSection />
    </Layout>
    </div>
  )
}
