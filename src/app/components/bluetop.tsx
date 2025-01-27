
import Image from "next/image";
import Link from "next/link";

export default function Bluetop() {
  return (
    <div className="bg-[#7E33E0] w-full lg:h-14 px-4 py-2 lg:px-16 flex flex-wrap justify-around items-center text-white text-sm">
      {/* Left Section */}
      <div className="flex items-center gap-5 my-1">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Image src="/uil_envelope-alt.png" alt="Mail Icon" width={16} height={16} />
          <p className="font-josefin-sans font-semibold">mhhasanul@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Image src="/bx_bx-phone-call.png" alt="Call Icon" width={16} height={16} />
          <p className="font-josefin-sans font-semibold">
            <Link href="/about">(12345)67890</Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Language */}
        <div className="flex items-center gap-1">
          <p className="font-josefin-sans font-semibold">English</p>
          <Image src="/akar-icons_chevron-down.png" alt="Dropdown Icon" width={16} height={16} />
        </div>

        {/* Currency */}
        <div className="flex items-center gap-1">
          <p className="font-josefin-sans font-semibold">USD</p>
          <Image src="/akar-icons_chevron-down.png" alt="Dropdown Icon" width={16} height={16} />
        </div>

        {/* Login */}
        <div className="flex items-center gap-1">
          <Link href="/login" className="font-josefin-sans font-semibold">
            Login
          </Link>
          <Image src="/carbon_user.png" alt="User Icon" width={16} height={16} />
        </div>

        {/* Wishlist */}
        <div className="flex items-center gap-1">
          <p className="font-josefin-sans font-semibold">Wishlist</p>
          <Image src="/uil_heart-alt.png" alt="Heart Icon" width={16} height={16} />
        </div>

        {/* Cart */}
        <Link href="/cart" className="w-[24px] h-[24px] ">
          <Image src="/fluent_cart-24-regular.png" alt="Cart Icon" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
