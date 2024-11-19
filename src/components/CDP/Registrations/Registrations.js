import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserGroupIcon, CursorArrowRippleIcon, ArrowLeftStartOnRectangleIcon, ChevronUpDownIcon, CheckIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout';
import 'react-quill/dist/quill.snow.css';
import { Dialog, DialogBackdrop, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

  const registrations = [
    {
      id: '#JNM-144889',
      name: 'Physics concept by RKH',
      mobilenumber: '7878350653',
      email: 'rkhod57@gmail.com	',
      age: '30',
      gender: 'Male',
      productname: 'Jagran'
    },
    {
        id: '#JNM-144889',
        name: 'Physics concept by RKH',
        mobilenumber: '7878350653',
        email: 'rkhod57@gmail.com	',
        age: '30',
        gender: 'Male',
        productname: 'Jagran'
    },
    {
        id: '#JNM-144889',
        name: 'Physics concept by RKH',
        mobilenumber: '7878350653',
        email: 'rkhod57@gmail.com	',
        age: '30',
        gender: 'Male',
        productname: 'Jagran'
      },
      {
          id: '#JNM-144889',
          name: 'Physics concept by RKH',
          mobilenumber: '7878350653',
          email: 'rkhod57@gmail.com	',
          age: '30',
          gender: 'Male',
          productname: 'Jagran'
      },
      {
        id: '#JNM-144889',
        name: 'Physics concept by RKH',
        mobilenumber: '7878350653',
        email: 'rkhod57@gmail.com	',
        age: '30',
        gender: 'Male',
        productname: 'Jagran'
      },
      {
          id: '#JNM-144889',
          name: 'Physics concept by RKH',
          mobilenumber: '7878350653',
          email: 'rkhod57@gmail.com	',
          age: '30',
          gender: 'Male',
          productname: 'Jagran'
      },
  ]
  const stats = [
    { id: 1, name: 'Total Registration', subname: 'All Users', stat: '129,301', substat: '129,301', icon: UserGroupIcon, change: '+4.75%', changeType: 'positive', color: 'red' },
    { id: 2, name: 'Piano', subname: 'All Piano Users', stat: '53,917', substat: '53,917', icon: CursorArrowRippleIcon, change: '+54.02%', changeType: 'negative', color: 'amber' },
    { id: 3, name: 'SSO', subname: 'All SSO Users', stat: '75,384', substat: '75,384', icon: ArrowLeftStartOnRectangleIcon, change: '-1.39%', changeType: 'positive', color: 'green' },

  ]
  const domainlist = [
    { id: '1', name: 'All' },
    { id: '2', name: 'HZ - Hindi' },
    { id: '3', name: 'HZ - English' },
    { id: '4', name: 'Jagran' },
  ]
export default function Registrations() {
    const [selectedDomain, setSelectedDomain] = useState(domainlist[0])
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div className="mx-auto">
                            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {stats.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative overflow-hidden bg-white px-4 sm:px-10 py-6 sm:py-8 border-r-0 lg:border-r border-b lg:border-b-0"
                                    >
                                        <div className='flex justify-start items-center'>
                                            <div>
                                                <div className={`rounded-full bg-red-50 p-5`}>
                                                    <item.icon aria-hidden="true" className={`h-7 w-7 text-red-500`} />
                                                </div>
                                            </div>
                                            <dd className='ml-4'>
                                                <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                                                <p className="text-3xl font-bold text-gray-900">{item.stat}</p>
                                            </dd>
                                            
                                        </div>
                                        <div className='bottom-0 bg-opacity-25 ml-10 -mr-10 px-10 mt-4'>
                                            <p className="truncate text-xs font-medium text-gray-500">{item.subname}</p>
                                            <p className="text-xl font-bold text-gray-500">{item.substat}</p>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
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
                                <div className='grid grid-cols-1 lg:grid-cols-1 py-4 sm:py-2'>
                                    <div className='mb-4'>
                                        <label className="block text-sm/6 font-medium text-gray-900">Select Domain</label>
                                        <Listbox value={selectedDomain} onChange={setSelectedDomain}>
                                            {/* <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label> */}
                                            <div className="relative mt-2">
                                                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
                                                    <span className="block truncate text-gray-600">{selectedDomain.name}</span>
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                                                    </span>
                                                </ListboxButton>

                                                <ListboxOptions
                                                    transition
                                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                >
                                                    {domainlist.map((list) => (
                                                        <ListboxOption
                                                            key={list.id}
                                                            value={list}
                                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                        >
                                                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{list.name}</span>

                                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                                <CheckIcon aria-hidden="true" className="size-5" />
                                                            </span>
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox>
                                        {/* <div className="mt-2 space-y-2 sm:flex sm:items-center sm:space-x-5 sm:space-y-0">
                                            {domainlist.map((list) => (
                                                <div key={list.id} className="flex items-center">
                                                    <input
                                                        defaultChecked={list.id === 'email'}
                                                        id={list.id}
                                                        name="notification-method"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                                                    />
                                                    <label htmlFor={list.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
                                                        {list.title}
                                                    </label>
                                                </div>
                                            ))}
                                        </div> */}
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 mb-4'>
                                        <div>
                                            <label className="block text-sm/6 font-medium text-gray-900">
                                            Start Date
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    placeholder="you@example.com"
                                                    className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm/6 font-medium text-gray-900">
                                            End Date
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    placeholder=""
                                                    className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 lg:hidden'>
                                        <div>
                                            <label className="block text-sm/6 font-medium text-gray-900">
                                            Show entries
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    className="block rounded-md border-0 py-2 px-4 w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                >
                                                    <option>10</option>
                                                    <option>25</option>
                                                    <option>50</option>
                                                    <option>100</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm/6 font-medium text-gray-900">
                                            Search
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="type"
                                                    placeholder=""
                                                    className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpenFilter(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Reset
                            </button>
                            </div>
                        </DialogPanel>
                        </div>
                    </div>
                    </Dialog>
                
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                    <div className="mx-auto">
                            <div className='rounded-sm shadow text-gray-50 bg-white'>
                                <div className="px-8 py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                            Registered User
                                        </h2>
                                    </div>
                                    <div className="flex flex-shrink-0 md:ml-4 md:mt-0">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFilter(true)}
                                            className="inline-flex items-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                            <AdjustmentsVerticalIcon aria-hidden="true" className="-ml-0.5 size-4" />
                                            Filter
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full px-8 py-4 hidden lg:grid grid-cols-1 justify-between lg:grid-cols-2'>
                                    <div className='flex items-center mb-4 lg:mb-0'>
                                        <label className='text-gray-400 text-sm'>Show</label>
                                        <select
                                            className="block w-auto rounded-full border-0 py-2 px-4 mr-4 ml-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                        >
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        <label className='text-gray-400 text-sm'>entries</label>
                                    </div>
                                    <div className='flex items-center justify-start lg:justify-end'>
                                        <label className='text-gray-400 text-sm'>Search</label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="block w-auto rounded-full border-0 py-2 pl-4 pr-10 lg:pr-20 ml-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-slate-100">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-8 pr-3 text-left text-sm font-semibold text-gray-900">
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                                >
                                                    Mobile No.
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900">
                                                    Email
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900">
                                                    Age
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900">
                                                    Gender
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900 text-nowrap">
                                                    Product Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            {registrations.map((project) => (
                                                <tr key={project.id} className="border-b border-gray-200 even:bg-slate-50">
                                                    <td className="py-4 pl-8 pr-3 text-sm text-gray-500">{project.id}</td>
                                                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{project.name}</td>
                                                    <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{project.mobilenumber}</td>
                                                    <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{project.email}</td>
                                                    <td className="py-4 pl-3 pr-4 text-left text-sm text-gray-500">{project.age}</td>
                                                    <td className="py-4 pl-3 pr-4 text-left text-sm text-gray-500">{project.gender}</td>
                                                    <td className="py-4 pl-3 pr-4 text-left text-sm text-gray-500">{project.productname}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                    <div className="flex flex-1 justify-between sm:hidden">
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
                                        >
                                            Previous
                                        </a>
                                        <a
                                            href="/"
                                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
                                        >
                                            Next
                                        </a>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-1 px-2 sm:items-center sm:justify-between">
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
                                                    className="relative inline-flex items-center rounded-l-full px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
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
                                                    className="relative inline-flex items-center rounded-r-full px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
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
                    </div>
                </div>
            </main>
        </Layout>
    )
}
