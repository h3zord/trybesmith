"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_1 = __importDefault(require("mysql2/promise"));
require("dotenv/config");
var connection = promise_1.default.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: Number(process.env.MYSQLPORT),
    database: process.env.MYSQLDATABASE,
}); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query
exports.default = connection;
