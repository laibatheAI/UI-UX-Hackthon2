import Image from "next/image";
export default function Bluetop() {
  return (
    <>
      <div className="bg-[#7E33E0] lg:w-[1920px] lg:h-[44px]">
        {/* right content */}
        <div className="absolute lg:w-[16px] lg:h-[16px] top-[14px] left-[377px]">
          <Image
            src="/uil_envelope-alt.png"
            alt="mailIcon"
            width={16}
            height={16}
          />
        </div>

        <div className="relative lg:w-[171px] lg:h-[16px] top-[13px] left-[403px]">
          <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left underline-offset-auto decoration-clone">
            mhhasanul@gmail.com
          </p>
        </div>

        <div className=" absolute lg:w-[16px] lgh-[16px] left-[622px] top-[14px]">
          <Image
            src="/bx_bx-phone-call.png"
            alt="callIcon"
            width={16}
            height={16}
          />
        </div>

        <div className="absolute lg:w-[97px] lg:h-[16px] top-[14px] left-[650px]">
          <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left underline-offset-auto decoration-clone">
            (12345)67890
          </p>
        </div>

        {/* left content */}
        <div className="absolute lg:w-[54px] lg:h-[16px] top-[14px] left-[1192px]">
            <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left mt-1 underline-offset-auto decoration-clone">
            English
            </p>
          </div>
        <div className="absolute flex justify-between items-center lg:w-[301px] lg:h-[24px] top-[9px] left-[1247px]">

          <Image
            src="/akar-icons_chevron-down.png"
            alt="downArrow"
            width={16}
            height={16}
          />
          {/* 1 */}
          <div className="flex">
            <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left mt-2 underline-offset-auto decoration-clone">
              USD
            </p>

            <div className="mt-1.5">
              <Image
                src="/akar-icons_chevron-down.png"
                alt="downArrow"
                width={16}
                height={16}
              />
            </div>
          </div>

          {/* 2 */}

          <div className="flex">
            <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left mt-2 underline-offset-auto decoration-clone">
              Login
            </p>

            <div className="mt-1.5">
              <Image
                src="/carbon_user.png"
                alt="UserIcon"
                width={16}
                height={16}
              />
            </div>
          </div>

            {/* 3 */}
          <div className="flex">
          <p className="font-josefin-sans text-white text-base font-semibold leading-4 text-left mt-2 underline-offset-auto decoration-clone">
            Wishlist
          </p>

          <div className="mt-1.5">
          <Image
            src="/uil_heart-alt.png"
            alt="HeartIcon"
            width={16}
            height={16}
          />
          </div>
          </div>

            {/* 4 */}
          <Image
            src="/fluent_cart-24-regular.png"
            alt="CartIcon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
}
