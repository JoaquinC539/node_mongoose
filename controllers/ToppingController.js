"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingController = void 0;
const BaseApiController_1 = require("../base/BaseApiController");
const ToppingService_1 = require("../services/ToppingService");
class ToppingController extends BaseApiController_1.BaseApiController {
    constructor() {
        super(new ToppingService_1.ToppingService(), "topping");
    }
}
exports.ToppingController = ToppingController;
