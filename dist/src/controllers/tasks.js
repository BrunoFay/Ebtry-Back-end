"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskService.getAll();
                return res.status(200).json(tasks);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newTask = yield this.taskService.create(req.body);
                return res.status(201).json(newTask);
            }
            catch (error) {
                next(error);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const isValidId = yield this.taskService.getById(id);
                if (!isValidId)
                    return res.status(404).json({ error: 'Task not found' });
                yield this.taskService.update(id, req.body);
                return res.status(200).json({ message: 'Finished' });
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const isValidId = yield this.taskService.getById(id);
                if (!isValidId)
                    return res.status(404).json({ error: 'Task not found' });
                yield this.taskService.remove(id);
                return res.status(200).json({ message: 'Finished' });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = TasksController;
//# sourceMappingURL=tasks.js.map