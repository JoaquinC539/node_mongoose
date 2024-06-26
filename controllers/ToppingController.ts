import { BaseApiController } from "../base/BaseApiController";
import { ITopping } from "../models/Topping/ITopping";
import { ToppingService } from "../services/ToppingService";

export class ToppingController extends BaseApiController<ITopping>{

    constructor(){
        super(new ToppingService(),"topping")
    }

}