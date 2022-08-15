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
class LoginValidates {
    constructor() {
        this.loginSchema = joi_1.default.object({
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().min(4).required(),
        });
        this.registerSchema = joi_1.default.object({
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().min(4).required(),
            role: joi_1.default.string().valid('admin', 'user').required(),
        });
        this.validateLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = this.loginSchema.validate(req.body);
            const errorMessage = error === null || error === void 0 ? void 0 : error.message;
            if (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.endsWith('required')) {
                return res.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
            }
            next();
        });
        this.validateRegister = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = this.registerSchema.validate(req.body);
            const errorMessage = error === null || error === void 0 ? void 0 : error.message;
            if (errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.endsWith('required')) {
                return res.status(400).json({ message: error === null || error === void 0 ? void 0 : error.message });
            }
            next();
        });
    }
}
exports.default = LoginValidates;
//# sourceMappingURL=loginValidate.js.map