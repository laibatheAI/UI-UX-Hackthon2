import React from "react";
import Image from "next/image";

const BlogListPage = () => {
  return (
    <div className=" min-h-screen">
      <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px] sm: px-5">
        <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
          <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
          Blog Page
          </h1>
          <p className="lg:gap-6 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato lg:pl-8">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">Blog Page</span>
          </p>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row mx-4 md:mx-8 my-6">
        <div className="flex-3 bg-white p-6 shadow-sm lg:mr-6">
          <div>
            {/* 1st blog */}
            <div className="post mb-6">
              <Image
                src="/bruce-mars-FWVMhUa_wbY-unsplash 2.png"
                alt="Post Image"
                width={870}
                height={453}
                className="w-[870px] h-[453px] object-cover rounded-md"
              />

              <Image
                src="/Group 164.png"
                alt="Post Image"
                width={360}
                height={23}
                className="w-[360px] h-[23px] top-[1016px] left-[371px] my-5"
              />
              <h2 className="text-[30px] font-josefin-sans font-bold text-[#151875] leading-[30px] text-left mt-4">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>

              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[25.6px] text-left mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-[#151875] font-medium mt-2 inline-block hover:underline"
              >
                Read More
                <span className="text-[46px] text-[#F939BF]">.</span>
              </a>
            </div>

            {/* 2nd blog */}
            <div>
              <Image
                src="/bruce-mars-FWVMhUa_wbY-unsplash 3.png"
                alt="Post Image"
                width={870}
                height={453}
                className="w-[870px] h-[453px] object-cover rounded-md"
              />

              <Image
                src="/Group 164.png"
                alt="Post Image"
                width={360}
                height={23}
                className="w-[360px] h-[23px] top-[1016px] left-[371px] my-5"
              />
              <h2 className="text-[30px] font-josefin-sans font-bold text-[#151875] leading-[30px] text-left mt-4">
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[25.6px] text-left mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-[#151875] font-medium mt-2 inline-block hover:underline"
              >
                Read More
                <span className="text-[46px] text-[#F939BF]">.</span>
              </a>
            </div>

            {/* 3rd blog */}
            <div>
              <Image
                src="/bruce-mars-FWVMhUa_wbY-unsplash 4.png"
                alt="Post Image"
                width={870}
                height={453}
                className="w-[870px] h-[453px] object-cover rounded-md"
              />

              <Image
                src="/Group 164.png"
                alt="Post Image"
                width={360}
                height={23}
                className="w-[360px] h-[23px] top-[1016px] left-[371px] my-5"
              />
              <h2 className="text-[30px] font-josefin-sans font-bold text-[#151875] leading-[30px] text-left mt-4">
              Sit nam congue feugiat nisl, mauris amet nisi. 
              </h2>
              <p className="font-lato text-[#8A8FB9] text-[15px] font-normal leading-[25.6px] text-left mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-[#151875] font-medium mt-2 inline-block hover:underline"
              >
                Read More
                <span className="text-[46px] text-[#F939BF]">.</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="flex-1 bg-white p-6 shadow-sm mt-6 lg:mt-0">
          <div className="lg:w-[270px] lg:h-[77px] top-[536px] left-[1299px] mb-10">
          <h3 className="text-[22px] font-semibold font-josefin-sans text-[#151875]">Search</h3>
          <input
            type="text"
            placeholder="Search posts..."
            className="w-[270px] h-[40px] top-[573px] left-[1299px] p-2 border border-[#BDBDD8] rounded-md mt-4"
          />
          </div>

          <div className=" lg:w-[254px] lg:h-[161px] top-[665px] left-[1297px]">
            <div>
            <h1 className="font-josefin-sans text-[22px] leading-[25.78px] text-left text-[#151875]">
            Categories
            </h1>
           </div>
            
            <div className="lg:w-[254px] lg:h-[114px] top-[712px] left-[1297px] grid lg:grid-cols-2 gap-2 mt-5 ">
              <div className="bg-[#F939BF] text-white lg:w-[122px] lg:h-[30px] top-[712px] left-[1297px] pl-2 rounded-sm">
                Hobbies(14)
              </div>
              <div className="text-[#151875] lg:w-[122px] lg:h-[30px] top-[712px] left-[1429px]text-center pl-2">
                Womens(21)
              </div>
              <div className="text-[#151875] lg:w-[122px] lg:h-[30px] top-[745px] left-[1297px]text-center pl-2">
                Womens(21)
              </div>
              <div className="text-[#151875] lg:w-[122px] lg:h-[30px] top-[745px] left-[1429px]text-center pl-2">
                Womens(21)
                </div>
              <div className="text-[#151875] lg:w-[122px] lg:h-[30px] top-[796px] left-[1297px]text-center pl-2">
                Womens(21)
              </div>
              <div className="text-[#151875] lg:w-[122px] lg:h-[30px] top-[712px] left-[1429px]text-center pl-2">
                Womens(21)
              </div>
            </div>
          </div>
          {/* ----------- */}
          <h3 className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-left my-7">Recent Posts</h3>

          <div className=" lg:w-[250px] lg:h-[270px] top-[922px] left-[1297px] ">
          <ul className="grid gap-5 ">
            {/* 1 */}
            <li className="flex">
              <Image src="/Rectangle 126.png"
              alt=""
              width={70}
              height={51}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              It is a long established fact
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
            {/* 2 */}
            <li className="flex">
              <Image src="/Rectangle 126 (1).png"
              alt=""
              width={70}
              height={51}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              It is a long established fact
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
            {/* 3 */}
            <li className="flex">
              <Image src="/Rectangle 126 (2).png"
              alt=""
              width={70}
              height={51}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              It is a long established fact
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
            {/* 4 */}
            <li className="flex">
              <Image src="/Rectangle 126 (3).png"
              alt=""
              width={70}
              height={51}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              It is a long established fact
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
          </ul>
          </div>
          
          {/* -------------- */}
          <h3 className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-left my-7">Sale Product</h3>
          <div className="lg:w-[250px] lg:h-[201px] top-[1288px] left-[1297px] ">
          <ul className="grid gap-3 ">
            {/* 1 */}
            <li className="flex">
              <Image src="/Rectangle 126 (4).png"
              alt=""
              width={70}
              height={57}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              Elit ornare in enim mauris.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
            {/* 2 */}
            <li className="flex">
              <Image src="/Rectangle 126 (5).png"
              alt=""
              width={70}
              height={57}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              Viverra pulvinar et enim.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
            {/* 3 */}
            <li className="flex">
              <Image src="/Rectangle 126 (6).png"
              alt=""
              width={70}
              height={57}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-left my-2 ml-1">
              Mattis varius donec fdsfd
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-left">
              Aug 09 2020
              </span>
              </p>
            </li>
          </ul>
          </div>

          {/* ------------ */}
          <h3 className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-left my-7">Offer product</h3>
          <div className="lg:w-[267px] lg:h-[282px] top-[5585px] left-[1297px] ">
          <ul className="grid grid-cols-2 gap-3">
            {/* 1 */}
            <li className="">
              <Image src="/Mask Group.png"
              alt=""
              width={126}
              height={80}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-center my-2 ml-1">
              Duis lectus est.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-center">
              $12.00 - $15.00
              </span>
              </p>
            </li>
            {/* 2 */}
            <li className="">
              <Image src="/p0OlRAAYXLY.png"
              alt=""
              width={126}
              height={80}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-center my-2 ml-1">
              Duis lectus est.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-center">
              $12.00 - $15.00
              </span>
              </p>
            </li>
            {/* 3 */}
            <li className="">
              <Image src="/p0OlRAAYXLY (1).png"
              alt=""
              width={126}
              height={80}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-center my-2 ml-1">
              Duis lectus est.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-center">
              $12.00 - $15.00
              </span>
              </p>
            </li>
            {/* 4 */}
            <li className="">
              <Image src="/Mask Group (1).png"
              alt=""
              width={126}
              height={80}/>
              <p className="font-josefin-sans text-[#151875] text-[14px] font-normal leading-[14px] text-center my-2 ml-1">
              Duis lectus est.
              <br/>
              <span className="font-lato text-[11px] font-semibold leading-[13.2px] text-[#8A8FB9] text-center">
              $12.00 - $15.00
              </span>
              </p>
            </li>
          </ul>
          </div>

          {/*---------------  */}
          <div className="lg:w-[126px] lg:h-[78px] top-[1904px] left-[1297px] my-10">
          <h3 className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-left ">Follow</h3>
          <Image src="/Group 213.png"
              alt=""
              width={103}
              height={25}
              className="mt-5"/>
          </div>

          {/* ------------ */}
          <h3 className="font-josefin-sans text-[#151875] text-[22px] leading-[25.78px] text-left ">Tags</h3>
          <div className="lg:w-[228px] lg:h-[64px] top-[2060px] left-[1297px] grid grid-cols-3">
            <p className="font-lato text-[15px]  text-[#151875] font-normal leading-[1.6] text-left underline decoration-solid underline-offset-auto decoration-slice">General</p>
            <p className="font-lato text-[15px] text-[#FB2E86] font-normal leading-[1.6] text-left underline decoration-solid underline-offset-auto decoration-slice">Atsanil</p>
            <p className="font-lato text-[15px] text-[#151875] font-normal leading-[1.6] text-left underline decoration-solid underline-offset-auto decoration-slice">Insas.</p>
            <p className="font-lato text-[15px]  text-[#151875] font-normal leading-[1.6] text-left underline decoration-solid underline-offset-auto decoration-slice">Bibsaas</p>
            <p className="font-lato text-[15px]  text-[#151875] font-normal leading-[1.6] text-left underline decoration-solid underline-offset-auto decoration-slice">Nulla.</p>
          </div>
        </aside>        
      </main>

      <footer className="">
      <div className="flex justify-center items-center lg:w-[236px] lg:h-[24px] top-[2763px] ml-[688px] my-10">
          <Image src="/Group 219.png"
          alt=""
          width={236}
          height={24}/>
        </div>

        <div className="flex justify-center items-center lg:w-[904px] lg:h-[93px] top-[2858px] ml-[508px] my-20">
        <Image src="/image 1174 (1).png"
          alt=""
          width={904}
          height={93}/>
        </div>
      </footer>
    </div>
  );
};

export default BlogListPage;
