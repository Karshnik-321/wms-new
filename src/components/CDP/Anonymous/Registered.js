import React, { useState } from 'react';
import { UserGroupIcon, CursorArrowRippleIcon, ArrowLeftStartOnRectangleIcon, ChevronUpDownIcon, CheckIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import Layout from '../../Layout/Layout';
import 'react-quill/dist/quill.snow.css';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Datepicker from 'react-tailwindcss-datepicker';
import Chart from 'react-google-charts';

  const categories = [
      {
          "category": "Cricket",
          "url": "/cdp/anonymous/cricket",
          "pv": 474627,
          "user": 474627,
          "pvuser": 160743
      },
      {
          "category": "Entertainment",
          "pv": 354634,
          "user": 354634,
          "pvuser": 176533
      },
      {
          "category": "Spiritual",
          "pv": 381550,
          "user": 381550,
          "pvuser": 156969
      },
      {
          "category": "News",
          "pv": 244593,
          "user": 244593,
          "pvuser": 172062
      },
      {
          "category": "Business",
          "pv": 266599,
          "user": 266599,
          "pvuser": 151016
      },
      {
          "category": "Lifestyle",
          "pv": 204319,
          "user": 204319,
          "pvuser": 167290
      },
      {
        "category": "Lifestyle",
        "pv": 204319,
        "user": 204319,
        "pvuser": 167290
        },
  ]
  const stats = [
    { id: 1, name: 'All Time Users', subname: 'All Users', stat: '129,301', substat: '129,301', icon: UserGroupIcon, change: '+4.75%', changeType: 'positive', bg: 'bg-red-50', iconcolor: 'text-red-500' },
    { id: 2, name: 'New Users', subname: 'All Piano Users', stat: '53,917', substat: '53,917', icon: CursorArrowRippleIcon, change: '+54.02%', changeType: 'negative', bg: 'bg-green-50', iconcolor: 'text-green-500' },
    { id: 3, name: 'Returning Users', subname: 'All SSO Users', stat: '75,384', substat: '75,384', icon: ArrowLeftStartOnRectangleIcon, change: '-1.39%', changeType: 'positive', bg: 'bg-purple-50', iconcolor: 'text-purple-500' },

  ]
  const domainlist = [
    { id: '1', name: 'All Domain' },
    { id: '2', name: 'HZ - Hindi' },
    { id: '3', name: 'HZ - English' },
    { id: '4', name: 'Jagran' },
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
  
export default function Registered() {
    const [selectedDomain, setSelectedDomain] = useState(domainlist[0])
    // datepicker
    const [dateValue, setDateValue] = useState({ 
        startDate: null, 
        endDate: null
    });
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                <div className='flex justify-center mb-6'>
                        <nav className="flex divide-x divide-gray-200 rounded-lg shadow overflow-hidden">
                            <a
                                href="/cdp/anonymous"
                                className="text-gray-500 hover:text-gray-500 group relative min-w-0 flex-1 overflow-hidden bg-gray-50 hover:bg-gray-100 px-8 py-4 text-center text-sm font-bold uppercase focus:z-10"
                            >
                                <span>Anonymous</span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                            <a
                                href="/cdp/anonymous/registered"
                                className="text-gray-50 hover:text-gray-50 group relative min-w-0 flex-1 overflow-hidden bg-red-500 hover:bg-red-600 px-8 py-4 text-center text-sm font-bold uppercase focus:z-10"
                            >
                                <span>Registered</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-red-500 absolute inset-x-0 bottom-0 h-0.5"
                                />
                            </a>
                        </nav>
                    </div>
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg'>
                        <div className="mx-auto">
                            <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0">
                                    <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                        Registered User
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
                            <dl className="grid grid-cols-1 lg:grid-cols-3">
                                {stats.map((item,index) => (
                                    <div
                                        key={item.id}
                                        className="relative  px-4 sm:px-10 py-6 sm:py-8 border-r-0 lg:border-r border-b lg:border-b-0"
                                    >
                                        <div className='flex justify-start items-center'>
                                            <div>
                                                <div className={`rounded-full p-5 ${item.bg}`}>
                                                    <item.icon aria-hidden="true" className={`w-8 h-8 ${item.iconcolor}`} />
                                                </div>
                                            </div>
                                            <dd className='ml-4'>
                                                <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                                                <p className={`${index === 0 ? 'text-5xl font-black' : 'text-3xl font-bold'} text-gray-900`}>{item.stat}</p>
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                            <div className="mx-auto">
                                <div className='rounded-sm shadow bg-white'>
                                    <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                        <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0">
                                            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                                Categories
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="overflow-x-auto">
                                        <table class="table-auto w-full">
                                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-slate-100">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-8 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Category
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
                                                        <td className="py-4 pl-8 pr-3 text-sm text-gray-500"><a href={project.url} className='text-red-600 hover:text-red-700'>{project.category}</a></td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{project.pv}</td>
                                                        <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{project.user}</td>
                                                        <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{project.pvuser}</td>
                                                        {/* <td className="py-4 pl-3 pr-4 text-left text-sm text-gray-500">{project.age}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                            <div className="mx-auto">
                                <div className='rounded-sm shadow bg-white'>
                                    <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                        <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0">
                                            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                                Top Authors
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-slate-100">
                                                <tr>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                                                        Name
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
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {people.map((person) => (
                                                    <tr key={person.email} className="border-b border-gray-200 even:bg-slate-50">
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="size-11 shrink-0">
                                                                    <a href='/' className='text-red-600 hover:text-red-700'><img alt="" src={person.image} className="size-11 rounded-full" /></a>
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="font-medium text-gray-900"><a href='/' className='text-red-600 hover:text-red-700'>{person.name}</a></div>
                                                                    <div className="mt-1 text-gray-500 text-xs">{person.email}</div>
                                                                    <div className="mt-1 text-gray-500 text-xs">{person.role}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{person.pv}</td>
                                                        <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{person.user}</td>
                                                        <td className="px-3 py-4 text-left text-sm text-gray-500 sm:table-cell">{person.pvuser}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                            <div className="mx-auto">
                                <div className='rounded-sm shadow bg-white'>
                                    <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                        <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0">
                                            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                                Platform
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3">
                                        <div className='flex justify-center items-center'>
                                            <ul role="list" className="divide-y divide-gray-100 w-full pl-10">
                                                <li className="flex justify-between gap-x-6 py-5 pt-0">
                                                    <div className="min-w-0">
                                                        <p className="text-xs/5 font-semibold text-gray-400">Mobile User</p>
                                                        <p className="mt-1 truncate text-3xl font-bold text-gray-700 mb-2">30,654</p>
                                                        <div className='text-xs'>
                                                            <span className='w-4 h-4 mr-1 bg-green-100 rounded-full inline-flex items-center justify-center'>
                                                                <ArrowUpIcon aria-hidden="true" className="size-2 text-green-700" />
                                                            </span>
                                                            <span className='text-green-600'>12.08%</span> than last week
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex justify-between gap-x-6 py-5">
                                                    <div className="min-w-0">
                                                        <p className="text-xs/5 font-semibold text-gray-400">Desktop User</p>
                                                        <p className="mt-1 truncate text-3xl font-bold text-gray-700 mb-2">120,654</p>
                                                        <div className='text-xs'>
                                                            <span className='w-4 h-4 mr-1 bg-red-100 rounded-full inline-flex items-center justify-center'>
                                                                <ArrowDownIcon aria-hidden="true" className="size-2 text-red-700" />
                                                            </span>
                                                            <span className='text-red-600'>12.08%</span> than last week
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='flex justify-center col-span-2 py-4'>
                                            <Chart
                                                chartType="PieChart"
                                                width="100%"
                                                height="300px"
                                                data={SignInMethodData}
                                                options={PieHoleOption}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                            <div className="mx-auto">
                                <div className='rounded-sm shadow bg-white'>
                                    <div className="px-8 py-6 flex flex-wrap lg:flex-nowrap items-center md:justify-between border-b border-gray-200">
                                        <div className="min-w-full lg:min-w-0 flex-1 mb-4 lg:mb-0">
                                            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                                User Types
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3">
                                        <div className='flex justify-center items-center'>
                                            <ul role="list" className="divide-y divide-gray-100 w-full pl-10">
                                                <li className="flex justify-between gap-x-6 py-5 pt-0">
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700 flex items-center">
                                                            <span className='w-2 h-2 rounded-full bg-red-500 flex mr-2'></span>
                                                            <span>Casual</span>
                                                        </p>
                                                        <p className="truncate text-xs font-bold text-gray-400 ml-4">Increase by</p>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700">4,234</p>
                                                    </div>
                                                </li>
                                                <li className="flex justify-between gap-x-6 py-5 pt-0">
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700 flex items-center">
                                                            <span className='w-2 h-2 rounded-full bg-green-500 flex mr-2'></span>
                                                            <span>Loyal</span>
                                                        </p>
                                                        <p className="truncate text-xs font-bold text-gray-400 ml-4">Increase by</p>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700">2,234</p>
                                                    </div>
                                                </li>
                                                <li className="flex justify-between gap-x-6 py-5 pt-0">
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700 flex items-center">
                                                            <span className='w-2 h-2 rounded-full bg-purple-500 flex mr-2'></span>
                                                            <span>Brand Lover</span>
                                                        </p>
                                                        <p className="truncate text-xs font-bold text-gray-400 ml-4">Decrease by</p>
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm/5 font-semibold text-gray-700">1,234</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='flex justify-center col-span-2 py-4'>
                                            <Chart
                                                chartType="PieChart"
                                                width="100%"
                                                height="300px"
                                                data={UserMethodData}
                                                options={PieHoleOption}
                                            />
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
