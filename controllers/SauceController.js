"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SauceController = void 0;
const SauceService_1 = require("../services/SauceService");
const BaseApiController_1 = require("../base/BaseApiController");
class SauceController extends BaseApiController_1.BaseApiController {
    constructor() {
        super(new SauceService_1.SauceService(), 'sauce');
    }
}
exports.SauceController = SauceController;
