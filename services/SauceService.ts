import { IService } from "../interfaces/IService";
import { Sauce } from "../models/Sauce/Sauce";
import { Request } from "express";
import { ISauce } from "../models/Sauce/ISauce";

export class SauceService implements IService<ISauce > {
    
    public constructor(){}
    
    public index=(req:Request):Promise<Array<ISauce>>=> {
        return Sauce.find({}).exec();
        
    }
    public getById(id:string):Promise<ISauce|null>{
        return Sauce.findById(id).exec();
    }
    public post(req:Request):Promise<ISauce>{
        const newSauce=new Sauce({
            name:req.body["name"]
        })
        return newSauce.save()
    }
    public update(req:Request):Promise<ISauce|null>{
        const sauceUpdate={
            name:req.body["name"]
        }
        return Sauce.findByIdAndUpdate(req.params.id,sauceUpdate,{returnDocument:'after'}).exec();

    }

    public delete(id: string): Promise<any> {
        return Sauce.findByIdAndDelete(id).exec();
    }
    
}