import Image from "next/image";

export default function Midbody() {
  return (
    <>
      <div>
        <div className="lg:absolute lg:w-[364px] lg:h-[42px] top-[3792px] left-[778px] lg:my-0 my-10">
          <h1 className="font-josefin-sans text-[#151875] lg:text-[42px] leading-[49.22px] lg:text-left text-[24px] text-center">
            Trending Products
          </h1>
        </div>
        {/* Card Row */}
        {/* 1st Card */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:mx-0 mx-2 lg:p-0 p-2">
          <div className="lg:absolute lg:w-[270px] lg:h-[350px] top-[3873px] left-[377px] ">
            <div className="lg:absolute bg-[#F5F6F8] lg:w-[247px] lg:h-[244px] top-[11px] left-[11px] px-[41px] py-[35px]">
              <Image
                src="/image 1171.png"
                alt=""
                width={171}
                height={171}
                className="lg:w-[171px] lg:h-[171px] top-[41px] left-[41px] "
              />
            </div>

            <div className=" lg:absolute grid justify-center items-center lg:w-[112px] lg:h-[48px] top-[270px] left-[79px] ">
              <p className="font-lato text-[#151875] text-[15px] font-bold leading-[25.6px] text-center">
                Cantilever chair
              </p>
              <div className="flex lg:w-[92px] lg:h-[14px] top-[304px] left-[91px] justify-center items-center gap-2">
                <p className="font-josefin-sans text-[#151875] text-[14px] leading-[14px] font-normal text-center pl-2">
                  $26.00
                </p>
                <p className="font-josefin-sans text-[#1518754D] text-[12px] font-normal leading-[12px] text-center">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* 2nd Card */}
          <div className=" lg:absolute lg:w-[270px] lg:h-[350px] top-[3873px] left-[676px] ">
            <div className="lg:absolute bg-[#F5F6F8] lg:w-[247px] lg:h-[244px] top-[11px] left-[11px] px-[41px] py-[35px]">
              <Image
                src="/image 1170.png"
                alt=""
                width={171}
                height={171}
                className="lg:w-[171px] lg:h-[171px] top-[41px] left-[41px] "
              />
            </div>

            <div className="lg:absolute grid justify-center items-center lg:w-[112px] lg:h-[48px] top-[270px] left-[79px] ">
              <p className="font-lato text-[#151875] text-[15px] font-bold leading-[25.6px] text-center">
                Cantilever chair
              </p>
              <div className="flex lg:w-[92px] lg:h-[14px] top-[304px] left-[91px] justify-center items-center gap-2">
                <p className="font-josefin-sans text-[#151875] text-[14px] leading-[14px] font-normal text-center pl-2">
                  $26.00
                </p>
                <p className="font-josefin-sans text-[#1518754D] text-[12px] font-normal leading-[12px] text-center">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* 3rd Card */}
          <div className=" lg:absolute lg:w-[270px] lg:h-[350px] top-[3873px] left-[975px] ">
            <div className="lg:absolute bg-[#F5F6F8] lg:w-[247px] lg:h-[244px] top-[11px] left-[11px] px-[41px] py-[35px]">
              <Image
                src="/image 31.png"
                alt=""
                width={171}
                height={171}
                className="lg:w-[171px] lg:h-[171px] top-[41px] left-[41px] "
              />
            </div>

            <div className="lg:absolute grid justify-center items-center lg:w-[112px] lg:h-[48px] top-[270px] left-[79px] ">
              <p className="font-lato text-[#151875] text-[15px] font-bold leading-[25.6px] text-center">
                Cantilever chair
              </p>
              <div className="flex lg:w-[92px] lg:h-[14px] top-[304px] left-[91px] justify-center items-center gap-2">
                <p className="font-josefin-sans text-[#151875] text-[14px] leading-[14px] font-normal text-center pl-2">
                  $26.00
                </p>
                <p className="font-josefin-sans text-[#1518754D] text-[12px] font-normal leading-[12px] text-center">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          {/* 4th Card */}
          <div className=" lg:absolute lg:w-[270px] lg:h-[350px] top-[3873px] left-[1274px] ">
            <div className="lg:absolute bg-[#F5F6F8] lg:w-[247px] lg:h-[244px] top-[11px] left-[11px] h-[128px] px-[px] py-[15px]">
              <Image
                src="/image 32 (1).png"
                alt=""
                width={253}
                height={211}
                className="lg:w-[253px] lg:h-[211px] top-[15px] left-[0px] "
              />
            </div>

            <div className=" lg:absolute grid justify-center items-center lg:w-[112px] lg:h-[48px] top-[270px] left-[79px] ">
              <p className="font-lato text-[#151875] text-[15px] font-bold leading-[25.6px] text-center">
                Cantilever chair
              </p>
              <div className="flex lg:w-[92px] lg:h-[14px] top-[304px] left-[91px] justify-center items-center gap-2">
                <p className="font-josefin-sans text-[#151875] text-[14px] leading-[14px] font-normal text-center pl-2">
                  $26.00
                </p>
                <p className="font-josefin-sans text-[#1518754D] text-[12px] font-normal leading-[12px] text-center">
                  $42.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* wide Card */}
        {/* 1st  */}
        <div className=" lg:absolute bg-[#FFF6FB] lg:w-[420px] lg:h-[270px] top-[4262px] left-[375px] lg:mx-0 mx-4 lg:py-0 py-2 lg:mt-0 mt-5">
          {/* text-div */}
          <div className=" lg:w-[269px] lg:h-[56px] top-[4296px] left-[400px] mt-5 ml-5">
            <div className="lg:w-[269px] lg:h-[26px] top-[4296px] left-[400px]">
              <p className="font-josefin-sans text-[#151875] lg:text-[26px] text-[20px] font-semibold leading-[26px] text-center">
                23% off in all products
              </p>
            </div>

            <div className="lg:w-[74px] lg:h-[19px] top-[4333px] left-[400px]">
              <p className="font-lato text-[#FB2E86] text-[16px] font-semibold leading-[19.2px] text-center underline text-decoration-style: solid text-underline-position: from-font text-decoration-skip-ink: none">
                Shop Now
              </p>
            </div>
          </div>

          {/* im Div */}
          <div className="lg:w-[213px] lg:h-[207px] top-[4323px] left-[576px] ml-[205px] mt-[-15px]">
            <Image
              src="/image 1162.png"
              alt=""
              width={213}
              height={207}
              className="lg:w-[213px] lg:h-[207px] top-[4323px] left-[576px]"
            />
          </div>
        </div>

        {/* 2nd */}
        <div className=" lg:absolute bg-[#EEEFFB] lg:w-[420px] lg:h-[270px] top-[4262px] left-[824px] lg:mx-0 mx-4 lg:py-0 py-2 lg:mt-0 mt-5">
          {/* text-div */}
          <div className=" lg:w-[269px] lg:h-[56px] top-[4296px] left-[400px] mt-5 ml-5">
            <div className="lg:w-[269px] lg:h-[26px] top-[4296px] left-[400px]">
              <p className="font-josefin-sans text-[#151875] lg:text-[26px] text-[20px] font-semibold leading-[26px] text-center">
                23% off in all products
              </p>
            </div>

            <div className="lg:w-[74px] lg:h-[19px] top-[4333px] left-[400px]">
              <p className="font-lato text-[#FB2E86] text-[16px] font-semibold leading-[19.2px] text-center underline text-decoration-style: solid text-underline-position: from-font text-decoration-skip-ink: none">
                Shop Now
              </p>
            </div>
          </div>

          {/* im Div */}
          <div className=" lg:w-[312px] lg:h-[173px] top-[4357px] left-[926px] ml-[105px] mt-[16px]">
            <Image
              src="/image 1161.png"
              alt=""
              width={213}
              height={207}
              className="lg:w-[312px] lg:h-[173px] top-[4357px] left-[926px]"
            />
          </div>
        </div>

        {/* 3rd */}
        <div className=" lg:absolute lg:w-[280px] lg:h-[270px] top-[4262px] left-[1270px] grid gap-5 lg:mx-0 mx-4 lg:py-0 py-2 lg:mt-0 mt-5">
          <div className="flex lg:w-[267px] lg:h-[74px] top-[4267px] left-[1268px] gap-2">
            <div className="bg-[#F5F6F8] lg:w-[107px] lg:h-[74px]">
              <Image
                src="/image 30.png"
                alt=""
                width={64}
                height={71}
                className="relative lg:w-[64px] lg:h-[71px] top-[2px] left-[21px]"
              />
            </div>

            <div className="lg:w-[151px] lg:h-[33px] top-[21px] left-[116px] grid justify-center items-center mt-5">
              <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-center ">
                Executive Seat chair
              </p>
              <p className=" font-josefin-sans text-[#151875] text-[12px] font-normal leading-[12px] trext-center">
                $32.00
              </p>
            </div>
          </div>

          <div className="lg:w-[267px] lg:h-[74px] top-[4316px] left-[1268px] ">
            <div className="flex lg:w-[267px] lg:h-[74px] top-[4267px] left-[1268px] gap-2">
              <div className="bg-[#F5F6F8] lg:w-[107px] lg:h-[74px]">
                <Image
                  src="/image 19.png"
                  alt=""
                  width={67}
                  height={67}
                  className="relative lg:w-[64px] lg:h-[71px] top-[3px] left-[19px]"
                />
              </div>

              <div className="lg:w-[151px] lg:h-[33px] top-[21px] left-[116px] grid justify-center items-center mt-5">
                <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-center ">
                  Executive Seat chair
                </p>
                <p className=" font-josefin-sans text-[#151875] text-[12px] font-normal leading-[12px] trext-center">
                  $32.00
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[267px] lg:h-[74px] top-[4455px] left-[1268px] ">
            <div className="flex lg:w-[267px] lg:h-[74px] top-[4267px] left-[1268px] gap-2">
              <div className="bg-[#F5F6F8] lg:w-[107px] lg:h-[74px]">
                <Image
                  src="/image 28.png"
                  alt=""
                  width={64}
                  height={71}
                  className="relative lg:w-[64px] lg:h-[71px] top-[3px] left-[17px]"
                />
              </div>

              <div className="lg:w-[151px] lg:h-[33px] top-[21px] left-[116px] grid justify-center items-center mt-5">
                <p className="font-josefin-sans text-[#151875] text-[16px] leading-[18.75px] text-center ">
                  Executive Seat chair
                </p>
                <p className=" font-josefin-sans text-[#151875] text-[12px] font-normal leading-[12px] trext-center">
                  $32.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ----Discounted Items----- */}

        <div className="lg:absolute lg:w-[277px] lg:h-[42px] lg:top-[4658px] lg:left-[822px] lg:mt-0 mt-5 ">
          <h1 className="font-josefin-sans text-[#151875] lg:text-[42px] text-[20px] leading-[49.22px] text-center lg:text-left underline underline-offset-auto decoration-skip-ink-none">
            Discount Item
          </h1>
        </div>

        {/* *********************** */}

        <div className="lg:absolute grid justify-center items-center lg:w-[1214px] lg:h-[597px] top-[4726px] left-[389px] ">
          <div className="flex justify-around lg:justify-normal lg:w-[360px] lg:h-[22px] top-[4733px] left-[780px] gap-6 lg:ml-[390px] ">
            <p className="font-lato text-[#FB2E86] lg:text-[18px] text-[10px] font-normal leading-[21.6px] text-left underline underline-offset-auto decoration-skip-ink-none">
              Wood Chair
            </p>

            <p className="font-lato text-[#151875] lg:text-[18px] text-[10px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-skip-ink-none">
              Plastic Chair
            </p>

            <p className="font-lato text-[#151875] lg:text-[18px] text-[10px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-skip-ink-none">
              Sofa Colletion
            </p>
          </div>

          <div className="lg:flex ">
            {/* text-div */}
            <div className=" lg:w-[515px] lg:h-[597px] ">
              <div className="lg:w-[509px] lg:h-[46px] lg:absolute top-[140px] left-[1px] gap-0 lg:p-0 p-2">
                <h1 className="font-josefin-sans text-[#151875] lg:text-[35px] text-[20px] leading-[46.2px] tracking-[0.015em] text-left underline underline-offset-auto decoration-skip-ink-none">
                  20% Discount Of All Products
                </h1>
              </div>

              <div className="lg:w-[199px] lg:h-[28px] lg:absolute top-[202px] left-[1px] gap-0 lg:p-0 p-2">
                <p className="font-josefin-sans text-[#FB2E86] lg:text-[20px] text-[16px] leading-[27.72px] tracking-[0.015em] text-left underline-offset-auto decoration-skip-ink-none">
                  Eams Sofa Compact
                </p>
              </div>

              <div className="absolute lg:w-[523px] lg:h-[49px] top-[250px] left-[1px]">
                <p className="font-lato text-[#B7BACB] text-[17px] font-normal leading-[30px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </p>
              </div>

              <div className="flex lg:relative top-[338px] left-[1px] justify-between lg:px-0 px-1">
                <div className="flex lg:relative">
                  <div className="lg:w-[24px] lg:h-[24px] top-[332px] left-[266px] grid justify-center items-center">
                    <Image
                      src="/Vector (3).png"
                      alt=""
                      width={16}
                      height={11}
                      className="lg:w-[16px] lg:h-[11px] top-[6px] left-[1px]"
                    />
                  </div>

                  <div className="lg:w-[199px] lg:h-[30px] top-[327px] left-[23px]">
                    <p className="font-lato text-[#B7BACB] lg:text-[16px] text-[10px] font-normal leading-[30px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                      Material expose like metals
                    </p>
                  </div>
                </div>

                <div className="flex lg:relative ">
                  <div className="lg:w-[24px] lg:h-[24px] top-[332px] left-[266px] grid justify-center items-center">
                    <Image
                      src="/Vector (3).png"
                      alt=""
                      width={16}
                      height={11}
                      className="lg:w-[16px] lg:h-[11px] top-[6px] left-[4px]"
                    />
                  </div>

                  <div className="lg:w-[240px] lg:h-[30px] top-[327px] left-[295px]">
                    <p className="font-lato  text-[#B7BACB]  lg:text-[16px] text-[10px] font-normal leading-[30px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                      Clear lines and geomatric figures
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex lg:relative top-[338px] left-[1px] justify-between lg:px-0 px-1">
                <div className="flex lg:relative">
                  <div className="lg:w-[24px] lg:h-[24px] top-[332px] left-[266px] grid justify-center items-center">
                    <Image
                      src="/Vector (3).png"
                      alt=""
                      width={16}
                      height={11}
                      className="lg:w-[16px] lg:h-[11px] top-[6px] left-[1px]"
                    />
                  </div>

                  <div className="lg:w-[199px] lg:h-[30px] top-[327px] left-[23px]">
                    <p className="font-lato text-[#B7BACB] lg:text-[16px] text-[10px] font-normal leading-[30px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                      Material expose like metals
                    </p>
                  </div>
                </div>

                <div className="flex lg:relative">
                  <div className="lg:w-[24px] lg:h-[24px] top-[332px] left-[266px] grid justify-center items-center">
                    <Image
                      src="/Vector (3).png"
                      alt=""
                      width={16}
                      height={11}
                      className="lg:w-[16px] lg:h-[11px] top-[6px] left-[4px]"
                    />
                  </div>

                  <div className="lg:w-[240px] lg:h-[30px] top-[327px] left-[295px]">
                    <p className="font-lato  text-[#B7BACB] lg:text-[16px] text-[10px] font-normal leading-[30px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                      Clear lines and geomatric figures
                    </p>
                  </div>
                </div>
              </div>

              {/* btn div */}
              <div className=" bg-[#FB2E86] grid justify-center items-center lg:w-[200px] lg:h-[57px] absolute top-[434px] gap-0 rounded-[2px]">
                <button className="font-josefin-sans text-white text-[17px] leading-[19.92px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
                  Shop Now
                </button>
              </div>
            </div>

            {/* img-div */}
            <div className="lg:w-[699px] lg:h-[597px] left-[515px]">
              <Image src="/Group 154.png" alt="" width={699} height={597} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
