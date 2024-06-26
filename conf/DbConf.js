"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConf = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DbConf {
    static connectDB(dbURI) {
        try {
            mongoose_1.default.connect(dbURI)
                .then(() => console.log("Connection to mongoDB succesful"))
                .catch((error) => console.log(`Error at connecting to db: ${error}`));
        }
        catch (error) {
            console.log(`Error at connecting to db: ${error}`);
        }
    }
}
exports.DbConf = DbConf;
