import React from "react";
import Image from "next/image";

function MeetShef() {
  return (
    <section className="bg-black md:px-[135px] py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
        <Image
          src="/images/firstchef.png"
          alt="Chef 1"
          width={200}
          height={280}
          className="w-[200px] h-[271px] ml-44 cursor-pointer"
        />
        <Image
          src="/images/secondchef.png"
          alt="Chef 2"
          width={200}
          height={280}
          className="w-[200px] h-[271px] cursor-pointer"
        />
        <Image
          src="/images/thirdchef.png"
          alt="Chef 3"
          width={200}
          height={280}
          className="w-[200px] h-[271px] cursor-pointer"
        />
        <Image
          src="/images/forthchef.png"
          alt="Chef 4"
          width={200}
          height={280}
          className="w-[200px] h-[271px] mr-44 cursor-pointer"
        />
      </div>
    </section>
  );
}

export default MeetShef;
