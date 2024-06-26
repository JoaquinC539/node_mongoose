import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IService } from "../interfaces/IService";
import { IPizza } from "../models/PIzza/IPizza";
import { Pizza } from "../models/PIzza/Pizza";
import { ISauce } from "../models/Sauce/ISauce";
import { Sauce } from "../models/Sauce/Sauce";
import { ITopping } from "../models/Topping/ITopping";
import { string } from "joi";
import { Topping } from "../models/Topping/Topping";

export class PizzaService implements IService<IPizza> {
    index(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<IPizza[]> {
        return Pizza.find({}).populate("sauce").populate("toppings").exec();
    }
    getById(id: string): Promise<IPizza | null> {
        return Pizza.findById(id).populate("sauce").populate("toppings").exec();
    }
    post(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<IPizza | null> {
        return new Promise<IPizza | null>(async (resolve, reject) => {
            try {
                let sauce: ISauce | null = await Sauce.findById(req.body["sauce"])
                if (sauce === null) {
                    resolve(null);
                }
                let toppingIds:string[]=req.body["toppings"] ? req.body["toppings"]:[];
                let toppings:ITopping[]=await Topping.find({_id:{$in:toppingIds}}).exec();
                
                const newPizza: IPizza = new Pizza({
                    name: req.body["name"],
                    price: req.body["price"],
                    sauce: sauce,
                    toppings:toppings
                })
                let savedPizza=await newPizza.save()
                resolve(savedPizza);
                
            } catch (error) {
                reject(error);
            }
        });

    }
    update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<IPizza | null> {
        return new Promise<IPizza | null>(async (resolve, reject) => {
            try {
                let sauce: ISauce | null = await Sauce.findById(req.body["sauce"])
                if (sauce === null) {
                    resolve(null);
                }
                    let toppingIds:string[]=req.body["toppings"] ? req.body["toppings"]:[];
                    let toppings:ITopping[]=await Topping.find({_id:{$in:toppingIds}}).exec();
                let pizza: IPizza | null = await Pizza.findByIdAndUpdate(
                    req.params["id"],
                    {
                        name: req.body["name"],
                        price: req.body["price"],
                        sauce: sauce,
                        toppings:toppings
                    },
                    {
                        returnDocument: "after"
                    }
                ).exec();
                if (pizza === null) {
                    resolve(null)
                }
                resolve(pizza);
            } catch (error) {
                reject(error);
            }
        })

    }
    delete(id: string): Promise<any> {
        return Pizza.findByIdAndDelete(id);
    }

}