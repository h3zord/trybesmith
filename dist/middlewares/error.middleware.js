"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMiddleware = function (err, _req, res, next) {
    var _a = err, status = _a.status, message = _a.message;
    res.status(status || 500).json({ message: message });
    next();
};
exports.default = errorMiddleware;
