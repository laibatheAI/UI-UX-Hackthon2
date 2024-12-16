import Image from "next/image";

export default function Latestblog() {
  return (
    <>
      <div className=" lg:absolute lg:w-[255px] lg:h-[42px] top-[6770px] left-[833px]">
        <p className="font-josefin-sans text-[#151875] lg:text-[42px] text-[20px] leading-[49.22px] text-center lg:text-left">
          Leatest Blog
        </p>
      </div>

      <div>
        {/* 1st card */}
        <div className="lg:absolute lg:w-[370px] lg:h-[493px] top-[6892px] left-[349px]">
          {/* img div */}
          <div className="lg:w-[370px] lg:h-[255px] rounded-[8px]">
            <Image src="/Frame 3.png" alt="" width={370} height={255} />
          </div>
          {/* text div */}
          <div className="flex gap-10 my-4 ml-3">
            <div className=" flex lg:w-[74px] lg:h-[14px] top-[274px] left-[50px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/Vector (4).png"
                  alt=""
                  width={11.33}
                  height={11.33}
                  className="lg:w-[11.33px] lg:h-[11.33px] top-[274px] left-[14px]"
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                SaberAli
              </p>
            </div>

            <div className="flex lg:w-[97px] lg:h-[14px] top-[274px] left-[132px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/uil_calendar-alt.png"
                  alt=""
                  width={10.08}
                  height={10.08}
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] whitespace-nowrap leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                21 August,2020
              </p>
            </div>
          </div>

          <div className="lg:w-[248px] lg:h-[18px] top-[319px] left-[19px] ml-3">
            <p className="font-josefin-sans text-[#151875] font-bold text-[18px] leading-[21.09px] text-left underline-offset-auto decoration-skip-ink-none">
              Top esssential Trends in 2021
            </p>
          </div>

          <div className="lg:w-[297px] lg:h-[60px] top-[354px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#72718F] text-[15px] font-normal leading-[30px] text-left underline-offset-auto decoration-skip-ink-none">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
          </div>

          <div className="lg:w-[78px] lg:h-[30px] top-[428px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#151875] text-[15px] font-normal leading-[30px] text-left underline decoration-solid underline-offset-auto decoration-skip-ink-none">
              Read More
            </p>
          </div>

          
        </div>

        {/* 2nd Card */}
        <div className="lg:absolute lg:w-[370px] lg:h-[493px] top-[6892px] left-[775px]">
          {/* img div */}
          <div className="lg:w-[370px] lg:h-[255px] rounded-[8px]">
            <Image src="/Frame 4.png" alt="" width={370} height={255} />
          </div>
          {/* text div */}
          <div className="flex gap-10 my-4 ml-3">
            <div className=" flex lg:w-[74px] lg:h-[14px] top-[274px] left-[50px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/Vector (4).png"
                  alt=""
                  width={11.33}
                  height={11.33}
                  className="lg:w-[11.33px] lg:h-[11.33px] top-[274px] left-[14px]"
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                SaberAli
              </p>
            </div>

            <div className="flex lg:w-[97px] lg:h-[14px] top-[274px] left-[132px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/uil_calendar-alt.png"
                  alt=""
                  width={10.08}
                  height={10.08}
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] whitespace-nowrap leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                21 August,2020
              </p>
            </div>
          </div>

          <div className="lg:w-[248px] lg:h-[18px] top-[319px] left-[19px] ml-3">
            <p className="font-josefin-sans text-[#FB2E86] font-bold text-[18px] leading-[21.09px] text-left underline-offset-auto decoration-skip-ink-none">
              Top esssential Trends in 2021
            </p>
          </div>

          <div className="lg:w-[297px] lg:h-[60px] top-[354px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#72718F] text-[15px] font-normal leading-[30px] text-left underline-offset-auto decoration-skip-ink-none">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
          </div>

          <div className="lg:w-[78px] lg:h-[30px] top-[428px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#FB2E86] text-[15px] font-normal leading-[30px] text-left underline decoration-solid underline-offset-auto decoration-skip-ink-none">
              Read More
            </p>
          </div>          
        </div>

        {/* 3rd  Card */}
        <div className="absolute  lg:w-[370px] lg:h-[493px] top-[6892px] left-[1201px]">
          {/* img div */}
          <div className="lg:w-[370px] lg:h-[255px] rounded-[8px]">
            <Image src="/Frame 3 (2).png" alt="" width={370} height={255} />
          </div>
          {/* text div */}
          <div className="flex gap-10 my-4 ml-3">
            <div className=" flex lg:w-[74px] lg:h-[14px] top-[274px] left-[50px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/Vector (4).png"
                  alt=""
                  width={11.33}
                  height={11.33}
                  className="lg:w-[11.33px] lg:h-[11.33px] top-[274px] left-[14px]"
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                SaberAli
              </p>
            </div>

            <div className="flex lg:w-[97px] lg:h-[14px] top-[274px] left-[132px] gap-2">
              <div className="lg:w-[11px] lg:h-[11px] top-[275px] left-[116px] grid justify-center items-center">
                <Image
                  src="/uil_calendar-alt.png"
                  alt=""
                  width={10.08}
                  height={10.08}
                />
              </div>

              <p className="font-josefin-sans text-[#151875] text-[13px] whitespace-nowrap leading-[16.41px] text-left underline-offset-auto decoration-skip-ink-none">
                21 August,2020
              </p>
            </div>
          </div>

          <div className="lg:w-[248px] lg:h-[18px] top-[319px] left-[19px] ml-3">
            <p className="font-josefin-sans text-[#151875] font-bold text-[18px] leading-[21.09px] text-left underline-offset-auto decoration-skip-ink-none">
              Top esssential Trends in 2021
            </p>
          </div>

          <div className="lg:w-[297px] lg:h-[60px] top-[354px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#72718F] text-[15px] font-normal leading-[30px] text-left underline-offset-auto decoration-skip-ink-none">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
          </div>

          <div className="lg:w-[78px] lg:h-[30px] top-[428px] left-[19px] my-2 ml-3">
            <p className="font-lato text-[#151875] text-[15px] font-normal leading-[30px] text-left underline decoration-solid underline-offset-auto decoration-skip-ink-none">
              Read More
            </p>
          </div>          
        </div>
      </div>
    </>
  );
}
