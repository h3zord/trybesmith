"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var swaggerUi = __importStar(require("swagger-ui-express"));
var swaggerDocument = __importStar(require("./swagger-output.json"));
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var order_routes_1 = __importDefault(require("./routes/order.routes"));
var login_routes_1 = __importDefault(require("./routes/login.routes"));
var error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(login_routes_1.default);
app.use(user_routes_1.default);
app.use(product_routes_1.default);
app.use(order_routes_1.default);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(error_middleware_1.default);
exports.default = app;
