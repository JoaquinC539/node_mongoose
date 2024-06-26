"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaController = void 0;
const BaseApiController_1 = require("../base/BaseApiController");
const PizzaService_1 = require("../services/PizzaService");
class PizzaController extends BaseApiController_1.BaseApiController {
    constructor() {
        super(new PizzaService_1.PizzaService(), "pizza");
    }
}
exports.PizzaController = PizzaController;
