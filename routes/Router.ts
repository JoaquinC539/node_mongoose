import express from "express";
import { SauceController } from "../controllers/SauceController";
import { ToppingController } from "../controllers/ToppingController";
import { PizzaController } from "../controllers/PizzaController";
export class Router{
    public routes=express.Router();
    private sauceController=new SauceController();
    private toppingController=new ToppingController();
    private pizzaController=new PizzaController();
    
    constructor(){
        this.routes.use(this.sauceController.routes);
        this.routes.use(this.toppingController.routes);
        this.routes.use(this.pizzaController.routes);
    }
}