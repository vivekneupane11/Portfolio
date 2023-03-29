import DarkLightMode from '@/app/components/DarkLightToogle'
import React from 'react'
import avatar from '../../../../../../public/profile-pic.png'
import Image from 'next/image'
export default function Heading() {
  return (
    <div className="w-full flex flex-col justify-center items-center max-w-sm   rounded-lg  dark:border-gray-700">
    <div className="  flex flex-col items-center ">
   
    <Image className="w-32 h-32 rounded-full" src={avatar} alt=" avatar"/>
   <h5 className="  my-2 text-4xl font-800 text-gray-900 dark:text-white">
        Vivek Neupane
      </h5>

      <p className="text-lg font-semibold text-emerald-600/100 dark:text-emerald-500/100">
      CTO / COFOUNDER
      </p>
      <p className="mb-3 font-normal text-emerald-600 dark:text-emerald-700">@Medicos International </p>

      <DarkLightMode/>

    
    </div>
  </div>
  )
}
