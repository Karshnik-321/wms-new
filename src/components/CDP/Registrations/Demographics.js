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
    pieHole: 0.56,
    is3D: false,
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 10,
      },
    },
    chartArea: {
        left: 10,
        right: 10, // !!! works !!!
        bottom: 20,  // !!! works !!!
        top: 20,
        width: "100%",
        height: "100%"
    }
  };

  export const GenderOption  = {
    pieHole: 0.6,
    is3D: false,
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 10,
      },
    },
    chartArea: {
        left: 10,
        right: 10, // !!! works !!!
        bottom: 20,  // !!! works !!!
        top: 20,
        width: "100%",
        height: "100%"
    }
  };
  export const GenderDemographicsData = [
    ["Element", "Density", { role: "style" }],
    ["Male", 1876, "#06b0f0"], // RGB value
    ["Female", 220, "#f75b95"], // English color name
    ["Not Disclosed", 128014, "gray"],
  ];


  const AgeDemographicsOptions = {
    chartArea: {
        left: 80,
        right: 30, // !!! works !!!
        bottom: 50,  // !!! works !!!
        top: 30,
        width: "80%",
        height: "80%"
    },
    legend: 'none',
  };
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

export const DeviceData = [
    [
        "Element",
        "Device Trafic",
        { role: "style" },
        {
            role: "annotation",
            type: "string",
        },
    ],
    ["Mobile", 25.94, "#2c95ec", "Mobile"],
    ["Desktop", 5.49, "#f64d2a", "Web"],
    ["App", 10, "#f6ba2a", "App"],
];
export const DeviceOptions = {
    title: "Device Trafic",
    bar: { groupWidth: "60%" },
    legend: { position: "none" },
    chartArea: {
        left: 10,
        right: 10, // !!! works !!!
        bottom: 20,  // !!! works !!!
        top: 20,
        width: "100%",
        height: "100%"
    }
};

export const SignupData = [
    ["Year", "Mobile", "Web", "App"],
    ["2004", 1000, 400, 300],
    ["2005", 1170, 460, 560],
    ["2006", 660, 1120, 500],
    ["2007", 1030, 540, 1240],
  ];
  
  export const SignupOptions = {
    curveType: "function",
    legend: { position: "bottom" },
    chartArea: {
        left: 80,
        right: 40, // !!! works !!!
        bottom: 80,  // !!! works !!!
        top: 30,
        width: "100%",
        height: "100%"
    }
  };

  const HourlyTrendData = [
    ['Time of Day', 'Motivation Level'],
    [{ v: [8, 0, 0], f: '8 am' }, 1],
    [{ v: [9, 0, 0], f: '9 am' }, 2],
    [{ v: [10, 0, 0], f: '10 am' }, 3],
    [{ v: [11, 0, 0], f: '11 am' }, 4],
    [{ v: [12, 0, 0], f: '12 pm' }, 5],
    [{ v: [13, 0, 0], f: '1 pm' }, 6],
    [{ v: [14, 0, 0], f: '2 pm' }, 7],
    [{ v: [15, 0, 0], f: '3 pm' }, 8],
    [{ v: [16, 0, 0], f: '4 pm' }, 9],
    [{ v: [17, 0, 0], f: '5 pm' }, 10],
  ];

  const HourlyTrendOptions = {
    chartArea: {
        left: 50,
        right: 30, // !!! works !!!
        bottom: 50,  // !!! works !!!
        top: 30,
        width: "80%",
        height: "80%"
    },
    legend: 'none',
  };


  const UserBounceData = [
    ['X', 'Dogs'],
    [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
    [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
    [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
    [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
    [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
    [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
    [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
    [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
    [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
    [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
    [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
    [66, 70], [67, 72], [68, 75], [69, 80]
  ];

  const UserBounceOptions = {
    chartArea: {
        left: 50,
        right: 30, // !!! works !!!
        bottom: 50,  // !!! works !!!
        top: 30,
        width: "80%",
        height: "80%"
    },
    legend: 'none',
  };
export default function Demographics() {
    return (
        <Layout>
            
            <main>
                {/* <SubHeader tabs={tabs} /> */}
                
                <div className="mx-auto max-w-7xl my-6">
                    <div className='text-gray-50 bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <div class="py-2">
                            <div class="col-span-3 border-r">
                                <div className="mx-auto px-10 pt-10">
                                    <dl className="grid grid-cols-3 bg-gray-50 rounded-2xl">
                                        {stats.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative px-10 py-6 overflow-hidden border-r last:border-r-0 border-gray-200"
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
                            <div className='grid grid-cols-1 sm:grid-cols-2 py-10'>
                                <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
                                    <div>
                                        <Chart
                                            chartType="PieChart"
                                            width="100%"
                                            height="250px"
                                            data={TotalUsersData}
                                            options={TotalUsersOption}
                                        />
                                    </div>
                                    <div>
                                        {tabs.map((item) => (
                                            <div
                                                key={item.id}
                                                className="relative py-4 sm:py-2.5 border-b last:border-b-0 cursor-pointer"
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
                                <div class="flex items-center justify-center">
                                    <div className="px-6">
                                        <Chart
                                            chartType="BarChart"
                                            width="100%"
                                            height="250px"
                                            data={DeviceData}
                                            options={DeviceOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl my-6">
                    <div className='grid gap-4'>
                        {/* <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 ">
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
                        </nav> */}
                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Gender
                                        </h2>
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="280px"
                                        data={GenderDemographicsData}
                                        options={GenderOption}
                                    />
                                </div>
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
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
                                    options={AgeDemographicsOptions}
                                />
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Login Source
                                        </h2>
                                    </div>
                                </div>
                                <div className='py-6'>
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="350px"
                                        data={LoginSourceData}
                                        options={PieHoleOption}
                                    />
                                </div>
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Sign-In Method
                                        </h2>
                                    </div>
                                </div>
                                <div className='py-6'>
                                    <Chart
                                        chartType="PieChart"
                                        width="100%"
                                        height="350px"
                                        data={SignInMethodData}
                                        options={PieHoleOption}
                                    />
                                </div>
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Sign Up Trend
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={SignupData}
                                    options={SignupOptions}
                                    legendToggle
                                />
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            User Bounce
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="LineChart"
                                    width="100%"
                                    height="350px"
                                    data={UserBounceData}
                                    options={UserBounceOptions}
                                    legendToggle
                                />
                            </div>
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden col-span-2'>
                                <div className="px-6 lg:px-8 py-4 lg:py-6 flex items-center md:justify-between border-b border-gray-200">
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                                            Hourly Trend
                                        </h2>
                                    </div>
                                </div>
                                <Chart
                                    chartType="ColumnChart"
                                    width="100%"
                                    height="350px"
                                    data={HourlyTrendData}
                                    options={HourlyTrendOptions}
                                    legendToggle
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
