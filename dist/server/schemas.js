"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bingoRequestObjectSchema = exports.bingoCardSchema = exports.rowSchema = void 0;
exports.rowSchema = { type: "array", items: { type: "number" } };
exports.bingoCardSchema = {
    id: "/bingoCard",
    type: "object",
    properties: {
        row1: exports.rowSchema,
        row2: exports.rowSchema,
        row3: exports.rowSchema,
        row4: exports.rowSchema,
        row5: exports.rowSchema,
    },
    required: ["row1", "row2", "row3", "row4", "row5"]
};
exports.bingoRequestObjectSchema = {
    id: "/bingoRequestObj",
    type: "object",
    properties: {
        bingoNumbersList: exports.rowSchema,
        bingoCard: { type: "object" },
    },
    required: ["bingoNumbersList", "bingoNumbersList"]
};
