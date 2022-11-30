"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, status } = req.body;
        const todos = new todoModel_1.default({
            name, description, status
        });
        const createdtodo = yield todos.save();
        if (createdtodo) {
            return res.status(200).json({
                message: 'Todo successfully created', todos
            });
        }
        else {
            return res.status(400).json({
                message: 'Todo not created'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            Error: 'Internal server error',
            route: "/create"
        });
    }
});
exports.createTodo = createTodo;
