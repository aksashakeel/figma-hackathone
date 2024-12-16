import StarterMenu from '@/components/Menu/StartMenu'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainCourse from '@/components/MainCourse/MainCourse'
import Dessert from '../Desert/Deserts'
import Drink from '@/components/Drinks/Drinks'

 export default function menu() {
  return (
    

       <div >
        
            {/* First Section: Image and Breadcrumb */}
            <div className=" relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
              <Image
                src="/images/banner.png"
                alt="Banner Image"
                width={1920}
                height={410}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
                  Menu
                </h2>
                <div className="flex items-center space-x-2 text-white">
                  <Link href="/" className="text-white">Home</Link>
                  <span className="text-white"> &gt; </span>
                  <Link href="/menu" className="text-orange-500">Menu</Link>
                </div>
              </div>
            </div>
            <div className="  text-center justify-center items-center text-2xl m-1 mt-8 font-sans">
        <h3 className=" text-[#FF9F0D] text-[32px] mb-4 ">Our Menu</h3>
        <h1 className="font-bold text-[48px] "><span className="text-[#FF9F0D]">Ch</span>oose Food Items</h1>
      </div>
        <StarterMenu/>
        <MainCourse />
        <Dessert />
        <Drink />
        
    </div>
  )
}

