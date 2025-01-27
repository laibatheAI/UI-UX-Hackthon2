
import Image from "next/image";
import Link from "next/link";
import PageList from "@/app/components/pagelist";


export default function Navbar() {
  return (
    <div className="flex justify-between items-center lg:w-[1920px] lg:h-[85px] w-full h-[40px] lg:px-4 my-4">
      <div className="py-10 lg:absolute flex justify-between lg:w-[1177px] lg:h-[40px] lg:top-[63px] lg:left-[371px]  top-[20px] w-full ">
        {/* Brand Name*/}
        <div className="relative lg:flex lg:w-[98px] lg:h-[34px] lg:top-[3px] lg:gap-24 sm:justify-start sm:items-center w-[80px] h-[34px]">
          <p className="font-josefin-sans text-[#0D0E43] lg:text-[34px] text-[18px] font-bold lg:leading-[34px] text-center lg:text-left lg:px-0 px-36">
            Hekto
          </p>


          {/* Navbar */}
        <div className="flex justify-center items-center ml-[155px] lg:ml-0 ">
          <nav className="">
            <ul className="font-josefin-sans flex gap-3 lg:gap-10 text-[12px] lg:text-[18px] font-normal leading-5 text-center lg:text-left">
              <li className="text-[#FB2E86] flex">
                <Link href="/">Home</Link>
                </li>
              <li className="text-[#0D0E43]">
                <div>
                <PageList />
                </div>
              </li>
              <li className="text-[#0D0E43]">
                <Link href="/products">Products</Link>
                </li>
              <li className="text-[#0D0E43]">
                <Link href="/blog">Blog</Link>
                </li>
              <li className="text-[#0D0E43]">
                <Link href="/shop">Shop</Link>
                </li>
              <li className="text-[#0D0E43]">
                <Link href="/contact">Contact</Link>
                </li>
            </ul>
          </nav>
        </div>
        </div>
        
        {/* Search Bar */}
      <div className="border-2 border-[#E7E6EF] lg:w-[317px] lg:h-[42px] w-[200px] h-[35px] sm:w-[250px] hidden sm:flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full px-2 text-sm focus:outline-none"
        />
        <div className="bg-[#FB2E86] flex justify-center items-center w-[35px] sm:w-[53px] h-full rounded-sm">
          <Image
            src="/uil_search.png"
            alt="search icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      </div>
    </div>
 );
}
