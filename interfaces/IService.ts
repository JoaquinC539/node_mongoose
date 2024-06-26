import { Request } from "express";


export interface IService<T>{

     index(req:Request):Promise<Array<T>>;

     getById(id:string):Promise<T|null>;

     post(req:Request):Promise<T|null>;

     update(req:Request):Promise<T|null>

     delete(id:string):Promise<any>

     

}