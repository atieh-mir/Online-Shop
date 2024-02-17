
import { Headphones,Laptop,Phone } from "../../componets"

export const ListProducts  = ( ) => {

    return(

        <div className="mt-36 text-center">
            <div className="border-y py-2  shadow-purple-100 shadow-md bg-purple-50" id="Phone">Phone</div>
            <Phone />
            <div className="border-y py-2 shadow-purple-100 shadow-md bg-purple-50" id="headphones">Headphones</div>
            <Headphones />
            <div className="border-y py-2 shadow-purple-100 shadow-md  bg-purple-50" id="Laptop">Laptop</div>
            <Laptop />
           
        </div>
    )
}