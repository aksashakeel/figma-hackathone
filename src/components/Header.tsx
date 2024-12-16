import Link from "next/link";
import { IoSearch } from 'react-icons/io5';
import { PiHandbagLight } from "react-icons/pi";

export default function Header() {
    return (
        <header className="w-full bg-black">
            {/* Logo - Centered */}
            <div className="mb-8 w-full h-[32px] pt-[25px] text-center font-bold text-[24px] leading-[32px]">
                <h1 className="text-white">Food<span className="text-[#FF9F0D]">tuck</span></h1>
            </div>

            {/* Large Screen Navigation */}
            <div className="hidden md:flex justify-center items-center w-full h-[40px] pt-[15px] pr-[20px]">
                {/* Navigation Items */}
                <nav className="flex items-center text-base gap-x-5 mb-8">
                    <Link href="/" className="text-white py-2">Home</Link>
                    <Link href="../menu" className="text-white py-2">Menu</Link>
                    <Link href="../Blog" className="text-white py-2">Blogs</Link>
                    <Link href="../Pages" className="text-white py-2">Pages</Link>
                    <Link href="../aboutus" className="text-white py-2">About Us</Link>
                    <Link href="../Shop" className="text-white py-2">Shop</Link>
                    <Link href="../Contact" className="text-white py-2">Contact</Link>
                </nav>

                {/* Search and Cart */}
                <div className="flex items-center ml-10 mb-8">
                    <button className="flex bg-black w-[200px] h-[35px] gap-[10px] pl-[20px] pt-[5px] border-[1.5px] rounded-[27px]">
                        <input type="text" placeholder="Search..." className="bg-black text-center w-[80px]" />
                        <IoSearch className="w-[18px] h-[18px] m-1 text-white" />
                    </button>
                    <PiHandbagLight className="text-white w-[24px] h-[24px] pt-[5px] ml-4" />
                </div>
            </div>

            {/* Small Screen Navigation */}
            <div className="md:hidden flex flex-col items-center py-5">
                {/* First Row: 4 items */}
                <div className="flex justify-center gap-5">
                    <Link href="/" className="text-white py-2">Home</Link>
                    <Link href="../menu" className="text-white py-2">Menu</Link>
                    <Link href="../Blog" className="text-white py-2">Blogs</Link>
                    <Link href="../Pages" className="text-white py-2">Pages</Link>
                </div>

                {/* Second Row: 3 items */}
                <div className="flex justify-center gap-5 mt-3">
                    <Link href="../aboutus" className="text-white py-2">About Us</Link>
                    <Link href="../Shop" className="text-white py-2">Shop</Link>
                    <Link href="../Contact" className="text-white py-2">Contact</Link>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center gap-4 items-center mt-5">
                    <button className="flex bg-black w-[250px] h-[35px] gap-2 pl-4 pt-2 border-[1.5px] rounded-[27px]">
                        <input type="text" placeholder="Search..." className="bg-black text-white w-[150px] px-2" />
                        <IoSearch className="w-[18px] h-[18px] text-white" />
                    </button>
                    <PiHandbagLight className="text-white w-[24px] h-[24px]" />
                </div>
            </div>
        </header>
    );
}
