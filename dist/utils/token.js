"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var http_exception_1 = __importDefault(require("./http.exception"));
function createToken(data) {
    var token = jsonwebtoken_1.default.sign({ data: data }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '9999d',
        algorithm: 'HS256',
    });
    return token;
}
exports.default = createToken;
var validateToken = function (token) {
    if (!token) {
        throw new http_exception_1.default(404, 'Token not found');
    }
    try {
        var data = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret').data;
        return data;
    }
    catch (error) {
        throw new http_exception_1.default(401, 'Invalid token');
    }
};
exports.validateToken = validateToken;
