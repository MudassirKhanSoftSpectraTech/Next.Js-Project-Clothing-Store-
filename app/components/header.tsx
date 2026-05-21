"use client";

import Link from "next/link";
import { Search, Contact , ShoppingCart  } from "lucide-react";
import { useState, useEffect } from "react";


export default function Header() {
   const [isScroll, setIsScroll] = useState(false);
  
  // Scroll Effect
  useEffect(() => {

    const handleScroll = () => {
      
      // Agar page 50px se zyada scroll ho
      if (window.scrollY > 3) {
        setIsScroll(true);
      } 
      
      // Agar top par ho
      else {
        setIsScroll(false);
      }
    };

    // Event Listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

 
  return (

    <header
      className={`w-full z-50 fixed top-0 transition-all duration-300 
      
      ${
        isScroll
          ? "bg-red-800  text-white shadow-lg"
          : "bg-transparent text-black backdrop-blur-xl"
      }
      
      `}
    >
      <nav className="flex justify-between p-10 font-bold text-[20px] pr-10 items-center ">

        
        
        <h1>
          <Link href="/" className="hover:text-white duration-500  ease-in-out">My Logo</Link>
        </h1>

        <ul className="flex gap-7">
          <li><Link href="/" className="hover:text-white duration-500  ease-in-out">Home</Link></li>
          {/* <li><Link href="/About">About Us</Link></li> */}
          <li><Link href="/collection" className="hover:text-white duration-500  ease-in-out">Collection</Link></li>
          <li><Link href="/contact" className="hover:text-white duration-500  ease-in-out">Contact Us</Link></li>
        </ul>

        <ul className="flex gap-7">
          <li><Link href="/"   className="hover:text-white duration-500  ease-in-out"><ShoppingCart /></Link></li>
          <li><Link href="/" className="hover:text-white duration-500  ease-in-out"></Link></li>
        </ul>
        
      </nav>
    </header>
  );
}