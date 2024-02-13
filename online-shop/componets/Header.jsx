

import Image from "next/image";
import icon from "../images/3.png"
import basket from "../images/2.png"
import Link from "next/link";

export const Navbar = () => {

    const navbar = [
        {id: 0 , name: "Home" , pathId:"#up"},
        {id: 1 , name: "Phone" , pathId:"#phone"},
        {id: 2 , name: "Laptop", pathId:"#laptop"},
        {id: 3 , name: "Headphones" , pathId:"#headphones"}
    ]
    return(
        <div className="bg-white space-x-2 md:space-x-5 py-2 h-20 md:h-[94px]  xl:h-[98px]  shadow-md fixed w-full ">
        <div className="flex flex-row-reverse justify-between items-center ">
        <div>
          <Link href="/"><Image src={icon} className="w-24 hidden lg:w-20 md:inline-block " alt="icon store" /></Link>
         </div>
         <div className="w-[100%] px-2 flex justify-center">
           <input type="text"
           placeholder="Search"
           className=" rounded-md p-2 focus:outline-none placeholder:font-thin  border border-purple-200 h-12 w-[100%] md:w-[90%] lg:w-[75%] "
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
          <Link href='/card'>
          <Image src={basket} alt="user" className="w-28 mr-4 lg:w-20  cursor-pointer   hover:scale-105"/>
          </Link>
          </div>
         </div>
        </div>
   
        <div class=" hidden lg:flex  items-center  space-x-6    ">
                {
                    navbar.map(({id, name, pathId})=>{
                        return(
                            <div class="group " id={id}>
                            <a href={pathId}>{name}</a>
                            <div class="duration-500 border-b-2 opacity-0 border-purple-700 group-hover:opacity-100 "></div>
                        </div>
                        )
                    })
                }
   
         </div>
       </div>
    )
}