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
class LoginController {
    constructor(LService) {
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.service.singIn(email, password);
                return res.status(200).json(token);
            }
            catch (error) {
                next(error);
            }
        });
        this.loginValidate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                if (!authorization) {
                    return res.status(401).json('Invalid token');
                }
                const isValidToken = this.service.validateToken(authorization);
                const { email } = isValidToken;
                return res.status(200).json({ email });
            }
            catch (error) {
                next(error);
            }
        });
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.service.singUp(req.body);
                return res.status(201).json(newUser);
            }
            catch (error) {
                next(error);
            }
        });
        this.service = LService;
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.js.map