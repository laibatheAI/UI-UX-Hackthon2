import Image from "next/image";


export default function Shop(){
  return(
    <div>
      {/* Header */}
      <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px] sm: px-5">
        <div className="absolute lg:w-[314px] lg:h-[36px] lg:top-[221px] lg:left-[374px]">
          <h1 className=" lg:text-[36px] leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
          Shop Grid Default
          </h1>
          <p className="lg:gap-2 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-2">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">Shop Grid Default</span>
          </p>
        </div>
      </header>

      {/* Body */}
      <section>
        <div className=" lg:absolute lg:w-[1171px] lg:h-[44px] top-[535px] left-[374px] w-[320px] h-[22px] lg:my-0 my-5">
          <div className="grid lg:grid-cols-2 gap-y-2">
            {/* 1st */}
            <div className="grid gap-y-1">
            <div className="lg:w-[389px] lg:h-[22px] ">
              <p className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-left">
              Ecommerce Acceories & Fashion item 
              </p>
            </div>

            <div className="lg:w-[182px] lg:h-[14px] top-[30px]">
              <p className="font-lato lg:text-[12px] text-[10px] text-[#8A8FB9] font-normal leading-[14.4px] text-left">
              About 9,620 results (0.62 seconds)
              </p>
            </div>
            </div>
          
            {/* 2nd */}
            <div className="flex justify-center items-center gap-2">
              {/* per page */}
                <div className="flex justify-center items-center gap-2">
                  <div className="lg:w-[66px] lg:h-[19px] top-[12px] left-[569px]">
                    <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                    Per Page:
                    </p>
                  </div>
                  <div className="lg:w-[55px] lg:h-[25px] w-[35px] h-[18px] top-[35px] left-[643px] border"></div>
                </div>

                {/* sort by */}
                <div className="flex justify-center items-center gap-2">
                  <div className="lg:w-[56px] lg:h-[19px] top-[12px] left-[725px]">
                    <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                      Sort By:
                    </p>
                  </div>
                  <div className="lg:w-[96px] lg:h-[28px] top-[30px] left-[789px] border flex justify-center items-center gap-1">
                    <div className="lg:w-[60px] lg:h-[18px] top-[15px] left-[800px] ">
                      <p className="font-lato lg:text-[12px] text-[7px] text-[#8A8FB9] font-normal leading-[18px] text-left">
                      Best Match
                      </p>
                    </div>
                    <div className="w-[12px] h-[12px] top-[18px] left-[862px] grid justify-center items-center">
                      <Image src="/Group (3).png" alt="" width={8} height={4}/>
                    </div>
                  </div>

                </div>

                {/* view */}
                <div className="flex justify-center items-center gap-2">
                  <div className="lg:w-[40px] lg:h-[19px] top-[12px] left-[909px]">
                    <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                      View:
                    </p>
                  </div>
                  <div>
                    <Image src="/clarity_grid-view-solid.png" alt="" width={12} height={12}/>
                  </div>
                  <div>
                    <Image src="/fa-solid_list.png" alt="" width={12} height={12} />
                  </div>
                  <div className="lg:w-[162px] lg:h-[30px] w-[35px] h-[18px] top-[9px] left-[1009px] border ml-2"></div>
                </div>
            </div>
          </div>
        </div>

          {/* card Div */}
        <div>
          {/* 1st row */}
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-3 lg:my-0 my-20 lg:P-0 p-2">
            {/* 1 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[723px] left-[374px] ">
              {/* img div */}
              <div className=" lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/image 9 (2).png" alt="" width={201} height={201} className="lg:w-[201px] lg:h-[201px] lg:absolute top-[50px] left-[28px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[136px] lg:h-[18px] top-[298px] left-[66px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                    Vel elit euismod
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
            {/* 2 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[723px] left-[697px] ">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#EBF4F3]">
                <Image src="/image 1165.png" alt="" width={196} height={196} className="lg:w-[201px] lg:h-[201px] lg:absolute top-[50px] left-[46px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[280px] lg:h-[18px] top-[298px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Ultricies condimentum imperdiet
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
            {/* 3 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[723px] left-[1020px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/image 1173.png" alt="" width={201} height={201} className="lg:w-[201px] lg:h-[201px] lg:absolute top-[50px] left-[28px] " />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[189px] lg:h-[18px] top-[298px] left-[40px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Vitae suspendisse sed
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
            {/* 4 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[723px] left-[1343px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/10011 1.png" alt="" width={201} height={201} className="lg:w-[201px] lg:h-[201px] lg:absolute top-[50px] left-[28px]" />
              </div>
              {/* text div */}
              <div> 
                <div className="lg:absolute lg:w-[156px] lg:h-[18px] top-[298px] left-[56px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Sed at fermentum
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px]  lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd row */}
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-3 lg:my-0 my-20 lg:P-0 p-2">
            {/* 1 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1167px] left-[374px] ">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/unnamed 1.png" alt="" width={128} height={139} className="lg:w-[128px] lg:h-[139px] lg:absolute top-[86px] left-[76px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[187px] lg:h-[18px] top-[298px] left-[41px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Fusce pellentesque at
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 2 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1167px] left-[697px] ">
              {/* img div */}
              <div className=" lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/1562173100-movado-connect-1562173094 2.png" alt="" width={154} height={158} className="lg:w-[154px] lg:h-[158px] lg:absolute top-[50px] left-[61px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[227px] lg:h-[18px] top-[298px] left-[21px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Vestibulum magna laoreet
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 3 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1167px] left-[1020px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/purepng 1.png" alt="" width={114} height={144} className="lg:w-[114px] lg:h-[144px] lg:absolute top-[50px] left-[73px] " />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[181px] lg:h-[18px] top-[298px] left-[44px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Sollicitudin amet orci
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 4 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1167px] left-[1343px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/image 1164.png" alt="" width={167} height={167} className="lg:w-[167px] lg:h-[167px] lg:absolute top-[50px] left-[47px]" />
              </div>
              {/* text div */}
              <div> 
                <div className="lg:absolute lg:w-[155px] lg:h-[18px] top-[298px] left-[57px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Ultrices mauris sit
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px]  lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd row */}

          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-3 lg:my-0 my-20 lg:P-0 p-2">
            {/* 1 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1611px] left-[374px] ">
              {/* img div */}
              <div className=" lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png" alt="" width={170} height={151} className="lg:w-[170px] lg:h-[151px] lg:absolute top-[74px] left-[50px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[256px] lg:h-[18px] top-[298px] left-[6px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Pellentesque condimentum ac
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 2 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1611px] left-[697px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/cam 2.png" alt="" width={169} height={158} className="lg:w-[169px] lg:h-[158px] lg:absolute top-[67px] left-[55px]" />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[182px] lg:h-[18px] top-[298px] left-[43px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Cras scelerisque velit
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 3 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1611px] left-[1020px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/headphone.png" alt="" width={176} height={176} className="lg:w-[176px] lg:h-[176px] lg:absolute top-[62px] left-[42px] " />
              </div>
              {/* text div */}
              <div>
                <div className="lg:absolute lg:w-[222px] lg:h-[18px] top-[298px] left-[23px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Lectus vulputate faucibus
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px] lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>

            {/* 4 card */}
            <div className="lg:absolute lg:w-[270px] lg:h-[363px] top-[1611px] left-[1343px]">
              {/* img div */}
              <div className="lg:w-[270px] lg:h-[280px] bg-[#F6F7FB]">
                <Image src="/10011 1.png" alt="" width={188} height={188} className="lg:w-[188px] lg:h-[188px] lg:absolute top-[63px] left-[36px]" />
              </div>
              {/* text div */}
              <div> 
                <div className="lg:absolute lg:w-[121px] lg:h-[18px] top-[298px] left-[74px] lg:mt-0 mt-2">
                  <p className="font-josefin-sans text-[#151875] lg:text-[18px] text-[12px] font-bold leading-[18px] text-center">
                  Purus risus, ut
                  </p>
                </div>
                <div>
                  <Image src="/Group 44.png" alt="" width={42} height={10} className="lg:absolute lg:w-[42px] lg:h-[10] top-[324px] left-[114px]  lg:ml-0 ml-[56px]"/>
                </div>

                <div className="lg:absolute lg:w-[96px] lg:h-[14px] top-[349px] left-[87px] lg:flex lg:justify-between">
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#151875] font-normal leading-[14px] text-center">$26.00 </p>
                  <p className="font-josefin-sans lg:text-[14px] text-[10px] text-[#FB2E86] font-normal leading-[14px] text-center line-through">$42.00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:mb-0 mb-10">
          <Image src="/image 1174.png" alt="" width={904} height={93} className="lg:absolute lg:w-[904px] lg:h-[93px] top-[2057px] left-[508px]"/>
        </div>
      </section>
    </div>
  );
}




