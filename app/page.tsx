import Header from '@/components/Header'
import StoriesSection from '@/components/StoriesSection'
import LiveFeed from '@/components/LiveFeed'
import DMSection from '@/components/DMSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <StoriesSection />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-2">
            <LiveFeed />
          </div>
          <div className='hidden lg:block'>
            <DMSection/>
          </div>
        </div>
      </main>
    </div>
  )
}

