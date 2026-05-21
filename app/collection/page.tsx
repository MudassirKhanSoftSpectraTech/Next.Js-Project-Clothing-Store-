import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

// Products import kiye
// import { products } from "./[id]/products";
// import { products } from "
import { products } from "./data/products";

export default function Collection() {

  return (

    <div className="min-h-screen pb-30 pt-30 bg-gradient-to-r from-purple-400 to-pink-400 p-10">

     

      <h1 className="text-4xl bg-black p-10 mx-auto w-fit mt-20 font-extrabold text-center rounded-2xl shadow-xl hover:scale-110 transition-all duration-500 ease-in-out text-white mb-20">

        Our Collection

      </h1>

    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-black text-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out"
          >

          

            <div className="overflow-hidden">

              <Link href={`/collection/${product.id}`}>

                <Image
                  className="w-full h-[250px] object-cover hover:scale-110 duration-500 cursor-pointer"
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />

              </Link>

            </div>

           

            <div className="p-5">

            

              <h2 className="text-2xl font-bold mb-2">

                {product.title}

              </h2>

              

              <p className="text-gray-400 mb-6">

                {product.desc}

              </p>

            

              <div className="flex justify-between items-center mb-6">

                <span className="text-2xl font-bold text-red-500">

                  {product.price}

                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">

                  In Stock

                </span>

              </div>

              

              <div className="flex gap-4">


                <button className="flex-1 bg-white cursor-pointer text-black rounded-xl py-3 flex items-center justify-center font-bold gap-3 hover:bg-red-600 hover:text-white duration-300">

                  <ShoppingCart size={22} />

                  Add To Cart

                </button>

                

                <button className="cursor-pointer bg-red-600 p-4 rounded-xl hover:bg-white hover:text-black duration-300">

                  <Trash2 size={22} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}