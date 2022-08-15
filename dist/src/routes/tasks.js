"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = __importDefault(require("../services/tasks"));
const tasks_2 = __importDefault(require("../controllers/tasks"));
const tokenValidate_1 = __importDefault(require("../middlewares/tokenValidate"));
const taskValidate_1 = __importDefault(require("../middlewares/taskValidate"));
const tasks_3 = __importDefault(require("../models/tasks"));
const ModelT = new tasks_3.default();
const Service = new tasks_1.default(ModelT);
const Controller = new tasks_2.default(Service);
const tasksRouter = (0, express_1.Router)();
const MiddlewareToken = new tokenValidate_1.default();
const Middlewaretasks = new taskValidate_1.default();
tasksRouter.get('/tasks', Controller.getAll);
tasksRouter.patch('/tasks/:id', MiddlewareToken.tokenValidate, Middlewaretasks.fieldUpdateValidate, Controller.update);
tasksRouter.post('/tasks', MiddlewareToken.tokenValidate, Middlewaretasks.fieldCreateValidate, Controller.create);
tasksRouter.delete('/tasks/:id', Controller.delete);
exports.default = tasksRouter;
//# sourceMappingURL=tasks.js.map