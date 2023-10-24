"use client";
import { BellIcon, BloodIcon, BloodRate, HeartRateIcon, LogoIcon, SearchIcon } from '@/components/icons';
import Image from 'next/image';
import { AreaChart, YAxis, CartesianAxis, Tooltip, Area, CartesianGrid, XAxis } from 'recharts';
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const data1 = [
  {
    "name": "Page A",
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "pv": 4300,
    "amt": 2100
  }
]

export default function Home() {
  return (
    <main className="flex w-full flex-row overflow-hidden">
      <div className="w-[150px] bg-white h-screen z-0 shadow-2xl flex gap-y-4 flex-col items-center p-10">
        <LogoIcon />
      </div>
      <div className="w-full flex flex-row gap-4 h-[100vh] flex bg-[#FFFCF8]">
        <div className="w-[60%] h-full flex flex-col gap-3 items-center p-8">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-sm font-semibold">Health Overview</h1>
              <p className="text-xs font-light text-[#6A6969]">August 12, 2021</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="p-2 border border-[#E8E7E7] bg-white shadow-md rounded-md">
                <SearchIcon />
              </div>
              <div className="p-2 border border-[#E8E7E7] mx-auto bg-white shadow-md rounded-md">
                <BellIcon />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 justify-between items-center">
            <div className="flex w-[30%] w-full flex-col gap-2 justify-center bg-white rounded-md shadow-md border border-[#E8E7E7] p-4">
              <div className="flex flex-row gap-4 justify-between items-center">
                <BloodIcon />
                <h1 className="text-xs font-semibold">Blood Sugar</h1>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl">80 <span className="text-xs text-[#818181] font-light">mg/dl</span></div>
                <div className="p-1 bg-[#F8DEBD] rounded-md font-semibold w-[30%] text-[10px]">Normal</div>
              </div>
                                        
            <AreaChart width={150} height={50} data={data1}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            </div>
            <div className="flex w-[30%] w-full flex-col gap-2 justify-center bg-white rounded-md shadow-md border border-[#E8E7E7] p-4">
              <div className="flex flex-row gap-4 justify-between items-center">
                <HeartRateIcon />
                <h1 className="text-xs font-semibold">Heart Rate</h1>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl">98 <span className="text-xs text-[#818181] font-light">bpm</span></div>
                <div className="p-1 bg-[#FBF0F3] rounded-md font-semibold w-[30%] text-[10px]">Normal</div>
              </div>
              <AreaChart width={150} height={50} data={data1}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            </div>
            <div className="flex w-[30%] w-full flex-col gap-2 justify-center bg-white rounded-md shadow-md border border-[#E8E7E7] p-4">
              <div className="flex flex-row gap-4 justify-between items-center">
                <BloodRate />
                <h1 className="text-xs font-semibold">Blood Pressure</h1>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl">102 <span className="text-xs text-[#818181] font-light">/72 mmhg</span></div>
                <div className="p-1 bg-[#D0FBFF] rounded-md font-semibold w-[30%] text-[10px]">Normal</div>
              </div>
              <AreaChart width={150} height={50} data={data1}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            </div>
          </div>
          <div className="p-4 w-full flex flex-col gap-3 bg-white rounded-md shadow-md border border-[#E8E7E7]">
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="text-sm font-semibold">Activity Growth</h1>
              <select className="p-2 text-xs border border border-[#E1E1E1] rounded-md">
                <option value="Jan">Jan 2023</option>
                <option value="Feb">Feb 2023</option>
                <option value="March">Mar 2023</option>
                <option value="Apr">Apr 2023</option>
                <option value="May">May 2023</option>
              </select>
            </div>                       
            <AreaChart width={550} height={200} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </div>
        </div>
        <div className="w-[40%] rounded-l-xl h-full bg-[#303030]"></div>
      </div>
    </main>
  )
}
