"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const Router_1 = require("./routes/Router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.router = new Router_1.Router();
        this.port = port;
        this.app.use(body_parser_1.default.json());
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "static")));
        this.app.use("/api", this.router.routes);
    }
    listen() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(this.port, () => {
                    console.log(`Server listening at port ${this.port}`);
                    resolve();
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.App = App;
