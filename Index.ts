import { App } from "./App";
import { DbConf } from "./conf/DbConf";
require("dotenv").config();

class Index{
    public static run():void{
        const app=new App(3500);
        app.listen()
        .then(()=>{
            let dbUri=process.env.DBURI;
            if(!dbUri){
                throw new Error("DB URI not found in environment");
            }else{
                DbConf.connectDB(dbUri);
            }
            
        })
        .catch((error)=>{
            console.log("")
        });
    }
}

Index.run();
