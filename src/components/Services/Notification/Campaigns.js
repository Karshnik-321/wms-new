import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserPlusIcon, PaperAirplaneIcon, ArrowUpLeftIcon, PercentBadgeIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout'
import 'react-quill/dist/quill.snow.css';
import { Dialog, DialogBackdrop, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const campaigns = [
    {
      id: 1,
      campaignname: 'India',
      authorname: 'talibuddin t',
      sent: '9952',
      clicked: '1815',
      ctr: '18.24%',
      publishdate: '01 Aug 2024'
    },
    {
        id: 2,
        campaignname: 'Paris Olympics 2024',
        authorname: 'talibuddin t',
        sent: '9952',
        clicked: '1815',
        ctr: '18.24%',
        publishdate: '01 Aug 2024'
    },
    {
        id: 1,
        campaignname: 'India',
        authorname: 'talibuddin t',
        sent: '9952',
        clicked: '1815',
        ctr: '18.24%',
        publishdate: '01 Aug 2024'
      },
      {
          id: 2,
          campaignname: 'Paris Olympics 2024',
          authorname: 'talibuddin t',
          sent: '9952',
          clicked: '1815',
          ctr: '18.24%',
          publishdate: '01 Aug 2024'
      },
      
  ]
  const stats = [
    { id: 1, name: 'Total Subscribers', stat: '82374', icon: UserPlusIcon, change: '+4.75%', changeType: 'positive' },
    { id: 2, name: 'Total Notification Sent', stat: '29453', icon: PaperAirplaneIcon, change: '+54.02%', changeType: 'negative' },
    { id: 3, name: 'Total Clicked', stat: '4935', icon: ArrowUpLeftIcon, change: '-1.39%', changeType: 'positive' },
    { id: 4, name: 'CTR', stat: '16.76%', icon: PercentBadgeIcon, change: '+10.18%', changeType: 'negative' },
  ]
  const selecteYearData = [
    { id: 1, name: '2024' },
    { id: 2, name: '2023' },
    { id: 3, name: '2022' },
  ]
  const selecteMonthData = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
  ]
export default function Campaigns() {
    const [selecteYear, setSelectedYear] = useState(selecteYearData[0])
    const [selecteMonth, setSelectedMonth] = useState(selecteMonthData[0])
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <Layout>
            <main>
                <div className="mx-4 lg:mx-auto bg-white border-b max-w-7xl rounded-3xl mt-6">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden px-4 sm:px-6 py-6 lg:py-10 border-r-0 lg:border-r border-b lg:border-b-0"
                        >
                            <dt>
                                <div className="absolute rounded-full border border-gray-300 p-4">
                                    <item.icon aria-hidden="true" className="h-5 w-5 text-gray-700" />
                                </div>
                                <p className="truncate ml-16 text-xs lg:text-xs font-medium text-gray-500">{item.name}</p>
                            </dt>
                            <dd className="flex items-baseline justify-between">
                                <p className="text-2xl ml-16 lg:text-3xl font-semibold text-gray-900">{item.stat}</p>
                                <dd
                                    className={classNames(
                                        item.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                                        'text-xs font-medium',
                                    )}
                                >
                                    {item.change}
                                </dd>
                            </dd>
                            
                        </div>
                    ))}
                </dl>
                </div>
                <Dialog open={openFilter} onClose={setOpenFilter} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                            >
                                <div className="bg-white p-6">
                                    <div className='grid grid-cols-2 lg:grid-cols-1 gap-2'>
                                        <Listbox value={selecteYear} onChange={setSelectedYear}>
                                            <div className="relative">
                                                <ListboxButton className="relative w-full cursor-default rounded-3xl bg-white py-2 pl-6 pr-20 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
                                                    <span className="block">{selecteYear.name}</span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                                                    </span>
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                >
                                                    {selecteYearData.map((person) => (
                                                        <ListboxOption
                                                            key={person.id}
                                                            value={person}
                                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                        >
                                                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                                <CheckIcon aria-hidden="true" className="size-5" />
                                                            </span>
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                        <Listbox value={selecteMonth} onChange={setSelectedMonth}>
                                            <div className="relative">
                                                <ListboxButton className="relative w-full cursor-default rounded-3xl bg-white py-2 pl-6 pr-20 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
                                                    <span className="block">{selecteMonth.name}</span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                                                    </span>
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                >
                                                    {selecteMonthData.map((person) => (
                                                        <ListboxOption
                                                            key={person.id}
                                                            value={person}
                                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                        >
                                                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                                <CheckIcon aria-hidden="true" className="size-5" />
                                                            </span>
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFilter(false)}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Apply

                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-2 items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 col-span-1 mb-2 lg:mb-0">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Notification Center
                                </h2>
                            </div>
                            <div className="mt-4 col-span-1 flex justify-center lg:justify-end flex-shrink-0 md:ml-4 md:mt-0">
                                <Listbox value={selecteYear} onChange={setSelectedYear}>
                                    <div className="relative mr-4 hidden lg:inline-flex">
                                        <ListboxButton className="relative w-30 cursor-default rounded-3xl bg-white py-2 pl-6 pr-20 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
                                            <span className="block truncate">{selecteYear.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                                            </span>
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                        >
                                            {selecteYearData.map((person) => (
                                                <ListboxOption
                                                    key={person.id}
                                                    value={person}
                                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                >
                                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                        <CheckIcon aria-hidden="true" className="size-5" />
                                                    </span>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                                <Listbox value={selecteMonth} onChange={setSelectedMonth}>
                                    <div className="relative mr-4 hidden lg:inline-flex">
                                        <ListboxButton className="relative w-40 cursor-default rounded-3xl bg-white py-2 pl-6 pr-20 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
                                            <span className="block">{selecteMonth.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                                            </span>
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                        >
                                            {selecteMonthData.map((person) => (
                                                <ListboxOption
                                                    key={person.id}
                                                    value={person}
                                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                >
                                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                        <CheckIcon aria-hidden="true" className="size-5" />
                                                    </span>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                                <button
                                    type="button"
                                    onClick={() => setOpenFilter(true)}
                                    className="mr-2 w-full lg:hidden text-center items-center whitespace-nowrap rounded-full bg-gray-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                >
                                    Sort
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center whitespace-nowrap rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Create Campaign
                                </button>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-red-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-8 pr-3 text-left text-sm font-semibold text-gray-900">
                                            Campaign
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                                        >
                                            Sent
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                                        >
                                            Clicked
                                        </th>
                                        <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900">
                                            CTR
                                        </th>
                                        <th scope="col" className="py-3.5 pl-3 pr-8 text-right text-sm font-semibold text-gray-900">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    {campaigns.map((project) => (
                                        <tr key={project.id} className="border-b border-gray-200">
                                            <td className="max-w-0 py-5 pl-8 pr-3 text-sm">
                                                <div className="font-medium text-gray-900">{project.campaignname}</div>
                                                <div className="mt-1 truncate text-gray-500 text-xs">By {project.authorname} <span className='ml-2'>{project.publishdate}</span></div>
                                            </td>
                                            <td className="px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.sent}</td>
                                            <td className="px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.clicked}</td>
                                            <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500">{project.ctr}</td>
                                            <td className="py-5 pl-3 pr-8 text-right text-xs text-gray-500">
                                                <a href="/" className="text-red-600 font-semibold uppercase hover:text-red-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a
                                    href="/"
                                    className="relative inline-flex items-center rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
                                >
                                    Previous
                                </a>
                                <a
                                    href="/"
                                    className="relative ml-3 inline-flex items-center rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
                                >
                                    Next
                                </a>
                            </div>
                            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                        <span className="font-medium">97</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav aria-label="Pagination" className="isolate inline-flex p-4">
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center rounded-l-3xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                        </a>
                                        {/* Current: "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:outline-offset-0" */}
                                        <a
                                            href="/"
                                            aria-current="page"
                                            className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                            1
                                        </a>
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            2
                                        </a>
                                        <a
                                            href="/"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            3
                                        </a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                            ...
                                        </span>
                                        <a
                                            href="/"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            8
                                        </a>
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            9
                                        </a>
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            10
                                        </a>
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center rounded-r-3xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">Next</span>
                                            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
