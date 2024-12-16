import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div>
        {/* Heading */}
        <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px]">
          <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
            <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-left lg:pl-0 pl-4">
              Contact Us
            </h1>
            <p className=" flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-4 lg:pl-0">
              Home. <span>Page.</span>
              <span className="text-[#FB2E86]">Contact Us</span>
            </p>
          </div>
        </header>

        {/* Body */}
        {/* Section */}
        <section>
          <div className="lg:absolute lg:w-[1190px] lg:h-[490px] top-[531px] left-[375px]">
            {/* Imfo div */}
            <div className="lg:flex">
              {/* ------ */}
              <div className="p-4 lg:p-0">
                <div className="lg:w-[522px] lg:h-[44px] top-[531px] left-[375px]">
                  <h1 className="font-josefin-sans text-[#151875] lg:text-[36px] text-[26px] leading-[48px] text-left decoration-skip-ink">
                    Information About us
                  </h1>
                </div>

                <div className="lg:w-[550px] lg:h-[49px] top-[588px] left-[377px]">
                  <p className="font-lato lg:text-[16px] text-[#8A8FB9] font-semibold lg:leading-[25.6px] text-left decoration-skip-ink">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mattis neque ultrices mattis aliquam, malesuada diam est.
                    Malesuada sem tristique amet erat vitae eget dolor lobortis.
                    Accumsan faucibus vitae lobortis quis bibendum quam.
                  </p>
                </div>

                <div className="lg:w-[103px] lg:h-[25px] top-[707px] left-[377px] mt-20">
                  <Image src="/Group 94.png" alt="" width={123} height={25} />
                </div>
              </div>

              {/* ------ */}

              <div className="lg:w-[522px] lg:h-[44px] top-[531px] left-[1044px] lg:ml-32 p-4 lg:p-0">
                <p className="font-josefin-sans lg:text-[36px] text-[26px] text-[#151875] leading-[48px] tezt-left text-underline-position: from-font text-decoration-skip-ink: none">
                  Contact Way
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-10 lg:w-[489px] lg:h-[155px] top-[601px] left-[1044px]">
                  {/* blu circle */}
                  <div className="flex gap-2">
                    <div className="w-[45px] h-[45px] top-[605px] left-[1044px] bg-[#5726DF] rounded-full ml-1 mt-1"></div>
                    <div className="lg:w-[172px] lg:h-[53px] top-[601px] left-[1104px]">
                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      Tel: 877-67-88-99
                      </p>

                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      E-Mail: shop@store.com
                      </p>
                    </div>
                  </div>

                  {/* pink circle */}
                  <div className="flex  gap-2">
                    <div className="w-[45px] h-[45px] top-[605px] left-[1044px] bg-[#FB2E86] rounded-full ml-1 mt-1"></div>
                    <div className="lg:w-[172px] lg:h-[53px] top-[601px] left-[1104px]">
                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      Support Forum
                      </p>

                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      For over 24hr
                      </p>
                    </div>
                  </div>

                  {/* yellow circle */}
                  <div className="flex  gap-2">
                    <div className="w-[45px] h-[45px] top-[605px] left-[1044px] bg-[#FFB265] rounded-full ml-1 mt-1"></div>
                    <div className="lg:w-[172px] lg:h-[53px] top-[601px] left-[1104px]">
                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      Tel: 877-67-88-99
                      </p>

                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      E-Mail: shop@store.com
                      </p>
                    </div>
                  </div>

                  {/* green circle */}
                  <div className="flex  gap-2">
                    <div className="w-[45px] h-[45px] top-[605px] left-[1044px] bg-[#1BE982] rounded-full ml-1 mt-1"></div>
                    <div className="lg:w-[172px] lg:h-[53px] top-[601px] left-[1104px]">
                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      Support Forum
                      </p>

                      <p className="font-lato lg:text-[15px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left underline-offset-auto decoration-slice">
                      For over 24hr
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* -------get in touch */}
            <div className="lg:w-[522px] lg:h-[44px] top-[908px] left-[375px] lg:mt-44 p-4 lg:p-0">
              <h3 className ="font-josefin-sans text-[#151875] lg:text-[36px] text-[26px] leading-[48px] text-left decoration-skip-ink">
                Get In Touch
              </h3>
            </div>

            <div className="lg:w-[550px] lg:h-[49px] top-[972px] left-[377px] lg:mt-5 p-4 lg:p-0">
              <p className="font-lato lg:text-[16px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left decoration-skip-ink" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Send mail div */}
            <div className="lg:absolute lg:w-[534px] h-[414px] top-[1067px] left-[377px] rounded-[3px] shadow-xl lg:m-0 m-3">
              <div className="lg:w-[534px] lg:h-[337px] top-[1067px] left-[377px] lg:py-0 py-10 lg:px-0 px-2">
              <div className="grid grid-cols-2 gap-4">
                {/* name input */}
                <input type="text" placeholder="Your Name*" className="lg:w-[255px] lg:h-[45px] pl-2 top-[1067px] left-[377px] rounded-[3px] border"/>
                {/* email input */}
                <input type="text" placeholder="Your E-mail" className="lg:w-[255px] lg:h-[45px] pl-2 top-[1067px] left-[377px] rounded-[3px] border"/>
              </div>

              <input type="text" placeholder="Subject*" className="pl-2 my-10 lg:w-[534px] lg:h-[45px] top-[1146px] left-[377px] rounded-[3px] border"/>
              <div className="lg:w-[534px] lg:h-[166px] top-[1238px] left-[377px] rounded-[3px] border">
              <textarea typeof="text" placeholder="Type Your Messege*" className="lg:w-[180.09px] lg:h-[70.09px] p-2 top-[1255px] left-[388px]"/>
              </div>
              </div>
              <div className="lg:w-[157px] lg:h-[44px] top-[1437px] left-[377px] rounded-[3px] bg-[#FB2E86] grid justify-center items-center mt-7 lg:py-0 py-5 lg:mx-0 mx-2">
                <button className="font-josefin-sans lg:text-[16px] text-white leading-[25.6px] text-center underline-offset-auto decoration-clone">
                Send Mail
                </button>
              </div>
            </div>
            {/* Img-div */}
            <div className="lg:absolute lg:w-[723px] lg:h-[692px] w-[320px] h-[220px] top-[876px] left-[927px] grid justify-center items-center">
              <Image src="/Group 124.png" alt="" width={723} height={692}  className="lg:w-[723px] lg:h-[692px] w-[223px] h-[220px]"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
