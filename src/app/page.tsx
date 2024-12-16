import Image from 'next/image'
import React from 'react'
import Hero from './hero/page'
import MeetShef from './meetchef/page'

function page() {
  return (
    <div className='bg-black'>
<Hero/>
<MeetShef />
<div className="  text-center justify-center items-center text-2xl m-1 mt-8 font-sans">
        <h3 className=" text-[#FF9F0D] text-[32px] mb-4 ">Blog Posts</h3>
        <h1 className="font-bold text-[48px] text-white"><span className="text-[#FF9F0D]">La</span>test News & Blogs</h1>
      </div>
      <section className=" body-font text-white">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/about4.png"
                  width={321}
                  height={123}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                  BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                  </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/foodc3.png"
                  width={321}
                  height={123}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                  120 Item food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/foodc2.png"
                  width={321}
                  height={213}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium  mb-2 text-bold text-center">
                  Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  )
}

export default page