import { BaseApiController } from "../base/BaseApiController";
import { IPizza } from "../models/PIzza/IPizza";
import { PizzaService } from "../services/PizzaService";


export class PizzaController extends BaseApiController<IPizza>{
    constructor(){
        super(new PizzaService(),"pizza");
    }
    
}