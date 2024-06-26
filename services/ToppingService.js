"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingService = void 0;
const Topping_1 = require("../models/Topping/Topping");
class ToppingService {
    index(req) {
        return Topping_1.Topping.find({}).exec();
    }
    getById(id) {
        return Topping_1.Topping.findById(id).exec();
    }
    post(req) {
        const newTopping = new Topping_1.Topping({
            name: req.body["name"]
        });
        return newTopping.save();
    }
    update(req) {
        return Topping_1.Topping.findByIdAndUpdate(req.params["id"], {
            name: req.body["name"]
        }, {
            returnDocument: "after"
        }).exec();
    }
    delete(id) {
        return Topping_1.Topping.findByIdAndDelete(id).exec();
    }
}
exports.ToppingService = ToppingService;
