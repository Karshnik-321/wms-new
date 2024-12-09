import {
  AdjustmentsHorizontalIcon,
  Cog8ToothIcon,
  CpuChipIcon,
  CubeIcon,
  UserGroupIcon, } from '@heroicons/react/24/outline'
import Layout from '../components/Layout/Layout'
const navigation = [
  { name: 'Features', href: '/features/header', icon: AdjustmentsHorizontalIcon, current: false },
  { name: 'Products', href: '/products/astrology/horoscope', icon: CubeIcon, current: false },
  { name: 'Services', href: '/services/notification/campaigns', icon: Cog8ToothIcon, current: false },
  { name: 'AI Hub', href: '/ai-hub/webstories/listing', icon: CpuChipIcon, current: false },
  { name: 'CDP', href: '/cdp/registrations', icon: UserGroupIcon, current: false },
]
export default function Dashboard() {
  return (
    <Layout noheader="noheader">
      <div className="py-0 sm:py-10">
        {/* <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header> */}
        <main>
          <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl px-5 py-2 sm:py-20">
              <div className="text-center">
                <h1 className="text-balance uppercase font-bold tracking-tight text-gray-900 text-2xl sm:text-4xl">
                  My Access
                </h1>
                <p className="mt-2 sm:mt-5 text-xs/5 lg:text-sm leading-0 lg:leading-6 font-normal text-gray-600">
                  Creating a dashboard is just one part of conveying information to consumers. Adding text on dashboards allows a story to be told alongside the data.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-2x1 py-2 sm:py-30'>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-6">
                {navigation.map((item) => (
                  <div className="gamelist" key={item.name}>
                    <a
                      href={item.href}
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7 flex justify-center">
                        <item.icon
                          aria-hidden="true"
                          className="h-10 lg:h-12 w-10 lg:w-12"
                        />
                      </div>
                      <h3 className="mt-4 text-sm sm:text-lg uppercase text-gray-900 text-center font-bold">
                        {item.name}
                      </h3>

                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
