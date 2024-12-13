import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, UserGroupIcon, CursorArrowRippleIcon, ArrowLeftStartOnRectangleIcon, ChevronUpDownIcon, CheckIcon, AdjustmentsVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout';
import 'react-quill/dist/quill.snow.css';
import { Dialog, DialogBackdrop, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Datepicker from 'react-tailwindcss-datepicker';
import Chart from 'react-google-charts';

  const categories = [
      {
          "id": "1",
          "category": 'Cricket',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 474627,
          "user": 474627,
          "pvuser": 160743
      },
      {
          "id": "2",
          "category": 'Cricket',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 354634,
          "user": 354634,
          "pvuser": 176533
      },
      {
          "id": "3",
          "category": 'Cricket',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 381550,
          "user": 381550,
          "pvuser": 156969
      },
      {
          "id": "4",
          "category": 'Spiritual',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 244593,
          "user": 244593,
          "pvuser": 172062
      },
      {
          "id": "5",
          "category": 'Cricket',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 266599,
          "user": 266599,
          "pvuser": 151016
      },
      {
          "id": "6",
          "category": 'Entertainment',
          "title": "AAP में किन विधायकों का कटा पत्ता? कई नए चेहरों पर भरोसा; देखें दूसरी लिस्ट में कौन कहां से लड़ेगा चुनाव",
          "url": "/new-delhi-city-ncr-delhi-vidhan-sabha-chunav-2025-three-mlas-and-many-leaders-tickets-canceled-in-second-list-of-aam-aadmi-party-23844934.html",
          "pv": 204319,
          "user": 204319,
          "pvuser": 167290
      }
  ]
  const stats = [
    { id: 1, name: 'Real Time Users', subname: 'All Users', stat: '129,301', substat: '129,301', icon: UserGroupIcon, change: '+4.75%', changeType: 'positive', bg: 'bg-red-50', iconcolor: 'text-red-500' },
    { id: 2, name: 'New Users', subname: 'All Piano Users', stat: '53,917', substat: '53,917', icon: CursorArrowRippleIcon, change: '+54.02%', changeType: 'negative', bg: 'bg-green-50', iconcolor: 'text-green-500' },
    { id: 3, name: 'Register Users', subname: 'All SSO Users', stat: '75,384', substat: '75,384', icon: ArrowLeftStartOnRectangleIcon, change: '-1.39%', changeType: 'positive', bg: 'bg-purple-50', iconcolor: 'text-purple-500' },

  ]
  const domainlist = [
    { id: '1', name: 'Cricket' },
    { id: '2', name: 'Entertainment' },
    { id: '3', name: 'Spiritual' },
    { id: '4', name: 'News' },
    { id: '5', name: 'Business' },
  ]

  const people = [
    {
      name: 'Pragya Bharati',
      email: 'pragya.bharati@jagrannewmedia.com',
      role: 'Sub Editor',
      pv: 474627,
      user: 474627,
      pvuser: 160743,
      image:
        'https://images.herzindagi.info/image/2024/Jan/pragya-bharti.jpeg',
    },
    {
        name: 'Pragya Bharati',
        email: 'pragya.bharati@jagrannewmedia.com',
        role: 'Sub Editor',
        pv: 474627,
        user: 474627,
        pvuser: 160743,
        image:
          'https://images.herzindagi.info/image/2024/Jan/pragya-bharti.jpeg',
      },
      {
        name: 'Pragya Bharati',
        email: 'pragya.bharati@jagrannewmedia.com',
        role: 'Sub Editor',
        pv: 474627,
        user: 474627,
        pvuser: 160743,
        image:
          'https://images.herzindagi.info/image/2024/Jan/pragya-bharti.jpeg',
      },
      {
        name: 'Pragya Bharati',
        email: 'pragya.bharati@jagrannewmedia.com',
        role: 'Sub Editor',
        pv: 474627,
        user: 474627,
        pvuser: 160743,
        image:
          'https://images.herzindagi.info/image/2024/Jan/pragya-bharti.jpeg',
      },
  ]

  export const SignInMethodData = [
    ["Total", "Total Users"],
    ["google", 85974],
    ["mobile", 59727],
  ];

  export const UserMethodData = [
    ["Total", "Total Users"],
    ["Casual", 85974],
    ["Loyal", 59727],
    ["Brand", 29720],
  ];

  export const PieHoleOption  = {
    pieHole: 0.56,
    is3D: false,
    legend: 'none',
    chartArea: {
        left: 10,
        right: 10, // !!! works !!!
        bottom: 20,  // !!! works !!!
        top: 20,
        width: "100%",
        height: "100%"
    }
  };
  
export default function Authors() {
    const [selectedDomain, setSelectedDomain] = useState(domainlist[0])
    const [openFilter, setOpenFilter] = useState(false)
    // datepicker
    const [dateValue, setDateValue] = useState({ 
        startDate: null, 
        endDate: null
    });
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    {/* <div className='flex justify-center mb-6'>
                        <nav className="flex divide-x divide-gray-200 rounded-lg shadow overflow-hidden">
                            <a
                                href="/cdp/anonymous"
                                className="text-gray-50 hover:text-gray-50 group relative min-w-0 flex-1 overflow-hidden bg-red-500 hover:bg-red-600 px-8 py-4 text-center text-sm font-bold uppercase focus:z-10"
                            >
                                <span>Anonymous</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-red-500 absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                            <a
                                href="/cdp/anonymous/registered"
                                className="text-gray-500 hover:text-gray-500 group relative min-w-0 flex-1 overflow-hidden bg-gray-50 hover:bg-gray-100 px-8 py-4 text-center text-sm font-bold uppercase focus:z-10"
                            >
                                <span>Registered</span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                        </nav>
                    </div> */}
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg'>
                        <div className="mx-auto">
                            <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0 flex items-center">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="inline-block size-8 rounded-full mr-2"
                                    />
                                    <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                        Pragya Bharati
                                    </h2>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-auto flex-shrink-0 md:ml-4 md:mt-0 items-center">
                                    <div className='mr-0 lg:mr-4 w-full lg:w-40 mb-3 lg:mb-0'>
                                        <Listbox value={selectedDomain} onChange={setSelectedDomain}>
                                            {/* <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label> */}
                                            <div className="relative">
                                                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2.5 pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm/6">
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
                                    </div>
                                    <div className='mr-0 lg:mr-4 w-full lg:w-64 mb-3 lg:mb-0'>
                                        <div className="border border-gray-300 rounded-md shadow-sm">
                                            <Datepicker
                                                primaryColor={"red"}
                                                value={dateValue}
                                                onChange={newValue => setDateValue(newValue)}
                                                showShortcuts={true}
                                                placeholder="Select date..."
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full lg:w-20'>
                                        <button
                                            type="button"
                                            // onClick={() => setOpenFilter(true)}
                                            className="w-full items-center text-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                            {/* <AdjustmentsVerticalIcon aria-hidden="true" className="-ml-0.5 size-4" /> */}
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-slate-100">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-8 pr-3 text-left text-sm font-semibold text-gray-900">
                                                ID
                                            </th>
                                            <th scope="col" className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">
                                                Category
                                            </th>
                                            {/* <th scope="col" className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">
                                                Title
                                            </th> */}
                                            <th scope="col" className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900">
                                                URL
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                            >
                                                PV
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                            >
                                                User
                                            </th>
                                            <th scope="col" className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900">
                                                PV/User
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {categories.map((project) => (
                                            <tr key={project.id} className="border-b border-gray-200 even:bg-slate-50">
                                                <td className="py-4 pl-8 pr-3 text-sm text-gray-500">{project.id}</td>
                                                <td className="px-3 py-4 text-sm text-gray-500 w-32">{project.category}</td>
                                                {/* <td className="px-3 py-4 text-sm text-gray-500">{project.title}</td> */}
                                                <td className="px-3 py-4 text-sm text-gray-500 hover:text-blue-500"><a href={project.url}>{project.url}</a></td>
                                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap w-32">{project.pv}</td>
                                                <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell w-32">{project.user}</td>
                                                <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell w-32">{project.pvuser}</td>
                                                {/* <td className="py-4 pl-3 pr-4 text-left text-sm text-gray-500">{project.age}</td> */}
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
                
            </main>
        </Layout>
    )
}
