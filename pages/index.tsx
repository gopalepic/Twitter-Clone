import Image from 'next/image'

import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { PiHash } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdSupervisorAccount } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import FeedCard from '@/Components/FeedCard';
import React from 'react';


interface TwitterSidebarButton {
  title: string;
  icon : React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[]=[{
  title:"Home",
  icon:<AiFillHome/>
},
{
  title:'Explore',
  icon: <PiHash/>
},{
  title:'Notification',
  icon:<IoNotifications/>
},{
  title:'Messages',
  icon:<MdMailOutline/>
},{
  title:'List',
  icon:<MdOutlineFeaturedPlayList/>
},{
  title:'BookMark',
  icon:<FaRegBookmark/>
},{
  title:'Communities',
  icon:<MdSupervisorAccount/>
},{
  title:'More',
  icon:<CgMoreO/>
}
]

export default function Home() {
  return (
   
  <div className='inter.className'>
    
    <div className='grid grid-cols-12 h-screen w-screen px-56'> 
    <div className='col-span-3  ml-9' >
      <div className='text-2xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all w-fit'>
            <BsTwitter />
      </div>
      <div className='mt-1 text-1xl font-semibold'>
        <ul>
          {SidebarMenuItems.map((item) => (
            <li className='flex justify-start items-center hover:bg-gray-800 rounded-full  px-3 py-2 w-fit cursor-pointer '
             key={item.title}>
             
            <span className='text-2xl '> {item.icon}</span> <span>{item.title}</span> 
            </li>
          ))}
        </ul>
        <button className='bg-[#1d9bf0] p-3 rounded-full  px-10 mt-2 ' >POST</button>
      </div>
    </div>
    <div className="col-span-6 border-r-[1px] border-l-[1px]  border-grey-600  h-screen overflow-scroll" >
      <FeedCard/>      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>

    </div>
    <div className="col-span-3"></div>
     </div>

  </div>
  )
}
