import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, VideoCameraIcon, CursorArrowRippleIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout'
import 'react-quill/dist/quill.snow.css';

  const campaigns = [
    {
      id: 113209,
      webstoriesname: '5 Vibrant Suit Sets By Rasha Thadani For Every Occasion',
      category: 'Entertainment',
      published: '04 Nov 2024',
      videos: 'N/A',
    },
    {
        id: 113199,
        webstoriesname: 'CID Cast’s Impressive Education And Qualifications',
        category: 'Entertainment',
        published: '04 Nov 2024',
        videos: 'N/A',
    },
    {
        id: 113191,
        webstoriesname: '5 Statement Earrings By Heli Daruwala For Ethnic Looks',
        category: 'Entertainment',
        published: '04 Nov 2024',
        videos: 'N/A',
    },
    {
        id: 113194,
        webstoriesname: 'Diana Penty’s Stylish Earrings To Complement Your Look',
        category: 'Entertainment',
        published: '04 Nov 2024',
        videos: 'N/A',
    },
  ]
export default function Listing() {
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-2 items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Webstories
                                </h2>
                            </div>
                            {/* <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Create Campaign
                                </button>
                            </div> */}
                        </div>
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-slate-100">
                                    <tr>
                                        <th scope="col" className="px-3 py-5 text-center text-sm font-semibold text-gray-900">
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Webstories
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-5 text-right text-sm font-semibold text-gray-900"
                                        >
                                            Category
                                        </th>
                                        <th scope="col" className="px-3 py-5 text-right text-sm font-semibold text-gray-900 text-nowrap">
                                            Published On
                                        </th>
                                        <th scope="col" className="px-3 py-5 text-right text-sm font-semibold text-gray-900">
                                            Videos
                                        </th>
                                        <th scope="col" className="py-5 pl-3 pr-8 text-right text-sm font-semibold text-gray-900">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                    {campaigns.map((project) => (
                                        <tr key={project.id} className="border-b border-gray-200 even:bg-slate-50">
                                            <td className="px-3 py-3 text-center text-sm text-gray-500">{project.id}</td>
                                            <td className="px-6 py-3 text-left text-sm text-gray-500">{project.webstoriesname}</td>
                                            <td className="px-3 py-3 text-right text-sm text-gray-500">{project.category}</td>
                                            <td className="px-3 py-3 text-right text-sm text-gray-500">{project.published}</td>
                                            <td className="px-3 py-3 text-right text-sm text-gray-500">{project.videos}</td>
                                            <td className="py-3 pl-3 pr-8 text-right text-xs text-gray-500">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-40 mb-1 items-center rounded-md bg-slate-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                                >
                                                    <VideoCameraIcon aria-hidden="true" className="mr-1 h-4 w-4" />
                                                    Create Video
                                                </button><br />
                                                <button
                                                    type="button"
                                                    className="inline-flex w-40 items-center rounded-md bg-slate-600 px-2 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                                >
                                                    <CursorArrowRippleIcon aria-hidden="true" className="mr-1 h-4 w-4" />
                                                    Add To Social Media
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div className="flex flex-1 justify-between sm:hidden">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
                                >
                                    Previous
                                </a>
                                <a
                                    href="#"
                                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50"
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
                                            href="#"
                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            <span className="sr-only">Previous</span>
                                            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                        </a>
                                        {/* Current: "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:outline-offset-0" */}
                                        <a
                                            href="#"
                                            aria-current="page"
                                            className="relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                            1
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            2
                                        </a>
                                        <a
                                            href="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            3
                                        </a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                            ...
                                        </span>
                                        <a
                                            href="#"
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                        >
                                            8
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            9
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
                                        >
                                            10
                                        </a>
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0"
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
