import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center lg:w-[1920px] lg:h-[85px]">
      <div className="absolute flex justify-between lg:w-[1177px] lg:h-[40px] top-[63px] left-[371px]">
        {/* Brand Name*/}
        <div className="relative flex lg:w-[98px] lg:h-[34px] top-[3px] gap-24">
          <p className="font-josefin-sans text-[#0D0E43] text-[34px] font-bold leading-[34px] text-left underline-offset-auto decoration-clone">
            Hekto
          </p>


          {/* Navbar */}
        <div className="flex justify-center items-center">
          <nav className="">
            <ul className="flex gap-10 font-lato text-base font-normal leading-5 text-left underline-offset-auto decoration-clone">
              <li className="text-[#FB2E86] flex">Home
                <span>
                <Image src="/akar-icons_chevron-down (1).png"
              alt="down Arrow"
              width={12}
              height={12}
              className="absolute lg:w-[12px] lg:h-[12px] top-[4px] left-[231px] ml-1.5 mt-2.5"/>
                </span>
              </li>
              <li className="text-[#0D0E43]">Pages</li>
              <li className="text-[#0D0E43]">Products</li>
              <li className="text-[#0D0E43]">Blog</li>
              <li className="text-[#0D0E43]">Shop</li>
              <li className="text-[#0D0E43]">Contact</li>
            </ul>
          </nav>
        </div>
        </div>
        

        {/* Search Bar */}

        <div className="border-2 border-[#E7E6EF] lg:w-[317px] lg:h-[42px] left-[860px]">
          {/* Search Icon */}
          <div className=" absolute bg-[#FB2E86] lg:w-[53px] lg:h-[42px]  top-[-2px] left-[1123px] rounded-sm">
            <div className="lg:w-[24px] lg:h-[24px] top-[8px] left-[1140px] mx-3.5 my-2">
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
    </div>
  );
}
