


'use client'

import { useDispatch } from "react-redux"
import { addToCart } from "../cart/redux/cartSlice";



export  const  Carts = ({ name,price, id, img}) => {

    const dispatch = useDispatch();


    return(
        <div>
          <button className="bg-purple-700 rounded-lg w-28 h-8  border border-purple-700 text-white text-center duration-300 group-hover:bg-white group-hover:text-black group-hover:font-semibold hover:shadow-lg hover:shadow-purple-300  hover:scale-105'" 
                             onClick={() => dispatch(addToCart({price,name,id,img}))}> Add To Cart  </button>

        </div>
    )

}