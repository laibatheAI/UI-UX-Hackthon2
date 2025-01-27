"use client";

import { useState, useEffect } from "react";
import itemType from "../types/typesImport";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<itemType[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("JsonProduct") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        const updatedQuantity = newQuantity < 1 ? 1 : newQuantity; 
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("JsonProduct", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("JsonProduct", JSON.stringify(updatedCart));
  };

  const calculateTotal = (item: itemType) => item.price * item.quantity;

  const grandTotal = cartItems.reduce(
    (total, item) => total + calculateTotal(item),
    0
  );

  return (
    <div className=" w-full h-auto">
      <header className=" bg-[#F6F5FF] w-full lg:h-[286px] py-4 text-center h-[120px] px-5">
        <div className="absolute lg:w-[265px] lg:h-[64px] lg:top-[221px] lg:left-[373px]">
          <h1 className="lg:text-[36px] font-bold leading-[42.19px] text-[#101750] font-josefin-sans text-center ">
            Shopping Curt
          </h1>
          <p className="lg:gap-2 flex lg:text-[15px] text-[10px] lg:font-medium leading-[19.2px] text-center text-black font-lato pl-2">
            Home. <span>Page.</span>
            <span className="text-[#FB2E86]">Shopping Curt</span>
          </p>
        </div>
      </header>

      {cartItems.length > 0 ? (
        <div className="lg:py-10 py-5 px-2">
          {cartItems.map((item, index) => (
            <div
              key={item._id || index}
              className=" shadow-xl lg:w-[75%] rounded-xl p-4 mb-4 mx-auto flex justify-center items-center"
            >
              <div className="">
                <Image
                  src={item.image || item.image}
                  alt={item.name || item.name}
                  width={400}
                  height={400}
                  className="lg:w-40 lg:h-40 object-cover mx-auto px-2"
                />
              </div>
              <div className="px-2 lg:w-[55%] lg:px-10 lg:py-5">
                <div className="lg:flex lg:justify-between items-center lg:mb-2 ">
                  <p className="font-semibold text-[12px] lg:text-2xl text-[#101750] font-josefin-sans">
                    {item.name}
                  </p>
                  <p className="lg:text-[18px] text-[10px] text-gray-600">
                    ${item.price}
                  </p>
                </div>

                <div className="flex lg:justify-between items-center lg:mb-2">
                  <span className="lg:text-[18px] text-gray-600 text-[10px]">
                    Quantity:
                  </span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, Number(e.target.value))
                    }
                    className="w-12 text-center border border-gray-300"
                    min="1"
                  />
                </div>

                <div className="flex lg:justify-between items-center lg:mb-2">
                  <span className="font-semibold">Total:</span>
                  <span className="lg:text-[18px] text-gray-600 text-[10px]">
                    ${calculateTotal(item).toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="bg-[#FB2E86] text-white px-5 py-3 font-josefin-sans font-semibold rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center my-20 ">
          <span className="lg:text-4xl lg:py-40 font-josefin-sans font-bold text-[#101750]">
            Your cart is empty.
          </span>
        </p>
      )}

      <div className=" text-center lg:flex mx-auto justify-around items-center">
        {/* button to back */}
        <div className="bg-[#FB2E86] shadow-md rounded-lg m-2 py-4 px-5 hidden lg:block ">
          <Link href="/shop">
            <button className="text-lg font-josefin-sans font-bold text-white">
              Back To Shop
            </button>
          </Link>
        </div>

        <div className="text-center lg:text-right mt-4 ">
          <h2 className="text-xl font-josefin-sans font-bold text-[#101750]">
            Grand Total:{" "}
            <span className="text-[#FB2E86]">${grandTotal.toFixed(2)}</span>
          </h2>
        </div>
      </div>
      {/* button to back */}
      <div className="bg-[#FB2E86] rounded-lg m-2 py-4 px-3 text-center lg:hidden">
        <Link href="/shop">
          <button className="text-xl font-josefin-sans font-bold text-white">
            Back To Shop
          </button>
        </Link>
      </div>
    </div>
  );
}
