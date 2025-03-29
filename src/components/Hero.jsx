import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { DataTable } from './DataTable'



const tabList = ['All', 'Pre Sarfaesi', 'NPA', 'Responses', 'Sumbolic Possession', 'DM Order', 'Physical Possession', 'Auctions']
const Hero = ({ activeLink }) => {
  const [activeTab, setActiveTab] = useState('All')
  const activeHandler = (e) => {
    setActiveTab(e.target.innerText)
  }

  return (
    <div className='w-full h-full p-6'>
      <h1 className='font-bold text-3xl mb-4' >{activeLink}</h1>
      <Tabs defaultValue="All" className="w-full my-4" >
        <TabsList className=' bg-white'>
          {tabList.map((tab) => (
            <TabsTrigger key={tab} value={tab} className={`p-0 rounded-md h-fit mr-4 `}>
              <span onClick={activeHandler} className={`${activeTab == tab ? 'bg-blue-400 z-50 p-2 rounded-md' : ''}`}>
                {tab}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <DataTable />


    </div>
  )
}

export default Hero