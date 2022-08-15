"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("../services/login"));
const login_2 = __importDefault(require("../controllers/login"));
const loginValidate_1 = __importDefault(require("../middlewares/loginValidate"));
const users_1 = __importDefault(require("../models/users"));
const LoginRouter = (0, express_1.Router)();
const Model = new users_1.default();
const Service = new login_1.default(Model);
const Controller = new login_2.default(Service);
const Middleware = new loginValidate_1.default();
LoginRouter.post('/login', Middleware.validateLogin, Controller.login);
LoginRouter.post('/register', Middleware.validateRegister, Controller.register);
LoginRouter.get('/login/validate', Controller.loginValidate);
exports.default = LoginRouter;
//# sourceMappingURL=login.js.map