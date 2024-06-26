"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SauceService = void 0;
const Sauce_1 = require("../models/Sauce/Sauce");
class SauceService {
    constructor() {
        this.index = (req) => {
            return Sauce_1.Sauce.find({}).exec();
        };
    }
    getById(id) {
        return Sauce_1.Sauce.findById(id).exec();
    }
    post(req) {
        const newSauce = new Sauce_1.Sauce({
            name: req.body["name"]
        });
        return newSauce.save();
    }
    update(req) {
        const sauceUpdate = {
            name: req.body["name"]
        };
        return Sauce_1.Sauce.findByIdAndUpdate(req.params.id, sauceUpdate, { returnDocument: 'after' }).exec();
    }
    delete(id) {
        return Sauce_1.Sauce.findByIdAndDelete(id).exec();
    }
}
exports.SauceService = SauceService;
