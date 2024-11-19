import { ArrowsPointingOutIcon, BarsArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import Layout from '../Layout/Layout';
import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";

const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: "ghost",
    group: "shared", // Allows dragging between columns
    forceFallback: true
  };
  
  const HeaderShort = ({ title, list, setList }) => (
    <div className="column">
      {/* <h3>{title}</h3> */}
      <ReactSortable list={list} setList={setList} {...sortableOptions}>
        {list.map((block) => (
          <HeaderBlock key={block.id} block={block} />
        ))}
      </ReactSortable>
    </div>
  );
  
  const HeaderBlock = ({ block }) => {
    if (!block) return null;
    return (
      <div className="px-4 py-3 border my-2 select-none bg-white flex justify-between items-center cursor-grab rounded text-sm">
        <span>{block.type === "container" ? `container: ${block.content}` : `${block.content}`}</span>
        <ArrowsPointingOutIcon aria-hidden="true" className="h-4 w-4 text-gray-400" />
      </div>
    );
  };
  
export default function Header() {
    const [leftColumn, setLeftColumn] = useState([
        { id: 1, content: "Specials", type: "text" },
        { id: 2, content: "Home", type: "text" },
        { id: 3, content: "Latest News", type: "text" },
        { id: 4, content: "India", type: "text" },
        { id: 5, content: "Entertainment", type: "text" },
        { id: 6, content: "Lifestyle", type: "text" },
        { id: 7, content: "Viral", type: "text" },
        { id: 8, content: "Tech", type: "text" },
        { id: 9, content: "Spiritual", type: "text" },
        { id: 10, content: "Cricket", type: "text" },
        { id: 11, content: "Education", type: "text" },
        { id: 12, content: "Business", type: "text" },
        { id: 13, content: "Auto", type: "text" },
        { id: 14, content: "Sports", type: "text" },
        { id: 15, content: "Trending", type: "text" },
        { id: 16, content: "World", type: "text" },
        { id: 17, content: "Brandverse", type: "text" },
      ]);
    
      const [rightColumn, setRightColumn] = useState([
        { id: 18, content: "Us Presidential Election 2024", type: "text" },
        { id: 19, content: "Us Election Live Updates", type: "text" },
        { id: 20, content: "Chhath Puja 2024", type: "text" },
        { id: 21, content: "Sharda Sinha", type: "text" },
        { id: 22, content: "Bts", type: "text" },
        { id: 23, content: "Ott Releases", type: "text" },
        { id: 24, content: "Calculator", type: "text" },
      ]);

      
    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='bg-white rounded-3xl shadow-lg overflow-hidden mb-6'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Header
                                </h2>
                            </div>
                            <div className="flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-3xl bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div className="bg-slate-200 sm:flex sm:gap-px sm:divide-y-0">
                            <div className="sm:w-1/3 relative bg-white border-b-4 lg:border-b-0">
                                {/* <p className="text-md text-gray-500 font-semibold mb-4">Add Navigation Items</p> */}
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Add Navigation Items
                                        </h2>
                                    </div>
                                </div>
                                <div className='p-6 lg:p-8'>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Menu Name</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Ex. Home"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Alternate Menu Name</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Ex. घर"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">URL</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="www..."
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Menu Class</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Enter class name if needed"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Target</label>
                                    <div className="mt-2">
                                        <select
                                            defaultValue="Select Target"
                                            className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm/6"
                                        >
                                            <option value="" selected="" disabled="">Select Target</option>
                                            <option value="_blank">_blank</option>
                                            <option value="_self">_self</option>
                                            <option value="_parent">_parent</option>
                                            <option value="_top">_top</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Show At</label>
                                    <div className="mt-2">
                                        <select
                                            defaultValue="Select"
                                            className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm/6"
                                        >
                                            <option selected="selected">Select</option>
                                            <option value="visible">Visible</option>
                                            <option value="more">More</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                        Reset
                                    </button>
                                    <button type="submit" className="rounded-3xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
                                        Add To Menu
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 bg-white text-gray-500">
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Drag, Relocate & Delete menu item
                                        </h2>
                                    </div>
                                </div>
                                <div className="sm:flex sm:gap-10 p-6">
                                    <div className="sm:w-1/2">
                                        <p className='flex items-center text-sm mb-4'><EyeIcon aria-hidden="true" className="h-5 w-5 text-gray-400 mr-2" />Visible Menu</p>
                                        <HeaderShort title="Left Column" list={leftColumn} setList={setLeftColumn} />
                                    </div>
                                    <div className="sm:w-1/2 pt-4 lg:pt-0">
                                        <p className='flex items-center text-sm mb-4'><BarsArrowDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400 mr-2" />More+</p>
                                        <HeaderShort title="Right Column" list={rightColumn} setList={setRightColumn} />
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
