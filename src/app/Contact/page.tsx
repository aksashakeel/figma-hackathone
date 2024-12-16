import Link from "next/link";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



export default function Contact() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          width={1920}
          height={410}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            Contact
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/Contact" className="text-orange-500">Contact</Link>
          </div>
        </div>
      </div>

      <div className="mt-[10px]">
        {/* Signup Form */}
        <section className="py-16">
          <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Remember me?</span>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
              >
                Sign Up
              </button>
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p>or</p>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex gap-[78px] items-center justify-center">
              <FcGoogle />
                Sign up with Google
              </button>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 gap-[78px] flex items-center justify-center">
              <FaApple />

                Sign up with Apple
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
