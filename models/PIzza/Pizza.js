"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const mongoose_1 = require("mongoose");
const pizzaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    sauce: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Sauce",
        required: true
    },
    toppings: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Topping"
        }
    ]
});
exports.Pizza = (0, mongoose_1.model)("Pizza", pizzaSchema);
