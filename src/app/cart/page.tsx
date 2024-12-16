import Image from "next/image";

export default function CartPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px] sm: px-5">
        <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
          <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
            Shopping Curt
          </h1>
          <p className="lg:gap-2 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-2">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">Shopping Curt</span>
          </p>
        </div>
      </header>

      <div className="grid lg:my-52 lg:mx-80">
        <div className="grid grid-cols-3">
          {/* Cart Table */}

          <div className="grid lg:grid-cols-2 lg:gap-[550px] lg:w-[1300px] w-[320px] gap-10">
            {/* items div */}
            <div className="lg:w-[830px] w-[320px] bg-white p-6 rounded shadow b">
              <table className="lg:w-[780px] w-[320px] text-left border-collapse ">
                <thead>
                  <tr className=" flex justify-around gap-20 lg:py-0 py-2">
                    <th className="font-[Josefin Sans] lg:text-[20px] text-[#1D3178] leading-[23.44px] text-left underline-offset-auto decoration-clone py-2 lg:mr-60">
                      Product
                    </th>
                    <th className="hidden lg:block font-[Josefin Sans] lg:text-[20px] text-[#1D3178] leading-[23.44px] text-left underline-offset-auto decoration-clone py-2">
                      Price
                    </th>
                    <th className="hidden lg:block font-[Josefin Sans] lg:text-[20px] text-[#1D3178] leading-[23.44px] text-left underline-offset-auto decoration-clone py-2">
                      Quantity
                    </th>
                    <th className="hidden lg:block font-[Josefin Sans] lg:text-[20px] text-[#1D3178] leading-[23.44px] text-left underline-offset-auto decoration-clone py-2">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* 1st row */}
                  <tr className="hover:bg-gray-100 my-4">
                    {/* ****** */}
                    <td className="lg:flex lg:justify-between ">
                      {/* ----- */}
                      <div>
                        <div className="py-2 flex lg:w-[300px]">
                          <Image
                            src="/Rectangle 34.png"
                            alt="Leather Backpack"
                            width={83}
                            height={87}
                            className="w-[83px] h-[87px] object-cover rounded mr-2"
                          />
                          <span className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-left underline-offset-auto decoration-clone my-2">
                            Ut diam consequat
                            <br />
                            <div>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Color:Brown
                              </p>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Size:XL
                              </p>
                            </div>
                          </span>
                        </div>
                      </div>
                      {/* ---- */}
                      <div className="flex lg:justify-center items-center lg:gap-[95px] gap-10">
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-left">
                          $32.00
                        </p>
                        <p className="py-4">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-16 p-1 border rounded"
                          />
                        </p>
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-right">
                          ‎£219.00
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="lg:w-[718px] h-0 lg:absolute top-[709px] left-[375px] border border-[#E1E1E4] mt-[90px] my-10"></tr>

                  {/* 2nd row */}
                  <tr className="hover:bg-gray-100 my-4">
                    {/* ****** */}
                    <td className="lg:flex lg:justify-between ">
                      {/* ----- */}
                      <div>
                        <div className="py-2 flex lg:w-[300px]">
                          <Image
                            src="/Rectangle 35.png"
                            alt="Leather Backpack"
                            width={83}
                            height={87}
                            className="w-[83px] h-[87px] object-cover rounded mr-2"
                          />
                          <span className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-left underline-offset-auto decoration-clone my-2">
                            Vel faucibus posuere
                            <br />
                            <div>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Color:Brown
                              </p>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Size:XL
                              </p>
                            </div>
                          </span>
                        </div>
                      </div>
                      {/* ---- */}
                      <div className="flex justify-center items-center lg:gap-[95px] gap-10">
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-left">
                          $32.00
                        </p>
                        <p className="py-4">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-16 p-1 border rounded"
                          />
                        </p>
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-right">
                          ‎£219.00
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="lg:w-[718px] h-0 lg:absolute top-[709px] left-[375px] border border-[#E1E1E4] mt-[190px] my-10"></tr>

                  {/* 3rd row */}
                  <tr className="hover:bg-gray-100 my-4">
                    {/* ****** */}
                    <td className="lg:flex lg:justify-between ">
                      {/* ----- */}
                      <div>
                        <div className="py-2 flex lg:w-[300px]">
                          <Image
                            src="/Rectangle 36.png"
                            alt="Leather Backpack"
                            width={83}
                            height={87}
                            className="w-[83px] h-[87px] object-cover rounded mr-2"
                          />
                          <span className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-left underline-offset-auto decoration-clone my-2">
                            Ac vitae vestibulum
                            <br />
                            <div>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Color:Brown
                              </p>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Size:XL
                              </p>
                            </div>
                          </span>
                        </div>
                      </div>
                      {/* ---- */}
                      <div className="flex justify-center items-center lg:gap-[95px] gap-10">
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-left">
                          $32.00
                        </p>
                        <p className="py-4">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-16 p-1 border rounded"
                          />
                        </p>
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-right">
                          ‎£219.00
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="lg:w-[718px] h-0 lg:absolute top-[709px] left-[375px] border border-[#E1E1E4] mt-[295px] my-10"></tr>

                  {/* 4th row */}
                  <tr className="hover:bg-gray-100 my-4">
                    {/* ****** */}
                    <td className="lg:flex lg:justify-between ">
                      {/* ----- */}
                      <div>
                        <div className="py-2 flex lg:w-[300px]">
                          <Image
                            src="/Rectangle 37.png"
                            alt="Leather Backpack"
                            width={83}
                            height={87}
                            className="w-[83px] h-[87px] object-cover rounded mr-2"
                          />
                          <span className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-left underline-offset-auto decoration-clone my-2">
                            Elit massa diam
                            <br />
                            <div>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Color:Brown
                              </p>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Size:XL
                              </p>
                            </div>
                          </span>
                        </div>
                      </div>
                      {/* ---- */}
                      <div className="flex justify-center items-center lg:gap-[95px] gap-10">
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-left">
                          $32.00
                        </p>
                        <p className="py-4">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-16 p-1 border rounded"
                          />
                        </p>
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-right">
                          ‎£219.00
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="lg:w-[718px] h-0 lg:absolute top-[709px] left-[375px] border border-[#E1E1E4] mt-[398px] my-10"></tr>

                  {/* 5th row */}
                  <tr className="hover:bg-gray-100 my-4">
                    {/* ****** */}
                    <td className="lg:flex lg:justify-between ">
                      {/* ----- */}
                      <div>
                        <div className="py-2 flex lg:w-[300px]">
                          <Image
                            src="/Rectangle 38.png"
                            alt="Leather Backpack"
                            width={83}
                            height={87}
                            className="w-[83px] h-[87px] object-cover rounded mr-2"
                          />
                          <span className="font-[Josefin Sans] text-[14px] leading-[16.41px] text-left underline-offset-auto decoration-clone my-2">
                            Proin pharetra elementum
                            <br />
                            <div>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Color:Brown
                              </p>
                              <p className="font-[Josefin Sans] text-[14px] text-[#A1A8C1] leading-[16.41px] text-left underline-offset-auto decoration-clone my-1">
                                Size:XL
                              </p>
                            </div>
                          </span>
                        </div>
                      </div>
                      {/* ---- */}
                      <div className="flex justify-center items-center lg:gap-[95px] gap-10">
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-left">
                          $32.00
                        </p>
                        <p className="py-4">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-16 p-1 border rounded"
                          />
                        </p>
                        <p className="font-josefin text-[14px] text-[#15245E] leading-[16.41px] text-right">
                          ‎£219.00
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="lg:w-[718px] h-0 lg:absolute top-[709px] left-[375px] border border-[#E1E1E4] mt-[505px] my-10"></tr>
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button className="bg-[#FB2E86] font-josefin-sans text-white px-6 py-2 rounded hover:bg-pink-700">
                  Update Curt
                </button>
                <button className="bg-[#FB2E86] font-josefin-sans text-white px-6 py-2 rounded hover:bg-pink-700">
                  Clear Curt
                </button>
              </div>
            </div>

            {/* product calculation */}
            <div className=" grid mx-auto lg:mx-0 lg:pb-0 pb-20 gap-10">
              {/* Cart Totals */}
              <div className=" rounded shadow-sm lg:w-[371px] lg:h-[352px] ">
                <h2 className="font-josefin-sans font-semibold text-[#1D3178] text-[20px] leading-[23.44px] text-center underline-offset-auto decoration-slice">Cart Totals</h2>

                <div className="lg:w-[371px] lg:h-[284px] lg:absolute top-[601px] left-[1174px] bg-[#F4F4FC] lg:p-10 rounded-[3px] lg:ml-[70px] lg:mt-[87px] p-5">

                  <div className="flex justify-between mb-2">
                    <span className="font-lato text-[#1D3178] text-[18px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-slice">Subtotals:</span>
                    <span className="font-lato text-[#1D3178] text-[18px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-slice">‎£219.00</span>
                  </div>
                  {/* line */}
                  <div className="lg:w-[310px] lg:h-0 top-[670px] left-[1200px] border border-[#E8E6F1]"></div>
                  
                  <div className="flex justify-between mt-10">
                    <span className="font-lato text-[#1D3178] lg:text-[18px] text-[12px]  font-normal leading-[21.6px] text-left underline-offset-auto decoration-slice">Total:</span>
                    <span className="font-lato text-[#1D3178] lg:text-[18px] text-[12px] font-normal leading-[21.6px] text-left underline-offset-auto decoration-slice">‎£325.00</span>
                  </div>
                  <div className="lg:w-[310px] lg:h-0 top-[670px] left-[1200px] border border-[#E8E6F1]"></div>

                  <div className="flex gap-1 lg:mt-9 lg:mb-5">
                    <Image src="/uil_check.png" alt="" width={8} height={8} className="w-[8px] h-[8px] mt-0.5"/>
                    <p className="font-lato lg:text-[12px] text-[8px] text-[#8A91AB] font-normal leading-[14.4px] text-left">
                    Shipping & taxes calculated at checkout
                    </p>
                  </div>

                  <button className="lg:w-[312px] lg:h-[40px] font-lato text-[14px] text-white font-bold leading-[16.8px] bg-[#19D16F] text-center px-4 py-2 mt-4 rounded hover:bg-green-600">
                    Proceed to Checkout
                  </button>

                </div>
              </div>

              {/* Calculate Shipping */}
              <div className=" rounded shadow-sm lg:w-[371px] lg:h-[284px] mt-[-22px]">
                <h2 className="font-josefin-sans font-semibold text-[#1D3178] text-[20px] leading-[23.44px] text-center underline-offset-auto decoration-slice">
                  Calculate Shipping
                </h2>
                
                <div className="lg:w-[371px] lg:h-[284px] lg:absolute top-[601px] left-[1174px] bg-[#F4F4FC] lg:p-10 rounded-[3px] lg:ml-[70px] lg:mt-[437px] p-5">
                <div className=" mb-2">
                    <p className="font-josefin-sans lg:text-[14px] text-[#C5CBE3] leading-[16.41px] text-left ">Bangladesh</p>
                    {/* line */}
                    <div className="lg:w-[310px] lg:h-0 top-[670px] left-[1200px] border border-[#E8E6F1] "></div>

                    <p className="font-josefin-sans lg:text-[14px] text-[#C5CBE3] leading-[16.41px] text-left lg:mt-10 mt-5">Mirpur Dhaka - 1200</p>
                    {/* line */}
                    <div className="lg:w-[310px] lg:h-0 top-[670px] left-[1200px] border border-[#E8E6F1]"></div>

                    <p className="font-josefin-sans lg:text-[14px] text-[#C5CBE3] leading-[16.41px] text-left lg:mt-10 mt-5">Postal Code</p>
                    {/* line */}
                    <div className="lg:w-[310px] lg:h-0 top-[670px] left-[1200px] border border-[#E8E6F1] mb-10"></div>

                </div>

                  <button className="lg:w-[312px] lg:h-[40px] font-lato text-[14px] font-bold leading-[16.8px] bg-[#FB2E86] text-white px-4 py-2 rounded hover:bg-pink-700">
                    Calculate Shipping
                  </button>
                </div>

                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
