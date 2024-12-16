import { Coffee } from 'lucide-react';
import Heading from '../Heading/Heading';
import { MainCoursItem } from '@/constant/MainCourse';
import Image from 'next/image';

export default function MainCours() {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        {/* Menu Content */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center mb-6">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <Heading text="Main Course" />
          </div>
          <div className="space-y-8">
            {MainCoursItem.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">
          <Image
            src="/images/menu2.png"
            alt="Main Course Dish"
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}