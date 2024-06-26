
import { Schema,model } from "mongoose";
import { ISauce } from "./ISauce";

const sauceSchema=new Schema<ISauce>({
    name:{
        type:String,
        required:true
    }    
});
export const Sauce=model<ISauce>("Sauce",sauceSchema);