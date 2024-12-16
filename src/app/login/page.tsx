

const Login = ()=>{
  return(
    <>
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

    {/* Body section */}
    <section className=" p-4 md:p-8 lg:w-[1920px] lg:h-[900px] w-[320px] h-[600px]">
      <div className="relative grid justify-center items-center shadow-xl w-full max-w-md lg:max-w-[544px] lg:h-[474px] lg:absolute lg:top-[531px] lg:left-[688px]">
        <div className="w-full p-4 lg:w-[433px] lg:h-[374px]">
          {/* Login Heading */}
          <div className=" w-fit mx-auto mb-4 lg:w-[88px] lg:h-[32px]">
            <p className="font-josefin-sans text-xl md:text-2xl lg:text-[32px] leading-[1.1] text-center">
              Login
            </p>
          </div>
          {/* Subtext */}
          <div className=" text-center mb-6 lg:w-[299px] mx-auto">
            <p className="font-lato text-[#9096B2] text-sm md:text-base lg:text-[17px] leading-[20.4px]">
              Please login using account detail below.
            </p>
          </div>

          {/* Input Fields */}
          <div className="mt-6 grid gap-4">
            <input
              type="text"
              placeholder="Email Address"
              className="font-lato text-sm md:text-base text-[#9096B2] w-full h-12 lg:w-[432px] pl-2 lg:h-[52px] border rounded-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="font-lato text-sm md:text-base text-[#9096B2] w-full h-12 lg:w-[432px] pl-2 lg:h-[52px] border rounded-sm"
            />
          </div>

          {/* Forgot Password */}
          <div className="my-4 text-center lg:my-6">
            <p className="font-lato text-[#9096B2] text-sm md:text-base lg:text-[16px]">
              Forgot your password?
            </p>
          </div>

          {/* Sign In Button */}
          <button className="w-full h-12 lg:w-[432px] lg:h-[47px] bg-[#FB2E86] rounded-md text-white font-lato text-base md:text-lg font-semibold">
            Sign In
          </button>

          {/* Create Account */}
          <div className="mt-4 text-center">
            <p className="text-[#9096B2] font-lato text-sm md:text-base lg:text-[17px]">
              Don’t have an Account? <span className="text-[#FB2E86] font-semibold">Create account</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    </div>
    </>
  );
}

export default Login;