"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var http_exception_1 = __importDefault(require("../utils/http.exception"));
function validatePayloadProduct(payload) {
    var scheman = joi_1.default.object({
        name: joi_1.default.string().min(3).required(),
        amount: joi_1.default.string().min(3).required(),
    });
    var error = scheman.validate(payload).error;
    if (error) {
        var isRequired = 'is required';
        var message = error.message;
        if (message.includes(isRequired))
            throw new http_exception_1.default(400, 'All fields must be filled');
        throw new http_exception_1.default(422, 'Check that the information is filled in correctly');
    }
}
exports.default = validatePayloadProduct;
