"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan_1 = __importDefault(require("morgan"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.json);
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    console.log('Database connected successfully');
});
app.use((0, morgan_1.default)('start'));
app.use('/create', todoRoutes_1.default);
const port = 4000;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});