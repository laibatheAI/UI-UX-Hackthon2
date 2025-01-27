import Image from "next/image";
export default function Body2(){
  return(
    <>
    <div>
      <div className="lg:absolute grid justify-center items-center bg-[#F1F0FF] w-full lg:h-[579px] top-[3081px] left-[-1px] mt-5">
        <div className=" lg:flex lg:w-[1050px] lg:h-[550px] top-[3096px] left-[434px]">
          <div className=" lg:w-[558px] lg:h-[550px] left-[09px]">
            <Image src="/Group 153.png"
            alt="Blue Sofa"
            width={558}
            height={550}/>
          </div>
            {/* text Div */}
          <div className=" lg:p-0 p-3" >
            <div className="lg:relative lg:w-[507px] lg:h-[92px] top-[82px] left-0" >
              <p className="font-josefin-sans text-[#151875] lg:text-[35px] text-[20px] lg:leading-[46.2px] tracking-[0.015px] text-left ">
              Unique Features Of leatest &
              Trending Poducts
              </p>
            </div>

            <div className="bg-[#F52B70] absolute lg:w-[11px] lg:h-[11px] top-[209px] left-[975px] rounded-full"></div>              
            <div className="lg:absolute lg:w-[427px] lg:h-[21px] top-[209px] left-[992px]">
                <p className="font-josefin-sans text-[#ACABC3] lg:text-[15px] text-[10px] font-medium leading-[21.12px] tracking-[0.015em] text-left">
                All frames constructed with hardwood solids and laminates
                </p>
            </div>

            <div className="bg-[#2B2BF5] absolute lg:w-[11px] lg:h-[11px] top-[246px] left-[975px] rounded-full"></div>
            <div className="lg:absolute lg:w-[461px] lg:h-[56px] top-[237px] left-[992px]">
              <p className="font-josefin-sans text-[#ACABC3] lg:text-[16px] text-[10px] leading-[28px] font-medium tracking-[0.015em] text-left">
              Reinforced with double wood dowels, glue, screw - nails corner 
              blocks and machine nails
              </p>
            </div>

            <div className="bg-[#2BF5CC] absolute lg:w-[11px] lg:h-[11px] top-[310px] left-[975px] rounded-full"></div>
            <div className="lg:absolute lg:w-[352px] lg:h-[21px] top-[306px] left-[992px]">
              <p className="font-josefin-sans text-[#ACABC3] lg:text-[16px] text-[10px] font-medium leading-[21.12px] tracking-[0.015em text-left">
              Arms, backs and seats are structurally reinforced
              </p>
            </div>

            {/* btn div */}
            <div className="bg-[#FB2E86] lg:absolute grid justify-center items-center lg:w-[157px] lg:h-[45px] top-[365px] left-[975px] h-[35px] rounded-sm lg:my-0 my-5">
              <button className="font-josefin-sans text-white text-[17px] leading-[19.92px] tracking-[0.02em] text-center">
                Add to Cart
              </button>
            </div>
 
            <div className="lg:absolute lg:w-[113px] lg:h-[14px] top-[371px] left-[1155px]  ">
              <p className="font-josefin-sans text-[#151875] text-[14px] leading-[16.41px] tracking-[0.02em] text-center lg:text-left">
              B&B Italian Sofa 
              </p>
            </div>
            <div className="lg:absolute lg:w-[44px] lg:h-[17px] top-[388px] left-[1155px] ">
              <p className="font-lato text-[#151875] text-[14px] font-normal leading-[16.8px] text-center lg:text-left">
              $32.00
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
    </>
  );
}