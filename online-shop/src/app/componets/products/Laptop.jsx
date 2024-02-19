


import laptop from '../../../../api/laptop.json';
import { Carts } from '../addToCart';

export const Laptop =() => {


    return(
        <div className='my-4 flex flex-wrap justify-center gap-3 px-[10%]   xl:px-[20%]'>
            {
                laptop.map(({name,id,price,img})=>{
                    return(
                        <div key={id} className='group rounded-xl py-4 hover:scale-105 border border-slate-300 
                        hover:shadow-2xl 
                        hover:shadow-purple-400
                        hover:bg-zinc-100 duration-300 cursor-pointer '>
                            <img  
                            src={img}
                            className='w-60 h-40 rounded-xl object-contain '
                            />
                          <div className='flex  flex-col justify-center items-center space-y-2'>
                          <h6 className='font-medium  group-hover:font-semibold'>{name}</h6>
                            <p className='font-bold'>${price}</p>
                           <Carts
                            name={name}
                            price={price}
                            img={img}
                            id={id}
                           />
                          </div>
                        </div>
                    )
                })
            }
        </div>
    )
}