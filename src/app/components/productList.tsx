

// 'use client';

// import itemType from "../types/typesImport";

// export default function ProductList({ products }: { products: itemType }) {

//   const handleClick = (product: itemType) => {
//     console.log("cart:", product);
//     const jsonProduct = JSON.parse(localStorage.getItem("JsonProduct") || "[]");
//     jsonProduct.push(product); 

//     if (jsonProduct[product._id]) { 
//       jsonProduct[product._id] =  {...jsonProduct[product._id] , quantity : jsonProduct[product._id].quantity + 1}
//     }
//     else{
//       jsonProduct[product._id] = {...product, quantity : 1};
//     }

//     localStorage.setItem("JsonProduct", JSON.stringify(jsonProduct));

//   };

//   return (
//     <div>
//       <div className="bg-[#FB2E86] rounded-md p-4 shadow-lg">
//         <button
//           onClick={() => handleClick(products)}
//           className="text-white font-josefin-sans font-semibold px-2"
//         >
//           ADD TO CART
//         </button>
//       </div>
//     </div>
//   );
// }





// 'use client';

// import itemType from "../types/typesImport";

// export default function ProductList({ products }: { products: itemType }) {
//   const handleClick = (product: itemType) => {
//     console.log("Adding to cart:", product);

//     const jsonProduct = JSON.parse(localStorage.getItem("JsonProduct") || "[]");

//     const existingProductIndex = jsonProduct.findIndex(
//       (item: itemType) => item._id === product._id
//     );

//     if (existingProductIndex > -1) {
//       // Update quantity for existing product
//       jsonProduct[existingProductIndex].quantity += 1;
//     } else {
//       // Add new product with quantity 1
//       jsonProduct.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("JsonProduct", JSON.stringify(jsonProduct));
//     console.log("Updated Cart:", jsonProduct);
//   };

//   return (
//     <div>
//       <div className="bg-[#FB2E86] rounded-md p-4 shadow-lg">
//         <button
//           onClick={() => handleClick(products)}
//           className="text-white font-josefin-sans font-semibold px-2"
//         >
//           ADD TO CART
//         </button>
//       </div>
//     </div>
//   );
// }


// CHAT GPT KA UPDATE CODE

'use client';

import itemType from "../types/typesImport";

export default function ProductList({ products }: { products: itemType }) {
  const handleClick = (product: itemType) => {
    console.log("Adding to cart:", product);

    const jsonProduct = JSON.parse(localStorage.getItem("JsonProduct") || "[]");

    const existingProductIndex = jsonProduct.findIndex(
      (item: itemType) => item._id === product._id
    );

    if (existingProductIndex > -1) {
      jsonProduct[existingProductIndex].quantity += 1;
    } else {
      jsonProduct.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("JsonProduct", JSON.stringify(jsonProduct));

    console.log("Updated Cart:", jsonProduct);

    alert(`The item "${product.name}" has been added to your cart!`);
  };

  return (
    <div>
      <div className="bg-[#FB2E86] rounded-md p-4 shadow-lg">
        <button
          onClick={() => handleClick(products)}
          className="text-white font-josefin-sans font-semibold px-2"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}