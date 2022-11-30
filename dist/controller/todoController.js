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
exports.deleteTodo = exports.updateTodo = exports.getOne = exports.getTodo = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {description, status} = req.body
        const todos = new todoModel_1.default({ name: req.body.name, description: req.body.description, status: req.body.status });
        const createdtodo = yield todos.save();
        if (createdtodo) {
            return res.status(200).json({
                message: 'Todo successfully created'
            });
        }
        else {
            return res.status(400).json({
                message: 'Error saving Todo'
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
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllTodo = yield todoModel_1.default.find();
        if (getAllTodo) {
            return res.status(200).json({ message: "Data gotten successfully", getAllTodo });
        }
        else {
            return res.status(400).json({
                message: 'Error retriving Todo'
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            Error: 'Internal server error',
            route: "/todo/"
        });
    }
});
exports.getTodo = getTodo;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const todo = yield todoModel_1.default.findById(id);
        return res.status(200).json({
            message: "", todo
        });
    }
    catch (error) {
        res.status(500).json({
            Error: "Internal server error",
            route: "/todo/:id"
        });
    }
});
exports.getOne = getOne;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updated = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    };
    const update = yield todoModel_1.default.findByIdAndUpdate(id, { $set: updated });
    if (update) {
        return res.status(200).json({
            message: "To-do updated successfully"
        });
    }
    else {
        return res.status(400).json({
            message: "To-do failed to saved"
        });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const deleted = yield todoModel_1.default.findOneAndRemove({ id });
    if (deleted) {
        return res.status(200).json({
            message: "To-do deleted successfully"
        });
    }
    else {
        return res.status(400).json({
            message: "Your to-do failed to saved"
        });
    }
});
exports.deleteTodo = deleteTodo;
