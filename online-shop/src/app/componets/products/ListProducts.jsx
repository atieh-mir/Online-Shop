
import { Headphones,Laptop,Phone } from "../../componets"

export const ListProducts  = ( ) => {

    return(

        <div className="mt-36 text-center">
            <div className="border-y py-2 shadow " id="Phone">Phone</div>
            <Phone />
            <div className="border-y py-2 shadow" id="headphones">Headphones</div>
            <Headphones />
            <div className="border-y py-2 shadow" id="Laptop">Laptop</div>
            <Laptop />
           
        </div>
    )
}