
import Image from "next/image";
import {logo,cart} from "../../../images"
import Link from "next/link";
import { Navbar } from "../componets";

export const Header = () => {
    return(
        <div className="bg-white space-x-2 md:space-x-5 py-2 h-[82px] md:h-[98px] shadow-md   fixed w-full  flex flex-col  ">
        <div className="flex flex-row-reverse justify-between items-center ">
        <div>
          <Link href="/"><Image src={logo} className="w-24 hidden lg:w-20 md:inline-block  " alt="icon store" /></Link>
         
         </div>
         <div className="w-[100%] px-2 flex  justify-center">
        
           <input type="text"
           placeholder="Search"
           className=" rounded-md p-2 focus:outline-none placeholder:font-thin  border border-purple-200 h-12   w-[60%] md:w-[80%] lg:w-[75%] mr-10 "
           />
           
          
         </div>
         <div className="  flex-row-reverse items-center hidden md:flex">
          <div className=" border-l-2 pl-2">
          <Link href='/login'>
          <button className=" bg-purple-700 text-white border border-purple-700 duration-200  text-center rounded-2xl w-32 h-10  hover:shadow-lg hover:bg-white hover:text-black ">
             Login | Sign Up
          </button>
          </Link>
          </div>
          <div className=" mr-4 ">
          <Link href='/cart'>
          <Image src={cart} alt="user" className="w-28 mr-4 lg:w-20  cursor-pointer   hover:scale-105"/>
          </Link>
          </div>
          
         </div>
        </div>
        <Navbar />
       </div>
    )
}