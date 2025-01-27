import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#F6F5FF] lg:w-[1920px] lg:h-[286px] py-4 text-center w-[320px] h-[120px]">
        <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
          <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
            My Account
          </h1>
          <p className=" flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-4 lg:pl-9">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">My Account</span>
          </p>
        </div>
      </header>

      {/* Body Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="lg:absolute lg:w-[552px] lg:h-[409px] top-[530px] left-[375px] rounded-md bg-[#2B3CAB]"></div>

        <div className="lg:absolute lg:w-[555px] lg:h-[390px] top-[530px] left-[390px] md:w-1/2">
          <Image
            src="/Rectangle 56.png"
            alt="About Us Image"
            width={555}
            height={390}
            className="lg:w-[555px] lg:h-[390px] top-[530px] left-[390px]  rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="lg:w-[522px] lg:h-[96px] top-[571px] left-[975px] lg:absolute ">
            <h2 className="font-josefin-sans lg:text-[36px] text-[20px] lg:leading-[48px] text-left text-[#151875] font-bold ">
              Know About Our Ecomerce Business, History
            </h2>
          </div>

          <div className="lg:w-[550px] lg:h-[490px] top-[681px] left-[975px] lg:absolute ">
            <p className="font-lato lg:text-[16px] text-[#8A8FB9] font-semibold leading-[25.6px] text-left custom-text-decoration mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
          </div>

          <div className="lg:absolute lg:w-[145px] lg:h-[44px] top-[830px] left-[975px] rounded-[3px] bg-[#FB2E86]">
            <button className="font-lato lg:text-[18px] font-semibold leading-[25.6px] text-center custom-text-decoration text-white lg:px-4 py-2 px-[100px] rounded hover:bg-pink-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="lg:absolute lg:w-[264px] lg:h-[26px] top-[1080px] left-[827px]">
          <h2 className="font-josefin-sans lg:text-[42px] text-black leading-[25.6px] lg:text-left text-3xl text-center custom-text-style mb-8">
            Our Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className=" grid justify-center items-center gap-2 lg:absolute lg:w-[270px] lg:h-[320px] top-[1173px] left-[375px] p-6 rounded-lg shadow text-center">

            <div className=" w-[65px] h-[65px] top-[1235px] left-[478px] p-[11.07px_0px] mx-20 ">
            <Image
              src="/free-delivery 1.png"
              alt="Free Delivery"
              width={65}
              height={65}
              className="w-[65px] h-[65px] top-[11.07px] mx-auto mb-4"
            />
            </div>
            
            <div className="lg:w-[217px] lg:h-[127px] top-[1321px] left-[402px]">

            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-center font-semibold text-lg mb-2">Free Delivery</h3>
            <p className="font-lato lg:text-[16px] text-[#1A0B5B4D] lg:font-bold leading-[25.6px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p> 
            </div>
            
          </div>

          {/* Feature 2 */}
          <div className=" grid justify-center items-center gap-2 lg:absolute lg:w-[270px] lg:h-[320px] top-[1173px] left-[673px] p-6 rounded-lg shadow text-center">

            <div className="w-[65px] h-[65px] top-[1235px] left-[478px] p-[11.07px_0px] mx-20 ">
            <Image
              src="/cashback 1.png"
              alt="100% Cash Back"
              width={65}
              height={65}
              className="w-[65px] h-[65px] top-[1235px] mx-auto mb-4"
            />
            </div>
            
            <div className="lg:w-[217px] lg:h-[127px] top-[1321px] left-[402px]">

            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-center font-semibold text-lg mb-2">
            100% Cash Back
            </h3>
            <p className="font-lato lg:text-[16px] text-[#1A0B5B4D] lg:font-bold leading-[25.6px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p> 
            </div>
            
          </div>

          {/* Feature 3 */}
          <div className=" grid justify-center items-center gap-2 lg:absolute lg:w-[270px] lg:h-[320px] top-[1173px] left-[971px] p-6 rounded-lg shadow text-center">

            <div className="w-[65px] h-[65px] top-[1235px] left-[478px] p-[11.07px_0px] mx-20 ">
            <Image
              src="/premium-quality 1.png"
              alt="Quality Product"
              width={65}
              height={65}
              className="w-[65px] h-[65px] top-[1235px] mx-auto mb-4"
            />
            </div>
            
            <div className="lg:w-[217px] lg:h-[127px] top-[1321px] left-[402px]">

            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-center font-semibold text-lg mb-2">
            Quality Product
            </h3>
            <p className="font-lato lg:text-[16px] text-[#1A0B5B4D] lg:font-bold leading-[25.6px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p> 
            </div>
            
          </div>

          {/* Feature 4 */}
          <div className=" grid justify-center items-center gap-2 lg:absolute lg:w-[270px] lg:h-[320px] top-[1173px] left-[1273px] p-6 rounded-lg shadow text-center">

            <div className=" w-[65px] h-[65px] top-[1235px] left-[478px] p-[11.07px_0px] mx-20 ">
            <Image
              src="/24-hours-support 1.png"
              alt="24/7 Support"
              width={65}
              height={65}
              className="w-[65px] h-[65px] top-[1235px] mx-auto mb-4"
            />
            </div>
            
            <div className="lg:w-[217px] lg:h-[127px] top-[1321px] left-[402px]">

            <h3 className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-center font-semibold text-lg mb-2">
            24/7 Support
            </h3>
            <p className="font-lato lg:text-[16px] text-[#1A0B5B4D] lg:font-bold leading-[25.6px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p> 
            </div>
            
          </div>

        </div>
      </section>

      {/* Our Client Say Section */}
      <section className="lg:w-[1920px] lg:h-[503px] top-[1626px] bg-[#FBFBFF] lg:absolute text-center">

          <div className="lg:w-[304px] lg:h-[26px] top-[1697px] left-[809px] lg:mx-[809px] lg:my-10">
          <h2 className="font-josefin-sans lg:text-[42px] leading-[25.6px] text-center custom-text-style text-3xl font-bold mb-8">Our Client Say!</h2>
          </div>

        <div className="lg:w-[689px] lg:h-[265px] top-[1787px] left-[616px] p-6 rounded-lg shadow inline-block justify-center items-center">

          {/* img div */}
          <div className="lg:w-[191px] lg:h-[64px] left-[249px] grid justify-center items-center lg:mx-[230px] ">
            <div className="flex justify-center gap-2">

            <div className="w-[55px] h-[55px] top-[9px] left-[249px] mt-1">
                <Image src="/OhKElOkQ3RE.png" alt="" width={55} height={55}/>
              </div>

            <div className="w-[55px] h-[55px] top-[9px] left-[317px]">
                <Image src="/GH-mSApoKO0.png" alt="" width={55} height={55}/>
              </div>

              <div className="w-[55px] h-[55px] top-[9px] left-[385px] mt-1">
                <Image src="/RukI4qZGlQs.png" alt="" width={55} height={55}/>
              </div>

              
          </div>
          </div>


          
          <h3 className="font-lato lg:text-[22px] text-[#151875] leading-[25.6px] text-center custom-text-style font-semibold text-lg mb-2">
          Selina Gomez
          </h3>
          <p className="font-lato text-[#8A8FB9] text-[10px] font-semibold leading-[25.6px] text-center">
            Ceo At Webecy Digital
          </p>
          <p className="font-lato text-[#8A8FB9] text-[16px] font-bold leading-[25.6px] text-center custom-text-style max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Non duis ultrices quam vel dui sollicitudin aliquet id arcu. 
          Nam vitae a enim nunc, sed sapien egestas ac nam. 
          Tristique ultrices dolor aliquam lacus volutpat praesent.
          </p>
        </div>
      </section>
    </div>
  );
}
