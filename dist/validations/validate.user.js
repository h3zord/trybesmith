"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var http_exception_1 = __importDefault(require("../utils/http.exception"));
function validatePayloadUser(payload) {
    var schema = joi_1.default.object({
        username: joi_1.default.string().min(3).required(),
        classe: joi_1.default.string().min(3).required(),
        level: joi_1.default.number().min(1).required(),
        password: joi_1.default.string().min(8).required(),
    });
    var error = schema.validate(payload).error;
    if (error) {
        var isRequired = 'is required';
        var message = error.message;
        if (message.includes(isRequired))
            throw new http_exception_1.default(400, 'All fields must be filled');
        throw new http_exception_1.default(422, 'Check that the information is filled in correctly');
    }
}
exports.default = validatePayloadUser;
