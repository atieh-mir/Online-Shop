


import laptop from '../../../../api/laptop.json';

export const Laptop =() => {


    return(
        <div className='my-4 flex flex-wrap justify-center gap-3 px-[10%]   xl:px-[20%]'>
            {
                laptop.map(({name,id,price,img})=>{
                    return(
                        <div key={id} className='group rounded-xl py-4 hover:shadow-2xl hover:scale-105 border border-slate-300 hover:bg-zinc-100 duration-300 cursor-pointer '>
                            <img  
                            src={img}
                            className='w-60 h-40 rounded-xl object-contain '
                            />
                          <div className='flex  flex-col justify-center items-center space-y-2'>
                          <h6 className='font-medium  group-hover:font-semibold'>{name}</h6>
                            <p className='font-bold'>${price}</p>
                            <button
                            className='bg-purple-700 rounded-lg w-28 h-8  border border-purple-700 text-white text-center duration-300 group-hover:bg-white group-hover:text-black group-hover:font-semibold hover:shadow-lg hover:shadow-purple-300  hover:scale-105'
                            >Add to cart</button>
                          </div>
                        </div>
                    )
                })
            }
        </div>
    )
}