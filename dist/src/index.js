"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const handleGenericsErrors_1 = __importDefault(require("./middlewares/handleGenericsErrors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(routes_1.default);
        this.app.use(new handleGenericsErrors_1.default().handleError);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=index.js.map