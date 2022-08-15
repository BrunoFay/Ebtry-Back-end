"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("./login"));
const tasks_1 = __importDefault(require("./tasks"));
const routes = (0, express_1.Router)();
routes.use(login_1.default);
routes.use(tasks_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map