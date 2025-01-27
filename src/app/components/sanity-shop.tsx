import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import ProductList from "./productList";
import itemType from "@/app/types/typesImport";

export default async function SanityShop() {
  let data: itemType[] = [];

  try {
    // Fetching data with error handling
    data = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      "image": image.asset->url,
      price,
      description,
      discountPercentage,
      "slug" : slug.current,
      stockLevel,
      category
    }`);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  };

  return (
    <div>
      <header>
        <div className="bg-[#F6F5FF] w-full lg:h-[286px] py-4 text-center h-[120px] sm: px-5">
          <div className="absolute lg:w-[314px] lg:h-[36px] lg:top-[221px] lg:left-[374px]">
            <h1 className=" lg:text-[36px] leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
              Shop Grid Default
            </h1>
            <p className="lg:gap-2 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-2">
              Home. <span>Page.</span>
              <span className="text-[#FB2E86]">Shop Grid Default</span>
            </p>
          </div>
        </div>

        <div className=" lg:absolute lg:w-[1171px] lg:h-[44px] top-[535px] left-[374px] w-[320px] h-[22px] px-4 lg:my-0 my-5">
          <div className="grid lg:grid-cols-2 gap-y-2">
            {/* 1st */}
            <div className="grid gap-y-1">
              <div className="lg:w-[389px] lg:h-[22px] ">
                <p className="font-josefin-sans lg:text-[22px] text-[#151875] leading-[25.78px] text-left">
                  Ecommerce Acceories & Fashion item
                </p>
              </div>

              <div className="lg:w-[182px] lg:h-[14px] top-[30px]">
                <p className="font-lato lg:text-[12px] text-[10px] text-[#8A8FB9] font-normal leading-[14.4px] text-left">
                  About 9,620 results (0.62 seconds)
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex justify-center items-center gap-2">
              {/* per page */}
              <div className="flex justify-center items-center gap-2">
                <div className="lg:w-[66px] lg:h-[19px] top-[12px] left-[569px]">
                  <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                    Per Page:
                  </p>
                </div>
                <div className="lg:w-[55px] lg:h-[25px] w-[35px] h-[18px] top-[35px] left-[643px] border"></div>
              </div>

              {/* sort by */}
              <div className="flex justify-center items-center gap-2">
                <div className="lg:w-[56px] lg:h-[19px] top-[12px] left-[725px]">
                  <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                    Sort By:
                  </p>
                </div>
                <div className="lg:w-[96px] lg:h-[28px] top-[30px] left-[789px] border flex justify-center items-center gap-1">
                  <div className="lg:w-[60px] lg:h-[18px] top-[15px] left-[800px] ">
                    <p className="font-lato lg:text-[12px] text-[7px] text-[#8A8FB9] font-normal leading-[18px] text-left">
                      Best Match
                    </p>
                  </div>
                  <div className="w-[12px] h-[12px] top-[18px] left-[862px] grid justify-center items-center">
                    <Image src="/Group (3).png" alt="" width={8} height={4} />
                  </div>
                </div>
              </div>

              {/* view */}
              <div className="flex justify-center items-center gap-2">
                <div className="lg:w-[40px] lg:h-[19px] top-[12px] left-[909px]">
                  <p className="font-lato lg:text-[16px] text-[9px] text-[#3F509E] font-normal leading-[19.2px] text-left">
                    View:
                  </p>
                </div>
                <div>
                  <Image
                    src="/clarity_grid-view-solid.png"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
                <div>
                  <Image
                    src="/fa-solid_list.png"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
                <div className="lg:w-[162px] lg:h-[30px] w-[35px] h-[18px] top-[9px] left-[1009px] border ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>

        <div className="mt-20 lg:mt-60 grid grid-cols-1 lg:grid-cols-3 gap-9 w-full lg:w-[1940px] p-5 lg:px-64">
          {data.length > 0 ? (data.map((item: itemType) => (

            <div key={item._id}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
              <Link href={`slugproduct/${item.slug}`} >
                <div className="bg-[#F6F5FF] p-2 grid justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="w-[250px] h-auto object-cover rounded-lg pt-2"
                  />
                </div>
                <div className="p-4">
                  <h1 className="lg:text-lg font-bold text-center mb-2 text-[#101750]">
                    {item.name}
                  </h1>
                  <div className="flex justify-center items-center gap-4 text-[#101750]">
                    <p className="text-lg font-semibold">${item.price}</p>
                    <p className="text-red-500 text-lg">
                      <del>{item.discountPercentage}%</del>
                    </p>
                  </div>
                </div>
              </Link>
              <div className="text-center my-1 px-4">
                    <ProductList products = {item} />
              </div>
            </div>
            ))
          ) : (
            <p className="text-center text-red-500 font-bold">
              Failed to load products. Please try again later.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
