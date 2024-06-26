"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiController = void 0;
const express_1 = require("express");
class BaseApiController {
    constructor(service, endpoint) {
        this.routes = (0, express_1.Router)();
        this.index = (req, res) => {
            this._service.index(req)
                .then((items) => {
                res.status(200).send(items);
            })
                .catch(error => {
                res.status(500).send(error["message"]);
            });
        };
        this.getById = (req, res) => {
            const id = req.params["id"];
            this._service.getById(id)
                .then((item) => {
                if (item === null) {
                    res.sendStatus(404);
                }
                else {
                    res.status(200).send(item);
                }
            })
                .catch(error => {
                res.status(500).send(error.message);
            });
        };
        this.post = (req, res) => {
            this._service.post(req)
                .then((item) => {
                if (item === null) {
                    res.sendStatus(404);
                }
                res.status(201).send(item);
            })
                .catch(error => {
                res.status(500).send(error["message"]);
            });
        };
        this.update = (req, res) => {
            this._service.update(req)
                .then((item) => {
                if (item === null) {
                    res.sendStatus(404);
                }
                else {
                    res.status(200).send(item);
                }
            })
                .catch(error => {
                res.status(500).send(error["message"]);
            });
        };
        this.delete = (req, res) => {
            this._service.delete(req.params["id"])
                .then((result) => {
                if (result === null) {
                    res.sendStatus(404);
                }
                else if ((result === null || result === void 0 ? void 0 : result.deletedCount) === 0) {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(204);
                }
            })
                .catch(error => {
                res.status(500).send(error.message);
            });
        };
        this._service = service;
        this.endpoint = endpoint;
        this.routes.get(`/${this.endpoint}`, this.index);
        this.routes.get(`/${this.endpoint}/:id`, this.getById);
        this.routes.post(`/${this.endpoint}`, this.post);
        this.routes.put(`/${this.endpoint}/:id`, this.update);
        this.routes.delete(`/${this.endpoint}/:id`, this.delete);
    }
}
exports.BaseApiController = BaseApiController;
