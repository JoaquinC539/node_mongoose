import { Router, Request, Response } from "express";
import { IService } from "../interfaces/IService";

export abstract class BaseApiController<T> {

    public routes: Router = Router();

    public endpoint: string

    private _service: IService<T>

    constructor(service: IService<T>, endpoint: string) {
        this._service = service;
        this.endpoint = endpoint;

        this.routes.get(`/${this.endpoint}`, this.index);
           this.routes.get(`/${this.endpoint}/:id`,this.getById);
           this.routes.post(`/${this.endpoint}`,this.post);
           this.routes.put(`/${this.endpoint}/:id`,this.update);
           this.routes.delete(`/${this.endpoint}/:id`,this.delete);
    }

    public index = (req: Request, res: Response): void => {
        this._service.index(req)
            .then((items: Array<T>) => {
                res.status(200).send(items)
            })
            .catch(error => {
                res.status(500).send(error["message"]);
            })
    }
    public getById = (req: Request, res: Response): void => {
        const id = req.params["id"];
        this._service.getById(id)
            .then((item: T | null) => {
                if (item === null) {
                    res.sendStatus(404);
                } else {
                    res.status(200).send(item);
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            })
    }
    public post = (req: Request, res: Response): void => {
        this._service.post(req)
            .then((item: T|null) => {                
                if(item===null){
                    res.sendStatus(404);
                }
                res.status(201).send(item);
            })
            .catch(error => {            
                res.status(500).send(error["message"])
            })
    }
    public update = (req: Request, res: Response): void => {
        this._service.update(req)
            .then((item: T | null) => {
                if (item === null) {
                    res.sendStatus(404);
                } else {
                    res.status(200).send(item);
                }
            })
            .catch(error => {
                res.status(500).send(error["message"])
            })
    }
    public delete = (req: Request, res: Response): void => {
        this._service.delete(req.params["id"])
            .then((result:any) => {
                if(result===null){
                    res.sendStatus(404);
                }
                else if (result?.deletedCount === 0) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(204);
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    }



}