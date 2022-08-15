"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HandleGenericsErrors {
    constructor() {
        this.handleError = (err, req, res, _next) => {
            console.log(err.message);
            if (err.message)
                return res.status(400).json({ message: err.message });
            return res.status(500).json({ message: 'Internal server error' });
        };
    }
}
exports.default = HandleGenericsErrors;
//# sourceMappingURL=handleGenericsErrors.js.map