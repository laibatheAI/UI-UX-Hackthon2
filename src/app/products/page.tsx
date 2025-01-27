import React from "react";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px] sm: px-5">
        <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
          <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
            Product Details
          </h1>
          <p className="lg:gap-2 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-2">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">Product Details</span>
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container px-4 py-2">
        {/* Product Overview */}
        <section className="bg-white p-6 rounded-lg shadow-md lg:ml-[317px]">
          <div className="lg:flex lg:grid-cols-3 gap-8 lg:w-[1170px] lg:h-[509px]">
            {/* Product Images */}
            <div className="flex lg:m-2">
              <div className="lg:grid gap-3 hidden">
                <Image
                  src="/Rectangle 134.png"
                  alt="Thumbnail 1"
                  width={151}
                  height={155}
                  className=""
                />
                <Image
                  src="/Rectangle 136.png"
                  alt="Thumbnail 2"
                  width={151}
                  height={155}
                  className=""
                />
                <Image
                  src="/Rectangle 137.png"
                  alt="Thumbnail 3"
                  width={151}
                  height={155}
                  className=""
                />
              </div>
              <Image
                src="/black bag.png"
                alt="Product Main"
                width={375}
                height={487}
                className="lg:w-[375px] lg:h-[487px] top-[545px] left-[556px] lg:mx-2"
              />
            </div>

            {/* Product Info */}
            <div className="lg:my-10 pl-2">
              <h3 className="font-josefin-sans lg:text-[36px] text-[#0D134E] leading-[42.19px] text-left lg:ml-2 lg:my-4">
                Playwood arm chair
              </h3>
              <div className="flex lg:w-[69px] lg:h-[12px] top-[655px] left-[976px] text-center lg:my-4">
                <Image
                  src="/Group 236.png"
                  alt=""
                  width={69}
                  height={12}
                  className="lg:w-[69px] lg:h-[12px] lg:pl-2 w-[65px] h-[10px]"
                />
                <p className="font-josefin-sans text-[#0D134E] text-[14px] leading-[29px] text-left mt-[-6px] mx-2">
                  (22)
                </p>
              </div>

              <div className="flex gap-2 lg:ml-2 lg:my-4 ">
                <p className="font-josefin-sans lg:text-[16px] text-[#151875] leading-[29px] text-left underline-offset-auto decoration-clone">
                  $32.00
                </p>
                <p className="font-josefin-sans text-[16px] text-[#FB2E86] leading-[29px] text-left line-through underline-offset-auto decoration-skip-ink">
                  $32.00
                </p>
              </div>
              <p className="lg:pl-2 font-josefin-sans text-[16px] text-[#151875] leading-[18.75px] text-left underline-offset-auto decoration-skip-ink">
                Color
              </p>
              <p className="lg:pl-2 lg:my-2 font-josefin-sans text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus
                <br /> porttitor purus, et volutpat sit.
              </p>
              <button className="lg:ml-2 mt-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                Add to Cart
              </button>
                {/*--------*/}
              <div className="lg:pl-2 my-2">
                <p className="font-josefin-sans text-[16px] text-[#151875] leading-[29px] text-left">Categories:</p>
                <p className="font-josefin-sans text-[16px] text-[#151875] leading-[29px] text-left">Tags</p>
                <div className="flex gap-3">
                  <p className="font-josefin-sans text-[16px] text-[#151875] leading-[29px] text-left">Share</p>
                  <div>
                  <Image src="/Group 205 (1).png" alt="" width={56} height={12} className="mt-2"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="mt-8 bg-[#F9F8FE] lg:w-[1920px] lg:h-[649px] lg:py-8">
          <div className="p-6">
            <nav className="lg:flex sm: grid sm: grid-cols-2 lg:gap-40 lg:ml-72 my-10">
              <a
                href="#"
                className="font-josefin-sans lg:text-[24px] text-[#151875] leading-[28.13px] text-left underline decoration-solid decoration-skip-ink hover:text-pink-500"
              >
                Description
              </a>
              <a
                href="#"
                className="font-josefin-sans lg:text-[24px] text-[#151875] leading-[28.13px] text-left decoration-solid decoration-skip-ink hover:text-pink-500"
              >
                Additional Info
              </a>
              <a
                href="#"
                className="font-josefin-sans lg:text-[24px] text-[#151875] leading-[28.13px] text-left decoration-solid decoration-skip-ink hover:text-pink-500"
              >
                Reviews
              </a>
              <a
                href="#"
                className="font-josefin-sans lg:text-[24px] text-[#151875] leading-[28.13px] text-left decoration-solid decoration-skip-ink hover:text-pink-500"
              >
                Video
              </a>
            </nav>
            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] lg:ml-72 text-left decoration-skip-ink">
            Varius tempor.
            </h3>
            <p className="font-josefin-sans lg:text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink lg:my-5 lg:ml-72 ">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed 
            et eleifend habitasse amet. Montes, mauris varius ac est bibendum.<br/> Scelerisque a, risus ac ante.
            Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. 
            Magna eget faucibus<br /> cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, 
            nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>

            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] lg:ml-72 text-left decoration-skip-ink">
            More details
            </h3>
          {/* 1 */}
          <div className="flex lg:ml-72 gap-2 my-5">
            <div>
              <Image src="/Group (1).png" alt="" width={14} height={16} className="mt-1.5 hidden lg:block"/>
            </div>
            <div>
              <p className="font-josefin-sans lg:text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex lg:ml-72 gap-2 my-5">
            <div>
              <Image src="/Group (2).png" alt="" width={14} height={16} className="mt-1.5 hidden lg:block"/>
            </div>
            <div>
              <p className="font-josefin-sans lg:text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex lg:ml-72 gap-2 my-5">
            <div>
              <Image src="/Group (1).png" alt="" width={14} height={16} className="mt-1.5 hidden lg:block"/>
            </div>
            <div>
              <p className="font-josefin-sans lg:text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex lg:ml-72 gap-2 my-5">
            <div>
              <Image src="/Group (1).png" alt="" width={14} height={16} className="mt-1.5 hidden lg:block"/>
            </div>
            <div>
              <p className="font-josefin-sans lg:text-[16px] text-[#A9ACC6] leading-[29px] text-left decoration-skip-ink">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>

          </div>
        </section>

        {/* Related Products */}
        <section className="mt-20 lg:ml-[317px]">
          <h3 className="font-josefin-sans text-[#101750] lg:text-[36px] leading-[42.19px] text-left mb-4">
          Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* 1st cardpic */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/Rectangle 128.png"
                alt="Related Product 1"
                width={270}
                height={340}
                className="w-full rounded-md"
              />

            <div className="flex justify-between mb-3">
              <h4 className="font-josefin-sans text-[17px] leading-[18.75px] text-left text-[#151875] mt-2">
              Mens Fashion Wear
              </h4>
              <div>
              <Image src="/Group 237.png" alt="" width={69} height={12} className="mt-2 "/>
              </div>
              </div>
              <p className="font-josefin-sans text-[14px] leading-[18.75px] text-left text-[#151875]">$43.00</p>
            </div>

            {/* 2nd cardpic */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/Rectangle 133.png"
                alt="Related Product 2"
                width={250}
                height={316}
                className="w-full rounded-md"
              />
              <div className="flex justify-between mb-3">
              <h4 className="font-josefin-sans text-[17px] leading-[18.75px] text-left text-[#151875] mt-2">
              Women’s Fashion
              </h4>
              <div>
              <Image src="/Group 236.png" alt="" width={69} height={12} className="mt-2 "/>
              </div>
              </div>
              <p className="font-josefin-sans text-[14px] leading-[18.75px] text-left text-[#151875]">$67.00</p>
            </div>

            {/* 3rd cardpic */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/Rectangle 130.png"
                alt="Related Product 3"
                width={270}
                height={340}
                className="w-full rounded-md"
              />
              <div className="flex justify-between mb-3">
              <h4 className="font-josefin-sans text-[17px] leading-[18.75px] text-left text-[#151875] mt-2">
              Wolx Dummy Fashion
              </h4>
              <div>
              <Image src="/Group 236.png" alt="" width={69} height={12} className="mt-2 "/>
              </div>
              </div>
              <p className="font-josefin-sans text-[14px] leading-[18.75px] text-left text-[#151875]">$67.00</p>
            </div>

            {/* 4th cardpic */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/Rectangle 131.png"
                alt="Related Product 4"
                width={270}
                height={340}
                className="w-full rounded-md"
              />
              <div className="flex justify-between mb-3">
              <h4 className="font-josefin-sans text-[17px] leading-[18.75px] text-left text-[#151875] mt-2">
              Top Wall Digital Clock
              </h4>
              <div>
              <Image src="/Group 237.png" alt="" width={69} height={12} className="mt-2 "/>
              </div>
              </div>
              <p className="font-josefin-sans text-[14px] leading-[18.75px] text-left text-[#151875]">$51.00</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 mt-6 grid justify-center items-center lg:my-20">
        <Image src="/image 1174.png" alt="" width={904} height={93} className=""/>        
      </footer>
    </div>
  );
};

export default ProductDetails;
