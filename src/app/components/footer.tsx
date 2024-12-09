import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="lg:w-[1920px] lg:h-[532px] top-[7500px] left-[-1px]">
        <div className="lg:w-[1920px] lg:h-[479px] bg-[#EEEFFB] flex pl-48 pr-[200px]">
          {/* 1st */}
          <div className="lg:w-[450px] lg:h-[479px] grid justify-between ">
            <div className="lg:w-[110px] lg:h-[38px] top-[95px] left-[310px] lg:py-20">
              <p className="font-josefin-sans font-extrabold text-[38px] leading-[44.53px] text-left">
                Hekto
              </p>

              <div className="bg-white lg:w-[377px] lg:h-[44px] top-[164px] left-[309px] flex justify-between mt-5">
                <p className="font-lato text-[#8A8FB9] text-[16px] font-normal leading-[19.2px] text-left py-3">
                  Enter Email Address
                </p>

                <div className="lg:w-[135px] lg:h-[44px] top-[167px] left-[549px] rounded-md bg-[#FB2E86] grid justify-center items-center">
                  <p className="font-roboto text-white text-[16px] font-medium leading-[18.75px] text-left ">
                    Sign Up
                  </p>
                </div>
              </div>

              <div className="font-lato text-[#8A8FB9] text-[16px] font-normal leading-[19.2px] text-left mt-4 ">
                Contact Info
              </div>

              <div className="lg:w-[401px] lg:h-[19px] top-[262px] left-[308px] mt-3 ">
                <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>
          </div>


          {/* 2nd */}
          <div className="lg:w-[250px] lg:h-[479px] justify-start py-20">
            <div>
              <h1 className="font-josefin-sans text-[22px] leading-[25.78px] text-left pb-8">
                Catagories
              </h1>
            </div>

            <div className="grid gap-5">
              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
                Laptops & Computers
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
                Cameras & Photography
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
                Smart Phones & Tablets
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
                Video Games & Consoles
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
                Waterproof Headphones
              </p>
            </div>
          </div>

          {/* 3rd */}
          <div className="lg:w-[250px] lg:h-[479px] justify-start py-20">
            <div>
              <h1 className="font-josefin-sans text-[22px] leading-[25.78px] text-left pb-8">
              Customer Care
              </h1>
            </div>

            <div className="grid gap-5">
              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
              My Account
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
              Discount
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Returns
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Orders History
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Order Tracking
              </p>
            </div>
          </div>

            {/* 4th */}
            <div className="lg:w-[250px] lg:h-[479px] justify-start py-20">
            <div>
              <h1 className="font-josefin-sans text-[22px] leading-[25.78px] text-left pb-8">
              Pages
              </h1>
            </div>

            <div className="grid gap-5">
              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
              Blog
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left ">
              Browse the Shop
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Category
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Pre-Built Pages
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              Visual Composer Elements
              </p>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[19.2px] text-left">
              WooCommerce Pages
              </p>
            </div>
          </div>

        </div>


        <div className="bg-[#E7E4F8] flex justify-around items-center lg:w-[1920px] lg:h-[53px] top-[7500px] left-[-1px]">
        <div className="lg:w-[220px] lg:h-[19px] top-[496px] left-[377px]">
          <p className="font-lato text-[#9DA0AE] text-[15px] font-semibold leading-[19.2px] text-left">
          ©Webecy - All Rights Reserved
          </p>
          </div>
            <Image src="/Group 205.png"
            alt=""
            width={80}
            height={19.42}
            className="lg:w-[80px] lg:h-[19.42px] top-[496px] left-[1257]"/>
        
        </div>
        
      </div>
    </>
  );
}





