"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaService = void 0;
const Pizza_1 = require("../models/PIzza/Pizza");
const Sauce_1 = require("../models/Sauce/Sauce");
const Topping_1 = require("../models/Topping/Topping");
class PizzaService {
    index(req) {
        return Pizza_1.Pizza.find({}).populate("sauce").populate("toppings").exec();
    }
    getById(id) {
        return Pizza_1.Pizza.findById(id).populate("sauce").populate("toppings").exec();
    }
    post(req) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let sauce = yield Sauce_1.Sauce.findById(req.body["sauce"]);
                if (sauce === null) {
                    resolve(null);
                }
                let toppingIds = req.body["toppings"] ? req.body["toppings"] : [];
                let toppings = yield Topping_1.Topping.find({ _id: { $in: toppingIds } }).exec();
                const newPizza = new Pizza_1.Pizza({
                    name: req.body["name"],
                    price: req.body["price"],
                    sauce: sauce,
                    toppings: toppings
                });
                let savedPizza = yield newPizza.save();
                resolve(savedPizza);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    update(req) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let sauce = yield Sauce_1.Sauce.findById(req.body["sauce"]);
                if (sauce === null) {
                    resolve(null);
                }
                let toppingIds = req.body["toppings"] ? req.body["toppings"] : [];
                let toppings = yield Topping_1.Topping.find({ _id: { $in: toppingIds } }).exec();
                let pizza = yield Pizza_1.Pizza.findByIdAndUpdate(req.params["id"], {
                    name: req.body["name"],
                    price: req.body["price"],
                    sauce: sauce,
                    toppings: toppings
                }, {
                    returnDocument: "after"
                }).exec();
                if (pizza === null) {
                    resolve(null);
                }
                resolve(pizza);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    delete(id) {
        return Pizza_1.Pizza.findByIdAndDelete(id);
    }
}
exports.PizzaService = PizzaService;
