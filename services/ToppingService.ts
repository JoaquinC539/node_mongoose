import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IService } from "../interfaces/IService";
import { ITopping } from "../models/Topping/ITopping";
import { Topping } from "../models/Topping/Topping";

export class ToppingService implements IService<ITopping>{
    index(req: Request): Promise<ITopping[]> {
        return Topping.find({}).exec();
    }
    getById(id: string): Promise<ITopping | null> {
        return Topping.findById(id).exec();
    }
    post(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<ITopping | null> {
        const newTopping:ITopping=new Topping({
            name:req.body["name"]
        })
        return newTopping.save();
    }
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<ITopping | null> {
        return Topping.findByIdAndUpdate(
            req.params["id"],
            {
                name:req.body["name"]
            },
            {
                returnDocument:"after"
            }).exec();
    }
    delete(id: string): Promise<any> {        
        return Topping.findByIdAndDelete(id).exec();
    }
    
}