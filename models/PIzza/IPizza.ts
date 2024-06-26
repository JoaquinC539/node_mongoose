import { Document, Types } from "mongoose";
import { ISauce } from "../Sauce/ISauce";
import { ITopping } from "../Topping/ITopping";

export interface IPizza extends Document{
    name:string;
    sauce:ISauce;
    price:number
    toppings:Types.Array<ITopping>
}