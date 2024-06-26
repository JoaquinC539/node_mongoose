import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Router } from './routes/Router';
const cors=require("cors");
const cookieParser =require("cookie-parser");


export class App
{
    private app:any=express();
    private router:Router=new Router();
    private port:number;
    
    public constructor(port:number)
    {
        this.port=port;
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(cookieParser());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(express.static(path.join(__dirname,"static")))
        this.app.use("/api",this.router.routes);


    }
    public listen():Promise<void>{
        return new Promise<void>((resolve,reject)=>{
            try {
                this.app.listen(this.port,()=>{
                    console.log(`Server listening at port ${this.port}`);
                    resolve();
                });
            } catch (error) {                
                reject(error);
            }
            
        });
    }
}