import Link from "next/link";
import Image from "next/image";

export default function Page() {
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
            Pages
          </h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/about" className="text-orange-500">Pages</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
