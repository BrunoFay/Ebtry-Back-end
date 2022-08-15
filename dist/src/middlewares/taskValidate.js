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
const joi_1 = __importDefault(require("joi"));
class TasksValidate {
    constructor() {
        this.newTaskSchema = joi_1.default.object({
            title: joi_1.default.string().min(3).required(),
            description: joi_1.default.string(),
            priority: joi_1.default.string().valid('low', 'medium', 'high').required(),
            status: joi_1.default.string()
                .valid('toDo', 'inProgress', 'done', 'review', 'tests', 'paused').required(),
            members: joi_1.default.array(),
            createdBy: joi_1.default.string(),
            createdAt: joi_1.default.date(),
        });
        this.updateTaskSchema = joi_1.default.object({
            title: joi_1.default.string().min(3),
            description: joi_1.default.string(),
            priority: joi_1.default.string().valid('low', 'medium', 'high'),
            status: joi_1.default.string()
                .valid('toDo', 'inProgress', 'done', 'review', 'tests', 'paused'),
            members: joi_1.default.array(),
            createdBy: joi_1.default.string(),
            createdAt: joi_1.default.date(),
        });
        this.fieldCreateValidate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = this.newTaskSchema.validate(req.body);
            if (error === null || error === void 0 ? void 0 : error.message) {
                return res.status(400).json({ message: error.message });
            }
            next();
        });
        this.fieldUpdateValidate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = this.updateTaskSchema.validate(req.body);
            if (error === null || error === void 0 ? void 0 : error.message) {
                return res.status(400).json({ message: error.message });
            }
            next();
        });
    }
}
exports.default = TasksValidate;
//# sourceMappingURL=taskValidate.js.map