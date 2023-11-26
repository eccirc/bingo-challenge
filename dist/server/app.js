"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonschema_1 = require("jsonschema");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const validator = new jsonschema_1.Validator();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const rowSchema = { type: "array" };
const bingoCardSchema = {
    id: "/bingoCard",
    type: "object",
    properties: {
        row1: rowSchema,
        row2: rowSchema,
        row3: rowSchema,
        row4: rowSchema,
        row5: rowSchema,
    },
    required: ["row1"]
};
validator.addSchema(bingoCardSchema);
app.get("/isBingo", (req, res) => {
    if (req.get('Content-Type') != 'application/json') {
        res.status(401).send("Invalid header format!");
        return;
    }
    try {
        validator.validate(req.body, bingoCardSchema, { throwError: true });
    }
    catch (error) {
        res.status(401).end('Invalid body format: ' + error.message);
        return;
    }
    res.status(200).send({ isBingo: true });
});
app.listen(port, () => {
    console.log("Listening on port: " + port);
});
//var userSchema = {  id: '/User',  type: 'object',  properties: {    username: { type: 'string' },    email: {      type: 'string',      format: 'email'    },    votes: { type: 'integer' }  },  required: ['username', 'email', 'votes']};
//var itemSchema = {  id: '/Item',  type: 'object',  properties: {
//        price: { type: 'number' },    width: { type: 'integer' },    height: { type: 'integer' },    added: {      type: 'string',      format: 'date-time'    },    seller: { $ref: '/User' },    image: {      type: 'string',      format: 'uri'    }  
//    },
//      required: ['price', 'width', 'height', 'added', 'seller']
//    };
//var validator = new jsonValidator();
//validator.addSchema(userSchema, '/User');
//app.post('/validate', function(req, res) { 
//     if (req.get('Content-Type') != 'application/json') { 
//           res.status(401).send('Invalid header format');    return;  
//        }  try {  
//              validator.validate(req.body, itemSchema, { throwError: true }); 
//             } catch (error) {    res.status(401).end('Invalid body format: ' + error.message);    return; 
//             }  res.status(200).send('Valid request format');});
//             
//app.listen(8000, function() { 
//console.log('Validation app listening on port 8000');});
