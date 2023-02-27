"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserAndPass = exports.validatePayloadLogin = void 0;
var joi_1 = __importDefault(require("joi"));
var http_exception_1 = __importDefault(require("../utils/http.exception"));
function validatePayloadLogin(payload) {
    var schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    var error = schema.validate(payload).error;
    if (error)
        throw new http_exception_1.default(400, 'Username or password are missing');
}
exports.validatePayloadLogin = validatePayloadLogin;
function validateUserAndPass(payload, result) {
    var errorMessage = 'Username or password invalid';
    if (!result)
        throw new http_exception_1.default(401, errorMessage);
    var payloadUserName = payload.username, payloadPassword = payload.password;
    var resultUserName = result.username, resultPassword = result.password;
    if (payloadPassword !== resultPassword)
        throw new http_exception_1.default(401, errorMessage);
    if (payloadUserName !== resultUserName)
        throw new http_exception_1.default(401, errorMessage);
}
exports.validateUserAndPass = validateUserAndPass;
