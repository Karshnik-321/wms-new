import { ArrowsPointingOutIcon, PencilSquareIcon, PhotoIcon, TrashIcon } from '@heroicons/react/24/outline'
import Layout from '../Layout/Layout';
import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";
import { Switch } from '@headlessui/react';

const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: "ghost",
    group: "shared", // Allows dragging between columns
    forceFallback: true
  };
  
  const ChatTagColumn = ({ title, list, setList }) => (
    <div className="column">
      {/* <h3>{title}</h3> */}
      <ReactSortable list={list} setList={setList} {...sortableOptions}>
        {list.map((block) => (
          <ChatTagBlock key={block.id} block={block} />
        ))}
      </ReactSortable>
    </div>
  );
  
  const ChatTagBlock = ({ block }) => {
    // Move the `useState` call outside of any conditional logic
    const [enabled, setEnabled] = useState(false);
  
    // Use `block && ...` to conditionally render content without conditionally calling the hook
    return (
      block && (
        <div className="px-4 py-3 border my-2 select-none bg-white flex justify-between items-center cursor-grab rounded text-sm">
          <div className="flex items-center">
            <ArrowsPointingOutIcon aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" />{" "}
            {block.type === "container" ? `container: ${block.content}` : `${block.content}`}
          </div>
          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <span className="sr-only">Use setting</span>
              <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute mx-auto h-3 w-8 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-red-600"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
              />
            </Switch>
            <PencilSquareIcon aria-hidden="true" className="h-5 w-5 ml-2" />
            <TrashIcon aria-hidden="true" className="h-5 w-5 ml-2" />
          </div>
        </div>
      )
    );
  };
//   khojle chat tags
const KhojleChatTagColumn = ({ title, list, setList }) => (
    <div className="column">
      {/* <h3>{title}</h3> */}
      <ReactSortable list={list} setList={setList} {...sortableOptions} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {list.map((block) => (
          <KhojleChatTagBlock key={block.id} block={block} />
        ))}
      </ReactSortable>
    </div>
  );
  
  const KhojleChatTagBlock = ({ block }) => {
    // Move the `useState` call outside of any conditional logic
    const [enabled, setEnabled] = useState(false);
  
    // Use `block && ...` to conditionally render content without conditionally calling the hook
    return (
      block && (
        <div className='w-full border rounded bg-white'>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                <img alt="" src="https://storage.googleapis.com/blogs-img-khojle-com/khojle/image/2024/Oct/192309.png" className="object-cover object-center" />
            </div>
            <div className='px-4 py-4 text-sm font-semibold border-b'>{block.type === "container" ? `container: ${block.content}` : `${block.content}`}</div>
            <div className="px-4 py-3  select-none flex justify-between items-center cursor-grab text-sm bg-gray-100">
                <div className="flex items-center">
                    <ArrowsPointingOutIcon aria-hidden="true" className="h-4 w-4 mr-2 text-gray-500" />
                </div>
                <div className="flex items-center">
                    <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    >
                    <span className="sr-only">Use setting</span>
                    <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-gray-100" />
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-3 w-8 rounded-full bg-gray-300 transition-colors duration-200 ease-in-out group-data-[checked]:bg-red-600"
                    />
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                    />
                    </Switch>
                    <PencilSquareIcon aria-hidden="true" className="h-5 w-5 ml-2" />
                    <TrashIcon aria-hidden="true" className="h-5 w-5 ml-2" />
                </div>
            </div>
        </div>
      )
    );
  };

  
export default function ChatTag() {
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
      
    return (
        
        <Layout>
            <main>
                <div className="mx-auto max-w-7xl my-6 px-4 lg:px-0">
                    <div className='bg-white rounded-3xl shadow-lg overflow-hidden mb-6'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                Chat Tag
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
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Add Chat Tag
                                        </h2>
                                    </div>
                                </div>
                                <div className='p-6 lg:p-8'>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Tag Name</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Ex. Home"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Tag URL</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Ex. घर"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                        Reset
                                    </button>
                                    <button type="submit" className="rounded-3xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
                                        Add Chat Tags
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 bg-white text-gray-500">
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Drag, Relocate & Delete Quick Links
                                        </h2>
                                    </div>
                                </div>
                                <div className="sm:flex sm:gap-10 px-4 lg:px-8 py-4 lg:py-8">
                                    <div className="sm:w-full">
                                        <ChatTagColumn title="Left Column" list={leftColumn} setList={setLeftColumn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl shadow-lg overflow-hidden mb-6'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Khojle Chat Tag
                                </h2>
                            </div>
                            <div className="flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-full bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div className="bg-slate-200 sm:flex sm:gap-px sm:divide-y-0">
                            <div className="sm:w-1/3 relative bg-white border-b-4 lg:border-b-0">
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Upload Banners
                                        </h2>
                                    </div>
                                </div>
                                <div className='p-6 lg:p-8'>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Upload Banner</label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Image Alt / Title</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Alt / Title"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">URL</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="url"
                                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Select Target</label>
                                    <div className="mt-2">
                                        <select
                                            defaultValue="Select Target"
                                            className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm/6"
                                        >
                                            <option value="" selected="" disabled="">Select Target</option>
                                            <option value="_blank">_blank</option>
                                            <option value="_self">_self</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                        Reset
                                    </button>
                                    <button type="submit" className="rounded-3xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
                                        Add Banner
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 bg-white text-gray-500">
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-sm font-bold text-gray-900 sm:truncate sm:tracking-tight">
                                        Drag, Relocate & Delete Banners
                                        </h2>
                                    </div>
                                </div>
                                <div className="sm:flex sm:gap-10 p-8">
                                    <div className="sm:w-full">
                                        <KhojleChatTagColumn title="Left Column" list={leftColumn} setList={setLeftColumn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
                        <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    Khojle Category
                                </h2>
                            </div>
                            <div className="flex flex-shrink-0 md:ml-4 md:mt-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-full bg-red-600 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div className="sm:flex sm:gap-px sm:divide-y-0">
                            <div className='px-8 py-8 text-gray-600'>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
