import Image from "next/image"; 

export default function Hero() {
  return (
    <div className="bg-[#F2F0FF] w-full lg:w-[1920px] h-auto lg:h-[764px] lg:pt-[122px]">
      {/* Left Image */}
      <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[387px] lg:h-[387px] mx-auto lg:mx-0 lg:absolute lg:top-[130px] lg:left-[70px]">
        <Image
          src="/image 32.png"
          alt="Lamp Light"
          layout="responsive"
          width={387}
          height={387}
        />
      </div>

      {/* Pink Circle */}
      <div className="bg-[#FB2E86] w-[10px] h-[10px] sm:w-[15px] sm:h-[15px] rounded-full mx-auto lg:absolute lg:top-[625px] lg:left-[184px]"></div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:absolute lg:w-[644px] lg:h-auto top-[325px] lg:top-[325px] lg:left-[375px] mx-auto px-4 lg:px-0">
        {/* Pink Text */}
        <div className="text-[#FB2E86] font-lato text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[28px] mb-2">
          Best Furniture For Your Castle....
        </div>

        {/* Black Heading */}
        <div className="font-josefin-sans text-[28px] sm:text-[40px] lg:text-[53px] leading-[36px] sm:leading-[50px] lg:leading-[81.98px] tracking-[0.015em] mb-4">
          New Furniture Collection <br /> Trends in 2020
        </div>

        {/* Description Text */}
        <div className="text-[#8A8FB9] font-lato text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[28px] mb-6 lg:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </div>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#FB2E86] text-white font-josefin-sans text-[14px] sm:text-[17px] py-2 px-6 lg:px-10 rounded-sm">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[706px] lg:h-[689px] mx-auto mt-6 lg:mt-0 lg:absolute lg:top-[161px] lg:left-[1041px]">
        <Image
          src="/sofa promotional header.png"
          alt="Sofa Image"
          layout="responsive"
          width={706}
          height={689}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-center lg:absolute lg:top-[818.46px] lg:left-[927px] mt-6 lg:mt-0">
        <Image
          src="/promotional page nav.png"
          alt="Page Navigation"
          width={66.07}
          height={14.6}
        />
      </div>
    </div>
  );
}








