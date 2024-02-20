'use client'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "./redux/cartSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBagShopping,faTrashCan,faMinus,faPlus} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

export default function Cart(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { cartTotalQuantity } = useSelector((state) => state.cart);


    useEffect(() => {
        dispatch(getTotals());
      }, [cart, dispatch]);

      const handleAddToCart = (cartItem) => {
        dispatch(addToCart(cartItem));
      };
      const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
      };
      const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    return(
       
         <div className="flex flex-col items-center justify-center  text-left min-h-screen bg-slate-50">
           
            {
               cart.cartItems.length === 0 ? (
                    <div className="flex justify-center flex-col">
                        <FontAwesomeIcon icon={faBagShopping} className="mb-3 "/>
                        <p>Your shopping cart is empty</p>
                    </div>    
                ) :
                (
                    <div className="md:w-1/2  xl:w-1/2  rounded-lg ">
                         <div className="flex flex-row-reverse justify-center items-center ">
                         <p className="text-lg"><span className="text-purple-900">({cartTotalQuantity})</span>Your cart shopping </p>
                        
                         </div>
                       {
                        cart.cartItems &&
                        cart.cartItems.map( cartItem => (
                            <div key={cartItem.id} className=" shadow-md flex flex-col justify-center relative mt-4 px-2 pt-10 w-72 md:w-[100%] rounded-md bg-white">
                                <div>
                                   <p className="absolute top-4 "> {cartItem.name} </p>
                                   <img src={ cartItem.img} className="object-contain w-20 absolute top-1 right-0" />
                                 </div>
                                <div className="">
                                    <div >
                                    <p className="font-medium">${cartItem.price}</p>
                                    
                                    </div>
                                    <div className="flex my-3 items-center">
                                        <button  onClick={() => handleAddToCart(cartItem) }>
                                        <FontAwesomeIcon className="text-xs" icon={faPlus} />
                                        </button>
                                        <div className="mx-3">{cartItem.cartQuantity} </div>
                                        <button  onClick={() => handleDecreaseCart(cartItem) } >
                                        <FontAwesomeIcon className="text-xs" icon={faMinus} />
                                        </button>
                                    </div> 
                                </div>  
 
                             </div>   
                        ))
                       }
                       <div className="flex flex-row-reverse justify-between items-center py-3">
                       <button
                        onClick={() => handleClearCart()}
                        className="bg-red-600 text-white px-4 py-2 rounded-2xl hover:shadow-md hover:bg-red-700 duration-500"
                        >clear Cart</button>
                       
                      
                       <div className="font-semibold">
                       
                       <span className="text-base font-medium" >
                           Total : ${cart.cartTotalAmount}
                        </span>
                       
                       </div>
                       </div>
                       <div className="flex items-center justify-center">
                      <Link href='/next'>
                      <button type="submite" className="text-center bg-purple-700 text-white px-8 py-2 rounded-2xl shadow-md  hover:shadow-xl hover:font-semibold hover:scale-105 duration-500 ">Next</button>
                      </Link>
                      </div>
                       
                          
                    </div>    
                )
            }
         </div>
    )
}