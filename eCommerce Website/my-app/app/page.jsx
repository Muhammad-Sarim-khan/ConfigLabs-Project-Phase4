import React from "react";
import Image from "next/image";
import Hello from "./components/page";
import Link from "next/link";
import About from "./about/page";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import ProductCard from "./components/page";

export default function Home() {
  const products = [
    {
      image: "card1.png",
      title: "Product 1",
      description: "This is a description for Product 1.",
      price: "$49.99",
    },
    {
      image: "card2.png",
      title: "Product 2",
      description: "This is a description for Product 2.",
      price: "$59.99",
    },
    {
      image: "card3.jpeg",
      title: "Product 3",
      description: "This is a description for Product 3.",
      price: "$69.99",
    },
    {
      image: "card4.png",
      title: "Product 4",
      description: "This is a description for Product 4.",
      price: "$69.99",
    },
    {
      image: "card5.png",
      title: "Product 5",
      description: "This is a description for Product 5.",
      price: "$69.99",
    },
    {
      image: "card6.jpeg",
      title: "Product 6",
      description: "This is a description for Product 6.",
      price: "$69.99",
    },
    {
      image: "card7.jpeg",
      title: "Product 7",
      description: "This is a description for Product 7.",
      price: "$69.99",
    },
    {
      image: "card8.png",
      title: "Product 8",
      description: "This is a description for Product 8.",
      price: "$69.99",
    },
  ];
  return (
    <>
    <div className="flex ml-5">
    <header className="w-screen bg-white h-14">
      <div className="flex items-center h-30 w-screen">
        <img src="header logo.png" className="w-20 h-20 ml-20"></img>
        <h1 className="text-black pt-2 mb-1 ml-4 text-4xl font-bold">Furniro</h1>
        <div className="flex justify-items-end items-end ml-52 -mt-3">
          <nav className="flex space-x-10 ml-24">
            <Link href="/" className="text-black pt-2  mt-5 text-xl">Home</Link>
            <Link href="/shop" className="text-black pt-2  mt-5 text-xl">Shop</Link>
            <Link href="/about" className="text-black pt-2  mt-5 text-xl">About</Link>
          </nav>
        </div>
        <div className="flex space-x-12 ml-80 mt-6">
          <MdAccountCircle className="text-black text-2xl" />
          <FaSearch className="text-black text-2xl" />
          <FaHeart className="text-black text-2xl" />
          <FaShoppingCart className="text-black text-2xl" />
        </div>
      </div>
    </header>
    </div>
    <div className="relative">
      <img src="background1.jpeg" className="h-[850] w-screen mt-10" ></img>
      <div className="absolute inset-0 flex h-[500] w-[650] bg-amber-200 mt-[80] ml-[750]">
        <div>
          <h1>New Arrival</h1>
          <h1>Discover our new collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button className="bg-amber-900 text-white">BUY NOW</button>
        </div>
      </div>
    </div>
    <div className="flex relative">
      <h1 className="mt-20 w-screen leading-none">Browse The Range</h1>
      <p className="mt-20 w-screen leading-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="absolute space-x-6 flex mt-40 ml-[500]">
        <img src="background2.png" className="w-[200] h-[300] " ></img>
        <img src="background3.png" className="w-[200] h-[300]" ></img>
        <img src="background4.png" className="w-[200] h-[300]" ></img>

        
      </div>
      <div className="flex space-x-44 mt-[500] mr-[450]">
        <h2>Dining</h2>
        <h2>Living</h2>
        <h2>Bedroom</h2>
      </div>
    </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 px-4 mt-20">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>

    <div className="flex items-center justify-center outline outline-yellow-700 outline-2 w-[200px] h-[50px] ml-[600px] mt-20 mb-20">
        <button className="bg-white text-yellow-700">Show More</button>
    </div>
    <div className="flex w-screen h-[600px] bg-amber-100">
      <div className="mt-[200px] ml-[150px] w-[422px] h-[151px]">
        <h1 className=" text-4xl font-bold text-black">50+ Beautiful Rooms Inspiration</h1>
        <p className="mt-4">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="text-bold w-[150px] h-[40px] bg-yellow-600 text-white mt-4">Explore More</button>
      </div>
    </div>

    <div className="ml-[50px]">
      <div className="w-[222px] h-[30px] mt-[50px] ml-[592px]">Share your setup with</div>
      <div className="w-[356px] h-[86px] mt-[50px] ml-[525px] text-4xl">#FurniroFurniture</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[900px] w-screen space-x-2 space-y-2">
        <img src="background8.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background9.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background10.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background11.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background12.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background13.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background14.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background15.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background16.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
      </div>
    </div>

    <div className="flex w-screen h-[500px] mt-[270] border border-slate-500">
      <div className="text-3xl font-bold text-black mt-[60px] ml-[100px]"> Funiro
        <div className="ml-[500px] mt-[50px] flex flex-col space-y-8 text-sm">
          <a href="">links</a>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>

    </div>


    </>
    );
}


  
      
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <h1>
    //           Hello Sarim
    //     </h1>
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
            
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
