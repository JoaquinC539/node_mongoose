"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const DbConf_1 = require("./conf/DbConf");
require("dotenv").config();
class Index {
    static run() {
        const app = new App_1.App(3500);
        app.listen()
            .then(() => {
            let dbUri = process.env.DBURI;
            if (!dbUri) {
                throw new Error("DB URI not found in environment");
            }
            else {
                DbConf_1.DbConf.connectDB(dbUri);
            }
        })
            .catch((error) => {
            console.log("");
        });
    }
}
Index.run();
