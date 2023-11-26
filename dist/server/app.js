"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBingoResult = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const jsonschema_1 = require("jsonschema");
const body_parser_1 = __importDefault(require("body-parser"));
const schemas_1 = require("./schemas");
const isCardBingo_1 = require("../functions/isCardBingo");
const app = (0, express_1.default)();
const validator = new jsonschema_1.Validator();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
validator.addSchema(schemas_1.bingoCardSchema);
validator.addSchema(schemas_1.bingoRequestObjectSchema);
const router = (0, express_2.Router)();
const getBingoResult = async (req, res) => {
    if (req.get('Content-Type') != 'application/json') {
        res.status(401).send("Invalid header format!");
        return;
    }
    try {
        validator.validate(req.body, schemas_1.bingoRequestObjectSchema, { throwError: true });
        validator.validate(req.body.bingoCard, schemas_1.bingoCardSchema, { throwError: true });
    }
    catch (error) {
        res.status(401).end('Invalid body format: ' + error.message);
        return;
    }
    res.status(200).send((0, isCardBingo_1.isCardBingo)(req.body.bingoCard, req.body.bingoNumbersList));
};
exports.getBingoResult = getBingoResult;
router.get("/isBingo", exports.getBingoResult);
app.use("/api", router);
exports.default = app;
app.listen(port, () => {
    console.log("Listening on port: " + port);
});
