"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var enviromment_1 = require("../global/enviromment");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = enviromment_1.SERVER_PORT;
    }
    Server.prototype.start = function (callback) {
        this.app.listen(this.port);
    };
    return Server;
}());
exports.default = Server;
