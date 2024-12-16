
import Link from "next/link";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

import { PiCoffeeLight,   PiPersonLight, PiStudent } from "react-icons/pi";

export default function About() {
  return (
    <div >
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          width={1920}
          height={410}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className=" text-white md:text-5xl text-3xl font-bold mb-8">
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="">Home</Link>
            <span className=""> &gt; </span>
            <Link href="/about" className="text-orange-500">About</Link>
          </div>
        </div>
      </div>
      {/* Second Section: Content and Buttons */}
      <section className=" body-font">
        <div className="container mx-auto flex px-5 py-24">
         <div className="mt-[50px] md:mt-0 ">
                 <Image src="/images/hero2.png" alt="Hero Image" className=" w-[660px] h-[330px]" width={660} height={330}  />
                 <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
                   <Image src="/images/hero3.png" alt="Hero Image"  width={336} height={536} className="w-[233px] h-[194px] mr-3 mt-2" />
                   <Image src="/images/hero4.png" alt="Hero Image" width={336} height={536} className="w-[322px] h-[194px] mt-2 " />
                 </div>
               </div>
          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className=" title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className=" body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 className=" text-3xl text-bold mt-3">Why Choose Us</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
              pellentesque bibendum non dui volutpat fringilla bibendum.
          <Image
            className="mb-10 object-cover object-center w-[1320px] h-[286px] mt-1552px ml-300px mt-10"
            alt="hero"
            src = "/images/about4.png"
            width={1320}
            height={381}
          />
        </div>
      </section>
      {/* Fourth section */}
      <section className=" body-font">
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
<div className="flex gap-4 mb-3 items-center justify-center">
        <div className="  p-2 rounded-lg text-center">
          <div className=" text-7xl px-1 flex justify-center items-center">
          <PiStudent/>
          </div>
          <h1 className=" text-bold text-2xl">Best Chef</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>
        <div className=" p-2 rounded-lg text-center">
        <div className=" text-7xl px-1 flex justify-center items-center">
        <PiCoffeeLight/>
          </div>
          <h1 className="text-bold text-2xl">120 Food Items</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>
        <div className=" p-2 rounded-lg text-center">
        <div className=" text-7xl px-1 flex justify-center items-center">
        <PiPersonLight/>
          </div>
          <h1 className=" text-bold text-2xl">Clean Environment</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Quisque diam pellentesque bibendum non dui volutpat </p>
        </div>
        </div>
</div>
  );
}