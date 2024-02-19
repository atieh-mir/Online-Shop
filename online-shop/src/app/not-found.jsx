import Image from "next/image";
import { error} from "../../images"
import Link from "next/link";

export default function NotFound(){

    return(
        <div className="h-screen flex items-center justify-center ">
           <div className="flex flex-col items-center justify-center container ">
           <Image src={error} 
           className="lg:w-1/3 md:w-1/2 mt-6 "
           />
           <Link href='/'>
           <button className="my-10  bg-purple-500 text-white border border-purple-500  py-2 lg:px-10 px-6 rounded-xl
           font-semibold
           shadow-md  duration-700  hover:scale-110 hover:bg-white hover:text-purple-500 hover:shadow-xl">
           Go Home
           </button>
           </Link>
           </div>
        </div>
    )
}