import Image from "next/image"; 
export default function Hero(){
  return(
    <div className="bg-[#F2F0FF] lg:w-[1920px] lg:h-[764px] top-[122px]">
      <div className=" absolute lg:w-[387px] lg:h-[387px] top-[130px] left-[70px]">
        <Image src="/image 32.png"
        alt="Lamp Light"
        width={387}
        height={387}/>
      </div>

      <div className="bg-[#FB2E86] absolute lg:w-[15px] lg:h-[15px] top-[625px] left-[184px] rounded-full"></div>

      {/* text Div */}

      <div className=" absolute lg:w-[644px] lg:h-[248px] top-[325px] left-[375px]">
        {/* pink Text */}
        <div className="lg:w-[230px] lg:h-[28px] top-[325px] left-[378px]">
          <p className="font-lato text-[#FB2E86] text-[16px] font-bold leading-[28px] text-left underline-offset-auto decoration-clone">
          Best Furniture For Your Castle....
          </p>
        </div>

        {/* black Text */}
        <div className="lg:w-[644px] lg:h-[140px] top-[365px] left-[375px]">
          <p className="font-josefin-sans text-[53px] leading-[81.98px] tracking-[0.015em] text-left underline-offset-auto decoration-clone">
          New Furniture Collection
          Trends in 2020
          </p>
        </div>

        {/* lorems text */}
        <div className="lg:w-[559px] lg:h-[56px] grid top-[517px] left-[375px] mt-5">
          <p className="font-lato text-[#8A8FB9] text-[16px] font-bold leading-[28px] text-left underline-offset-auto decoration-clone">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.
          </p>
        </div>

        {/* btnDiv */}
        <div className="grid justify-center items-center bg-[#FB2E86] lg:w-[163px] lg:h-[50px] top-[600px] left-[375px] rounded-sm mt-10">
          <button className="font-josefin-sans text-white text-[17px] leading-[19.92px] tracking-[0.02em] text-left underline-offset-auto decoration-clone">
          Shop Now
          </button>
        </div>
      </div>

      {/* Img-Div */}
      <div className=" absolute lg:w-[706px] lg:h-[689px] top-[161px] left-[1041px]">
        <Image src="/sofa promotional header.png"
        alt="Sofa Image"
        width={706}
        height={689}/>
      </div>

      <div className=" absolute lg:w-[66.07px] lg:h-[14.6px] top-[818.46px] left-[927px]">
        <Image src="/promotional page nav.png"
        alt="page NAvigation"
        width={66.07}
        height={14.6}/>
      </div>
    </div>
  );
}













