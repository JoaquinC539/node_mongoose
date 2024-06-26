"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sauce = void 0;
const mongoose_1 = require("mongoose");
const sauceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.Sauce = (0, mongoose_1.model)("Sauce", sauceSchema);
