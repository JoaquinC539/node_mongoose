import { Schema, model } from "mongoose";
import { IPizza } from "./IPizza";

const pizzaSchema=new Schema<IPizza>({
    name:{
        type:String,
        required:true
    },
    price:{
        type:"Number",
        required:true
    },
    sauce:{
        type:Schema.Types.ObjectId,
        ref:"Sauce",
        required:true
    },
    toppings:[
        {
            type:Schema.Types.ObjectId,
            ref:"Topping"
        }
    ]
})
export const Pizza=model<IPizza>("Pizza",pizzaSchema);