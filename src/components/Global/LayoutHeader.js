import { Menu, MenuButton, MenuItem, MenuItems, Listbox, ListboxButton, ListboxOption, ListboxOptions, Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel, PopoverGroup, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  Cog8ToothIcon,
  CpuChipIcon,
  CubeIcon,
  UserGroupIcon, CheckIcon, ChevronUpDownIcon, 
  ChevronDownIcon,
  UserIcon,} from '@heroicons/react/24/outline'
import { useState } from 'react'

  const navigation = [
    { 
      name: 'Features',
      href: '/features/header',
      icon: AdjustmentsHorizontalIcon,
      subnav:[
        { name: 'Header', href: '/features/header'},
        { name: 'Footer', href: '#'},
        { name: 'Events', href: '#'},
        { name: 'Chat Tag', href: '/features/chat-tag'},
        { name: 'Manage City', href: '#'},
        { name: 'Manage product', href: '#'},
        { name: 'Manage Category', href: '#'},
        { name: 'Script Manager', href: '#'},
        { name: 'Promotional Space', href: '#'},
        { name: 'Users', href: '#'},
      ]
    },
    { 
      name: 'Products',
      href: '/products/astrology/horoscope',
      icon: CubeIcon,
      subnav:[
        { name: 'Astrology', href: '/products/astrology/horoscope'},
        { name: 'Khojle Affiliate', href: '#'},
        { name: 'Affiliate', href: '#'},
        { name: 'Interactive', href: '#'},
        { name: 'Short video', href: '#'},
        { name: 'Videos', href: '#'},
        { name: 'Product Setting', href: '#'},
        { name: 'Subscription', href: '#'},
      ]
    },
    {
      name: 'Services',
      href: '/services/notification/campaigns',
      icon: Cog8ToothIcon,
      subnav:[
        { name: 'Notification Campaigns', href: '/services/notification/campaigns'},
        { name: 'Recommended Product', href: '#'},
        { name: 'Engagement', href: '#'},
        { name: 'Ad Manager', href: '#'},
      ]
    },
    {
      name: 'AI Hub',
      href: '/ai-hub/webstories/listing',
      icon: CpuChipIcon,
      subnav:[
        { name: 'Webstories', href: '/ai-hub/webstories/listing'},
      ]
    },
    {
      name: 'CDP',
      href: '/cdp/registrations',
      icon: UserGroupIcon,
      subnav:[
        { name: 'Registrations', href: '/cdp/registrations'},
        { name: 'Demographics', href: '/cdp/registrations/demographics', current: false },
      ]
    },
  ]
  const userNavigation = [
    { name: 'My Account', href: '#' },
    { name: 'Change Password', href: '#' },
    { name: 'Logout', href: '/login' },
  ]
  
  const domain = [
    { id: 1, name: 'Jagran - English', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 2, name: 'Jagran Prime ', avatar: 'https://www.jagranimages.com/images/wms/jagran.svg', },
    { id: 3, name: 'HZ - Hindi', avatar: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 4, name: 'Jagran Play', avatar: 'https://www.jagranimages.com/images/wms/jagran.svg', },
    { id: 5, name: 'OMH - Hindi ', avatar: 'https://www.jagranimages.com/images/wms/onlymyhealth.svg', },
    { id: 6, name: 'HZ - English ', avatar: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 7, name: 'HZ - Tamil ', avatar: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 8, name: 'Jagran', avatar: 'https://www.jagranimages.com/images/wms/jagran.svg', },
    { id: 9, name: 'Jagran TV ', avatar: 'https://www.jagranimages.com/images/wms/jagran.svg', },
    { id: 10, name: 'HZ - Top Deals', avatar: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 11, name: 'OMH - English', avatar: 'https://www.jagranimages.com/images/wms/onlymyhealth.svg', },
    { id: 12, name: 'OMH - Tamil', avatar: 'https://www.jagranimages.com/images/wms/onlymyhealth.svg', },
    { id: 13, name: 'Eng-HZ -Top Deals', avatar: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 14, name: 'Nai Dunia', avatar: 'https://www.jagranimages.com/images/wms/naidunia.svg', },
    { id: 15, name: 'Gujrati Jagran', avatar: 'https://www.jagranimages.com/images/wms/jagran_gujrati.svg', },
    { id: 16, name: 'Vishvas News', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 17, name: 'Jagran Cricket', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 18, name: 'Jagran Josh', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 19, name: 'Jagran Josh college', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 20, name: 'Punjabi Jagran', avatar: 'https://www.jagranimages.com/images/wms/jagran_punjabi.svg', },
    { id: 21, name: 'Jagran - Top Deals', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 22, name: 'Jagran - election', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 23, name: 'election - naidunia', avatar: 'https://www.jagranimages.com/images/wms/naidunia.svg', },
    { id: 24, name: 'election-englishjagran', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 25, name: 'Marathi Jagran', avatar: 'https://www.jagranimages.com/images/wms/jagran_marathi.svg', },
    { id: 26, name: 'Khojle', avatar: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
  ]

function LayoutHeader(props) {
  console.log(props.noheader,'noheader--------------------------');
  
  const [selected, setSelected] = useState(domain[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <header className="inset-x-0 w-full px-4 lg:px-0 lg:max-w-7xl m-auto top-0 z-50 flex h-20 lg:h-24">
      <div className="mx-auto flex w-full items-center justify-between">
        <div className="flex flex-1 items-center">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2 p-3 md:hidden">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5 text-gray-900" />
          </button>
          <a href='/'> <svg className="h-6 w-16 ml-2 sm:h-8 sm:w-20"><use href="#wms"></use></svg></a>
        </div>
        {props.noheader!== 'noheader' ?
        <nav className="hidden md:flex md:gap-x-6 md:text-sm/6 md:font-bold md:text-gray-700">
          {/* {navigation.map((item, itemIdx) => (
            <a key={itemIdx} href={item.href}>
              {item.name}
            </a>
          ))} */}
            <PopoverGroup className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item, itemIdx) => (
                <Popover className="relative" key={itemIdx}>
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 outline-none">
                    {item.name}
                    {item.subnav ? (<ChevronDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-400" />) : null}
                  </PopoverButton>
                  {item.subnav ? (
                    <PopoverPanel
                      transition
                      className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-4">
                        {item.subnav.map((data) => (
                          <div
                            key={data.name}
                            className="group relative flex rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                          >
                            <div className="flex-auto">
                              <a href={data.href} className="block text-sm font-medium text-gray-900 px-4">
                                {data.name}
                                <span className="absolute inset-0" />
                              </a>
                              {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </PopoverPanel>
                  ) : null}
                </Popover>
              ))}
        </PopoverGroup>
        </nav>
        : null }
        
        <div className="flex flex-1 items-center justify-end gap-x-2">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <ListboxButton className="relative w-40 lg:w-52 cursor-default rounded-full bg-white py-2.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-xs sm:text-sm">
                  <span className="flex items-center">
                    <img alt="" src={selected.avatar} className="h-5 w-5 shrink-0 rounded-full" />
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {domain.map((person) => (
                    <ListboxOption
                      key={person.id}
                      value={person}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-red-600 data-[focus]:text-white"
                    >
                      <div className="flex items-center">
                        <img alt="" src={person.avatar} className="h-5 w-5 shrink-0 rounded-full bg-white" />
                        <span className="ml-3 block truncate text-xs sm:text-sm font-normal group-data-[selected]:font-semibold">
                          {person.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-red-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
            <Menu as="div" className="relative ml-1 sm:ml-3">
              <div>
                <MenuButton className="relative h-10 w-10 flex rounded-full bg-slate-50 text-sm focus:outline-none focus:ring-2 outline-none focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserIcon aria-hidden="true" className="h-10 w-10 rounded-full border p-2" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-2xl overflow-hidden bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-100">
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
        </div>
      </div>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">WMS</span>
                <a href='/'> <svg className="h-6 w-16 sm:h-8 sm:w-20"><use href="#wms"></use></svg></a>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                {navigation.map((item, itemIdx) => (
                  <Disclosure as="div" className="-mx-3" key={itemIdx}>
                    <DisclosureButton className="group text-sm flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-semibold text-gray-900 hover:bg-gray-50">
                    {item.name}
                    {item.subnav ? (<ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />) : null}
                    </DisclosureButton>
                    {item.subnav ? (
                      <DisclosurePanel className="mt-2 space-y-2">
                        {item.subnav.map((data) => (
                            <DisclosureButton
                            key={data.name}
                            as="a"
                            href={data.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-xs font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {data.name}
                          </DisclosureButton>
                          ))}
                      </DisclosurePanel>
                    ) : null}
                  </Disclosure>
                ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
    )
}

export default LayoutHeader
