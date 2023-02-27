"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../utils/token");
function tokenMiddleware(req, _res, next) {
    var token = req.headers.authorization;
    (0, token_1.validateToken)(token);
    next();
}
exports.default = tokenMiddleware;
