import React from 'react';
import { UserGroupIcon, CursorArrowRippleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import Layout from '../../Layout/Layout'
import 'react-quill/dist/quill.snow.css';
import Chart from 'react-google-charts';

  const stats = [
    { id: 1, name: 'Total Users', stat: '129,476', icon: UserGroupIcon },
    { id: 1, name: 'MAU', stat: '3,259', icon: CursorArrowRippleIcon },
    { id: 1, name: 'Todays Sign-Ups', stat: '380', icon: ArrowLeftStartOnRectangleIcon },

  ]
  const tabs = [
    { id: 1, name: 'Jagran', stat: '119,982', current: true, image: 'https://www.jagranimages.com/images/wms/jagran.svg', },
    { id: 1, name: 'HerZindagi', stat: '9,493', current: false, image: 'https://www.jagranimages.com/images/wms/hz.svg', },
    { id: 1, name: 'JagranJosh', stat: '0', current: false, image: 'https://www.jagranimages.com/images/wms/jagran_english.svg', },
    { id: 1, name: 'OnlyMyHealth', stat: '0', current: false, image: 'https://www.jagranimages.com/images/wms/onlymyhealth.svg', },
  ]

  const domaintabs = [
    { id: 1, name: 'All', stat: '119,982', current: true },
    { id: 1, name: 'Jagran', stat: '119,982', current: false },
    { id: 1, name: 'HerZindagi', stat: '9,493', current: false },
    { id: 1, name: 'JagranJosh', stat: '0', current: false },
    { id: 1, name: 'OnlyMyHealth', stat: '0', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  export const TotalUsersData = [
    ["Total", "Total Users"],
    ["Jagran", 119982],
    ["HerZindagi", 9493],
  ];
  
  export const TotalUsersOption  = {
    pieHole: 0.6,
    is3D: false,
    legend: 'none',
    slices: {
        0: { color: '#da251d' },
        1: { color: '#ff00c6' }
    },
    chartArea:{
        left:10,
        right:10, // !!! works !!!
        bottom:20,  // !!! works !!!
        top:20,
        width:"100%",
        height:"100%"
      }
  };

  export const PieHoleOption  = {
    pieHole: 0.5,
    is3D: false,
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 10,
      },
    },
  };

  export const GenderDemographicsData = [
    ["Element", "Density", { role: "style" }],
    ["Male", 1876, "#06b0f0"], // RGB value
    ["Female", 220, "#f75b95"], // English color name
    ["Not Disclosed", 128014, "gray"],
  ];

  export const AgeDemographicsData = [
    ["Element", "Density", { role: "style" }],
    ["Under 24", 244, "#093c5d"], // RGB value
    ["25-34", 121, "#024f87"], // English color name
    ["35-44", 66, "#1d82a6"], // English color name
    ["45-54", 20, "#1d82a6"], // English color name
    ["55-64", 20, "#b34747"], // English color name
    ["65+", 4, "#327961"], // English color name
    ["Not Disclosed", 129646, "gray"],
  ];
  
  const LoginSourceData = [
    ["Task", "Login Source"],
    ["header login btn", 10987],
    ["limit expire login btn", 57186],
    ["bookmark btn", 2016],
    ["like btn", 2121],
    ["comment btn", 147],
    ["community event", 3712],
    ["Other", 0]
  ];

  export const SignInMethodData = [
    ["Total", "Total Users"],
    ["google", 85974],
    ["mobile", 59727],
  ];
export default function Demographics() {
    return (
        <Layout>
            
            <main>
                {/* <SubHeader tabs={tabs} /> */}
                
                <div className="mx-auto max-w-7xl my-6">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div class="grid grid-cols-1 sm:grid-cols-3">
                            <div class="col-span-2 border-r">
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl/7 lg:text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                            Demographics
                                        </h2>
                                    </div>
                                </div>
                                <div className="mx-auto px-10 py-4">
                                    <dl className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                                        {stats.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative px-4 py-4 overflow-hidden bg-white first:border-r"
                                            >
                                                <div className='flex items-center'>
                                                    <div className='mr-4'>
                                                        <div className="rounded-full bg-red-50 p-5">
                                                            <item.icon aria-hidden="true" className="h-8 w-8 text-gray-700" />
                                                        </div>
                                                    </div>
                                                    <dd>
                                                        <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                                                        <p className="text-3xl font-bold text-gray-900">{item.stat}</p>
                                                    </dd>
                                                    
                                                </div>
                                            </div>
                                        ))}
                                    </dl>
                                    {/* <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                        {tabs.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative overflow-hidden bg-white px-4 py-4 sm:px-6 sm:py-10 border-r border-b mb-4 sm:mb-0"
                                            >
                                                <div className='flex'>
                                                    <dd>
                                                        <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                                                        <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
                                                    </dd>
                                                </div>
                                            </div>
                                        ))}
                                    </dl> */}
                                </div>
                            </div>
                            <div class="bg-white border-b">
                                <div className='border-b'>
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="220px"
                                        data={TotalUsersData}
                                        options={TotalUsersOption}
                                    />
                                </div>
                                <div className='overflow-scroll h-32'>
                                    {tabs.map((item) => (
                                        <div
                                            key={item.id}
                                            className="relative overflow-hidden bg-white px-4 py-4 sm:px-6 sm:py-2.5 border-r border-b"
                                        >
                                            <div className='flex justify-between items-center'>
                                                <dd>
                                                    <p className="truncate text-xs font-medium text-gray-500">{item.name}</p>
                                                    <p className="text-lg font-bold text-gray-900">{item.stat}</p>
                                                </dd>
                                                <figure>
                                                    <img src={item.image} alt="icon" className="w-6 h-6" />
                                                </figure>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl my-6">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 ">
                            {domaintabs.map((tab, tabIdx) => (
                                <a
                                    key={tab.name}
                                    href={tab.href}
                                    aria-current={tab.current ? 'page' : undefined}
                                    className={classNames(
                                        tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                        tabIdx === 0 ? '' : '',
                                        tabIdx === tabs.length - 1 ? '' : '',
                                        'group uppercase relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-6 text-center text-sm font-semibold hover:bg-gray-50 focus:z-10',
                                    )}
                                >
                                    <span>{tab.name}</span>
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            tab.current ? 'bg-red-500' : 'bg-transparent',
                                            'absolute inset-x-0 bottom-0 h-0.5',
                                        )}
                                    />
                                </a>
                            ))}
                        </nav>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-white border'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Registrated User
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="ColumnChart"
                                    width="100%"
                                    height="300px"
                                    data={GenderDemographicsData}
                                    options={{legend:'none'}}
                                />
                            </div>
                            <div className='bg-white border border-l-0'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Age Demographics
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="ColumnChart"
                                    width="100%"
                                    height="300px"
                                    data={AgeDemographicsData}
                                    options={{legend:'none'}}
                                />
                            </div>
                            <div className='bg-white border border-t-0'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Login Source
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="PieChart"
                                    width="100%"
                                    height="350px"
                                    data={LoginSourceData}
                                    options={PieHoleOption}
                                />
                            </div>
                            <div className='bg-white border border-t-0 border-l-0'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Sign-In Method
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="PieChart"
                                    width="100%"
                                    height="350px"
                                    data={SignInMethodData}
                                    options={PieHoleOption}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
