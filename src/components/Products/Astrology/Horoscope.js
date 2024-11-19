import React, { useState } from "react";
import Layout from '../../Layout/Layout';
import 'react-quill/dist/quill.snow.css';
import QuillEditor from '../../Global/QuillEditor';

  const products = [
    {
      id: 1,
      name: 'Aries',
      href: '#',
      imageSrc: 'https://www.jagranimages.com/images/wms/astrology/aries.svg',
      imageAlt: "Aries",
    },
    {
        id: 2,
        name: 'Taurus',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/taurus.svg',
        imageAlt: "Taurus",
    },
    {
        id: 3,
        name: 'Gemini',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/gemini.svg',
        imageAlt: "Gemini",
    },
    {
        id: 4,
        name: 'Cancer',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/cancer.svg',
        imageAlt: "Cancer",
    },
    {
        id: 5,
        name: 'Leo',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/leo.svg',
        imageAlt: "Leo",
    },
    {
        id: 6,
        name: 'Virgo',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/virgo.svg',
        imageAlt: "Virgo",
    },
    {
        id: 7,
        name: 'Libra',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/libra.svg',
        imageAlt: "Libra",
    },
    {
        id: 8,
        name: 'Scorpio',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/scorpio.svg',
        imageAlt: "Scorpio",
    },
    {
        id: 9,
        name: 'Sagittarius',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/sagittarius.svg',
        imageAlt: "Sagittarius",
    },
    {
        id: 10,
        name: 'Capricorn',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/capricorn.svg',
        imageAlt: "Capricorn",
    },
    {
        id: 11,
        name: 'Aquarius',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/aquarius.svg',
        imageAlt: "Aquarius",
    },
    {
        id: 12,
        name: 'Pisces',
        href: '#',
        imageSrc: 'https://www.jagranimages.com/images/wms/astrology/pisces.svg',
        imageAlt: "Pisces",
    },
  ]
export default function Horoscope() {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='border-b text-gray-50 bg-white rounded-3xl shadow-lg overflow-hidden'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Horoscope
                                </h2>
                            </div>
                            {/* <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save Changes
                                </button>
                            </div> */}
                        </div>
                        <div className="bg-slate-50 border-b sm:flex sm:gap-px sm:divide-y-0">
                            <div className="flex justify-start lg:justify-center overflow-auto">
                                {products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className={`w-full relative cursor-pointer py-2 px-6 ${activeTab === index ? "border-b-2 border-red-500" : ""
                                            }`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <div className="w-10 h-w-10 m-auto mb-2">
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="object-fill object-center w-10 h-w-10"
                                            />
                                        </div>
                                        <h3 className="text-xs font-semibold text-gray-700 text-center uppercase">
                                            <a href={product.href}>{product.name}</a>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div className="mx-auto max-w-2xl pt-10">
                            <img alt={products[activeTab]?.imageAlt} src={products[activeTab]?.imageSrc} className="mx-auto h-28 w-28 rounded-full shadow-md bg-slate-300 p-3" />
                        </div> */}
                        {activeTab !== products[activeTab]?.id && (
                            <div className='bg-slate-200 sm:flex sm:gap-px sm:divide-y-0 text-gray-600'>
                                <div className="sm:w-2/3 bg-white text-gray-500">
                                    <div class="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                        <div class="min-w-0 flex-1"><h2 class="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">Content Info</h2></div>
                                    </div>
                                    <div className='p-6'>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Lucky Number
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Lucky Color
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Lucky Gemstone
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Lucky Day
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Ruling Planet
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Compatible Zodiac
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Personality
                                                </label>
                                                <div className="mt-2">
                                                    <QuillEditor placeholder='Enter personality here...' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Daily
                                                </label>
                                                <div className="mt-2">
                                                    <QuillEditor placeholder='Enter daily horoscope here...' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Weekly
                                                </label>
                                                <div className="mt-2">
                                                    <QuillEditor placeholder='Enter weekly horoscope here...' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Monthly
                                                </label>
                                                <div className="mt-2">
                                                    <QuillEditor placeholder='Enter monthly horoscope here...' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 mb-4">
                                            <div className="col-span-1">
                                                <label className="block text-xs/6 font-semibold text-gray-600">
                                                    Yearly
                                                </label>
                                                <div className="mt-2">
                                                    <QuillEditor placeholder='Enter yearly horoscope here...' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:w-1/3 relative bg-white border-b-4 lg:border-b-0">
                                    <div class="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                        <div class="min-w-0 flex-1"><h2 class="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">Meta Info</h2></div>
                                    </div>
                                    <div className='p-6'>
                                        <div className="mb-4">
                                            <label className="block text-xs/6 font-semibold text-gray-600">
                                                Meta Title
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    value={products[activeTab].names}
                                                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-xs/6 font-semibold text-gray-600">
                                                Meta Keywords
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-xs/6 font-semibold text-gray-600">
                                                Meta Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="p-6 lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-t">
                            <div className="flex items-center justify-end gap-x-6 sm:col-span-6">
                                <button
                                    type="submit"
                                    className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save All Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Love Horoscope
                                </h2>
                            </div>
                            {/* <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save Changes
                                </button>
                            </div> */}
                        </div>
                        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 pb-0 lg:pb-0">
                            <div className="col-span-1">
                                <label className="block text-xs/6 font-semibold text-gray-600">
                                    Love Daily
                                </label>
                                <div className="mt-2 quill-editor">
                                    <QuillEditor placeholder='Enter daily horoscope here...' />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-xs/6 font-semibold text-gray-600">
                                    Love Weekly
                                </label>
                                <div className="mt-2 quill-editor">
                                    <QuillEditor placeholder='Enter daily horoscope here...' />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 border-b">
                            <div className="col-span-1">
                                <label className="block text-xs/6 font-semibold text-gray-600">
                                    Love Monthly
                                </label>
                                <div className="mt-2 quill-editor">
                                    <QuillEditor placeholder='Enter monthly horoscope here...' />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-xs/6 font-semibold text-gray-600">
                                    Love Yearly
                                </label>
                                <div className="mt-2 quill-editor">
                                    <QuillEditor placeholder='Enter yearly horoscope here...' />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b">
                            <div className="flex items-center justify-end gap-x-6 sm:col-span-6">
                                <button
                                    type="submit"
                                    className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save All Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
