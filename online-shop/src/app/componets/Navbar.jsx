"use client"
import Image from "next/image";
import { useState } from "react";
import {logo,menu,cross, cart} from "../../../images";
import Link from "next/link";
export  const Navbar = () => {

    const [open, setOpen] = useState(true);
    const navbar = [
      {id: "#Home" , name: "Home" },
      {id: "#Phone" , name: "Phone" },
      {id: "#Laptop" , name: "Laptop"},
      {id: "#headphones" , name: "Headphones"}
  ]
    return(
       <div className="flex justify-end relative" >
           <div className=" hidden md:flex  items-center  justify-end space-x-6 pr-4  ">
                {
                    navbar.map(({id, name})=>{
                        return(
                            <div className="group " key={id}>
                            <a href={id}>{name}</a>
                            <div className="duration-500 border-b-2 opacity-0 border-purple-700 group-hover:opacity-100 "></div>
                        </div>
                        )
                    })
                }
   
         </div>
        {/*  mobile navbar */}
         <div className="flex  justify-end md:hidden pr-10 absolute -top-12 ">
      <div
        className={` ${
          open ? "h-0" :"h-screen -mr-24 w-60  bg-white transition duration-500 " 
        }  p-5  pt-8 relative duration-300 `}
      >
        <div className="flex felx-col">
      
      
       <Image
         src={open ? menu : cross}
         className={`absolute cursor-pointer left-0 top-4 w-7 duration-500 
          ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
          alt=""/>
      
        <div className={`flex flex-col   ${open && 'w-20  absolute -top-4 -right-18 '}`} >
         <Link href='/'>
         <Image
          src={logo} 
          className={` transition duration-500 w-20 h-20 absolute rounded-full ${
            !open && "rotate-[360deg] right-10 top-0 "
          }`}
          alt="" />
         </Link>

        </div>
        <div className={`${open ? "hidden" : "absolute top-[20%] w-[60%] flex flex-col   text-center space-y-4 "}`}>
        <div className=" flex flex-col">
                {
                    navbar.map(({id, name})=>{
                        return(
                            <div className="group space-y-2 border-b-2 border-purple-100 cursor-pointer" key={id}>
                            <a href={id}>{name}</a>
                            <div className="duration-500 border-b-2 opacity-0 border-purple-700 group-hover:opacity-100 "></div>
                        </div>
                        )
                    })
                }
   
         </div>
         

         <div className="flex flex-col items-center  space-y-2 ">
         <div className="  flex  ">
          <Link href='/cart'>
          <button className=" flex  items-center group border border-purple-700 duration-200   rounded-2xl w-32 h-10  hover:shadow-lg hover:shadow-purple-300  ">
          <Image src={cart} alt="shopping cart" className="w-12 mr-4  border-purple-100 border-r-2  cursor-pointer   group-hover:scale-105 group-hover:border-gray-300 "/>
         { <p className="text-xs group-hover:font-semibold text-left">
            Shopping Cart
          </p>}
          </button>
          </Link>
          </div>
          <div>
          <Link href='/login'>
          <button className=" bg-purple-700 text-white border border-purple-700 duration-200  text-center rounded-2xl w-32 h-10  hover:shadow-lg hover:bg-white hover:shadow-purple-300 hover:text-black ">
             Login | Sign Up
          </button>
          </Link>
          </div>
         </div>
         
        </div>
        </div>
       
       
       
      </div>
      
    </div>
       </div>
  );
};
