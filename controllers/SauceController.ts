import { SauceService } from "../services/SauceService";
import { ISauce } from "../models/Sauce/ISauce";
import { BaseApiController } from "../base/BaseApiController";


export class SauceController extends BaseApiController<ISauce> {

    constructor() {
        super(new SauceService(), 'sauce')
    }
}