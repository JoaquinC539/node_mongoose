"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const SauceController_1 = require("../controllers/SauceController");
const ToppingController_1 = require("../controllers/ToppingController");
const PizzaController_1 = require("../controllers/PizzaController");
class Router {
    constructor() {
        this.routes = express_1.default.Router();
        this.sauceController = new SauceController_1.SauceController();
        this.toppingController = new ToppingController_1.ToppingController();
        this.pizzaController = new PizzaController_1.PizzaController();
        this.routes.use(this.sauceController.routes);
        this.routes.use(this.toppingController.routes);
        this.routes.use(this.pizzaController.routes);
    }
}
exports.Router = Router;
