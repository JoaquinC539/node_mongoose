import { Schema, model } from "mongoose";
import { ITopping } from "./ITopping";

const toppingSchema=new Schema<ITopping>({
    name:{
        required:true,
        type:String
    }
})
export const Topping=model<ITopping>("Topping",toppingSchema);