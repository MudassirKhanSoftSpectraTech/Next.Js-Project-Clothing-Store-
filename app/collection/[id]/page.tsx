'use client'

import Image from "next/image";
import { use } from "react";
import { products } from "../data/products";


// const products = [

//   {
//     id: 1,
//     title: "Woman Collection",
//     image: "/image/1.jpg",
//     price: "$120",
//     desc: "Beautiful fashion collection for women",
//   },

//   {
//     id: 2,
//     title: "Men Shoes",
//     image: "/image/2.jpg",
//     price: "$100",
//     desc: "Stylish shoes for men",
//   },

//   {
//     id: 3,
//     title: "Men T-Shirt",
//     image: "/image/3.jpg",
//     price: "$90",
//     desc: "Premium quality t-shirt",
//   },

//   {
//     id: 4,
//     title: "Nike Shoes",
//     image: "/image/4.jpg",
//     price: "$60",
//     desc: "Comfortable Nike shoes",
//   },

//   {
//     id: 5,
//     title: "Fashion Store",
//     image: "/image/5.jpg",
//     price: "$150",
//     desc: "Latest fashion products",
//   },

//   {
//     id: 6,
//     title: "Shopping Girl",
//     image: "/image/6.jpg",
//     price: "$200",
//     desc: "Trendy shopping collection",
//   },

// ];

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  

  const { id } = use(params);

  

  const productId = Number(id);

  

  const product = products.find(
    (item) => item.id === productId
  );



  if (!product ) {

    return (

      <h1 className="text-4xl text-center mt-20">
        Product Not Found
      </h1>

    );

  }

  return (

    <div className="min-h-screen flex justify-center items-center  pt-50 bg-gray-600 text-white p-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-50 items-center">

        

        <div>

          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="w-full rounded-3xl h-[400] shadow-2xl"
          />

        </div>

        

        <div className="bg-black min-h-[400] p-10 rounded-2xl flex flex-col justify-center items-center">

          <h1 className="text-5xl font-bold mb-5">
            {product.title}
          </h1>

          <p className="text-gray-400 text-left text-lg mb-5">
            {product.desc}
          </p>

          <h2 className="text-4xl text-red-500 font-bold mb-8">
            {product.price}
          </h2>

          <button className="bg-red-600 px-10 py-4  rounded-xl text-xl hover:bg-white hover:text-black cursor-pointer min-w-full duration-300">
            Add To Cart
          </button>

        </div>

      </div>

    </div>

  );

}