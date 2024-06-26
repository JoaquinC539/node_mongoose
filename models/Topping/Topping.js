"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topping = void 0;
const mongoose_1 = require("mongoose");
const toppingSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String
    }
});
exports.Topping = (0, mongoose_1.model)("Topping", toppingSchema);
