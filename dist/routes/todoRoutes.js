"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controller/todoController");
const router = express_1.default.Router();
router.post('/create', todoController_1.createTodo);
router.get('/todo', todoController_1.getTodo);
router.get('/todo/:id', todoController_1.getOne);
router.patch('/update/:id', todoController_1.updateTodo);
router.delete('/delete/:id', todoController_1.deleteTodo);
exports.default = router;
