import mongoose from "mongoose";
export class DbConf{

    public static connectDB(dbURI:string):void{
        try {
            mongoose.connect(dbURI)
            .then(()=>console.log("Connection to mongoDB succesful"))
            .catch((error)=>console.log(`Error at connecting to db: ${error}`))
        } catch (error) {
            console.log(`Error at connecting to db: ${error}`)
        }
    }
}