import Image from "next/image";

export default function Body(){
  return(
    <>
      <div className="lg:w-[1920px] lg:h-auto w-[320px]">

        {/* 1st Heading */}
        <div className="lg:absolute lg:w-[367px] lg:h-[42px] top-[1015px] lg:left-[777px] left-[80px] lg:my-0 my-5">
          <p className="font-josefin-sans text-[#151875] lg:text-[42px] text-[20px] leading-[49.22px] text-center">
          Featured Products
          </p>
        </div>

        {/* Cards Row 1st */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:p-0 p-2">
          {/* 1st card */}
        <div className="lg:absolute lg:w-[270px] lg:h-[361px] top-[1105px] lg:left-[376px] w-[145px]">
          {/* img-div */}
          <div className="bg-[#F6F7FB] grid justify-center items-center lg:w-[270px] lg:h-[236px] w-[140px] h-[86px]">
            <Image src="/image 1168.png"
            alt="chair"
            width={178}
            height={178}
            className="lg:w-[178px] lg:h-[178px] top-[46px] left-[40px] w-[78px] h-[78px]"/>
          </div>

          <div className="lg:absolute lg:w-[126px] lg:h-[22px] lg:left-[71px] lg:top-[251px] left-[31px]">
            <p className="relative font-lato text-[#FB2E86] text-[12px] lg:text-[17px] font-bold leading-[21.6px] lg:text-left text-center underline-offset-auto decoration-clone">
            Cantilever chair
            </p>
          </div>

          <div className="lg:absolute lg:w-[52px] lg:h-[4px] w-[32px] lg:top-[285px] lg:left-[110px] top-[105px] left-[52px] rounded-[10px] lg:mx-0 mx-14">
            <Image src="/Group 141.png"
            alt="color div"
            width={52}
            height={4}/>
          </div>

          <div className="lg:absolute lg:w-[99px] lg:h-[14px] lg:top-[301px] lg:left-[92px] left-[42px] top-[110px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] text-[8px] leading-[16.41px] lg:text-left text-center">
            Code - Y523201
            </p>
          </div>

          <div className="lg:absolute lg:w-[44px] lg:h-[17px] lg:top-[327px] lg:left-[115px] left-[56px] top-[120px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] text-[8px] leading-[16.8px] lg:text-left text-center">
            $42.00
            </p>
          </div>
        </div>

        {/* 2nd Card */}

        <div className="lg:absolute bg-[#2F1AC4] lg:w-[270px] lg:h-[361px] top-[1105px] lg:left-[675px] left-[75px] w-[140px]">
          {/* img-div */}
          <div className=" bg-[#F6F7FB] grid justify-center items-center lg:w-[270px] lg:h-[236px] w-[140px] h-[86px]">

            <Image src="/image 1.png"
            alt="chair"
            width={178}
            height={178}
            className="lg:w-[178px] lg:h-[178px] lg:top-[46px] lg:left-[40px] top-[46px] w-[78px] h-[78px]"/>
          </div>

          <div className="lg:absolute lg:w-[126px] lg:h-[22px] left-[71px] top-[251px]">
            <p className="relative font-lato text-white lg:text-[17px] text-[12px] font-bold leading-[21.6px] lg:text-left text-center underline-offset-auto decoration-clone">
            Cantilever chair
            </p>
          </div>

          <div className="lg:absolute lg:w-[52px] lg:h-[4px] lg:top-[285px] lg:left-[110px] rounded-[10px] lg:mx-0 mx-14">
            <Image src="/Group 141 (1).png"
            alt="color div"
            width={52}
            height={4}/>
          </div>

          <div className="lg:absolute lg:w-[99px] lg:h-[14px] top-[301px] left-[92px]">
            <p className="font-josefin-sans text-white lg:text-[14px] text-[8px] leading-[16.41px] lg:text-left text-center">
            Code - Y523201
            </p>
          </div>

          <div className="lg:absolute lg:w-[44px] lg:h-[17px] top-[327px] left-[115px]">
            <p className="font-josefin-sans text-white lg:text-[14px] text-[8px] leading-[16.8px] lg:text-left text-center">
            $42.00
            </p>
          </div>
        </div>

        {/* 3rd Card */}
        <div className=" lg:absolute lg:w-[270px] lg:h-[361px] top-[1105px] left-[975px] w-[145px]">
          {/* img-div */}
          <div className="bg-[#F6F7FB] grid justify-center items-center lg:w-[270px] lg:h-[236px] ">
            <Image src="/image 1169.png"
            alt="chair"
            width={178}
            height={178}
            className="lg:w-[178px] lg:h-[178px] top-[46px] left-[40px]"/>
          </div>

          <div className="lg:absolute lg:w-[126px] lg:h-[22px] left-[71px] top-[251px]">
            <p className="relative font-lato text-[#FB2E86] lg:text-[17px] text-[12px] font-bold leading-[21.6px] lg:text-left text-center underline-offset-auto decoration-clone">
            Cantilever chair
            </p>
          </div>

          <div className="lg:absolute lg:w-[52px] lg:h-[4px] top-[285px] left-[110px] rounded-[10px] lg:mx-0 mx-14">
            <Image src="/Group 141.png"
            alt="color div"
            width={52}
            height={4}/>
          </div>

          <div className="lg:absolute lg:w-[99px] lg:h-[14px] top-[301px] left-[92px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] text-[8px] text-center leading-[16.41px] lg:text-left">
            Code - Y523201
            </p>
          </div>

          <div className="lg:absolute lg:w-[44px] lg:h-[17px] top-[327px] left-[115px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] text-[8px] leading-[16.8px] lg:text-left text-center">
            $42.00
            </p>
          </div>
        </div>

        {/* 4th Card */}
        <div className="lg:absolute lg:w-[270px] lg:h-[361px] top-[1105px] left-[1274px] w-[145px]">
          {/* img-div */}
          <div className=" bg-[#F6F7FB] grid justify-center items-center lg:w-[270px] lg:h-[236px] h-[145px]">
            <Image src="/image 3.png"
            alt="chair"
            width={216}
            height={151}
            className="lg:w-[216px] lg:h-[151px] top-[46px] left-[40px]"/>
          </div>

          <div className="lg:absolute lg:w-[126px] lg:h-[22px] left-[71px] top-[251px]">
            <p className="relative font-lato text-[#FB2E86] lg:text-[17px]  text-[12px] font-bold leading-[21.6px] lg:text-left text-center underline-offset-auto decoration-clone">
            Cantilever chair
            </p>
          </div>

          <div className="lg:absolute lg:w-[52px] lg:h-[4px] top-[285px] left-[110px] rounded-[10px] lg:mx-0 mx-14">
            <Image src="/Group 141.png"
            alt="color div"
            width={52}
            height={4}/>
          </div>

          <div className="lg:absolute lg:w-[99px] lg:h-[14px] text-[8px] top-[301px] left-[92px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] text-[8px] leading-[16.41px] lg:text-left text-center" >
            Code - Y523201
            </p>
          </div>

          <div className="lg:absolute lg:w-[44px] lg:h-[17px] top-[327px] left-[115px]">
            <p className="font-josefin-sans text-[#151875] lg:text-[14px] leading-[16.8px] text-[8px] text-center lg:text-left">
            $42.00
            </p>
          </div>
        </div>
        </div>
              
        


        {/* mid line */}
        <div className="absolute lg:w-[91px] lg:h-[4px] top-[1519px] left-[915px] rounded-[10px] lg:block hidden">
          <Image src="/Group 169.png"
          alt=""
          width={91}
          height={4}/>
        </div>

        {/* 2nd Row */}
        <div className="lg:absolute lg:w-[338px] lg:h-[42px] top-[1594px] left-[791px]">
          <p className="font-josefin-sans text-[#151875] lg:text-[42px] leading-[49.22px] text-center lg:text-left underline-offset-auto decoration-clone lg:my-0 my-5">
          Leatest Products
          </p>
        </div>

        <div className=" lg:absolute lg:w-[527px] lg:h-[22px] top-[1655px] left-[697px]">
          <ul className="flex justify-between">
            <li className="font-lato text-[#FB4997] lg:text-[18px] text-[12px] font-normal leading-[21.6px] text-left underline underline-offset-auto decoration-clone">New Arrival</li>
            <li className="font-lato text-[#151875] lg:text-[18px] text-[12px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-clone">Best Seller</li>
            <li className="font-lato text-[#151875] lg:text-[18px] text-[12px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-clone">Best Seller</li>
            <li className="font-lato text-[#151875] lg:text-[18px] text-[12px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-clone">Special Offer</li>
          </ul>
        </div>

        {/* 2nd Row  */}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:p-0 p-2" >

          {/* 1st Card */}
        <div className="lg:absolute lg:w-[360px] lg:h-[306px] top-[1739px] left-[378px] lg:mx-0 mx-2">
          <div className=" bg-[#F7F7F7] grid justify-center items-center lg:w-[360px] lg:h-[269.96px]">
            <div className="lg:w-[223px] lg:h-[229px] top-[33px] left-[73px]">
            <Image  src="/image 1166.png"
            alt=""
            width={223}
            height={229}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className="flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2 ">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="lg:absolute lg:w-[370px] lg:h-[313.98px] top-[1735px] left-[775px] lg:mx-0 mx-2">
          <div className=" grid justify-center items-center lg:w-[370px] lg:h-[277px]">

            <div className=" lg:absolute w-[84.87px] h-[56.73px] top-[25px] left-[18px] gap-0 border-t">
            <Image src="/Group 27.png"
            alt=""
            width={84.87}
            height={56.73}/>
            </div>

            <div>
              <div className="lg:block hidden">
                <Image src="/Group 28.png"
                alt=""
                width={30}
                height={30}
                className="lg:absolute top-[146px] left-[15px]"/>
              </div>

              <div className="lg:block hidden">
                <Image src="/uil_heart-alt (1).png"
                alt=""
                width={17}
                height={17}
                className="lg:absolute top-[193px] left-[22px]"/>
              </div>

              <div className="lg:block hidden">
                <Image src="/uil_search-plus.png"
                alt=""
                width={15}
                height={15}
                className="lg:absolute top-[224px] left-[24px]"/>
              </div>
            </div>
            
            <div className="lg:w-[223px] lg:h-[229px] top-[33px] left-[73px] ">
            <Image  src="/image 15.png"
            alt=""
            width={245}
            height={245}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className=" flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2 ">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
        </div>

        {/* 3rd Card */}
        <div className="lg:absolute lg:w-[360px] lg:h-[306px] top-[1739px] left-[1182px]">
          <div className=" bg-[#F7F7F7] grid justify-center items-center lg:w-[360px] lg:h-[269.96px]">
            <div className="lg:w-[223px] lg:h-[229px] top-[33px] left-[73px]  ">
            <Image  src="/image 1168.png"
            alt=""
            width={223}
            height={229}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className=" flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2 ">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
        </div>
        </div>
        
          


          {/* 3rd Row */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
             
             {/* 1st Card */}
          <div className="lg:absolute lg:w-[360px] lg:h-[306px] top-[2165px] left-[378px] lg:mx-0 mx-2 lg:p-0 p-2">
          <div className=" bg-[#F7F7F7] grid justify-center items-center lg:w-[360px] lg:h-[269.96px]">
            <div className="lg:w-[223px] lg:h-[229px] top-[33px] left-[73px] ">
            <Image  src="/image 23.png"
            alt=""
            width={223}
            height={229}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className=" flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2  ">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
          </div>

          {/* 2nd Card */}
          <div className="lg:absolute lg:w-[360px] lg:h-[306px] top-[2165px] left-[775px] lg:mx-0 mx-2 lg:p-0 p-2">
          <div className=" bg-[#F7F7F7] grid justify-center items-center lg:w-[360px] lg:h-[269.96px]">
            <div className="lg:w-[303px] lg:h-[264px] top-[33px] left-[73px]">
            <Image  src="/image 32 (1).png"
            alt=""
            width={303}
            height={264}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className="flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2 ">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left ">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
          </div>

          {/* 3rd Card */}
          <div className="lg:absolute lg:w-[360px] lg:h-[306px] top-[2165px] left-[1172px] lg:mx-0 mx-2 lg:p-0 p-2">
          <div className=" bg-[#F7F7F7] grid justify-center items-center lg:w-[360px] lg:h-[269.96px]">
            <div className="lg:w-[360px] lg:h-[261px] top-[16px] left-[5px]  ">
            <Image  src="/image 3.png"
            alt=""
            width={360}
            height={261}/>
            </div>
          </div>

          <div className=" flex justify-between mt-2">
          <div className=" flex lg:w-[162px] lg:h-[18px] top-[285.55] justify-between">
          <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-left underline-offset-auto decoration-clone">
          Comfort Handy Craft
          </p>
          </div>

          <div className="flex gap-2">
            <p className="font-josefin text-[#151875] text-[14px] leading-[14.06px] text-left">
              $42.00
            </p>
            <p className="font-josefin text-[#FB2448] text-[14px] leading-[14.06px] text-left line-through">
              $65.00
            </p>
          </div>
          </div>
          </div>

          </div>
         

          {/* 3rd Heading */}

          <div className=" lg:absolute lg:w-[399px] lg:h-[42px] top-[2529px] left-[761px] lg:my-0 my-10">
            <p className="font-josefin-sans text-[#151875] lg:text-[42px] leading-[49.22px] lg:text-left text-[24px] font-bold text-center">
            What Shopex Offer!
            </p>
          </div>

          {/* eyment Method */}

          <div className="grid gap-5 lg:gap-0 lg:mx-0 mx-2 lg:p-0 p-2">
            {/* 1st Card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[320px] top-[2626px] left-[375px]">
              <div className=" grid justify-center items-center lg:w-[270px] lg:h-[150px]">
              <div className="lg:w-[65px] lg:h-[65px] top-[2687px] left-[478px]">
                <Image src="/free-delivery 1.png"
                alt="freeDeliver Icon"
                width={65}
                height={65}/>
              </div>
              </div>
              

              {/* paragraph Div */}
              <div className=" lg:absolute grid justify-center items-center lg:w-[217px] lg:h-[127px] top-[148px] left-[27px]">
                <div className=" lg:w-[132px] lg:h-[22px] top-[148px] left-[69px] ml-10">
                  <p className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-center lg:text-left">
                  24/7 Support
                  </p>
                </div>

                <div className="lg:w-[217px] lg:h-[85px] top-[190px] left-[27px]">
                  <p className="font-josefin-sans text-[#1A0B5B4D] text-[16px] font-bold leading-[25.6px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div className=" lg:absolute lg:w-[270px] lg:h-[320px] top-[2626px] left-[675px]">
              <div className=" grid justify-center items-center lg:w-[270px] lg:h-[150px]">
              <div className="lg:w-[65px] lg:h-[65px] top-[2687px] left-[478px]">
                <Image src="/cashback 1.png"
                alt="Cashback Icon"
                width={65}
                height={65}/>
              </div>
              </div>
              

              {/* paragraph Div */}
              <div className=" lg:absolute grid justify-center items-center lg:w-[217px] lg:h-[127px] top-[148px] left-[27px]">
                <div className="lg:w-[132px] lg:h-[22px] top-[148px] left-[69px] ml-10">
                  <p className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-center lg:text-left">
                  24/7 Support
                  </p>
                </div>

                <div className="lg:w-[217px] lg:h-[85px] top-[190px] left-[27px]">
                  <p className="font-josefin-sans text-[#1A0B5B4D] text-[16px] font-bold leading-[25.6px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[320px] top-[2626px] left-[971px]">
              <div className=" grid justify-center items-center lg:w-[270px] lg:h-[150px]">
              <div className=" lg:w-[65px] lg:h-[65px] top-[2687px] left-[478px]">
                <Image src="/premium-quality 1.png"
                alt="premium-quality Icon"
                width={65}
                height={65}/>
              </div>
              </div>
              

              {/* paragraph Div */}
              <div className=" lg:absolute grid justify-center items-center lg:w-[217px] lg:h-[127px] top-[148px] left-[27px]">
                <div className=" lg:w-[132px] lg:h-[22px] top-[148px] left-[69px] ml-10">
                  <p className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-center lg:text-left">
                  24/7 Support
                  </p>
                </div>

                <div className="lg:w-[217px] lg:h-[85px] top-[190px] left-[27px]">
                  <p className="font-josefin-sans text-[#1A0B5B4D] text-[16px] font-bold leading-[25.6px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>

            {/* 4th Card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[320px] top-[2626px] left-[1269px]">
              <div className="grid justify-center items-center lg:w-[270px] lg:h-[150px]">
              <div className=" lg:w-[65px] lg:h-[65px] top-[2687px] left-[478px]">
                <Image src="/24-hours-support 1.png"
                alt="24-hours-support Icon"
                width={65}
                height={65}/>
              </div>
              </div>
              

              {/* paragraph Div */}
              <div className=" lg:absolute grid justify-center items-center lg:w-[217px] lg:h-[127px] top-[148px] left-[27px]">
                <div className=" lg:w-[132px] lg:h-[22px] top-[148px] left-[69px] ml-10">
                  <p className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] lg:text-left text-center">
                  24/7 Support
                  </p>
                </div>

                <div className="lg:w-[217px] lg:h-[85px] top-[190px] left-[27px]">
                  <p className="font-josefin-sans text-[#1A0B5B4D] text-[16px] font-bold leading-[25.6px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </>
  );
}
