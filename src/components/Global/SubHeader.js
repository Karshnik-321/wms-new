import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
function SubHeader(props) {
    const {tabs} = props
    return (
        <div className="mx-auto">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    defaultValue={tabs.find((tab) => tab.current).name}
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="flex border-b text-gray-50 bg-white px-6">
                    <nav aria-label="Tabs" className="-mb-px flex">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                aria-current={tab.current ? 'page' : undefined}
                                className={classNames(
                                    tab.current
                                        ? 'border-red-500 text-red-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 px-4 py-4 text-xs font-semibold uppercase',
                                )}
                            >
                                {tab.name}
                            </a>
                        ))}
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="flex items-center w-full justify-center border-b-2 px-4 py-4 text-xs font-semibold uppercase border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Dropdown
                                <ChevronDownIcon aria-hidden="true" className="-mr-1 h-4 w-4 text-gray-400" />
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-100 data-[focus]:text-gray-900"
                                        >
                                            Account settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-100 data-[focus]:text-gray-900"
                                        >
                                            Support
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-100 data-[focus]:text-gray-900"
                                        >
                                            License
                                        </a>
                                    </MenuItem>
                                    <form action="#" method="POST">
                                        <MenuItem>
                                            <button
                                                type="submit"
                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-slate-100 data-[focus]:text-gray-900"
                                            >
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </form>
                                </div>
                            </MenuItems>
                        </Menu>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
