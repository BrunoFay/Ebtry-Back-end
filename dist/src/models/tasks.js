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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("./db/prismaClient"));
class TaskModel {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () { return yield prismaClient_1.default.task.findMany(); });
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            const newTask = {
                title: payload.title,
                description: payload.description,
                status: payload.status,
                priority: payload.priority,
                createdAt: payload.createdAt,
                createdBy: payload.createdBy,
            };
            return prismaClient_1.default.task.create({ data: newTask });
        });
        this.update = (id, payload) => __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.default.task.update({ where: { id }, data: Object.assign({}, payload) });
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prismaClient_1.default.task.delete({ where: { id } });
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () { return prismaClient_1.default.task.findUnique({ where: { id } }); });
    }
}
exports.default = TaskModel;
//# sourceMappingURL=tasks.js.map